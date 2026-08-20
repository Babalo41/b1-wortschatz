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

export const GENDER_COLORS = {
  m: { name: "der", bg: "#1d4ed8", fg: "#eff6ff" }, // blue
  f: { name: "die", bg: "#be123c", fg: "#fff1f2" }, // rose
  n: { name: "das", bg: "#15803d", fg: "#f0fdf4" }, // green
};

export const POS_COLORS = {
  verb: { bg: "#7c3aed", fg: "#f5f3ff" }, // violet
  other: { bg: "#b45309", fg: "#fffbeb" }, // amber (adj/adv/particle)
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
