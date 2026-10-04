// Chapter-wise word list ("Kapitel-Wörter" profile). Every data/Kapit*.json
// file is bundled at build time (Kapitel3.json + Kapitel3part2.json etc. are
// merged by their `chapter` field). Missing files are fine: the glob is just
// empty, so the build never breaks before the data exists.
//
// Entry shape: { id, chapter, german_word, article, plural,
//   english_translation, explanation, image_local_path, image_override_url }

const modules = import.meta.glob("../../data/Kapit*.json", { eager: true, import: "default" });

function chapterFromName(path) {
  const m = path.match(/(\d+)/);
  return m ? Number(m[1]) : 0;
}

// Natural sort so "Kapitel 5.json" comes before "Kapitel 5 par 2.json" and
// Kapitel2 before Kapitel10.
const files = Object.keys(modules).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

function buildWords() {
  const seen = new Map();
  const words = [];
  for (const path of files) {
    const list = Array.isArray(modules[path]) ? modules[path] : [];
    for (const raw of list) {
      if (!raw || !raw.german_word) continue;
      const chapter = Number(raw.chapter) || chapterFromName(path);
      // Progress is keyed on the word itself, not the file's id, so switching
      // from hand-made to generated JSON doesn't wipe her progress.
      const base = `${chapter}|${raw.article || ""}|${raw.german_word}`;
      const n = (seen.get(base) || 0) + 1;
      seen.set(base, n);
      words.push({ ...raw, chapter, key: n > 1 ? `${base}#${n}` : base });
    }
  }
  return words.sort((a, b) => a.chapter - b.chapter); // stable: keeps file order within a chapter
}

export const CHAPTER_WORDS = buildWords();

export const CHAPTERS = [...new Set(CHAPTER_WORDS.map((w) => w.chapter))].sort((a, b) => a - b);

export function wordsOfChapter(chapter) {
  return CHAPTER_WORDS.filter((w) => w.chapter === chapter);
}

// Colors as requested (Tailwind 100 background / 800 text equivalents).
export const ARTICLE_COLORS = {
  die: { bg: "#fce7f3", fg: "#9d174d" }, // pink
  der: { bg: "#dbeafe", fg: "#1e40af" }, // blue
  das: { bg: "#ffedd5", fg: "#9a3412" }, // orange
  none: { bg: "#f1f5f9", fg: "#1e293b" }, // verbs, adjectives, phrases
};

export function articleColor(word) {
  const first = (word.article || "").split("/")[0].trim();
  return ARTICLE_COLORS[first] || ARTICLE_COLORS.none;
}

export function germanLabel(word) {
  return [word.article, word.german_word].filter(Boolean).join(" ");
}

// Attribution for Commons pictures, written by scripts/crawler.py. Fetched
// once (the service worker precaches it like any other json).
let creditsPromise = null;

export function imageCredit(word) {
  if (!creditsPromise) {
    creditsPromise = fetch(import.meta.env.BASE_URL + "images/credits.json")
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}));
  }
  const file = (word.image_local_path || "").split("/").pop();
  return creditsPromise.then((c) => (c[file]?.author ? c[file] : null));
}

export function imageSrc(word) {
  const path = word.image_local_path;
  if (!path) return word.image_override_url || null;
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
