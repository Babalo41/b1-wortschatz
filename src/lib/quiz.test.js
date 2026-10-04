import { describe, it, expect } from "vitest";
import { buildQuestion, buildQuiz, isLearned, nextWordProgress } from "./quiz.js";

const w = (german_word, english_translation, article = null) => ({ german_word, english_translation, article });
const chapter = [
  w("Apfel", "apple", "der"),
  w("Birne", "pear", "die"),
  w("Haus", "house", "das"),
  w("laufen", "to run"),
  w("schnell", "fast"),
];

describe("buildQuestion", () => {
  it("has 4 unique options including the answer", () => {
    for (let i = 0; i < 50; i++) {
      const q = buildQuestion(chapter[0], chapter, "de-en");
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options.map((o) => o.toLowerCase())).size).toBe(4);
      expect(q.options).toContain("apple");
    }
  });

  it("uses German words for en-de and asks the article only for nouns", () => {
    const noun = buildQuestion(chapter[0], chapter, "en-de");
    expect(noun.answer).toBe("Apfel");
    expect(noun.askArticle).toBe(true);
    expect(buildQuestion(chapter[3], chapter, "en-de").askArticle).toBe(false);
    expect(buildQuestion(chapter[0], chapter, "de-en").askArticle).toBe(false);
  });

  it("tops up from other chapters when the chapter is small", () => {
    const tiny = chapter.slice(0, 2);
    const q = buildQuestion(tiny[0], tiny, "de-en", chapter.slice(2));
    expect(q.options).toHaveLength(4);
    expect(q.options).toContain("apple");
  });

  it("never offers a duplicate of the answer", () => {
    const dupes = [w("Bank", "bank", "die"), w("Bank", "bank", "die"), ...chapter];
    const q = buildQuestion(dupes[0], dupes, "en-de");
    expect(q.options.filter((o) => o === "Bank")).toHaveLength(1);
  });
});

describe("buildQuiz", () => {
  it("asks every word exactly once", () => {
    const quiz = buildQuiz(chapter, "de-en");
    expect(quiz.map((q) => q.word.german_word).sort()).toEqual(chapter.map((c) => c.german_word).sort());
  });
});

describe("word progress", () => {
  it("is learned only when both directions are right, and a miss un-learns it", () => {
    let p = nextWordProgress(null, "de-en", true);
    expect(isLearned(p)).toBe(false);
    p = nextWordProgress(p, "en-de", true);
    expect(isLearned(p)).toBe(true);
    p = nextWordProgress(p, "de-en", false);
    expect(isLearned(p)).toBe(false);
  });
});
