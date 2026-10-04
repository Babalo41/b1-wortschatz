// Emoji + entrance motion per chapter word (src/data/chapterEmoji.json, keyed
// "<article>|<german_word>"). The animation itself is Google's Noto animated
// emoji, loaded live as Lottie JSON; the service worker caches what was seen.

import EMOJI from "../data/chapterEmoji.json";

export function wordEmoji(word) {
  const hit = EMOJI[`${word.article || ""}|${word.german_word}`];
  return hit ? { e: hit.e, m: hit.m || "pop" } : null;
}

export function notoUrl(emoji) {
  const cps = [...emoji].map((c) => c.codePointAt(0).toString(16)).join("_");
  return `https://fonts.gstatic.com/s/e/notoemoji/latest/${cps}/lottie.json`;
}
