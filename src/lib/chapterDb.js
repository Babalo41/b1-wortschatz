import { openDB } from "idb";
import { markHard, normalizeRecord, reviewWord } from "./chapterReview.js";

// Separate database from the B1 profile's "b1-wortschatz" DB, so resetting
// B1 progress never touches the chapter profile and vice versa.
const DB_NAME = "kapitel-woerter";
const DB_VERSION = 1;
const SCORES = "scores"; // key "chapter|direction" -> { best, last, total, date }
const WORDS = "words"; // key word.key -> { "de-en": Leitner, "en-de": Leitner, hard } (see chapterReview.js)

let dbPromise = null;

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        db.createObjectStore(SCORES);
        db.createObjectStore(WORDS);
      },
    });
  }
  return dbPromise;
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

async function getAllAsMap(store) {
  const db = await getDB();
  const [keys, values] = await Promise.all([db.getAllKeys(store), db.getAll(store)]);
  return new Map(keys.map((k, i) => [k, values[i]]));
}

export const getAllScores = () => getAllAsMap(SCORES);

export async function getAllWordProgress() {
  const t = today();
  const map = await getAllAsMap(WORDS);
  for (const [k, v] of map) map.set(k, normalizeRecord(v, t));
  return map;
}

export function scoreKey(chapter, direction) {
  return `${chapter}|${direction}`;
}

export async function saveScore(chapter, direction, correct, total) {
  const db = await getDB();
  const key = scoreKey(chapter, direction);
  const prev = await db.get(SCORES, key);
  const record = {
    // A best from the old whole-chapter quiz (other total) isn't comparable.
    best: prev?.total === total ? Math.max(prev.best, correct) : correct,
    last: correct,
    total,
    date: today(),
  };
  await db.put(SCORES, record, key);
  return record;
}

async function updateWord(wordKey, fn) {
  const db = await getDB();
  const t = today();
  const updated = fn(normalizeRecord(await db.get(WORDS, wordKey), t), t);
  await db.put(WORDS, updated, wordKey);
  return updated;
}

export const recordWordResult = (wordKey, direction, correct) =>
  updateWord(wordKey, (rec, t) => reviewWord(rec, direction, correct, t));

export const setHard = (wordKey, hard) => updateWord(wordKey, (rec, t) => markHard(rec, hard, t));

export async function resetChapterProgress() {
  const db = await getDB();
  await Promise.all([db.clear(SCORES), db.clear(WORDS)]);
}
