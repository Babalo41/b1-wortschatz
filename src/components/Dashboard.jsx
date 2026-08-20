import React, { useEffect, useState } from "react";
import { getStats, getStreak, estimateDaysRemaining, resetProgress } from "../lib/db.js";
import { WORDS } from "../lib/words.js";

export default function Dashboard({ refreshKey, onReset }) {
  const [stats, setStats] = useState(null);
  const [streak, setStreak] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [cardsPerDay, setCardsPerDay] = useState(30);

  useEffect(() => {
    const ids = WORDS.map((w) => w.id);
    getStats(ids).then(setStats);
    getStreak().then(setStreak);
  }, [refreshKey]);

  if (!stats) return <div className="empty-state">Lade Statistik…</div>;

  const days = estimateDaysRemaining(stats, cardsPerDay);

  async function handleReset() {
    await resetProgress();
    setConfirming(false);
    onReset?.();
  }

  return (
    <div className="dashboard">
      <h2>Fortschritt</h2>
      <div className="stat-grid">
        <Stat label="Gesamt" value={stats.totalCards} />
        <Stat label="Gelernt (Box 5)" value={stats.learned} />
        <Stat label="Heute fällig" value={stats.dueToday} />
        <Stat label="Noch nicht begonnen" value={stats.notStarted} />
        <Stat label="Genauigkeit" value={stats.accuracy != null ? `${stats.accuracy}%` : "–"} />
        <Stat label="🔥 Streak" value={`${streak} Tag${streak === 1 ? "" : "e"}`} />
      </div>

      <h3>Leitner-Boxen</h3>
      <div className="box-bars">
        {[1, 2, 3, 4, 5].map((b) => (
          <div key={b} className="box-bar-row">
            <span>Box {b}</span>
            <div className="box-bar-track">
              <div
                className="box-bar-fill"
                style={{ width: `${stats.totalCards ? (stats.byBox[b] / stats.totalCards) * 100 : 0}%` }}
              />
            </div>
            <span>{stats.byBox[b]}</span>
          </div>
        ))}
      </div>

      <h3>Geschätzte Tage bis alles gelernt ist</h3>
      <div className="pace-row">
        <label>
          Karten pro Tag:{" "}
          <input
            type="number"
            min="1"
            value={cardsPerDay}
            onChange={(e) => setCardsPerDay(Number(e.target.value) || 1)}
          />
        </label>
        <div className="days-estimate">
          {days === 0 ? "Alle Wörter gelernt! 🎉" : `~${days} Tage bei ${cardsPerDay} Karten/Tag`}
        </div>
      </div>
      <p className="estimate-note">
        Grobe Schätzung: geht davon aus, dass eine Karte im Schnitt ~3,5 richtige Wiederholungen
        braucht, um von Box 1 auf Box 5 zu steigen (Leitner-System).
      </p>

      <h3>Fortschritt zurücksetzen</h3>
      {!confirming ? (
        <button className="danger-btn" onClick={() => setConfirming(true)}>
          Fortschritt zurücksetzen
        </button>
      ) : (
        <div className="confirm-row">
          <span>Wirklich ALLEN Fortschritt löschen?</span>
          <button className="danger-btn" onClick={handleReset}>Ja, löschen</button>
          <button onClick={() => setConfirming(false)}>Abbrechen</button>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat-tile">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
