import { describe, it, expect } from "vitest";
import { freshProgress, addDays, nextProgress, isDue } from "./leitner.js";

describe("leitner scheduling (pure logic, no storage)", () => {
  it("a fresh card starts in box 1, due today, not flagged", () => {
    const p = freshProgress("card-1", "2026-01-01");
    expect(p.box).toBe(1);
    expect(p.dueDate).toBe("2026-01-01");
    expect(p.flagged).toBe(false);
  });

  it("a correct answer promotes one box and sets dueDate = today + 2^(box-1) days", () => {
    const p = freshProgress("card-1", "2026-01-01");
    const p2 = nextProgress(p, "correct", "2026-01-01");
    expect(p2.box).toBe(2);
    expect(p2.dueDate).toBe(addDays("2026-01-01", 2)); // 2^(2-1) = 2 days

    const p3 = nextProgress(p2, "correct", "2026-01-03");
    expect(p3.box).toBe(3);
    expect(p3.dueDate).toBe(addDays("2026-01-03", 4)); // 2^(3-1) = 4 days
  });

  it("box promotion caps at 5", () => {
    let p = freshProgress("card-1", "2026-01-01");
    for (let i = 0; i < 10; i++) {
      p = nextProgress(p, "correct", "2026-01-01");
    }
    expect(p.box).toBe(5);
    expect(p.dueDate).toBe(addDays("2026-01-01", 16)); // 2^(5-1) = 16 days
  });

  it("a wrong answer sends the card straight back to box 1, regardless of prior box", () => {
    let p = freshProgress("card-1", "2026-01-01");
    p = nextProgress(p, "correct", "2026-01-01"); // box 2
    p = nextProgress(p, "correct", "2026-01-03"); // box 3
    p = nextProgress(p, "wrong", "2026-01-07"); // wrong -> box 1
    expect(p.box).toBe(1);
    expect(p.dueDate).toBe(addDays("2026-01-07", 1));
    expect(p.lastResult).toBe("wrong");
  });

  it("tracks timesSeen and timesCorrect independently of box", () => {
    let p = freshProgress("card-1", "2026-01-01");
    p = nextProgress(p, "correct", "2026-01-01");
    p = nextProgress(p, "wrong", "2026-01-03");
    p = nextProgress(p, "correct", "2026-01-04");
    expect(p.timesSeen).toBe(3);
    expect(p.timesCorrect).toBe(2);
  });

  it("'hard' behaves like 'wrong' for the box (back to 1) but also sets flagged", () => {
    let p = freshProgress("card-1", "2026-01-01");
    p = nextProgress(p, "correct", "2026-01-01"); // box 2
    p = nextProgress(p, "correct", "2026-01-03"); // box 3
    p = nextProgress(p, "hard", "2026-01-07");
    expect(p.box).toBe(1);
    expect(p.dueDate).toBe(addDays("2026-01-07", 1));
    expect(p.lastResult).toBe("hard");
    expect(p.flagged).toBe(true);
  });

  it("a plain 'wrong' does not clear or set the flag either way", () => {
    let p = freshProgress("card-1", "2026-01-01");
    p = nextProgress(p, "hard", "2026-01-01");
    expect(p.flagged).toBe(true);
    p = nextProgress(p, "wrong", "2026-01-02");
    expect(p.flagged).toBe(true); // still flagged, "wrong" doesn't touch it

    let p2 = freshProgress("card-2", "2026-01-01");
    p2 = nextProgress(p2, "wrong", "2026-01-01");
    expect(p2.flagged).toBe(false); // was never flagged, "wrong" doesn't set it either
  });

  it("an explicit 'correct' clears a previously-set flag", () => {
    let p = freshProgress("card-1", "2026-01-01");
    p = nextProgress(p, "hard", "2026-01-01");
    expect(p.flagged).toBe(true);
    p = nextProgress(p, "correct", "2026-01-02");
    expect(p.flagged).toBe(false);
  });

  it("rejects an unknown outcome", () => {
    const p = freshProgress("card-1", "2026-01-01");
    expect(() => nextProgress(p, "maybe", "2026-01-01")).toThrow();
  });

  it("isDue: a never-studied card (no progress record) is always due", () => {
    expect(isDue(undefined, "2026-01-01")).toBe(true);
  });

  it("isDue: due exactly on or after dueDate, not before", () => {
    const p = { dueDate: "2026-01-10" };
    expect(isDue(p, "2026-01-09")).toBe(false);
    expect(isDue(p, "2026-01-10")).toBe(true);
    expect(isDue(p, "2026-01-11")).toBe(true);
  });
});
