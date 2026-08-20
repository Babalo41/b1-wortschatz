// Pure Leitner spaced-repetition scheduling logic -- no IndexedDB, no
// React, no Date.now() side effects (dates are passed in as ISO strings
// so this stays deterministic and independently testable). db.js is the
// only place that touches storage; it calls these functions and persists
// the result.
//
// 5 boxes. Correct promotes one box (capped at 5). Wrong sends a card
// straight back to box 1. Box N is due again 2^(N-1) days after the
// review that placed it there.

export function freshProgress(cardId, today) {
  return {
    cardId,
    box: 1,
    dueDate: today,
    timesSeen: 0,
    timesCorrect: 0,
    lastResult: null,
    flagged: false,
  };
}

export function addDays(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const OUTCOMES = ["correct", "wrong", "hard"];

/**
 * Given a card's current progress record, the outcome of this review
 * ("correct" | "wrong" | "hard"), and today's date (ISO "YYYY-MM-DD"),
 * return the next progress record. Pure function: same inputs always
 * produce the same output.
 *
 * "hard" behaves like "wrong" for the Leitner box (straight back to box
 * 1 -- a card you find hard needs the same short-interval repetition as
 * one you got wrong) but additionally sets `flagged: true`, so it can be
 * filtered separately as "needs a different memorization approach"
 * rather than just "got it wrong last time". Only an explicit "correct"
 * clears the flag.
 */
export function nextProgress(existing, outcome, today) {
  if (!OUTCOMES.includes(outcome)) {
    throw new Error(`nextProgress: outcome must be one of ${OUTCOMES.join(", ")}, got ${outcome}`);
  }
  const correct = outcome === "correct";
  const box = correct ? Math.min(5, existing.box + 1) : 1;
  return {
    ...existing,
    box,
    dueDate: addDays(today, Math.pow(2, box - 1)),
    timesSeen: existing.timesSeen + 1,
    timesCorrect: existing.timesCorrect + (correct ? 1 : 0),
    lastResult: outcome,
    lastSeen: today,
    flagged: outcome === "hard" ? true : outcome === "correct" ? false : existing.flagged,
  };
}

export function isDue(progress, today) {
  if (!progress) return true; // never studied -> due
  return progress.dueDate <= today;
}
