import React, { useEffect, useMemo, useState } from "react";
import { CHAPTERS, CHAPTER_WORDS, wordsOfChapter } from "../../lib/chapterWords.js";
import { getAllScores, getAllWordProgress, scoreKey } from "../../lib/chapterDb.js";
import { progressCounts } from "../../lib/chapterReview.js";
import ChapterLearn from "./ChapterLearn.jsx";
import ChapterQuiz from "./ChapterQuiz.jsx";
import ChapterDashboard, { ProgressBar } from "./ChapterDashboard.jsx";
import ImageCredits from "./ImageCredits.jsx";
import RefreshButton from "../RefreshButton.jsx";

const TABS = [
  { key: "learn", label: "Lernen", icon: "📖" },
  { key: "quiz", label: "Test", icon: "❓" },
  { key: "dashboard", label: "Fortschritt", icon: "📊" },
];

export default function ChapterApp({ onSwitchProfile }) {
  const [tab, setTab] = useState("learn");
  const [chapter, setChapter] = useState(CHAPTERS[0] ?? null);
  const [direction, setDirection] = useState("de-en");
  const [scores, setScores] = useState(new Map());
  const [progress, setProgress] = useState(new Map());

  async function reload() {
    const [s, p] = await Promise.all([getAllScores(), getAllWordProgress()]);
    setScores(s);
    setProgress(p);
  }

  useEffect(() => {
    reload();
  }, []);

  const words = useMemo(() => (chapter == null ? [] : wordsOfChapter(chapter)), [chapter]);
  const total = progressCounts(CHAPTER_WORDS, progress);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-title">Kapitel-Wörter 🐼</div>
        <div className="header-actions">
          <RefreshButton />
          <button className="filter-toggle" onClick={onSwitchProfile} aria-label="Profil wechseln">
            ⇄
          </button>
        </div>
      </header>

      <div className="kap-top" style={{ display: tab === "dashboard" ? "none" : undefined }}>
        <div className="kap-overall">
          <span>
            {total.practised} geübt · {total.secure} sicher / {CHAPTER_WORDS.length}
          </span>
          <span>{CHAPTER_WORDS.length ? Math.round((total.practised / CHAPTER_WORDS.length) * 100) : 0}%</span>
        </div>
        <ProgressBar {...total} total={CHAPTER_WORDS.length} />

        <div className="kap-chapters">
          {CHAPTERS.map((c) => {
            const list = wordsOfChapter(c);
            const best = scores.get(scoreKey(c, direction));
            return (
              <button key={c} className={c === chapter ? "chip kap-chip active" : "chip kap-chip"} onClick={() => setChapter(c)}>
                <span>Kap. {c}</span>
                {best && (
                  <span className="kap-best">
                    {best.best}/{best.total}
                  </span>
                )}
                <ProgressBar {...progressCounts(list, progress)} total={list.length} thin />
              </button>
            );
          })}
        </div>

        {tab === "quiz" && (
          <div className="kap-direction">
            <button className={direction === "de-en" ? "chip active" : "chip"} onClick={() => setDirection("de-en")}>
              DE → EN
            </button>
            <button className={direction === "en-de" ? "chip active" : "chip"} onClick={() => setDirection("en-de")}>
              EN → DE
            </button>
          </div>
        )}
      </div>

      <main className="app-main">
        {CHAPTER_WORDS.length === 0 ? (
          <div className="empty-state">Noch keine Wörter – lege data/Kapitel1.json usw. an.</div>
        ) : (
          <>
            {/* All tabs stay mounted (hidden via CSS) so a running test survives a
                glance at the Lernen tab, same as the B1 profile does. Keyed
                on chapter (+direction for the test) so switching starts fresh. */}
            <div style={{ display: tab === "learn" ? "block" : "none" }}>
              <ChapterLearn key={chapter} chapter={chapter} words={words} progress={progress} onProgressChanged={reload} />
            </div>
            <div style={{ display: tab === "quiz" ? "block" : "none" }}>
              <ChapterQuiz key={`${chapter}|${direction}`} chapter={chapter} words={words} direction={direction} progress={progress} onProgressChanged={reload} />
            </div>
            <div style={{ display: tab === "dashboard" ? "block" : "none" }}>
              <ChapterDashboard scores={scores} progress={progress} onReset={reload} />
              <ImageCredits />
            </div>
          </>
        )}
      </main>

      <nav className="app-tabs">
        {TABS.map((t) => (
          <button key={t.key} className={tab === t.key ? "tab active" : "tab"} onClick={() => setTab(t.key)}>
            <span className="tab-icon">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
