import { describe, it, expect } from "vitest";
import { pickCelebration, NO_REPEAT, SCENES } from "./panda.js";

describe("pickCelebration", () => {
  it("never repeats a scene from the last 3", () => {
    const history = [];
    for (let i = 0; i < 500; i++) {
      const c = pickCelebration(history);
      expect(history.slice(-NO_REPEAT)).not.toContain(c.scene);
      history.push(c.scene);
    }
  });

  it("eventually uses every scene", () => {
    const history = [];
    for (let i = 0; i < 200; i++) history.push(pickCelebration(history).scene);
    expect(new Set(history).size).toBe(SCENES.length);
  });
});
