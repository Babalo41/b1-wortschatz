import React, { useEffect, useState } from "react";
import { articleColor, germanLabel, imageCredit, imageSrc } from "../../lib/chapterWords.js";
import { speak, stopSpeaking } from "../../lib/tts.js";

export function WordImage({ word, showCredit = false }) {
  const [failed, setFailed] = useState(false);
  const [credit, setCredit] = useState(null);
  const src = imageSrc(word);
  useEffect(() => setFailed(false), [src]);
  useEffect(() => {
    if (showCredit) imageCredit(word).then(setCredit);
  }, [word, showCredit]);
  if (!src || failed) return null;
  return (
    <>
      <img className="chapter-img" src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
      {credit && (
        <div className="chapter-img-credit">
          Bild: {credit.author}
          {credit.license ? ` (${credit.license})` : ""}, Wikimedia Commons
        </div>
      )}
    </>
  );
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
        <WordImage word={word} showCredit={flipped} />
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
