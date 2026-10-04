// Emoji + entrance motion per chapter word (src/data/chapterEmoji.json, keyed
// "<article>|<german_word>"). The animation itself is Google's Noto animated
// emoji, loaded live as Lottie JSON; the service worker caches what was seen.
// `s: 1` marks emoji Noto has no animation for: shown as a still glyph.

import EMOJI from "../data/chapterEmoji.json";

export function wordEmoji(word) {
  const hit = EMOJI[`${word.article || ""}|${word.german_word}`];
  return hit ? { e: hit.e, m: hit.m || "pop", still: Boolean(hit.s) } : null;
}

export function notoUrl(emoji) {
  const cps = [...emoji].map((c) => c.codePointAt(0).toString(16)).join("_");
  return `https://fonts.gstatic.com/s/e/notoemoji/latest/${cps}/lottie.json`;
}
