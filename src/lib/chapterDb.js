import { openDB } from "idb";
import { nextWordProgress } from "./quiz.js";

// Separate database from the B1 profile's "b1-wortschatz" DB, so resetting
// B1 progress never touches the chapter profile and vice versa.
const DB_NAME = "kapitel-woerter";
const DB_VERSION = 1;
const SCORES = "scores"; // key "chapter|direction" -> { best, last, total, date }
const WORDS = "words"; // key word.key -> { "de-en": bool, "en-de": bool }

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

async function getAllAsMap(store) {
  const db = await getDB();
  const [keys, values] = await Promise.all([db.getAllKeys(store), db.getAll(store)]);
  return new Map(keys.map((k, i) => [k, values[i]]));
}

export const getAllScores = () => getAllAsMap(SCORES);
export const getAllWordProgress = () => getAllAsMap(WORDS);

export function scoreKey(chapter, direction) {
  return `${chapter}|${direction}`;
}

export async function saveScore(chapter, direction, correct, total) {
  const db = await getDB();
  const key = scoreKey(chapter, direction);
  const prev = await db.get(SCORES, key);
  const record = {
    best: Math.max(prev?.best ?? 0, correct),
    last: correct,
    total,
    date: new Date().toISOString().slice(0, 10),
  };
  await db.put(SCORES, record, key);
  return record;
}

export async function recordWordResult(wordKey, direction, correct) {
  const db = await getDB();
  const updated = nextWordProgress(await db.get(WORDS, wordKey), direction, correct);
  await db.put(WORDS, updated, wordKey);
  return updated;
}

export async function resetChapterProgress() {
  const db = await getDB();
  await Promise.all([db.clear(SCORES), db.clear(WORDS)]);
}
