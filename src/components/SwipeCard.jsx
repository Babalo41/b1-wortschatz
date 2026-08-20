import React, { useEffect, useRef } from "react";
import WordCard from "./WordCard.jsx";

const COMMIT_THRESHOLD = 110; // px
const TAP_THRESHOLD = 8; // px of movement below which a release counts as a tap

// Drag tracking deliberately avoids putting per-move deltas into React
// state -- on a card stack, that would re-render the whole component
// (and its WordCard subtree, with its conjugation-table computation) on
// every move event, which is the classic source of janky/battery-draining
// drag interactions. Instead we mutate the DOM directly (transform, tint,
// label opacity) via refs, batched through requestAnimationFrame so at
// most one paint-affecting update happens per frame.
//
// Uses native touch listeners (registered imperatively with
// { passive: false }) rather than React's Pointer Event props for the
// touch path: WebKit's Pointer Events implementation on iOS Safari has
// had recurring inconsistencies with delivering continuous pointermove
// during a drag and honoring touch-action/preventDefault from a
// React-attached (possibly passive) listener. Raw touchstart/touchmove/
// touchend with an explicit non-passive listener and preventDefault() is
// the long-established reliable pattern for custom drag gestures on iOS.
// Mouse events cover the desktop/testing path per the original pointer-
// events-not-touch-only requirement.
export default function SwipeCard({ entry, flipped, onFlip, onDecide }) {
  const cardRef = useRef(null);
  const leftLabelRef = useRef(null);
  const rightLabelRef = useRef(null);
  const dragRef = useRef({ dx: 0, dy: 0 });
  const startRef = useRef(null);
  const movedRef = useRef(false);
  const rafRef = useRef(null);
  const draggingRef = useRef(false);

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

  function setTransition(on) {
    if (cardRef.current) cardRef.current.style.transition = on ? "transform 220ms ease" : "none";
  }

  function resetPosition() {
    setTransition(true);
    dragRef.current = { dx: 0, dy: 0 };
    paint();
  }

  function start(x, y) {
    startRef.current = { x, y };
    movedRef.current = false;
    dragRef.current = { dx: 0, dy: 0 };
    setTransition(false);
  }

  function move(x, y) {
    if (!startRef.current) return;
    const dx = x - startRef.current.x;
    const dy = y - startRef.current.y;
    if (Math.abs(dx) > TAP_THRESHOLD || Math.abs(dy) > TAP_THRESHOLD) movedRef.current = true;
    dragRef.current = { dx, dy };
    schedulePaint();
  }

  function end() {
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

  // Touch path: native listeners, { passive: false } so preventDefault()
  // actually stops iOS from treating the gesture as a page scroll/bounce.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    function onTouchStart(e) {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      start(t.clientX, t.clientY);
    }
    function onTouchMove(e) {
      if (!startRef.current || e.touches.length !== 1) return;
      e.preventDefault();
      const t = e.touches[0];
      move(t.clientX, t.clientY);
    }
    function onTouchEnd() {
      end();
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry.id]);

  // Mouse path (desktop/testing): plain React handlers are fine here since
  // there's no native scroll/bounce gesture to fight on desktop.
  function onMouseDown(e) {
    draggingRef.current = true;
    start(e.clientX, e.clientY);
    window.addEventListener("mousemove", onWindowMouseMove);
    window.addEventListener("mouseup", onWindowMouseUp);
  }
  function onWindowMouseMove(e) {
    if (!draggingRef.current) return;
    move(e.clientX, e.clientY);
  }
  function onWindowMouseUp() {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    end();
    window.removeEventListener("mousemove", onWindowMouseMove);
    window.removeEventListener("mouseup", onWindowMouseUp);
  }

  useEffect(
    () => () => {
      window.removeEventListener("mousemove", onWindowMouseMove);
      window.removeEventListener("mouseup", onWindowMouseUp);
    },
    []
  );

  return (
    <div className="swipe-stage">
      <div ref={leftLabelRef} className="swipe-label left" style={{ opacity: 0 }}>
        ✗ Nicht sicher
      </div>
      <div ref={rightLabelRef} className="swipe-label right" style={{ opacity: 0 }}>
        ✓ Weiß ich
      </div>
      <div ref={cardRef} className="swipe-card-wrap" onMouseDown={onMouseDown}>
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
