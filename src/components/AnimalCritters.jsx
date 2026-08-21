import React, { useEffect, useState, useRef } from "react";

// Purely decorative, occasional easter egg: a small animal "drops in" from
// a random spot along the top edge, flutters/flaps as it falls, slows
// down and lands near the bottom, slides toward a corner, and vanishes --
// like it walked in one side and out a little door on the other. One at a
// time, long random gaps between appearances, so it's a rare surprise
// rather than background clutter. Fully non-interactive (pointer-events:
// none all the way down) so it can never intercept a tap/swipe on the
// real UI underneath.

const CRITTERS = ["🦆", "🐧", "🐘", "🦁", "🐦", "🐯", "🐻", "🐰"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function randomCritter() {
  const emoji = CRITTERS[Math.floor(Math.random() * CRITTERS.length)];
  const startX = randomBetween(10, 90); // vw
  const exitToRight = Math.random() < 0.5;
  const exitX = exitToRight ? randomBetween(95, 105) : randomBetween(-5, 5);
  return { id: Math.random(), emoji, startX, exitX };
}

export default function AnimalCritters() {
  const [critter, setCritter] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    timeoutRef.current = setTimeout(() => setCritter(randomCritter()), randomBetween(6000, 14000));
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function onDone() {
    setCritter(null);
    timeoutRef.current = setTimeout(() => setCritter(randomCritter()), randomBetween(14000, 28000));
  }

  if (!critter) return <div className="critter-layer" aria-hidden="true" />;

  return (
    <div className="critter-layer" aria-hidden="true">
      <div
        key={critter.id}
        className="critter"
        style={{ "--sx": `${critter.startX}vw`, "--ex": `${critter.exitX}vw` }}
        onAnimationEnd={onDone}
      >
        <span className="critter-emoji">{critter.emoji}</span>
      </div>
    </div>
  );
}
