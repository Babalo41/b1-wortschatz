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

// Study mode: everything is visible at once (German, picture, English,
// plural, explanation). Testing happens in the Quiz tab; here she only marks
// words ★ hard, which puts them into the next test.
export default function ChapterLearn({ chapter, words, progress, onProgressChanged }) {
  const [onlyHard, setOnlyHard] = useState(false);
  const [index, setIndex] = useState(() => loadPos(chapter));

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

  return (
    <div className="learn-mode">
      {filter}
      <div className="progress-line">
        {i + 1} / {list.length}
      </div>
      <div className="chapter-card" style={{ background: color.bg, color: color.fg }}>
        <WordImage word={word} />
        <WordAnimation key={word.key} word={word} />
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
