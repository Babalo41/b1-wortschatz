import React, { useEffect, useMemo, useState } from "react";
import { WORDS } from "./lib/words.js";
import { applyFilters, DEFAULT_FILTERS } from "./lib/filters.js";
import { getAllProgress, getDueCardIds } from "./lib/db.js";
import LearnMode from "./components/LearnMode.jsx";
import TestMode from "./components/TestMode.jsx";
import Dashboard from "./components/Dashboard.jsx";
import FilterPanel from "./components/FilterPanel.jsx";
import ChapterApp from "./components/chapter/ChapterApp.jsx";

const TABS = [
  { key: "learn", label: "Lernen", icon: "📖" },
  { key: "test", label: "Testen", icon: "🔀" },
  { key: "dashboard", label: "Fortschritt", icon: "📊" },
];

function B1App({ onSwitchProfile }) {
  const [tab, setTab] = useState("learn");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [progressByCard, setProgressByCard] = useState(new Map());
  const [dueIds, setDueIds] = useState(new Set());
  const [refreshKey, setRefreshKey] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(false);

  async function reloadProgress() {
    const all = await getAllProgress();
    setProgressByCard(new Map(all.map((p) => [p.cardId, p])));
    const allIds = WORDS.map((w) => w.id);
    const due = await getDueCardIds(allIds);
    setDueIds(new Set(due));
    setRefreshKey((k) => k + 1);
    setProgressLoaded(true);
  }

  useEffect(() => {
    reloadProgress();
  }, []);

  const filteredWords = useMemo(
    () => applyFilters(WORDS, filters, progressByCard),
    [filters, progressByCard]
  );

  const dueWords = useMemo(
    () => filteredWords.filter((w) => dueIds.has(w.id)),
    [filteredWords, dueIds]
  );

  const activeFilterCount =
    filters.letters.length + filters.posList.length + filters.boxes.length +
    (filters.onlyWrong ? 1 : 0) + (filters.pageMin != null ? 1 : 0) + (filters.pageMax != null ? 1 : 0);

  let learned = 0;
  for (const p of progressByCard.values()) if (p.box >= 5) learned++;
  const learnedPct = WORDS.length ? Math.round((learned / WORDS.length) * 100) : 0;

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-title">B1 Wortschatz 🍒</div>
        <div className="header-actions">
          <button className="filter-toggle" onClick={() => setFiltersOpen((o) => !o)}>
            Filter{activeFilterCount ? ` (${activeFilterCount})` : ""}
          </button>
          <button className="filter-toggle" onClick={onSwitchProfile} aria-label="Profil wechseln">
            ⇄
          </button>
        </div>
      </header>

      <FilterPanel filters={filters} setFilters={setFilters} open={filtersOpen} onClose={() => setFiltersOpen(false)} />

      <div className="kap-top">
        <div className="kap-overall">
          <span>
            {learned} / {WORDS.length} Wörter gelernt
          </span>
          <span>{learnedPct}%</span>
        </div>
        <div className="kap-bar">
          <div className="kap-bar-fill" style={{ width: `${learnedPct}%` }} />
        </div>
      </div>

      <main className="app-main">
        {!progressLoaded ? (
          <div className="empty-state">Lade Fortschritt…</div>
        ) : (
          <>
            {/* All three modes stay mounted and are only hidden via CSS,
                not conditionally rendered -- unmounting TestMode on tab
                switch would wipe its in-progress session state, forcing
                the user back to "pick how many cards" every time they
                glance at another tab mid-session. */}
            <div style={{ display: tab === "learn" ? "block" : "none" }}>
              <LearnMode words={filteredWords} />
            </div>
            <div style={{ display: tab === "test" ? "block" : "none" }}>
              <TestMode dueWords={dueWords} allFilteredWords={filteredWords} onProgressChanged={reloadProgress} />
            </div>
            <div style={{ display: tab === "dashboard" ? "block" : "none" }}>
              <Dashboard refreshKey={refreshKey} onReset={reloadProgress} />
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

// Two learners share one app: the B1 Goethe list and the chapter-wise list.
// The choice is a per-device convenience (localStorage); each profile keeps
// its own progress in its own IndexedDB database.
const PROFILE_KEY = "wortschatz-profile";

function loadProfile() {
  try {
    return localStorage.getItem(PROFILE_KEY);
  } catch {
    return null;
  }
}

function ProfilePicker({ onPick }) {
  return (
    <div className="app-shell profile-picker">
      <div className="app-title">Wer lernt heute?</div>
      <button className="profile-btn" onClick={() => onPick("b1")}>
        <span className="profile-icon">🍒</span>
        વાલા
      </button>
      <button className="profile-btn" onClick={() => onPick("chapters")}>
        <span className="profile-icon">🐼</span>
        વાલી
      </button>
    </div>
  );
}

export default function App() {
  const [profile, setProfile] = useState(loadProfile);

  function choose(p) {
    try {
      if (p) localStorage.setItem(PROFILE_KEY, p);
      else localStorage.removeItem(PROFILE_KEY);
    } catch {
      // storage unavailable: the choice just isn't remembered
    }
    setProfile(p);
  }

  if (profile === "b1") return <B1App onSwitchProfile={() => choose(null)} />;
  if (profile === "chapters") return <ChapterApp onSwitchProfile={() => choose(null)} />;
  return <ProfilePicker onPick={choose} />;
}
