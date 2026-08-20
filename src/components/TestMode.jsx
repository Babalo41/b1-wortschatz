import React, { useMemo, useState } from "react";
import SwipeCard from "./SwipeCard.jsx";
import { recordAnswer, recordSessionCompleted, getStreak } from "../lib/db.js";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TestMode({ dueWords, allFilteredWords, onProgressChanged }) {
  const [session, setSession] = useState(null); // { queue: [entry,...], index, results: [] }
  const [flipped, setFlipped] = useState(false);
  const [summary, setSummary] = useState(null);

  const pools = useMemo(
    () => ({
      due: dueWords,
      all: allFilteredWords,
    }),
    [dueWords, allFilteredWords]
  );

  function startSession(count, useAllPool) {
    const pool = useAllPool ? pools.all : pools.due;
    const n = count === "all" ? pool.length : Math.min(count, pool.length);
    const queue = shuffle(pool).slice(0, n);
    setSession({ queue, index: 0, results: [] });
    setFlipped(false);
    setSummary(null);
  }

  // outcome: "correct" | "wrong" | "hard" (see leitner.js for what each does)
  async function decide(outcome) {
    const entry = session.queue[session.index];
    const updated = await recordAnswer(entry.id, outcome);
    onProgressChanged?.();
    const results = [...session.results, { entry, outcome, box: updated.box }];
    const nextIndex = session.index + 1;
    setFlipped(false);

    if (nextIndex >= session.queue.length) {
      const streak = await recordSessionCompleted();
      const correct = results.filter((r) => r.outcome === "correct").length;
      const hard = results.filter((r) => r.outcome === "hard").length;
      setSummary({
        total: results.length,
        correct,
        hard,
        streak,
        toReview: results.filter((r) => r.outcome !== "correct").map((r) => r.entry),
      });
      setSession(null);
    } else {
      setSession({ ...session, index: nextIndex, results });
    }
  }

  if (summary) {
    return (
      <div className="session-summary">
        <h2>Sitzung beendet</h2>
        <p>
          {summary.correct} / {summary.total} richtig (
          {Math.round((summary.correct / summary.total) * 100)}%)
        </p>
        <p>🔥 Streak: {summary.streak} Tag{summary.streak === 1 ? "" : "e"}</p>
        {summary.hard > 0 && (
          <p>⚠ {summary.hard} als "zu schwer" markiert (Filter: Fortschritt-Wörter)</p>
        )}
        {summary.toReview.length > 0 && (
          <div className="review-list">
            <h3>Zum Wiederholen:</h3>
            <ul>
              {summary.toReview.map((e) => (
                <li key={e.id}>{e.head}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={() => setSummary(null)}>Neue Sitzung</button>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="session-setup">
        <h2>Test-Sitzung starten</h2>
        <p>{pools.due.length} Karten heute fällig (Leitner-System) &middot; {pools.all.length} insgesamt in dieser Auswahl.</p>
        <div className="setup-group">
          <div className="setup-label">Fällige Karten:</div>
          <div className="setup-buttons">
            <button onClick={() => startSession(20, false)} disabled={pools.due.length === 0}>20</button>
            <button onClick={() => startSession(50, false)} disabled={pools.due.length === 0}>50</button>
            <button onClick={() => startSession("all", false)} disabled={pools.due.length === 0}>Alle fälligen</button>
          </div>
        </div>
        <div className="setup-group">
          <div className="setup-label">Ganze Auswahl (auch nicht fällig):</div>
          <div className="setup-buttons">
            <button onClick={() => startSession(20, true)} disabled={pools.all.length === 0}>20</button>
            <button onClick={() => startSession(50, true)} disabled={pools.all.length === 0}>50</button>
            <button onClick={() => startSession("all", true)} disabled={pools.all.length === 0}>Alle</button>
          </div>
        </div>
      </div>
    );
  }

  const entry = session.queue[session.index];
  return (
    <div className="test-mode">
      <div className="progress-line">
        Karte {session.index + 1} / {session.queue.length}
      </div>
      <SwipeCard entry={entry} flipped={flipped} onFlip={() => setFlipped((f) => !f)} onDecide={decide} />
    </div>
  );
}
