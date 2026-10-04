import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { articleColor, germanLabel, imageCredit, imageSrc } from "../../lib/chapterWords.js";
import { speak, stopSpeaking } from "../../lib/tts.js";
import { notoUrl, RUN_MS, runKeyframes, wordEmoji } from "../../lib/wordEmoji.js";

// "Knight Bus" run, once per card: rushes in from the screen edge, squeezes
// through the gap between word and hint, bursts out and leaves through a flap
// in the card's right edge. Animated Noto emoji when online (or cached),
// otherwise the plain emoji glyph with the same run.
export function WordAnimation({ word, flipped }) {
  const emoji = wordEmoji(word);
  const layer = useRef(null);
  const figure = useRef(null);
  const anims = useRef(null); // { run: Animation[], side: Animation[] }
  const lottie = useRef(null);
  const [state, setState] = useState("loading"); // loading | lottie | glyph | done

  useEffect(() => {
    if (!emoji) return;
    let cancelled = false;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    Promise.all([
      fetch(notoUrl(emoji), { signal: ctrl.signal }).then((r) => (r.ok ? r.json() : Promise.reject())),
      import("lottie-web/build/player/lottie_light"),
    ])
      .then(([data, mod]) => {
        if (cancelled) return;
        lottie.current = mod.default.loadAnimation({ container: figure.current, renderer: "svg", loop: true, autoplay: true, animationData: data });
        setState("lottie");
      })
      .catch(() => !cancelled && setState("glyph"))
      .finally(() => clearTimeout(timer));
    return () => {
      cancelled = true;
      ctrl.abort();
      lottie.current?.destroy();
    };
  }, []);

  const ready = state === "lottie" || state === "glyph";
  const [photoTick, setPhotoTick] = useState(0);

  useLayoutEffect(() => {
    if (!ready) return;
    const el = layer.current;
    const card = el.parentElement;
    // The photo pushes word and hint down when it arrives; measure after it.
    const img = card.querySelector(".chapter-img");
    if (img && !img.complete) {
      const go = () => setPhotoTick((n) => n + 1);
      img.addEventListener("load", go, { once: true });
      img.addEventListener("error", go, { once: true });
      return () => {
        img.removeEventListener("load", go);
        img.removeEventListener("error", go);
      };
    }
    const main = card.querySelector(".chapter-card-main");
    const hint = card.querySelector(".tap-hint");
    const c = card.getBoundingClientRect();
    const m = main?.getBoundingClientRect();
    const h = hint?.getBoundingClientRect();
    const gapY = m && h ? (m.bottom + h.top) / 2 - c.top : c.height / 2;
    const left = Math.min(m?.left ?? c.left + c.width / 3, h?.left ?? Infinity) - c.left;
    const right = Math.max(m?.right ?? c.left + (c.width * 2) / 3, h?.right ?? -Infinity) - c.left;
    const k = runKeyframes({ startX: -c.left - 70, zoneStart: left - 10, zoneEnd: right + 10, doorX: c.width, gapY });

    const part = (sel) => el.querySelector(sel);
    const door = part(".word-anim-door");
    door.style.top = `${gapY - 30}px`;
    part(".word-anim-flap").style.backgroundColor = getComputedStyle(card).backgroundColor; // read, never set on the card
    const puff = part(".word-anim-puff");
    puff.style.left = `${k.puffX}px`;
    puff.style.top = `${gapY}px`;

    const opts = { duration: RUN_MS, fill: "forwards" };
    const run = [
      part(".word-anim-actor").animate(k.actor, opts),
      part(".word-anim-trail").animate(k.trail, opts),
      puff.animate(k.puff, opts),
      door.animate(k.door, opts),
      part(".word-anim-flap").animate(k.flap, opts),
    ];
    // No fill: word, hint and card end exactly where they were.
    const side = [
      main?.animate(k.main, RUN_MS),
      hint?.animate(k.hint, RUN_MS),
      card.animate(k.card, RUN_MS),
    ].filter(Boolean);
    anims.current = { run, side };
    run[0].finished
      .then(() => {
        lottie.current?.destroy(); // stop the loop once it is through the door
        lottie.current = null;
        setState("done");
      })
      .catch(() => {});
    return () => {
      [...run, ...side].forEach((a) => a.cancel());
      anims.current = null;
    };
  }, [ready, photoTick]);

  // Flipped mid-run: let the back side lay out normally and head for the door.
  useEffect(() => {
    if (!flipped || !anims.current) return;
    anims.current.side.forEach((a) => a.cancel());
    anims.current.run.forEach((a) => (a.currentTime = Math.max(a.currentTime, 0.8 * RUN_MS)));
  }, [flipped]);

  if (!emoji || state === "done") return null;
  return (
    <div className="word-anim" ref={layer} aria-hidden="true">
      <div className="word-anim-actor">
        <span className="word-anim-trail" />
        <div className="word-anim-figure" ref={figure}>
          {state === "glyph" && emoji}
        </div>
      </div>
      <div className="word-anim-puff">
        <span />
        <span />
        <span />
      </div>
      <div className="word-anim-door">
        <span className="word-anim-hole" />
        <span className="word-anim-flap" />
      </div>
    </div>
  );
}

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
        <WordAnimation key={word.key} word={word} flipped={flipped} />
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
