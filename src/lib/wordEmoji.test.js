import { describe, expect, it } from "vitest";
import { notoUrl, wordEmoji } from "./wordEmoji.js";

const base = "https://fonts.gstatic.com/s/e/notoemoji/latest/";

describe("notoUrl", () => {
  it("builds the url for a simple emoji", () => {
    expect(notoUrl("🦊")).toBe(base + "1f98a/lottie.json");
  });
  it("keeps the variation selector", () => {
    expect(notoUrl("☁️")).toBe(base + "2601_fe0f/lottie.json");
  });
  it("joins zwj sequences", () => {
    expect(notoUrl("🧑‍⚖️")).toBe(base + "1f9d1_200d_2696_fe0f/lottie.json");
  });
});

describe("wordEmoji", () => {
  it("finds a noun by article and word", () => {
    expect(wordEmoji({ article: "der", german_word: "Fuchs" })).toEqual({ e: "🦊", m: "pop", still: false });
  });
  it("keeps an explicit motion", () => {
    expect(wordEmoji({ article: "der", german_word: "Rechtsanwalt" })).toEqual({ e: "⚖️", m: "drop", still: false });
  });
  it("finds a word without article", () => {
    expect(wordEmoji({ article: "", german_word: "wolkig" })).toEqual({ e: "☁️", m: "float", still: false });
  });
  it("flags emoji without a Noto animation as still", () => {
    expect(wordEmoji({ article: "der", german_word: "Richter" })).toEqual({ e: "🧑‍⚖️", m: "drop", still: true });
  });
  it("returns null for an unmapped word", () => {
    expect(wordEmoji({ article: "der", german_word: "Quatschwort" })).toBeNull();
  });
});
