import React, { useEffect, useMemo, useState } from "react";
import { WORDS } from "./lib/words.js";
import { applyFilters, DEFAULT_FILTERS } from "./lib/filters.js";
import { getAllProgress, getDueCardIds } from "./lib/db.js";
import LearnMode from "./components/LearnMode.jsx";
import TestMode from "./components/TestMode.jsx";
import Dashboard from "./components/Dashboard.jsx";
import FilterPanel from "./components/FilterPanel.jsx";

const TABS = [
  { key: "learn", label: "Lernen" },
  { key: "test", label: "Testen" },
  { key: "dashboard", label: "Fortschritt" },
];

export default function App() {
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

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-title">B1 Wortschatz 🍒</div>
        <button className="filter-toggle" onClick={() => setFiltersOpen((o) => !o)}>
          Filter{activeFilterCount ? ` (${activeFilterCount})` : ""}
        </button>
      </header>

      <FilterPanel filters={filters} setFilters={setFilters} open={filtersOpen} onClose={() => setFiltersOpen(false)} />

      <main className="app-main">
        {!progressLoaded ? (
          <div className="empty-state">Lade Fortschritt…</div>
        ) : (
          <>
            {tab === "learn" && <LearnMode words={filteredWords} />}
            {tab === "test" && (
              <TestMode dueWords={dueWords} allFilteredWords={filteredWords} onProgressChanged={reloadProgress} />
            )}
            {tab === "dashboard" && <Dashboard refreshKey={refreshKey} onReset={reloadProgress} />}
          </>
        )}
      </main>

      <nav className="app-tabs">
        {TABS.map((t) => (
          <button key={t.key} className={tab === t.key ? "tab active" : "tab"} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
