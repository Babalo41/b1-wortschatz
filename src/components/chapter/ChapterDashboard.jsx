import React, { useState } from "react";
import { ARTICLE_COLORS, CHAPTERS, CHAPTER_WORDS, articleColor, germanLabel, wordsOfChapter } from "../../lib/chapterWords.js";
import { resetChapterProgress, scoreKey } from "../../lib/chapterDb.js";
import { DIRECTIONS, isLearned } from "../../lib/quiz.js";

const DIRECTION_LABELS = { "de-en": "DE → EN", "en-de": "EN → DE" };

function pct(n, total) {
  return total ? Math.round((n / total) * 100) : 0;
}

export default function ChapterDashboard({ scores, progress, onReset }) {
  const [confirming, setConfirming] = useState(false);
  const [showAllWeak, setShowAllWeak] = useState(false);

  const total = CHAPTER_WORDS.length;
  let learned = 0;
  let partly = 0;
  let notStarted = 0;
  const weak = [];
  const rightBy = { "de-en": 0, "en-de": 0 };
  for (const w of CHAPTER_WORDS) {
    const p = progress.get(w.key);
    if (!p) notStarted++;
    else if (isLearned(p)) learned++;
    else partly++;
    for (const d of DIRECTIONS) if (p?.[d] === true) rightBy[d]++;
    if (p && DIRECTIONS.some((d) => p[d] === false)) weak.push(w);
  }

  let bestSum = 0;
  let quizTotal = 0;
  let lastDate = null;
  for (const s of scores.values()) {
    bestSum += s.best;
    quizTotal += s.total;
    if (!lastDate || s.date > lastDate) lastDate = s.date;
  }

  const articles = ["der", "die", "das"].map((a) => {
    const list = CHAPTER_WORDS.filter((w) => (w.article || "").split("/")[0].trim() === a);
    return { a, total: list.length, learned: list.filter((w) => isLearned(progress.get(w.key))).length };
  });

  async function handleReset() {
    await resetChapterProgress();
    setConfirming(false);
    onReset?.();
  }

  return (
    <div className="dashboard">
      <h2>Fortschritt</h2>
      <div className="stat-grid">
        <Stat label="Gesamt" value={total} />
        <Stat label={`✅ Gelernt · ${pct(learned, total)}%`} value={learned} />
        <Stat label="Halb gelernt" value={partly} />
        <Stat label="Noch nicht geübt" value={notStarted} />
        <Stat label="Quiz-Bestwerte" value={quizTotal ? `${pct(bestSum, quizTotal)}%` : "–"} />
        <Stat label="Zuletzt geübt" value={lastDate ? formatDate(lastDate) : "–"} />
      </div>

      <h3>Richtungen</h3>
      <div className="box-bars">
        {DIRECTIONS.map((d) => (
          <BarRow key={d} label={DIRECTION_LABELS[d]} done={rightBy[d]} total={total} />
        ))}
      </div>

      <h3>Nach Artikel</h3>
      <div className="box-bars">
        {articles.map(({ a, total: t, learned: l }) => (
          <BarRow key={a} label={a} done={l} total={t} color={ARTICLE_COLORS[a]} />
        ))}
      </div>

      <h3>Pro Kapitel</h3>
      <div className="kap-dash-chapters">
        {CHAPTERS.map((c) => {
          const list = wordsOfChapter(c);
          const l = list.filter((w) => isLearned(progress.get(w.key))).length;
          return (
            <div key={c} className="kap-dash-chapter">
              <div className="kap-dash-chapter-head">
                <span>Kap. {c}</span>
                <span>
                  {l} / {list.length} · {pct(l, list.length)}%
                </span>
              </div>
              <div className="kap-bar thin">
                <div className="kap-bar-fill" style={{ width: `${pct(l, list.length)}%` }} />
              </div>
              <div className="kap-dash-scores">
                {DIRECTIONS.map((d) => {
                  const s = scores.get(scoreKey(c, d));
                  return (
                    <span key={d}>
                      {DIRECTION_LABELS[d]}: {s ? `${s.best}/${s.total} (zuletzt ${s.last})` : "–"}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <h3>Zum Wiederholen ({weak.length})</h3>
      {weak.length === 0 ? (
        <p className="estimate-note">Keine Fehler bisher – weiter so! 🎉</p>
      ) : (
        <>
          <div className="kap-dash-weak">
            {(showAllWeak ? weak : weak.slice(0, 20)).map((w) => {
              const color = articleColor(w);
              return (
                <span key={w.key} className="kap-dash-weak-word" style={{ background: color.bg, color: color.fg }}>
                  {germanLabel(w)}
                </span>
              );
            })}
          </div>
          {weak.length > 20 && (
            <button className="chip" onClick={() => setShowAllWeak((s) => !s)}>
              {showAllWeak ? "Weniger zeigen" : `Alle ${weak.length} zeigen`}
            </button>
          )}
        </>
      )}

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

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

function BarRow({ label, done, total, color }) {
  return (
    <div className="box-bar-row kap-dash-row">
      <span>{label}</span>
      <div className="box-bar-track">
        <div className="box-bar-fill" style={{ width: `${pct(done, total)}%`, ...(color && { background: `linear-gradient(90deg, ${color.fg}, ${color.bg})`, boxShadow: "none" }) }} />
      </div>
      <span>
        {done}/{total}
      </span>
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
