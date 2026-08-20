import React from "react";
import { LETTERS } from "../lib/words.js";

const POS_OPTIONS = [
  { value: "noun", label: "Nomen" },
  { value: "verb", label: "Verben" },
  { value: "other", label: "Andere" },
];

export default function FilterPanel({ filters, setFilters, open, onClose }) {
  if (!open) return null;

  function toggleIn(list, value) {
    return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
  }

  return (
    <div className="filter-panel">
      <div className="filter-row">
        <div className="filter-label">Wortart</div>
        <div className="filter-chips">
          {POS_OPTIONS.map((o) => (
            <button
              key={o.value}
              className={filters.posList.includes(o.value) ? "chip active" : "chip"}
              onClick={() => setFilters((f) => ({ ...f, posList: toggleIn(f.posList, o.value) }))}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-label">Buchstabe</div>
        <div className="filter-chips letters">
          {LETTERS.map((l) => (
            <button
              key={l}
              className={filters.letters.includes(l) ? "chip active" : "chip"}
              onClick={() => setFilters((f) => ({ ...f, letters: toggleIn(f.letters, l) }))}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-label">Leitner-Box</div>
        <div className="filter-chips">
          {[1, 2, 3, 4, 5].map((b) => (
            <button
              key={b}
              className={filters.boxes.includes(b) ? "chip active" : "chip"}
              onClick={() => setFilters((f) => ({ ...f, boxes: toggleIn(f.boxes, b) }))}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.onlyWrong}
            onChange={(e) => setFilters((f) => ({ ...f, onlyWrong: e.target.checked }))}
          />
          Nur zuletzt falsch beantwortete
        </label>
      </div>

      <div className="filter-row">
        <div className="filter-label">Seitenbereich</div>
        <div className="page-range">
          <input
            type="number"
            placeholder="von (16)"
            value={filters.pageMin ?? ""}
            onChange={(e) => setFilters((f) => ({ ...f, pageMin: e.target.value ? Number(e.target.value) : null }))}
          />
          <input
            type="number"
            placeholder="bis (102)"
            value={filters.pageMax ?? ""}
            onChange={(e) => setFilters((f) => ({ ...f, pageMax: e.target.value ? Number(e.target.value) : null }))}
          />
        </div>
      </div>

      <button
        className="chip"
        onClick={() => setFilters({ letters: [], posList: [], boxes: [], onlyWrong: false, pageMin: null, pageMax: null })}
      >
        Filter zurücksetzen
      </button>
      <button className="close-filters" onClick={onClose}>Fertig</button>
    </div>
  );
}
