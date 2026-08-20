import React, { useEffect, useRef, useState } from "react";
import WordCard from "./WordCard.jsx";

export default function LearnMode({ words }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // `words` gets a new array identity whenever App recomputes filteredWords
  // (e.g. after the initial IndexedDB progress load resolves), even when
  // the actual filtered set is unchanged. Resetting on every reference
  // change would silently un-flip the card out from under the user right
  // after they tap it. Reset only when the set of ids actually changes.
  const prevSignature = useRef(null);
  useEffect(() => {
    const signature = words.length + "|" + (words[0]?.id ?? "") + "|" + (words[words.length - 1]?.id ?? "");
    if (signature !== prevSignature.current) {
      prevSignature.current = signature;
      setIndex(0);
      setFlipped(false);
    }
  }, [words]);

  if (words.length === 0) {
    return <div className="empty-state">Keine Wörter für diese Filter.</div>;
  }

  const entry = words[Math.min(index, words.length - 1)];

  function go(delta) {
    setFlipped(false);
    setIndex((i) => Math.max(0, Math.min(words.length - 1, i + delta)));
  }

  return (
    <div className="learn-mode">
      <div className="progress-line">
        {index + 1} / {words.length} &middot; Seite {entry.page}
      </div>
      <WordCard entry={entry} flipped={flipped} onFlip={() => setFlipped((f) => !f)} />
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
