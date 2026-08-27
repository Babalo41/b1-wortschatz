import React, { useEffect, useState } from "react";
import { cardColor } from "../lib/words.js";
import { conjugateVerb, declineNoun } from "../lib/german.js";
import { speak, stopSpeaking } from "../lib/tts.js";

const CASE_LABELS = { nominativ: "Nominativ", akkusativ: "Akkusativ", dativ: "Dativ", genitiv: "Genitiv" };
const TENSE_LABELS = {
  praesens: "Präsens",
  praeteritum: "Präteritum",
  perfekt: "Perfekt",
  plusquamperfekt: "Plusquamperfekt",
  futurI: "Futur I",
};
const PERSON_LABELS = { ich: "ich", du: "du", er: "er/sie/es", wir: "wir", ihr: "ihr", sie: "sie/Sie" };

function headline(entry) {
  if (entry.pos === "noun" && entry.gender) {
    const article = { m: "der", f: "die", n: "das" }[entry.gender.split("/")[0]] || "";
    return `${article} ${entry.head}`.trim();
  }
  return entry.head;
}

export default function WordCard({ entry, flipped, onFlip, showBack = true }) {
  const [openSections, setOpenSections] = useState({});
  const color = cardColor(entry);
  const verbTable = entry.pos === "verb" ? conjugateVerb(entry) : null;
  const nounTable = entry.pos === "noun" && entry.gender ? declineNoun(entry) : null;

  function toggle(name) {
    setOpenSections((s) => ({ ...s, [name]: !s[name] }));
  }

  // Stop any in-flight utterance when this card is swapped for another
  // (Learn mode "next", Test mode swipe) or unmounted -- otherwise a
  // pronunciation queued for a word you just left keeps playing/lingering.
  useEffect(() => {
    return () => stopSpeaking();
  }, [entry.id]);

  return (
    <div
      className="word-card"
      style={{
        background: color.gradient,
        color: color.fg,
        "--card-glow": color.glow,
        "--card-border": color.border,
      }}
      onClick={onFlip}
    >
      <div className="word-card-front">
        <div className="word-head">{headline(entry)}</div>
        {entry.meaning && <div className="word-meaning">{entry.meaning}</div>}
        {entry.plural && <div className="word-sub">Plural: {entry.plural}</div>}
        <button
          className="speak-btn"
          onClick={(e) => {
            e.stopPropagation();
            speak(entry.head);
          }}
          aria-label="Aussprache anhören"
        >
          🔊
        </button>
        <div className="tap-hint">{flipped ? "" : "Tippen zum Umdrehen"}</div>
      </div>

      {flipped && showBack && (
        <div className="word-card-back" onClick={(e) => e.stopPropagation()}>
          <div className="pos-tag">{entry.pos}{entry.region ? ` · ${entry.region}` : ""}</div>

          {entry.examples.length > 0 && (
            <Section title="Beispiel" open={openSections.examples ?? true} onToggle={() => toggle("examples")}>
              {entry.examples.map((ex, i) => (
                <div key={i} className="example-line">
                  <div className="example-de">
                    <span>{ex}</span>
                    <button className="speak-btn-inline" onClick={() => speak(ex)} aria-label="Beispiel anhören">
                      🔊
                    </button>
                  </div>
                  {entry.examplesEn?.[i] && <div className="example-en">{entry.examplesEn[i]}</div>}
                </div>
              ))}
            </Section>
          )}

          {verbTable && (
            <Section title="Konjugation" open={openSections.verb} onToggle={() => toggle("verb")}>
              {Object.entries(TENSE_LABELS).map(([key, label]) => (
                <div key={key} className="table-block">
                  <div className="table-title">{label}</div>
                  <table>
                    <tbody>
                      {Object.entries(verbTable[key]).map(([person, form]) => (
                        <tr key={person}>
                          <td>{PERSON_LABELS[person]}</td>
                          <td>{form}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </Section>
          )}

          {nounTable && (
            <Section title="Deklination" open={openSections.noun} onToggle={() => toggle("noun")}>
              <div className="table-block">
                <div className="table-title">Singular{nounTable.weakMasculine ? " (n-Deklination)" : ""}</div>
                <table>
                  <tbody>
                    {Object.entries(nounTable.singular).map(([c, form]) => (
                      <tr key={c}>
                        <td>{CASE_LABELS[c]}</td>
                        <td>{form}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {nounTable.plural && (
                <div className="table-block">
                  <div className="table-title">Plural</div>
                  <table>
                    <tbody>
                      {Object.entries(nounTable.plural).map(([c, form]) => (
                        <tr key={c}>
                          <td>{CASE_LABELS[c]}</td>
                          <td>{form}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Section>
          )}
        </div>
      )}
    </div>
  );
}

function Section({ title, open, onToggle, children }) {
  return (
    <div className="section">
      <button className="section-title" onClick={onToggle}>
        {open ? "▾" : "▸"} {title}
      </button>
      {open && <div className="section-body">{children}</div>}
    </div>
  );
}
