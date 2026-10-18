import React, { useEffect, useRef, useState } from "react";
import { articleColor, germanLabel, imageSrc } from "../../lib/chapterWords.js";
import { setHard } from "../../lib/chapterDb.js";
import { speak, stopSpeaking } from "../../lib/tts.js";
import { notoUrl, wordEmoji } from "../../lib/wordEmoji.js";

// Plays once over the card, then removes itself. Animated Noto emoji when
// online (or cached), otherwise the plain emoji glyph with the same motion.
export function WordAnimation({ word }) {
  const hit = wordEmoji(word);
  const figure = useRef(null);
  const [state, setState] = useState("loading"); // loading | lottie | glyph | done

  useEffect(() => {
    if (!hit) return;
    if (hit.still) return setState("glyph");
    let anim = null;
    let cancelled = false;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    Promise.all([
      fetch(notoUrl(hit.e), { signal: ctrl.signal }).then((r) => (r.ok ? r.json() : Promise.reject())),
      import("lottie-web/build/player/lottie_light"),
    ])
      .then(([data, mod]) => {
        if (cancelled) return;
        anim = mod.default.loadAnimation({ container: figure.current, renderer: "svg", loop: true, autoplay: true, animationData: data });
        setState("lottie");
      })
      .catch(() => !cancelled && setState("glyph"))
      .finally(() => clearTimeout(timer));
    return () => {
      cancelled = true;
      ctrl.abort();
      anim?.destroy();
    };
  }, []);

  if (!hit || state === "done") return null;
  const running = state === "lottie" || state === "glyph";
  return (
    <div className={`word-anim word-anim-${hit.m}`} aria-hidden="true">
      <div
        className={running ? "word-anim-actor run" : "word-anim-actor"}
        onAnimationEnd={(e) => e.target === e.currentTarget && setState("done")}
      >
        {hit.m === "drop" && <span className="word-anim-rope" />}
        <div className="word-anim-figure" ref={figure}>
          {state === "glyph" && hit.e}
        </div>
      </div>
    </div>
  );
}

export function WordImage({ word }) {
  const [failed, setFailed] = useState(false);
  const src = imageSrc(word);
  useEffect(() => setFailed(false), [src]);
  if (!src || failed) return null;
  return <img className="chapter-img" src={src} alt="" loading="lazy" onError={() => setFailed(true)} />;
}

// Last card per chapter, so Lernen reopens where she stopped.
const POS_KEY = "kapitel-learn-pos";

function loadPos(chapter) {
  try {
    return JSON.parse(localStorage.getItem(POS_KEY))?.[chapter] ?? 0;
  } catch {
    return 0;
  }
}

function savePos(chapter, index) {
  try {
    const all = JSON.parse(localStorage.getItem(POS_KEY)) || {};
    all[chapter] = index;
    localStorage.setItem(POS_KEY, JSON.stringify(all));
  } catch {
    // storage unavailable: the position just isn't remembered
  }
}

const HINT_KEY = "kapitel-swipe-hint-seen";

function hintSeen() {
  try {
    return localStorage.getItem(HINT_KEY) === "1";
  } catch {
    return false;
  }
}

function markHintSeen() {
  try {
    localStorage.setItem(HINT_KEY, "1");
  } catch {
    // shown again next time, harmless
  }
}

// A hand that demonstrates the three swipes twice, until she has swiped once.
function SwipeHint({ onDone }) {
  return (
    <div className="swipe-hint" aria-hidden="true" onAnimationEnd={(e) => e.target === e.currentTarget && onDone()}>
      <span className="swipe-hint-hand">👆</span>
      <span className="swipe-hint-label l">← Weiter</span>
      <span className="swipe-hint-label r">Zurück →</span>
      <span className="swipe-hint-label u">↑ ★ Schwer</span>
    </div>
  );
}

const COMMIT = 90; // px

// Drag the card: left = Weiter, right = Zurück, up = ★ schwer. Like
// SwipeCard, the drag moves the DOM through refs (no state per move) and uses
// non-passive touch listeners so iOS doesn't scroll instead. Only the card
// moves; its colours are never tinted.
function Swipeable({ can, onSwipe, children }) {
  const wrap = useRef(null);
  const labels = { left: useRef(null), right: useRef(null), up: useRef(null) };
  const drag = useRef(null);
  const latest = useRef();
  latest.current = { can, onSwipe };

  useEffect(() => {
    const el = wrap.current;
    function paint(dx, dy, animate) {
      const up = -dy > Math.abs(dx);
      el.style.transition = animate ? "transform 200ms ease" : "none";
      el.style.transform = up ? `translateY(${dy}px)` : `translateX(${dx}px) rotate(${dx / 14}deg)`;
      const pull = { left: up ? 0 : -dx, right: up ? 0 : dx, up: up ? -dy : 0 };
      for (const d in labels) labels[d].current.style.opacity = Math.max(0, Math.min(1, (pull[d] - 15) / COMMIT));
    }
    function start(x, y) {
      drag.current = { x, y, dx: 0, dy: 0 };
    }
    function move(x, y) {
      if (!drag.current) return;
      drag.current.dx = x - drag.current.x;
      drag.current.dy = y - drag.current.y;
      paint(drag.current.dx, drag.current.dy, false);
    }
    function end() {
      if (!drag.current) return;
      const { dx, dy } = drag.current;
      drag.current = null;
      const dir = -dy > Math.abs(dx) ? (-dy >= COMMIT ? "up" : null) : Math.abs(dx) >= COMMIT ? (dx < 0 ? "left" : "right") : null;
      if (!dir || !latest.current.can(dir)) return paint(0, 0, true);
      paint(dir === "left" ? -600 : dir === "right" ? 600 : 0, dir === "up" ? -900 : 0, true);
      setTimeout(() => {
        latest.current.onSwipe(dir);
        paint(0, 0, false);
      }, 200);
    }
    const onTouchStart = (e) => e.touches.length === 1 && start(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchMove = (e) => {
      if (!drag.current || e.touches.length !== 1) return;
      e.preventDefault();
      move(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onMouseMove = (e) => move(e.clientX, e.clientY);
    const onMouseDown = (e) => {
      start(e.clientX, e.clientY);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };
    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      end();
    }
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", end);
    el.addEventListener("touchcancel", end);
    el.addEventListener("mousedown", onMouseDown);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", end);
      el.removeEventListener("touchcancel", end);
      el.removeEventListener("mousedown", onMouseDown);
      onMouseUp();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="swipe-stage">
      <div ref={labels.left} className="learn-swipe-label left" style={{ opacity: 0 }}>
        Weiter
      </div>
      <div ref={labels.right} className="learn-swipe-label right" style={{ opacity: 0 }}>
        Zurück
      </div>
      <div ref={labels.up} className="learn-swipe-label up" style={{ opacity: 0 }}>
        ★ Schwer
      </div>
      <div ref={wrap} className="swipe-card-wrap">
        {children}
      </div>
    </div>
  );
}

// Study mode: everything is visible at once (German, picture, English,
// plural, explanation). Testing happens in the Quiz tab; here she only marks
// words ★ hard, which puts them into the next test.
export default function ChapterLearn({ chapter, words, progress, onProgressChanged }) {
  const [onlyHard, setOnlyHard] = useState(false);
  const [index, setIndex] = useState(() => loadPos(chapter));
  const [showHint, setShowHint] = useState(() => !hintSeen());

  const hardWords = words.filter((w) => progress.get(w.key)?.hard);
  const list = onlyHard ? hardWords : words;
  const i = Math.max(0, Math.min(index, list.length - 1));

  useEffect(() => () => stopSpeaking(), [i]);
  useEffect(() => {
    if (!onlyHard) savePos(chapter, i);
  }, [chapter, i, onlyHard]);

  if (words.length === 0) return <div className="empty-state">Keine Wörter in diesem Kapitel.</div>;

  function toggleOnlyHard() {
    setIndex(onlyHard ? loadPos(chapter) : 0);
    setOnlyHard(!onlyHard);
  }

  const filter = (
    <div className="learn-filter">
      <button className={onlyHard ? "chip active" : "chip"} onClick={toggleOnlyHard} disabled={!onlyHard && hardWords.length === 0}>
        ★ nur schwere ({hardWords.length})
      </button>
    </div>
  );

  if (list.length === 0) {
    return (
      <div className="learn-mode">
        {filter}
        <div className="empty-state">Keine schweren Wörter mehr in diesem Kapitel 🎉</div>
      </div>
    );
  }

  const word = list[i];
  const color = articleColor(word);
  const hard = !!progress.get(word.key)?.hard;

  async function toggleWordHard() {
    await setHard(word.key, !hard);
    onProgressChanged?.();
  }

  const canSwipe = (dir) => (dir === "right" ? i > 0 : dir === "left" ? i < list.length - 1 : true);

  async function swiped(dir) {
    if (showHint) {
      setShowHint(false);
      markHintSeen();
    }
    if (dir === "right") return setIndex(i - 1);
    if (dir === "up" && !hard) {
      await setHard(word.key, true);
      onProgressChanged?.();
    }
    // In the ★-only list the starred word is still there, so step on.
    if (i < list.length - 1) setIndex(i + 1);
  }

  return (
    <div className="learn-mode">
      {filter}
      <div className="progress-line">
        {i + 1} / {list.length}
      </div>
      <Swipeable can={canSwipe} onSwipe={swiped}>
        <div key={word.key} className="chapter-card swipe-in" style={{ background: color.bg, color: color.fg }}>
          <WordImage word={word} />
          <WordAnimation word={word} />
          <div className="chapter-card-main">{germanLabel(word)}</div>
          <button className="speak-btn chapter-speak" onClick={() => speak(word.german_word)} aria-label="Aussprache anhören">
            🔊
          </button>
          <button className={hard ? "hard-btn on" : "hard-btn"} onClick={toggleWordHard} aria-pressed={hard}>
            {hard ? "★ Schwer" : "☆ Schwer?"}
          </button>
          <div className="chapter-card-back">
            <div className="chapter-card-answer">{word.english_translation}</div>
            {word.plural && <div className="chapter-card-sub">Plural: {word.plural}</div>}
            {word.explanation && <div className="chapter-card-expl">{word.explanation}</div>}
          </div>
        </div>
        {showHint && <SwipeHint onDone={() => setShowHint(false)} />}
      </Swipeable>
      <div className="swipe-legend">← Weiter · Zurück → · ↑ ★ schwer</div>
      <div className="learn-controls">
        <button onClick={() => setIndex(i - 1)} disabled={i === 0}>
          ← Zurück
        </button>
        <button onClick={() => setIndex(i + 1)} disabled={i === list.length - 1}>
          Weiter →
        </button>
      </div>
    </div>
  );
}
