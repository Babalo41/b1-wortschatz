import React, { useState } from "react";

// Attribution for the Commons pictures (written by scripts/crawler.py). Kept
// collapsed at the bottom of the Fortschritt tab and only fetched when opened.
export default function ImageCredits() {
  const [credits, setCredits] = useState(null);

  function load(e) {
    if (!e.currentTarget.open || credits) return;
    fetch(import.meta.env.BASE_URL + "images/credits.json")
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}))
      .then(setCredits);
  }

  return (
    <details className="image-credits" onToggle={load}>
      <summary>Bildnachweise</summary>
      {credits == null ? (
        <p>Lädt …</p>
      ) : (
        <ul>
          {Object.entries(credits).map(([file, c]) => (
            <li key={file}>
              {c.source ? (
                <a href={c.source} target="_blank" rel="noopener noreferrer">
                  {file.replace(/\.\w+$/, "")}
                </a>
              ) : (
                file.replace(/\.\w+$/, "")
              )}
              : {c.author || "unbekannt"}
              {c.license ? `, ${c.license}` : ""}
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}
