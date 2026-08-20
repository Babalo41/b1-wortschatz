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
  };
}

export function addDays(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Given a card's current progress record, whether the answer was correct,
 * and today's date (ISO "YYYY-MM-DD"), return the next progress record.
 * Pure function: same inputs always produce the same output.
 */
export function nextProgress(existing, correct, today) {
  const box = correct ? Math.min(5, existing.box + 1) : 1;
  return {
    ...existing,
    box,
    dueDate: addDays(today, Math.pow(2, box - 1)),
    timesSeen: existing.timesSeen + 1,
    timesCorrect: existing.timesCorrect + (correct ? 1 : 0),
    lastResult: correct ? "correct" : "wrong",
    lastSeen: today,
  };
}

export function isDue(progress, today) {
  if (!progress) return true; // never studied -> due
  return progress.dueDate <= today;
}
