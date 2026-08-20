import React, { useRef, useState } from "react";
import WordCard from "./WordCard.jsx";

const COMMIT_THRESHOLD = 110; // px
const TAP_THRESHOLD = 8; // px of movement below which a release counts as a tap

export default function SwipeCard({ entry, flipped, onFlip, onDecide }) {
  const [drag, setDrag] = useState({ dx: 0, dy: 0, active: false });
  const [flyOff, setFlyOff] = useState(null); // 'right' | 'left' | null
  const startRef = useRef(null);
  const movedRef = useRef(false);

  function onPointerDown(e) {
    startRef.current = { x: e.clientX, y: e.clientY };
    movedRef.current = false;
    setDrag({ dx: 0, dy: 0, active: true });
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e) {
    if (!startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    if (Math.abs(dx) > TAP_THRESHOLD || Math.abs(dy) > TAP_THRESHOLD) movedRef.current = true;
    setDrag({ dx, dy, active: true });
  }

  function onPointerUp() {
    if (!startRef.current) return;
    const { dx } = drag;
    startRef.current = null;

    if (!movedRef.current) {
      // treat as a tap: flip the card
      setDrag({ dx: 0, dy: 0, active: false });
      onFlip();
      return;
    }

    if (Math.abs(dx) >= COMMIT_THRESHOLD) {
      const direction = dx > 0 ? "right" : "left";
      setFlyOff(direction);
      setTimeout(() => {
        onDecide(direction === "right");
        setFlyOff(null);
        setDrag({ dx: 0, dy: 0, active: false });
      }, 220);
    } else {
      setDrag({ dx: 0, dy: 0, active: false }); // snap back
    }
  }

  function decideByButton(known) {
    setFlyOff(known ? "right" : "left");
    setTimeout(() => {
      onDecide(known);
      setFlyOff(null);
      setDrag({ dx: 0, dy: 0, active: false });
    }, 220);
  }

  const dx = flyOff ? (flyOff === "right" ? 600 : -600) : drag.dx;
  const rotation = Math.max(-18, Math.min(18, dx / 12));
  const tint =
    Math.abs(dx) < 10
      ? "none"
      : dx > 0
      ? `rgba(21,128,61, ${Math.min(0.35, dx / 400)})`
      : `rgba(190,18,60, ${Math.min(0.35, -dx / 400)})`;

  const style = {
    transform: `translateX(${dx}px) translateY(${flyOff ? 0 : drag.dy * 0.2}px) rotate(${rotation}deg)`,
    transition: drag.active ? "none" : "transform 220ms ease",
    boxShadow: tint !== "none" ? `inset 0 0 0 999px ${tint}` : undefined,
  };

  return (
    <div className="swipe-stage">
      <div className="swipe-label left" style={{ opacity: dx < -20 ? Math.min(1, -dx / COMMIT_THRESHOLD) : 0 }}>
        ✗ Nicht sicher
      </div>
      <div className="swipe-label right" style={{ opacity: dx > 20 ? Math.min(1, dx / COMMIT_THRESHOLD) : 0 }}>
        ✓ Weiß ich
      </div>
      <div
        className="swipe-card-wrap"
        style={style}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <WordCard entry={entry} flipped={flipped} onFlip={() => {}} />
      </div>
      <div className="test-buttons">
        <button className="btn-wrong" onClick={() => decideByButton(false)} aria-label="Weiß ich nicht">
          ✗ Weiß ich nicht
        </button>
        <button className="btn-right" onClick={() => decideByButton(true)} aria-label="Weiß ich">
          ✓ Weiß ich
        </button>
      </div>
    </div>
  );
}
