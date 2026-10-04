import { describe, expect, it } from "vitest";
import { ACTOR, notoUrl, runKeyframes, wordEmoji } from "./wordEmoji.js";

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
    expect(wordEmoji({ article: "der", german_word: "Fuchs" })).toBe("🦊");
  });
  it("finds a word without article", () => {
    expect(wordEmoji({ article: "", german_word: "wolkig" })).toBe("☁️");
  });
  it("returns null for an unmapped word", () => {
    expect(wordEmoji({ article: "der", german_word: "Quatschwort" })).toBeNull();
  });
});

describe("runKeyframes", () => {
  const geo = { startX: -86, zoneStart: 100, zoneEnd: 260, doorX: 358, gapY: 150 };
  const k = runKeyframes(geo);
  const pos = (x, scale) => `translate(${x - ACTOR / 2}px, ${150 - ACTOR / 2}px) ${scale}`;
  const at = (list, offset) => list.find((f) => f.offset === offset);

  it("enters from off-screen left", () => {
    expect(k.actor[0].transform).toBe(pos(-86, "scale(1)"));
  });
  it("is squashed across the whole squeeze zone", () => {
    expect(at(k.actor, 0.26).transform).toBe(pos(100, "scale(1.5, 0.3)"));
    expect(at(k.actor, 0.62).transform).toBe(pos(260, "scale(1.5, 0.3)"));
  });
  it("ends at the door, invisible", () => {
    const last = k.actor.at(-1);
    expect(last.transform).toBe(pos(348, "scale(0.2)"));
    expect(last.opacity).toBe(0);
  });
  it("puts word and hint back where they were", () => {
    for (const list of [k.main, k.hint, k.card]) {
      expect(list[0].transform).toMatch(/\(0px\)$/);
      expect(list.at(-1).transform).toMatch(/\(0px\)$/);
    }
  });
  it("moves word up and hint down while squeezing", () => {
    expect(at(k.main, 0.25).transform).toBe("translateY(-8px)");
    expect(at(k.hint, 0.25).transform).toBe("translateY(8px)");
  });
  it("keeps the squeeze inside the card on narrow cards", () => {
    const n = runKeyframes({ ...geo, zoneStart: 40, zoneEnd: 330, doorX: 300 });
    expect(at(n.actor, 0.26).transform).toBe(pos(50, "scale(1.5, 0.3)"));
    expect(at(n.actor, 0.62).transform).toBe(pos(210, "scale(1.5, 0.3)"));
  });
  it("has ordered offsets from 0 to 1 in every list", () => {
    for (const [name, list] of Object.entries(k)) {
      if (!Array.isArray(list)) continue;
      const offs = list.map((f) => f.offset);
      expect(offs[0], name).toBe(0);
      expect(offs.at(-1), name).toBe(1);
      expect([...offs].sort((a, b) => a - b), name).toEqual(offs);
    }
  });
});
