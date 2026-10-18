import { describe, it, expect } from "vitest";
import {
  answerDiff,
  bestBox,
  checkTyped,
  markHard,
  normalizeRecord,
  pickMistakes,
  pickSession,
  progressCounts,
  requeue,
  reviewWord,
  splitByDue,
} from "./chapterReview.js";

const T = "2026-10-18";
const word = (german_word, english_translation = "x", article = null) => ({ key: german_word, german_word, english_translation, article });

describe("normalizeRecord", () => {
  it("turns old true/false answers into Leitner records and keeps misses as ★", () => {
    const r = normalizeRecord({ "de-en": true, "en-de": false }, T);
    expect(r["de-en"]).toMatchObject({ box: 2, dueDate: T, timesSeen: 1 });
    expect(r["en-de"]).toMatchObject({ box: 1, dueDate: T, timesSeen: 1 });
    expect(r.hard).toBe(true);
  });

  it("leaves new-style records alone and handles a missing record", () => {
    const rec = reviewWord({}, "de-en", true, T);
    expect(normalizeRecord(rec, T)).toEqual(rec);
    expect(normalizeRecord(undefined, T)).toEqual({ hard: false });
  });
});

describe("reviewWord", () => {
  it("a miss sends the word to box 1, due tomorrow, and marks it ★", () => {
    let r = reviewWord({}, "de-en", true, T);
    r = reviewWord(r, "de-en", false, "2026-10-20");
    expect(r["de-en"]).toMatchObject({ box: 1, dueDate: "2026-10-21" });
    expect(r.hard).toBe(true);
  });

  it("a due hit promotes and clears ★", () => {
    let r = markHard({}, true, T);
    r = reviewWord(r, "en-de", true, T);
    expect(r["en-de"]).toMatchObject({ box: 2, dueDate: "2026-10-20" });
    expect(r.hard).toBe(false);
  });

  it("a hit before the word is due does not promote it", () => {
    let r = reviewWord({}, "de-en", true, T); // box 2, due in 2 days
    r = reviewWord(r, "de-en", true, T);
    expect(r["de-en"]).toMatchObject({ box: 2, dueDate: "2026-10-20", timesSeen: 2, timesCorrect: 2 });
  });

  it("directions are scheduled separately", () => {
    const r = reviewWord({}, "de-en", true, T);
    expect(r["en-de"]).toBeUndefined();
  });
});

describe("markHard", () => {
  it("makes the word due today in both directions; un-marking only clears the flag", () => {
    let r = reviewWord({}, "de-en", true, T);
    r = reviewWord(r, "de-en", true, "2026-10-20"); // box 3
    const hard = markHard(r, true, "2026-10-21");
    expect(hard["de-en"]).toMatchObject({ box: 1, dueDate: "2026-10-21" });
    expect(hard["en-de"]).toMatchObject({ box: 1, dueDate: "2026-10-21", timesSeen: 0 });
    const off = markHard(hard, false, "2026-10-21");
    expect(off.hard).toBe(false);
    expect(off["de-en"].box).toBe(1);
  });
});

describe("progress", () => {
  it("counts the stronger direction, ignoring untested records", () => {
    const progress = new Map([
      ["a", reviewWord({}, "de-en", true, T)], // box 2
      ["b", markHard({}, true, T)], // records exist but never tested
      ["c", { "en-de": { box: 4, timesSeen: 3 } }],
    ]);
    expect(bestBox(progress.get("b"))).toBe(0);
    expect(progressCounts([word("a"), word("b"), word("c"), word("d")], progress)).toEqual({ practised: 2, secure: 1 });
  });
});

describe("pickSession", () => {
  const words = Array.from({ length: 40 }, (_, i) => word(`w${i}`));

  it("is 25 words: ★ due words first, then lowest box, then new words in chapter order", () => {
    const progress = new Map([
      ["w30", { ...reviewWord({}, "de-en", true, "2026-10-01") }], // box 2, overdue
      ["w31", markHard({}, true, T)], // ★, due today
      ["w39", reviewWord({}, "de-en", true, T)], // not due
    ]);
    const { due, fresh, later } = splitByDue(words, progress, "de-en", T);
    expect(due.map((w) => w.key)).toEqual(["w31", "w30"]);
    expect(fresh[0].key).toBe("w0");
    expect(later.map((w) => w.key)).toEqual(["w39"]);

    const session = pickSession(words, progress, "de-en", T).map((w) => w.key);
    expect(session).toHaveLength(25);
    expect(session).toEqual(expect.arrayContaining(["w30", "w31", "w0", "w22"]));
    expect(session).not.toContain("w23");
    expect(session).not.toContain("w39");
  });

  it("tops up with the soonest-due words when there's nothing else, and skips words without English", () => {
    const small = [word("a"), word("b"), word("gell", "")];
    const progress = new Map([["a", reviewWord({}, "de-en", true, T)]]);
    expect(pickSession(small, progress, "de-en", T).map((w) => w.key).sort()).toEqual(["a", "b"]);
  });
});

describe("pickMistakes", () => {
  it("takes only ★ words, from any chapter, at most 25", () => {
    const words = Array.from({ length: 30 }, (_, i) => word(`w${i}`));
    const progress = new Map(words.map((w, i) => [w.key, i % 2 ? markHard({}, true, T) : reviewWord({}, "de-en", true, T)]));
    const picked = pickMistakes(words, progress, T);
    expect(picked).toHaveLength(15);
    expect(picked.every((w) => progress.get(w.key).hard)).toBe(true);
  });
});

describe("requeue", () => {
  it("puts a missed word back three questions later, or at the end", () => {
    expect(requeue(["a", "b", "c", "d", "e", "f"], 0, "A")).toEqual(["a", "b", "c", "d", "A", "e", "f"]);
    expect(requeue(["a", "b", "c"], 1, "B")).toEqual(["a", "b", "c", "B"]);
  });
});

describe("checkTyped", () => {
  it("accepts case, umlaut spellings and a typed article", () => {
    const w = word("Ärger", "anger", "der");
    for (const input of ["Ärger", "ärger", "Aerger", " der Ärger "]) expect(checkTyped(input, w)).toBe(true);
    expect(checkTyped("Arger", w)).toBe(false);
    expect(checkTyped("", w)).toBe(false);
  });

  it("accepts ß as ss, the base form before a comma, and text in or without brackets", () => {
    expect(checkTyped("schliessen", word("schließen"))).toBe(true);
    expect(checkTyped("schwach", word("schwach, schwächer, am schwächsten"))).toBe(true);
    expect(checkTyped("beziehungsweise", word("beziehungsweise (bzw.)"))).toBe(true);
    expect(checkTyped("bzw.", word("beziehungsweise (bzw.)"))).toBe(true);
    expect(checkTyped("sich amüsieren", word("amüsieren (sich)"))).toBe(true);
    expect(checkTyped("Zwetschke", word("Zwetschge/Zwetschke"))).toBe(true);
    expect(checkTyped("zurückbringen", word("zurück bringen"))).toBe(true);
  });
});

describe("answerDiff", () => {
  it("marks the letters that were wrong or missing", () => {
    const { got, want } = answerDiff("Gedachtnis", word("Gedächtnis"));
    expect(got.filter((c) => !c.ok).map((c) => c.ch)).toEqual(["a"]);
    expect(want.filter((c) => !c.ok).map((c) => c.ch)).toEqual(["ä"]);
    expect(answerDiff("der Haus", word("Haus", "house", "das")).got.every((c) => c.ok)).toBe(true);
  });
});
