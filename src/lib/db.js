import { openDB } from "idb";
import { freshProgress, addDays, nextProgress, isDue } from "./leitner.js";

// Leitner box system: 5 boxes, correct -> promote one box (capped at 5),
// wrong -> straight back to box 1. Box N becomes due again 2^(N-1) days
// after the review that placed it there. The scheduling math itself
// (nextProgress/isDue) lives in leitner.js as pure functions with no
// storage or React dependency -- this file's only job is persisting their
// output to IndexedDB.
//
// Why Leitner over SM-2: SM-2 (Anki-style) tracks a continuous ease
// factor per card and recomputes a variable interval on every review,
// which packs in more information but needs more state and tuning to not
// misbehave (ease-factor spirals if you get a run of wrong answers). For
// a fixed ~2,400-word deck reviewed in fairly short daily sessions,
// Leitner's 5 discrete boxes are simpler to reason about, trivial to
// show as a progress bar ("312 words in box 5"), and don't require
// picking or tuning ease-factor constants. The tradeoff: SM-2 adapts
// interval length per-card based on difficulty, so it converges faster
// for easy cards and backs off more gently for hard ones. If review
// sessions start feeling mistimed (too many repeats of easy words, too
// few of hard ones) that's the signal to switch.

const DB_NAME = "b1-wortschatz";
const DB_VERSION = 1;
const STORE = "progress";
const META_STORE = "meta";

let dbPromise = null;

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        const store = db.createObjectStore(STORE, { keyPath: "cardId" });
        store.createIndex("box", "box");
        store.createIndex("dueDate", "dueDate");
        db.createObjectStore(META_STORE);
      },
    });
  }
  return dbPromise;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

export async function getProgress(cardId) {
  const db = await getDB();
  return (await db.get(STORE, cardId)) || freshProgress(cardId, today());
}

export async function getAllProgress() {
  const db = await getDB();
  return db.getAll(STORE);
}

/** outcome: "correct" | "wrong" | "hard" (see leitner.js for what "hard" does) */
export async function recordAnswer(cardId, outcome) {
  const db = await getDB();
  const existing = (await db.get(STORE, cardId)) || freshProgress(cardId, today());
  const updated = nextProgress(existing, outcome, today());
  await db.put(STORE, updated);
  return updated;
}

export async function getDueCardIds(allCardIds) {
  const all = await getAllProgress();
  const byId = new Map(all.map((p) => [p.cardId, p]));
  const t = today();
  return allCardIds.filter((id) => isDue(byId.get(id), t));
}

export async function resetProgress() {
  const db = await getDB();
  await db.clear(STORE);
  await db.clear(META_STORE);
}

// Streak = consecutive calendar days with at least one completed test
// session. Stored in IndexedDB (not localStorage) alongside progress so
// it survives the same way -- app restarts and iOS tab eviction.
export async function recordSessionCompleted() {
  const db = await getDB();
  const t = today();
  const meta = (await db.get(META_STORE, "streak")) || { lastDate: null, streak: 0 };
  if (meta.lastDate === t) return meta.streak; // already counted today
  const yesterday = addDays(t, -1);
  const streak = meta.lastDate === yesterday ? meta.streak + 1 : 1;
  await db.put(META_STORE, { lastDate: t, streak }, "streak");
  return streak;
}

export async function getStreak() {
  const db = await getDB();
  const meta = await db.get(META_STORE, "streak");
  if (!meta) return 0;
  const t = today();
  const yesterday = addDays(t, -1);
  // streak is "broken" (shown as 0) if neither today nor yesterday had a session
  if (meta.lastDate !== t && meta.lastDate !== yesterday) return 0;
  return meta.streak;
}

export async function getStats(allCardIds) {
  const all = await getAllProgress();
  const t = today();
  const learned = all.filter((p) => p.box >= 5).length;
  const dueToday = all.filter((p) => p.dueDate <= t).length +
    (allCardIds.length - all.length); // never-seen cards count as due
  const totalSeen = all.reduce((s, p) => s + p.timesSeen, 0);
  const totalCorrect = all.reduce((s, p) => s + p.timesCorrect, 0);
  const accuracy = totalSeen ? Math.round((totalCorrect / totalSeen) * 100) : null;
  const byBox = [0, 0, 0, 0, 0, 0];
  for (const p of all) byBox[p.box]++;
  const notStarted = allCardIds.length - all.length;
  const flagged = all.filter((p) => p.flagged).length;

  return { learned, dueToday, accuracy, byBox, notStarted, flagged, totalCards: allCardIds.length, studied: all.length };
}

/**
 * Rough estimate of days left to see every card at box 5 ("learned"),
 * assuming the user reviews `cardsPerDay` cards/day and that on average a
 * card needs ~5 correct reviews (climbing box 1->5) spread across the
 * Leitner schedule to "graduate". This is intentionally a coarse,
 * explainable estimate, not a scheduling simulation.
 */
export function estimateDaysRemaining(stats, cardsPerDay = 30) {
  if (cardsPerDay <= 0) return null;
  const remainingCards = stats.totalCards - stats.learned;
  if (remainingCards <= 0) return 0;
  // Cards already in progress need fewer additional reviews than fresh
  // ones; weight by (5 - box) reviews needed per card still in the deck.
  const avgReviewsNeeded = 3.5; // empirical middle ground for a 5-box system
  const totalReviewsNeeded = remainingCards * avgReviewsNeeded;
  return Math.ceil(totalReviewsNeeded / cardsPerDay);
}
