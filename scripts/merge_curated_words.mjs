// One-off enrichment: overlays hand-curated entries from my_words.json
// (mnemonics, English meaning, fixed phrases, "harder" bonus examples) onto
// the extracted src/data/words.json, matched by head+pos (and gender for
// nouns, to disambiguate homographs like der/die Bank). Words not present
// in my_words.json are left untouched. Re-run any time my_words.json grows.
//
// Usage: node scripts/merge_curated_words.mjs

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORDS_PATH = path.join(__dirname, "../src/data/words.json");
const CURATED_PATH = path.join(__dirname, "../my_words.json");

const GENDER_LETTER = { der: "m", die: "f", das: "n" };

// my_words.json spells out reflexive verbs as "sich X", "(sich) X", or
// "(sich etwas) X"; words.json stores the bare infinitive plus a
// `reflexive: true` flag instead. Strip the reflexive marker so both sides
// key on the same head. Extracted nouns can also carry a region suffix
// like "Abitur (D)→A" -- drop anything from the first "(" onward.
function normalizeHead(head) {
  return head
    .replace(/^\(sich(?: [a-zäöüß]+)?\)\s*/i, "")
    .replace(/^sich\s+/i, "")
    .replace(/\s*\(.*$/, "")
    .trim();
}

// The extracted data only ever tags a word "other" or "verb"/"noun" -- it
// has no separate "adj" bucket, so fold my_words.json's "adj" into "other"
// for matching purposes.
function normalizePos(pos) {
  return pos === "adj" ? "other" : pos;
}

function genderLetters(g) {
  if (!g) return [];
  return g.split("/").map((part) => GENDER_LETTER[part] || part);
}

function matchKey(entry) {
  return `${normalizeHead(entry.head)}|${normalizePos(entry.pos)}`;
}

function main() {
  const words = JSON.parse(readFileSync(WORDS_PATH, "utf8"));
  const curated = JSON.parse(readFileSync(CURATED_PATH, "utf8"));

  const curatedByKey = new Map();
  for (const c of curated) {
    const key = matchKey(c);
    if (!curatedByKey.has(key)) curatedByKey.set(key, []);
    curatedByKey.get(key).push(c);
  }

  let merged = 0;
  const matchedCurated = new Set();
  for (const entry of words) {
    const candidates = curatedByKey.get(matchKey(entry)) || [];
    // Nouns can have multiple gender-disambiguated entries under the same
    // head (der/die Bekannte); only accept a candidate whose gender set
    // overlaps this entry's gender, or either side lacks gender info.
    const entryGenders = entry.pos === "noun" ? genderLetters(entry.gender) : [];
    const c = candidates.find((cand) => {
      if (entry.pos !== "noun") return true;
      const candGenders = genderLetters(cand.gender);
      if (entryGenders.length === 0 || candGenders.length === 0) return true;
      return candGenders.some((g) => entryGenders.includes(g));
    });
    if (!c) continue;
    merged++;
    matchedCurated.add(c);

    if (c.en) entry.meaning = c.en;
    if (c.expl) entry.expl = c.expl;
    if (c.fixed_phrases?.length) entry.fixedPhrases = c.fixed_phrases;
    if (c.harder_de && c.harder_en) {
      entry.harderExample = { de: c.harder_de, en: c.harder_en };
    }
    if (c.compar) entry.compar = c.compar;
    if (c.superl) entry.superl = c.superl;

    if (c.ex_de && c.ex_en) {
      const idx = entry.examples.indexOf(c.ex_de);
      if (idx === -1) {
        entry.examples.unshift(c.ex_de);
        entry.examplesEn = [c.ex_en, ...(entry.examplesEn || entry.examples.slice(1).map(() => null))];
      } else {
        entry.examplesEn = entry.examplesEn || entry.examples.map(() => null);
        entry.examplesEn[idx] = c.ex_en;
      }
    }
  }

  const unmatchedList = curated.filter((c) => !matchedCurated.has(c));
  console.log(`Merged curated data into ${merged}/${curated.length} words (${matchedCurated.size} curated entries used).`);
  if (unmatchedList.length > 0) {
    console.log(`  ${unmatchedList.length} curated entries had no match in words.json:`);
    for (const c of unmatchedList) console.log(`    ${c.head} (${c.pos})`);
  }

  writeFileSync(WORDS_PATH, JSON.stringify(words, null, 1) + "\n");
}

main();
