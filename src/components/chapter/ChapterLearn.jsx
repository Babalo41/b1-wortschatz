import React, { useEffect, useRef, useState } from "react";
import { articleColor, germanLabel, imageSrc } from "../../lib/chapterWords.js";
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

export default function ChapterLearn({ words, direction }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => () => stopSpeaking(), [index]);

  if (words.length === 0) return <div className="empty-state">Keine Wörter in diesem Kapitel.</div>;

  const word = words[Math.min(index, words.length - 1)];
  const color = articleColor(word);
  const german = germanLabel(word);
  const front = direction === "de-en" ? german : word.english_translation;
  const back = direction === "de-en" ? word.english_translation : german;

  function go(delta) {
    setFlipped(false);
    setIndex((i) => Math.max(0, Math.min(words.length - 1, i + delta)));
  }

  return (
    <div className="learn-mode">
      <div className="progress-line">
        {index + 1} / {words.length}
      </div>
      <div className="chapter-card" style={{ background: color.bg, color: color.fg }} onClick={() => setFlipped((f) => !f)}>
        <WordImage word={word} />
        <WordAnimation key={word.key} word={word} />
        <div className="chapter-card-main">{front}</div>
        <button
          className="speak-btn chapter-speak"
          onClick={(e) => {
            e.stopPropagation();
            speak(word.german_word);
          }}
          aria-label="Aussprache anhören"
        >
          🔊
        </button>
        {flipped ? (
          <div className="chapter-card-back">
            <div className="chapter-card-answer">{back}</div>
            {word.plural && <div className="chapter-card-sub">Plural: {word.plural}</div>}
            {word.explanation && <div className="chapter-card-expl">{word.explanation}</div>}
          </div>
        ) : (
          <div className="tap-hint">Tippen zum Umdrehen</div>
        )}
      </div>
      <div className="learn-controls">
        <button onClick={() => go(-1)} disabled={index === 0}>
          ← Zurück
        </button>
        <button onClick={() => go(1)} disabled={index === words.length - 1}>
          Weiter →
        </button>
      </div>
    </div>
  );
}
