// Pure multiple-choice quiz logic (no React, no storage) so it's testable.
//
// Directions:
//   "de-en": prompt "der Apfel"          -> pick the English translation
//   "en-de": prompt picture + "Apple"   -> pick the German word, then (nouns
//            with a single article) pick der/die/das as a second step.

export const DIRECTIONS = ["de-en", "en-de"];
export const ARTICLES = ["der", "die", "das"];

export function shuffle(arr, rng = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function answerOf(word, direction) {
  return direction === "de-en" ? word.english_translation : word.german_word;
}

const norm = (s) => (s || "").trim().toLowerCase();

/**
 * Build one question. Distractors come from the same chapter first
 * (`pool`), topped up from `fallback` when the chapter is too small. All
 * option texts are unique (case-insensitive).
 */
export function buildQuestion(word, pool, direction, fallback = [], rng = Math.random, size = 4) {
  const answer = answerOf(word, direction);
  const used = new Set([norm(answer)]);
  const distractors = [];
  for (const source of [shuffle(pool, rng), shuffle(fallback, rng)]) {
    for (const other of source) {
      if (distractors.length >= size - 1) break;
      const text = answerOf(other, direction);
      if (!text || used.has(norm(text))) continue;
      used.add(norm(text));
      distractors.push(text);
    }
  }
  const article = (word.article || "").trim();
  return {
    word,
    direction,
    answer,
    options: shuffle([answer, ...distractors], rng),
    askArticle: direction === "en-de" && ARTICLES.includes(article),
  };
}

export function buildQuiz(words, direction, fallback = [], rng = Math.random) {
  return shuffle(words, rng).map((w) => buildQuestion(w, words, direction, fallback, rng));
}

// Per-word progress: a word is "learned" when her latest answer was right in
// both directions. A later wrong answer in either direction un-learns it.
export function nextWordProgress(prev, direction, correct) {
  return { ...(prev || {}), [direction]: !!correct };
}

export function isLearned(progress) {
  return !!progress && progress["de-en"] === true && progress["en-de"] === true;
}
