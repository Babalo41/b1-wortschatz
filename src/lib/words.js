import rawWords from "../data/words.json";

// Stable card id: page + pos + head + plural disambiguates homographs
// (die Bank ¨-e vs die Bank -en) without depending on array order, so ids
// stay stable across re-extraction as long as the source PDF doesn't
// change.
function makeId(entry, index) {
  const key = `${entry.page}|${entry.pos}|${entry.head}|${entry.plural || ""}|${index}`;
  return key;
}

export const WORDS = rawWords.map((e, i) => ({ ...e, id: makeId(e, i) }));

export const WORDS_BY_ID = new Map(WORDS.map((w) => [w.id, w]));

// Solid vibrant gradients (see styles.css for why not a glass/blur tint:
// this color renders on an element that moves every frame during a
// swipe drag, and backdrop-filter blur there was both disliked visually
// and one of the more battery/GPU-costly things to animate).
export const GENDER_COLORS = {
  m: {
    name: "der",
    gradient: "linear-gradient(160deg, #3b82f6, #1d4ed8)",
    glow: "rgba(37, 99, 235, 0.55)",
    border: "rgba(96, 165, 250, 0.55)",
    fg: "#eff6ff",
  }, // blue
  f: {
    name: "die",
    gradient: "linear-gradient(160deg, #f472b6, #db2777)",
    glow: "rgba(219, 39, 119, 0.55)",
    border: "rgba(249, 168, 212, 0.55)",
    fg: "#fff1f7",
  }, // pink/rose
  n: {
    name: "das",
    gradient: "linear-gradient(160deg, #34d399, #059669)",
    glow: "rgba(5, 150, 105, 0.55)",
    border: "rgba(110, 231, 183, 0.55)",
    fg: "#f0fdf4",
  }, // emerald
};

export const POS_COLORS = {
  verb: {
    gradient: "linear-gradient(160deg, #a78bfa, #6d28d9)",
    glow: "rgba(109, 40, 217, 0.55)",
    border: "rgba(196, 181, 253, 0.55)",
    fg: "#f5f3ff",
  }, // violet
  other: {
    gradient: "linear-gradient(160deg, #fbbf24, #d97706)",
    glow: "rgba(217, 119, 6, 0.55)",
    border: "rgba(253, 224, 71, 0.5)",
    fg: "#2a1400",
  }, // amber (adj/adv/particle)
};

export function cardColor(entry) {
  if (entry.pos === "noun" && entry.gender && GENDER_COLORS[entry.gender[0]]) {
    return GENDER_COLORS[entry.gender.split("/")[0]];
  }
  if (entry.pos === "verb") return POS_COLORS.verb;
  return POS_COLORS.other;
}

export function letterOf(entry) {
  return (entry.head || "?")[0].toUpperCase();
}

export const LETTERS = [...new Set(WORDS.map(letterOf))].sort();
