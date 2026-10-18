import React, { useState } from "react";
import { articleColor, CHAPTER_WORDS, germanLabel } from "../../lib/chapterWords.js";
import { ARTICLES, buildQuestion } from "../../lib/quiz.js";
import { answerDiff, checkTyped, pickMistakes, pickSession, requeue, SESSION_SIZE, splitByDue } from "../../lib/chapterReview.js";
import { recordWordResult, saveScore, today } from "../../lib/chapterDb.js";
import { speak } from "../../lib/tts.js";
import { WordImage } from "./ChapterLearn.jsx";
import PandaCelebration from "./PandaCelebration.jsx";

// Two kinds of session, both 25 words with misses repeated until right:
//   "chapter":  this chapter's due + new words, multiple choice
//   "mistakes": ★ words from all chapters, typed in German (recall, en-de)
// phase: "answer" -> "article" (en-de nouns, after a right word) -> "feedback"

const UMLAUTS = ["ä", "ö", "ü", "ß"];

function TypedDiff({ input, word }) {
  const { got, want } = answerDiff(input, word);
  return (
    <div className="typed-diff">
      <div>
        Du: {got.map((c, i) => <span key={i} className={c.ok ? undefined : "diff-bad"}>{c.ch}</span>)}
      </div>
      <div>
        Richtig: {want.map((c, i) => <span key={i} className={c.ok ? undefined : "diff-miss"}>{c.ch}</span>)}
      </div>
    </div>
  );
}

export default function ChapterQuiz({ chapter, words, direction, progress, onProgressChanged }) {
  const [session, setSession] = useState(null);
  const [phase, setPhase] = useState("answer");
  const [picked, setPicked] = useState(null);
  const [typed, setTyped] = useState("");
  const [pickedArticle, setPickedArticle] = useState(null);
  const [result, setResult] = useState(null); // { correct, mistake: "word" | "article" | null }
  const [summary, setSummary] = useState(null);
  const [celebrate, setCelebrate] = useState(false);

  function resetAnswer() {
    setPhase("answer");
    setPicked(null);
    setTyped("");
    setPickedArticle(null);
    setResult(null);
  }

  function start(mode) {
    const dir = mode === "mistakes" ? "en-de" : direction;
    const chosen = mode === "mistakes" ? pickMistakes(CHAPTER_WORDS, progress, today()) : pickSession(words, progress, direction, today());
    const pool = mode === "mistakes" ? chosen : words;
    const others = CHAPTER_WORDS.filter((w) => !pool.includes(w));
    const ask = (word) => ({ word, q: buildQuestion(word, pool, dir, others), retry: false });
    setSession({ mode, dir, pool, others, size: chosen.length, queue: chosen.map(ask), index: 0, stats: { right: 0, word: 0, article: 0, missed: [] } });
    setSummary(null);
    resetAnswer();
  }

  if (summary) {
    const mistakes = summary.word + summary.article;
    return (
      <div className="session-summary">
        {celebrate && <PandaCelebration onClose={() => setCelebrate(false)} />}
        <h2>{summary.mode === "mistakes" ? "Fehler-Training" : `Kapitel ${chapter}`} – Ergebnis</h2>
        <p>
          {summary.right} / {summary.total} beim ersten Versuch richtig ({Math.round((summary.right / summary.total) * 100)}%)
        </p>
        {summary.best != null && (
          <p>
            Bestes Ergebnis: {summary.best} / {summary.total}
          </p>
        )}
        {mistakes > 0 && (
          <p>
            Wort falsch: {summary.word} · Artikel falsch: {summary.article}
          </p>
        )}
        {summary.missed.length > 0 && (
          <div className="review-list">
            <h3>★ Kommen morgen wieder:</h3>
            <ul>
              {summary.missed.map((w) => (
                <li key={w.key}>
                  {germanLabel(w)} – {w.english_translation}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={() => setSummary(null)}>Weiter</button>
      </div>
    );
  }

  if (!session) {
    const { due, fresh } = splitByDue(words, progress, direction, today());
    const chapterSize = Math.min(SESSION_SIZE, words.filter((w) => w.english_translation).length);
    const hardCount = CHAPTER_WORDS.filter((w) => w.english_translation && progress.get(w.key)?.hard).length;
    return (
      <div className="session-setup">
        <h2>Test Kapitel {chapter}</h2>
        <div className="setup-group">
          <div className="setup-label">
            {direction === "de-en" ? "Deutsch → Englisch" : "Englisch → Deutsch (mit der/die/das)"} · Heute dran: {due.length} Wiederholungen ·{" "}
            {fresh.length} neue
          </div>
          {due.length + fresh.length === 0 && <p className="estimate-note">Alles wiederholt 🎉 – üben geht trotzdem.</p>}
          <div className="setup-buttons">
            <button onClick={() => start("chapter")} disabled={chapterSize === 0}>
              Test starten ({chapterSize})
            </button>
          </div>
        </div>
        <div className="setup-group">
          <div className="setup-label">★ Meine Fehler aus allen Kapiteln – Wort eintippen</div>
          <div className="setup-buttons">
            <button onClick={() => start("mistakes")} disabled={hardCount === 0}>
              ★ Fehler üben ({Math.min(SESSION_SIZE, hardCount)})
            </button>
          </div>
        </div>
      </div>
    );
  }

  const item = session.queue[session.index];
  const { word, q } = item;
  const typedMode = session.mode === "mistakes";

  function finish(correct, mistake) {
    setResult({ correct, mistake });
    setPhase("feedback");
  }

  function chooseWord(option) {
    if (phase !== "answer") return;
    setPicked(option);
    if (option === q.answer && q.askArticle) setPhase("article");
    else finish(option === q.answer, option === q.answer ? null : "word");
  }

  function submitTyped(e) {
    e.preventDefault();
    if (phase !== "answer" || !typed.trim()) return;
    const ok = checkTyped(typed, word);
    setPicked(typed);
    if (ok && q.askArticle) setPhase("article");
    else finish(ok, ok ? null : "word");
  }

  function chooseArticle(a) {
    if (phase !== "article") return;
    setPickedArticle(a);
    finish(a === word.article, a === word.article ? null : "article");
  }

  // Recorded on "Weiter" rather than on answering, so "War richtig" can
  // still overrule a typed answer the checker didn't accept.
  async function next() {
    const { correct, mistake } = result;
    const stats = { ...session.stats };
    if (!item.retry) {
      await recordWordResult(word.key, session.dir, correct);
      onProgressChanged?.();
      if (correct) stats.right++;
      else {
        stats[mistake]++;
        stats.missed = [...stats.missed, word];
      }
    }
    const queue = correct
      ? session.queue
      : requeue(session.queue, session.index, { word, q: buildQuestion(word, session.pool, session.dir, session.others), retry: true });
    resetAnswer();
    if (session.index + 1 < queue.length) {
      setSession({ ...session, queue, index: session.index + 1, stats });
      return;
    }
    const saved = session.mode === "chapter" ? await saveScore(chapter, direction, stats.right, session.size) : null;
    setSummary({ ...stats, mode: session.mode, total: session.size, best: saved?.best });
    setCelebrate(stats.right === session.size);
    setSession(null);
  }

  const color = articleColor(word);
  const optionClass = (o) => {
    if (phase === "answer") return "quiz-option";
    if (o === q.answer) return "quiz-option right";
    if (o === picked) return "quiz-option wrong";
    return "quiz-option";
  };
  const firstDone = session.queue.slice(0, session.index).filter((x) => !x.retry).length;
  const retriesLeft = session.queue.slice(session.index + (item.retry ? 0 : 1)).filter((x) => x.retry).length;
  const showGerman = session.dir === "de-en";

  return (
    <div className="chapter-quiz">
      <div className="progress-line">
        {item.retry ? "🔁 Nochmal" : `Frage ${firstDone + 1} / ${session.size}`}
        {retriesLeft > 0 && ` (+${retriesLeft} Wiederholung)`}
      </div>
      <div className="chapter-card quiz-prompt" style={showGerman ? { background: color.bg, color: color.fg } : undefined}>
        {!showGerman && <WordImage word={word} />}
        <div className="chapter-card-main">{showGerman ? germanLabel(word) : word.english_translation}</div>
      </div>

      {typedMode ? (
        <form className="typed-answer" onSubmit={submitTyped}>
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="Deutsches Wort …"
            autoFocus
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            spellCheck={false}
            disabled={phase !== "answer"}
          />
          <div className="umlaut-keys">
            {UMLAUTS.map((c) => (
              <button key={c} type="button" onClick={() => setTyped((t) => t + c)} disabled={phase !== "answer"}>
                {c}
              </button>
            ))}
            <button type="submit" className="check-btn" disabled={phase !== "answer" || !typed.trim()}>
              Prüfen
            </button>
          </div>
        </form>
      ) : (
        <div className="quiz-options">
          {q.options.map((o) => (
            <button key={o} className={optionClass(o)} onClick={() => chooseWord(o)} disabled={phase !== "answer"}>
              {o}
            </button>
          ))}
        </div>
      )}

      {(phase === "article" || (phase === "feedback" && q.askArticle && result.mistake !== "word")) && (
        <div className="article-step">
          <div className="setup-label">Welcher Artikel?</div>
          <div className="quiz-articles">
            {ARTICLES.map((a) => {
              let cls = `article-btn article-${a}`;
              if (phase === "feedback" && a === word.article) cls += " right";
              else if (phase === "feedback" && a === pickedArticle) cls += " wrong";
              return (
                <button key={a} className={cls} onClick={() => chooseArticle(a)} disabled={phase !== "article"}>
                  {a}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {phase === "feedback" && (
        <div className={result.correct ? "quiz-feedback right" : "quiz-feedback wrong"}>
          <div className="quiz-feedback-body">
            {result.correct ? (
              <div>Richtig! 🎉</div>
            ) : (
              <>
                <div>
                  Richtig ist: <b>{germanLabel(word)}</b> – {word.english_translation}
                </div>
                {typedMode && result.mistake === "word" && <TypedDiff input={picked} word={word} />}
                {word.plural && <div className="chapter-card-sub">Plural: {word.plural}</div>}
                {showGerman && <WordImage word={word} />}
              </>
            )}
          </div>
          <div className="quiz-feedback-actions">
            <button className="speak-btn-inline" onClick={() => speak(word.german_word)} aria-label="Aussprache anhören">
              🔊
            </button>
            {typedMode && result.mistake === "word" && (
              <button className="override-btn" onClick={() => (q.askArticle ? setPhase("article") : setResult({ correct: true, mistake: null }))}>
                War richtig ✓
              </button>
            )}
            <button onClick={next}>{session.index + 1 < session.queue.length || !result.correct ? "Weiter →" : "Ergebnis"}</button>
          </div>
        </div>
      )}
    </div>
  );
}
