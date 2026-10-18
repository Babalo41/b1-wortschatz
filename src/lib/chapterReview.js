// Spaced-repetition rules for the Kapitel-Wörter profile. Pure functions
// (no React, no IndexedDB, dates passed in as ISO strings) so they're
// testable; chapterDb.js persists what they return.
//
// Per word: { "de-en": Leitner record, "en-de": Leitner record, hard: bool }.
// The Leitner records are leitner.js's shape (box 1-5, box N due again
// 2^(N-1) days later). Each direction is scheduled on its own because
// recognising a word and producing it are different skills.
//
// How the learning works:
// - Lernen shows everything (no hiding); ★ puts a word into the review queue.
// - A test is 25 words: due reviews first (★ before others), then new words
//   in chapter order. Only the first try of a word moves its box.
// - A miss comes back ~3 questions later in the same session until she gets
//   it right (successive relearning), and is due again tomorrow.
// - A miss marks the word ★; the next first-try hit clears it.

import { freshProgress, isDue, nextProgress } from "./leitner.js";
import { shuffle } from "./quiz.js";

export const SESSION_SIZE = 25;
export const PRACTISED_BOX = 2; // last answer was right
export const SECURE_BOX = 4; // right in 3 spaced sessions in a row
const DIRECTIONS = ["de-en", "en-de"];

const blank = (today) => freshProgress(null, today);

/** Old records were { "de-en": true/false, ... }; keep her results. */
export function normalizeRecord(rec, today) {
  const out = { ...rec, hard: !!rec?.hard };
  for (const d of DIRECTIONS) {
    const v = rec?.[d];
    if (v !== true && v !== false) continue;
    out[d] = { ...blank(today), box: v ? 2 : 1, timesSeen: 1, timesCorrect: v ? 1 : 0, lastResult: v ? "correct" : "wrong" };
    if (!v) out.hard = true;
  }
  return out;
}

export function reviewWord(rec, direction, correct, today) {
  const prev = rec?.[direction] || blank(today);
  // Right but not due yet (tested again the same day): no promotion, or a
  // few repeats in one evening would fake long-term memory.
  const next =
    correct && !isDue(prev, today)
      ? { ...prev, timesSeen: prev.timesSeen + 1, timesCorrect: prev.timesCorrect + 1, lastResult: "correct", lastSeen: today }
      : nextProgress(prev, correct ? "correct" : "wrong", today);
  return { ...rec, [direction]: next, hard: !correct };
}

/** ★ from Lernen: back to box 1 and due today in both directions. */
export function markHard(rec, hard, today) {
  const out = { ...rec, hard };
  if (hard) for (const d of DIRECTIONS) out[d] = { ...(rec?.[d] || blank(today)), box: 1, dueDate: today };
  return out;
}

/** Highest box among directions she was actually tested in (0 = never). */
export function bestBox(rec) {
  return Math.max(0, ...DIRECTIONS.map((d) => (rec?.[d]?.timesSeen ? rec[d].box : 0)));
}

export function progressCounts(words, progress) {
  let practised = 0;
  let secure = 0;
  for (const w of words) {
    const box = bestBox(progress.get(w.key));
    if (box >= PRACTISED_BOX) practised++;
    if (box >= SECURE_BOX) secure++;
  }
  return { practised, secure };
}

const testable = (w) => !!w.english_translation;

/** Chapter words for one direction, split and ordered for picking. */
export function splitByDue(words, progress, direction, today) {
  const due = [];
  const fresh = [];
  const later = [];
  for (const w of words.filter(testable)) {
    const p = progress.get(w.key)?.[direction];
    if (!p) fresh.push(w);
    else if (isDue(p, today)) due.push(w);
    else later.push(w);
  }
  const rec = (w) => progress.get(w.key);
  due.sort(
    (a, b) =>
      Number(!!rec(b).hard) - Number(!!rec(a).hard) ||
      rec(a)[direction].box - rec(b)[direction].box ||
      rec(a)[direction].dueDate.localeCompare(rec(b)[direction].dueDate)
  );
  later.sort((a, b) => rec(a)[direction].dueDate.localeCompare(rec(b)[direction].dueDate));
  return { due, fresh, later };
}

export function pickSession(words, progress, direction, today, size = SESSION_SIZE, rng = Math.random) {
  const { due, fresh, later } = splitByDue(words, progress, direction, today);
  return shuffle([...due, ...fresh, ...later].slice(0, size), rng);
}

/** ★ words from every chapter (interleaved), due ones first. Typed, so en-de. */
export function pickMistakes(allWords, progress, today, size = SESSION_SIZE, rng = Math.random) {
  const p = (w) => progress.get(w.key)?.["en-de"];
  const hard = allWords.filter((w) => testable(w) && progress.get(w.key)?.hard);
  hard.sort((a, b) => Number(isDue(p(b), today)) - Number(isDue(p(a), today)) || (p(a)?.box ?? 0) - (p(b)?.box ?? 0));
  return shuffle(hard.slice(0, size), rng);
}

/** Re-insert a missed item `gap` questions after the current one. */
export function requeue(queue, index, item, gap = 3) {
  const out = [...queue];
  out.splice(Math.min(index + 1 + gap, out.length), 0, item);
  return out;
}

// ---- typed answers ----

const fold = (s) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z]/g, "");

const answerKey = (s) => fold(s.replace(/^\s*(der|die|das)\s+/i, "").replace(/\bsich\b/gi, ""));

/** What she is expected to type: "schwach, schwächer, …" -> "schwach". */
export function typedTarget(word) {
  return word.german_word.split(",")[0].replace(/\(.*?\)/g, "").trim();
}

export function checkTyped(input, word) {
  const g = word.german_word;
  const accepted = [g, g.split(",")[0], g.replace(/\(.*?\)/g, ""), ...g.split("/"), ...[...g.matchAll(/\((.*?)\)/g)].map((m) => m[1])]
    .map(answerKey)
    .filter(Boolean);
  const got = answerKey(input);
  return !!got && accepted.includes(got);
}

/** Character diff (LCS) so feedback can mark exactly which letters were off. */
export function diffChars(a, b) {
  const A = [...a];
  const B = [...b];
  const same = (i, j) => A[i].toLowerCase() === B[j].toLowerCase();
  const L = Array.from({ length: A.length + 1 }, () => new Array(B.length + 1).fill(0));
  for (let i = A.length - 1; i >= 0; i--)
    for (let j = B.length - 1; j >= 0; j--) L[i][j] = same(i, j) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const got = A.map((ch) => ({ ch, ok: false }));
  const want = B.map((ch) => ({ ch, ok: false }));
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    if (same(i, j)) {
      got[i++].ok = true;
      want[j++].ok = true;
    } else if (L[i + 1][j] >= L[i][j + 1]) i++;
    else j++;
  }
  return { got, want };
}

export function answerDiff(input, word) {
  return diffChars(input.trim().replace(/^(der|die|das)\s+/i, ""), typedTarget(word));
}
