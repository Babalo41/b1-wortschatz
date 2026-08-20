import React, { useEffect, useRef } from "react";
import WordCard from "./WordCard.jsx";

const COMMIT_THRESHOLD = 110; // px
const TAP_THRESHOLD = 8; // px of movement below which a release counts as a tap

// Drag tracking deliberately avoids putting per-pointermove deltas into
// React state -- on a card stack, that would re-render the whole
// component (and its WordCard subtree, with its conjugation-table
// computation) on every mouse-move event, which is the classic source of
// janky/battery-draining drag interactions. Instead we mutate the DOM
// directly (transform + label opacity) via refs, batched through
// requestAnimationFrame so at most one paint-affecting update happens per
// frame regardless of how many pointermove events fire. React state is
// only touched for discrete transitions: committing a decision (flyOff)
// and snapping back after a released short drag.
export default function SwipeCard({ entry, flipped, onFlip, onDecide }) {
  const cardRef = useRef(null);
  const leftLabelRef = useRef(null);
  const rightLabelRef = useRef(null);
  const dragRef = useRef({ dx: 0, dy: 0 });
  const startRef = useRef(null);
  const movedRef = useRef(false);
  const rafRef = useRef(null);

  function paint() {
    rafRef.current = null;
    const { dx, dy } = dragRef.current;
    const rotation = Math.max(-18, Math.min(18, dx / 12));
    if (cardRef.current) {
      cardRef.current.style.transform = `translateX(${dx}px) translateY(${dy * 0.2}px) rotate(${rotation}deg)`;
      const tint =
        Math.abs(dx) < 10
          ? "none"
          : dx > 0
          ? `inset 0 0 0 999px rgba(21,128,61, ${Math.min(0.35, dx / 400)})`
          : `inset 0 0 0 999px rgba(190,18,60, ${Math.min(0.35, -dx / 400)})`;
      cardRef.current.style.boxShadow = tint === "none" ? "" : tint;
    }
    if (leftLabelRef.current) {
      leftLabelRef.current.style.opacity = dx < -20 ? Math.min(1, -dx / COMMIT_THRESHOLD) : 0;
    }
    if (rightLabelRef.current) {
      rightLabelRef.current.style.opacity = dx > 20 ? Math.min(1, dx / COMMIT_THRESHOLD) : 0;
    }
  }

  function schedulePaint() {
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(paint);
  }

  useEffect(() => () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
  }, []);

  function setTransition(on) {
    if (cardRef.current) cardRef.current.style.transition = on ? "transform 220ms ease" : "none";
  }

  function onPointerDown(e) {
    startRef.current = { x: e.clientX, y: e.clientY };
    movedRef.current = false;
    dragRef.current = { dx: 0, dy: 0 };
    setTransition(false);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e) {
    if (!startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    if (Math.abs(dx) > TAP_THRESHOLD || Math.abs(dy) > TAP_THRESHOLD) movedRef.current = true;
    dragRef.current = { dx, dy };
    schedulePaint();
  }

  function resetPosition() {
    setTransition(true);
    dragRef.current = { dx: 0, dy: 0 };
    paint();
  }

  function onPointerUp() {
    if (!startRef.current) return;
    const { dx } = dragRef.current;
    startRef.current = null;

    if (!movedRef.current) {
      resetPosition();
      onFlip();
      return;
    }

    if (Math.abs(dx) >= COMMIT_THRESHOLD) {
      commit(dx > 0 ? "right" : "left");
    } else {
      resetPosition();
    }
  }

  function commit(direction) {
    setTransition(true);
    dragRef.current = { dx: direction === "right" ? 600 : -600, dy: 0 };
    paint();
    setTimeout(() => {
      onDecide(direction === "right");
      dragRef.current = { dx: 0, dy: 0 };
      setTransition(false);
      paint();
    }, 220);
  }

  return (
    <div className="swipe-stage">
      <div ref={leftLabelRef} className="swipe-label left" style={{ opacity: 0 }}>
        ✗ Nicht sicher
      </div>
      <div ref={rightLabelRef} className="swipe-label right" style={{ opacity: 0 }}>
        ✓ Weiß ich
      </div>
      <div
        ref={cardRef}
        className="swipe-card-wrap"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <WordCard entry={entry} flipped={flipped} onFlip={() => {}} />
      </div>
      <div className="test-buttons">
        <button className="btn-wrong" onClick={() => commit("left")} aria-label="Weiß ich nicht">
          ✗ Weiß ich nicht
        </button>
        <button className="btn-right" onClick={() => commit("right")} aria-label="Weiß ich">
          ✓ Weiß ich
        </button>
      </div>
    </div>
  );
}
