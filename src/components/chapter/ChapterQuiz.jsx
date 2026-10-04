import React, { useState } from "react";
import { articleColor, CHAPTER_WORDS, germanLabel } from "../../lib/chapterWords.js";
import { ARTICLES, buildQuiz } from "../../lib/quiz.js";
import { recordWordResult, saveScore } from "../../lib/chapterDb.js";
import { WordImage } from "./ChapterLearn.jsx";
import PandaCelebration from "./PandaCelebration.jsx";

// phase: "word" (pick the answer) -> "article" (en-de nouns only) -> "feedback"
export default function ChapterQuiz({ chapter, words, direction, onProgressChanged }) {
  const [quiz, setQuiz] = useState(null); // { questions, index, results }
  const [phase, setPhase] = useState("word");
  const [picked, setPicked] = useState(null);
  const [pickedArticle, setPickedArticle] = useState(null);
  const [summary, setSummary] = useState(null);
  const [celebrate, setCelebrate] = useState(false);

  function start() {
    const others = CHAPTER_WORDS.filter((w) => w.chapter !== chapter);
    setQuiz({ questions: buildQuiz(words, direction, others), index: 0, results: [] });
    setPhase("word");
    setPicked(null);
    setPickedArticle(null);
    setSummary(null);
  }

  if (summary) {
    return (
      <div className="session-summary">
        {celebrate && <PandaCelebration onClose={() => setCelebrate(false)} />}
        <h2>Kapitel {chapter} – Ergebnis</h2>
        <p>
          {summary.correct} / {summary.total} richtig ({Math.round((summary.correct / summary.total) * 100)}%)
        </p>
        <p>Bestes Ergebnis: {summary.best} / {summary.total}</p>
        {summary.wrong.length > 0 && (
          <div className="review-list">
            <h3>Zum Wiederholen:</h3>
            <ul>
              {summary.wrong.map((w) => (
                <li key={w.key}>
                  {germanLabel(w)} – {w.english_translation}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={start}>Nochmal</button>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="session-setup">
        <h2>Quiz Kapitel {chapter}</h2>
        <p>
          {words.length} Fragen · {direction === "de-en" ? "Deutsch → Englisch" : "Englisch → Deutsch (mit der/die/das)"}
        </p>
        <div className="setup-buttons">
          <button onClick={start} disabled={words.length === 0}>
            Quiz starten
          </button>
        </div>
      </div>
    );
  }

  const q = quiz.questions[quiz.index];
  const wordCorrect = picked === q.answer;
  const articleCorrect = !q.askArticle || pickedArticle === q.word.article;
  const correct = wordCorrect && articleCorrect;

  async function finishQuestion(isCorrect) {
    setPhase("feedback");
    await recordWordResult(q.word.key, direction, isCorrect);
    onProgressChanged?.();
  }

  function chooseWord(option) {
    if (phase !== "word") return;
    setPicked(option);
    if (option === q.answer && q.askArticle) setPhase("article");
    else finishQuestion(option === q.answer);
  }

  function chooseArticle(a) {
    if (phase !== "article") return;
    setPickedArticle(a);
    finishQuestion(a === q.word.article);
  }

  async function next() {
    const results = [...quiz.results, { word: q.word, correct }];
    if (quiz.index + 1 < quiz.questions.length) {
      setQuiz({ ...quiz, index: quiz.index + 1, results });
      setPhase("word");
      setPicked(null);
      setPickedArticle(null);
      return;
    }
    const n = results.filter((r) => r.correct).length;
    const saved = await saveScore(chapter, direction, n, results.length);
    setSummary({ correct: n, total: results.length, best: saved.best, wrong: results.filter((r) => !r.correct).map((r) => r.word) });
    setCelebrate(n === results.length);
    setQuiz(null);
  }

  const color = articleColor(q.word);
  const optionClass = (o) => {
    if (phase === "word") return "quiz-option";
    if (o === q.answer) return "quiz-option right";
    if (o === picked) return "quiz-option wrong";
    return "quiz-option";
  };

  return (
    <div className="chapter-quiz">
      <div className="progress-line">
        Frage {quiz.index + 1} / {quiz.questions.length}
      </div>
      <div className="chapter-card quiz-prompt" style={direction === "de-en" ? { background: color.bg, color: color.fg } : undefined}>
        {direction === "en-de" && <WordImage word={q.word} />}
        <div className="chapter-card-main">{direction === "de-en" ? germanLabel(q.word) : q.word.english_translation}</div>
      </div>

      <div className="quiz-options">
        {q.options.map((o) => (
          <button key={o} className={optionClass(o)} onClick={() => chooseWord(o)} disabled={phase !== "word"}>
            {o}
          </button>
        ))}
      </div>

      {(phase === "article" || (phase === "feedback" && q.askArticle && wordCorrect)) && (
        <div className="article-step">
          <div className="setup-label">Welcher Artikel?</div>
          <div className="quiz-articles">
            {ARTICLES.map((a) => {
              let cls = `article-btn article-${a}`;
              if (phase === "feedback" && a === q.word.article) cls += " right";
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
        <div className={correct ? "quiz-feedback right" : "quiz-feedback wrong"}>
          <div>{correct ? "Richtig! 🎉" : `Richtig ist: ${germanLabel(q.word)} – ${q.word.english_translation}`}</div>
          <button onClick={next}>{quiz.index + 1 < quiz.questions.length ? "Weiter →" : "Ergebnis"}</button>
        </div>
      )}
    </div>
  );
}
