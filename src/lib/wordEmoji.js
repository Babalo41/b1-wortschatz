// Emoji per chapter word (src/data/chapterEmoji.json, keyed
// "<article>|<german_word>"). The animation itself is Google's Noto animated
// emoji, loaded live as Lottie JSON; the service worker caches what was seen.

import EMOJI from "../data/chapterEmoji.json";

export function wordEmoji(word) {
  return EMOJI[`${word.article || ""}|${word.german_word}`] || null;
}

export function notoUrl(emoji) {
  const cps = [...emoji].map((c) => c.codePointAt(0).toString(16)).join("_");
  return `https://fonts.gstatic.com/s/e/notoemoji/latest/${cps}/lottie.json`;
}

// "Knight Bus" run across a card, as Web Animations keyframes. All parts share
// RUN_MS, so offsets line up. Positions are px relative to the card; x is the
// actor's centre. The actor is ACTOR px square.
export const RUN_MS = 4200;
export const ACTOR = 64;

const SQUASH = "scale(1.5, 0.3)";

export function runKeyframes({ startX, zoneStart, zoneEnd, doorX, gapY, room = 8 }) {
  // Keep enough runway on both sides of the squeeze on narrow cards.
  const zEnd = Math.max(Math.min(zoneEnd, doorX - 90), 50);
  const zStart = Math.min(Math.max(zoneStart, 50), zEnd);
  const at = (x, scale) => `translate(${x - ACTOR / 2}px, ${gapY - ACTOR / 2}px) ${scale}`;

  const actor = [
    { offset: 0, transform: at(startX, "scale(1)"), opacity: 1, easing: "ease-in" },
    { offset: 0.18, transform: at(zStart - 40, "scale(1)"), opacity: 1, easing: "ease-out" },
    { offset: 0.26, transform: at(zStart, SQUASH), opacity: 1, easing: "linear" },
    { offset: 0.62, transform: at(zEnd, SQUASH), opacity: 1, easing: "ease-out" },
    { offset: 0.67, transform: at(zEnd + 14, "scale(0.85, 1.25)"), opacity: 1 },
    { offset: 0.72, transform: at(zEnd + 24, "scale(1)"), opacity: 1, easing: "ease-in" },
    { offset: 0.86, transform: at(doorX - 40, "scale(1.1, 0.9)"), opacity: 1, easing: "ease-in" },
    { offset: 0.94, transform: at(doorX - 10, "scale(0.2)"), opacity: 0 },
    { offset: 1, transform: at(doorX - 10, "scale(0.2)"), opacity: 0 },
  ];

  const on = 0.8;
  const trail = [
    { offset: 0, opacity: on },
    { offset: 0.16, opacity: on },
    { offset: 0.2, opacity: 0 },
    { offset: 0.72, opacity: 0 },
    { offset: 0.76, opacity: on },
    { offset: 0.88, opacity: on },
    { offset: 0.9, opacity: 0 },
    { offset: 1, opacity: 0 },
  ];

  const puff = [
    { offset: 0, opacity: 0, transform: "translate(-50%, -50%) scale(0.3)" },
    { offset: 0.62, opacity: 0, transform: "translate(-50%, -50%) scale(0.3)" },
    { offset: 0.65, opacity: 1, transform: "translate(-50%, -50%) scale(0.6)", easing: "ease-out" },
    { offset: 0.8, opacity: 0, transform: "translate(-50%, -50%) scale(1.6)" },
    { offset: 1, opacity: 0, transform: "translate(-50%, -50%) scale(1.6)" },
  ];

  const door = [
    { offset: 0, opacity: 0 },
    { offset: 0.72, opacity: 0 },
    { offset: 0.76, opacity: 1 },
    { offset: 0.97, opacity: 1 },
    { offset: 1, opacity: 0 },
  ];

  // Hinge on the inner side: the card's edge lifts towards you like a carpet.
  const flap = [
    { offset: 0, transform: "rotateY(0deg)" },
    { offset: 0.74, transform: "rotateY(0deg)", easing: "ease-out" },
    { offset: 0.82, transform: "rotateY(-60deg)" },
    { offset: 0.94, transform: "rotateY(-60deg)", easing: "ease-in" },
    { offset: 0.97, transform: "rotateY(0deg)", easing: "ease-out" },
    { offset: 0.985, transform: "rotateY(-8deg)", easing: "ease-in" },
    { offset: 1, transform: "rotateY(0deg)" },
  ];

  // Word and hint step aside while it squeezes through, then wobble back.
  const aside = (dir) => [
    { offset: 0, transform: "translateY(0px)" },
    { offset: 0.18, transform: "translateY(0px)", easing: "ease-out" },
    { offset: 0.25, transform: `translateY(${dir * room}px)` },
    { offset: 0.62, transform: `translateY(${dir * room}px)`, easing: "ease-in" },
    { offset: 0.67, transform: `translateY(${-dir * room * 0.4}px)` },
    { offset: 0.72, transform: `translateY(${dir * room * 0.2}px)` },
    { offset: 0.76, transform: "translateY(0px)" },
    { offset: 1, transform: "translateY(0px)" },
  ];

  // Thud when the flap drops shut. Only transform: the card's colour is never touched.
  const card = [
    { offset: 0, transform: "translateX(0px)" },
    { offset: 0.965, transform: "translateX(0px)" },
    { offset: 0.975, transform: "translateX(-3px)" },
    { offset: 0.985, transform: "translateX(3px)" },
    { offset: 0.993, transform: "translateX(-1.5px)" },
    { offset: 1, transform: "translateX(0px)" },
  ];

  return { actor, trail, puff, puffX: zEnd + 20, door, flap, main: aside(-1), hint: aside(1), card };
}
