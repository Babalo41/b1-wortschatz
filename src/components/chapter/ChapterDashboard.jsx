import React, { useState } from "react";
import { ARTICLE_COLORS, CHAPTERS, CHAPTER_WORDS, articleColor, germanLabel, wordsOfChapter } from "../../lib/chapterWords.js";
import { resetChapterProgress, scoreKey } from "../../lib/chapterDb.js";
import { DIRECTIONS } from "../../lib/quiz.js";
import { bestBox, PRACTISED_BOX, progressCounts, SECURE_BOX } from "../../lib/chapterReview.js";

const DIRECTION_LABELS = { "de-en": "DE → EN", "en-de": "EN → DE" };

function pct(n, total) {
  return total ? Math.round((n / total) * 100) : 0;
}

// Light fill = geübt (last answer right), solid fill = sicher (box >= 4).
export function ProgressBar({ practised, secure, total, thin = false }) {
  return (
    <div className={thin ? "kap-bar thin" : "kap-bar"}>
      <div className="kap-bar-fill practised" style={{ width: `${pct(practised, total)}%` }} />
      <div className="kap-bar-fill" style={{ width: `${pct(secure, total)}%` }} />
    </div>
  );
}

const practisedIn = (rec, d) => !!rec?.[d]?.timesSeen && rec[d].box >= PRACTISED_BOX;

export default function ChapterDashboard({ scores, progress, onReset }) {
  const [confirming, setConfirming] = useState(false);
  const [showAllHard, setShowAllHard] = useState(false);

  const total = CHAPTER_WORDS.length;
  const { practised, secure } = progressCounts(CHAPTER_WORDS, progress);
  let notStarted = 0;
  let lastDate = null;
  const hard = [];
  const rightBy = { "de-en": 0, "en-de": 0 };
  for (const w of CHAPTER_WORDS) {
    const p = progress.get(w.key);
    if (bestBox(p) === 0) notStarted++;
    if (p?.hard) hard.push(w);
    for (const d of DIRECTIONS) {
      if (practisedIn(p, d)) rightBy[d]++;
      const seen = p?.[d]?.lastSeen;
      if (seen && (!lastDate || seen > lastDate)) lastDate = seen;
    }
  }

  let bestSum = 0;
  let quizTotal = 0;
  for (const s of scores.values()) {
    bestSum += s.best;
    quizTotal += s.total;
  }

  // Articles are only asked in EN → DE.
  const articles = ["der", "die", "das"].map((a) => {
    const list = CHAPTER_WORDS.filter((w) => (w.article || "").split("/")[0].trim() === a);
    return { a, total: list.length, done: list.filter((w) => practisedIn(progress.get(w.key), "en-de")).length };
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
        <Stat label="Noch nicht geübt" value={notStarted} />
        <Stat label={`Geübt · ${pct(practised, total)}%`} value={practised} />
        <Stat label={`✅ Sicher · ${pct(secure, total)}%`} value={secure} />
        <Stat label="★ Schwer" value={hard.length} />
        <Stat label="Zuletzt geübt" value={lastDate ? formatDate(lastDate) : "–"} />
        <Stat label="Test-Bestwerte" value={quizTotal ? `${pct(bestSum, quizTotal)}%` : "–"} />
      </div>
      <p className="estimate-note">
        Geübt = zuletzt richtig. Sicher = an {SECURE_BOX - 1} verschiedenen Tagen hintereinander richtig.
      </p>

      <h3>Richtungen (geübt)</h3>
      <div className="box-bars">
        {DIRECTIONS.map((d) => (
          <BarRow key={d} label={DIRECTION_LABELS[d]} done={rightBy[d]} total={total} />
        ))}
      </div>

      <h3>Nach Artikel (EN → DE)</h3>
      <div className="box-bars">
        {articles.map(({ a, total: t, done }) => (
          <BarRow key={a} label={a} done={done} total={t} color={ARTICLE_COLORS[a]} />
        ))}
      </div>

      <h3>Pro Kapitel</h3>
      <div className="kap-dash-chapters">
        {CHAPTERS.map((c) => {
          const list = wordsOfChapter(c);
          const counts = progressCounts(list, progress);
          return (
            <div key={c} className="kap-dash-chapter">
              <div className="kap-dash-chapter-head">
                <span>Kap. {c}</span>
                <span>
                  {counts.practised} geübt · {counts.secure} sicher / {list.length}
                </span>
              </div>
              <ProgressBar {...counts} total={list.length} thin />
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

      <h3>★ Schwere Wörter ({hard.length})</h3>
      {hard.length === 0 ? (
        <p className="estimate-note">Keine schweren Wörter – weiter so! 🎉</p>
      ) : (
        <>
          <div className="kap-dash-weak">
            {(showAllHard ? hard : hard.slice(0, 20)).map((w) => {
              const color = articleColor(w);
              return (
                <span key={w.key} className="kap-dash-weak-word" style={{ background: color.bg, color: color.fg }}>
                  {germanLabel(w)}
                </span>
              );
            })}
          </div>
          {hard.length > 20 && (
            <button className="chip" onClick={() => setShowAllHard((s) => !s)}>
              {showAllHard ? "Weniger zeigen" : `Alle ${hard.length} zeigen`}
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
