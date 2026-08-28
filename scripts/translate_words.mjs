// One-off data enrichment: adds an English "meaning" for each headword and
// an "examplesEn" array (parallel to "examples") to src/data/words.json,
// using the free MyMemory translation API (api.mymemory.translated.net,
// no key required) -- no API key, no LLM tokens.
//
// (Originally used Google's unauthenticated translate endpoint, which
// works great for a handful of requests but Google flags a network as
// "automated queries" and starts returning HTTP 429 with an HTML "Sorry"
// page after a few thousand requests in a short window -- and the block
// persists well beyond a few minutes' cooldown. MyMemory has an explicit,
// documented free tier instead of an undocumented abuse heuristic.)
//
// Results are cached in scripts/.translation-cache.json keyed by the exact
// source string, so re-running after adding new words -- or after a
// quota pause -- only translates what's missing.
//
// Usage: node scripts/translate_words.mjs

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORDS_PATH = path.join(__dirname, "../src/data/words.json");
const CACHE_PATH = path.join(__dirname, ".translation-cache.json");
const DELAY_MS = 1100;
const FLUSH_EVERY = 100; // write cache to disk every N newly-translated strings

const ARTICLES = { m: "der", f: "die", n: "das" };

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

class QuotaExceededError extends Error {}

async function translateOne(text) {
  const params = new URLSearchParams({ q: text, langpair: "de|en" });
  const res = await fetch("https://api.mymemory.translated.net/get?" + params.toString());
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.responseStatus && Number(data.responseStatus) !== 200) {
    throw new Error(`API status ${data.responseStatus}: ${data.responseDetails || ""}`);
  }
  if (data.quotaFinished) throw new QuotaExceededError("daily quota exhausted");
  return data.responseData.translatedText.replace(/\s+/g, " ").trim();
}

async function translateWithRetry(text, maxAttempts = 4) {
  let attempt = 0;
  for (;;) {
    try {
      return await translateOne(text);
    } catch (err) {
      if (err instanceof QuotaExceededError) throw err;
      attempt++;
      if (attempt >= maxAttempts) throw err;
      const backoff = 1500 * attempt;
      console.error(`\n  retrying (${attempt}/${maxAttempts}) after error: ${err.message} -- waiting ${backoff}ms`);
      await sleep(backoff);
    }
  }
}

async function translateWithFallback(strings, cache) {
  const results = new Array(strings.length);
  const todo = [];
  strings.forEach((s, i) => {
    if (cache[s] != null) results[i] = cache[s];
    else todo.push(i);
  });
  if (todo.length === 0) return results;

  let sinceFlush = 0;
  for (let n = 0; n < todo.length; n++) {
    const i = todo[n];
    try {
      const translated = await translateWithRetry(strings[i]);
      results[i] = translated;
      cache[strings[i]] = translated;
    } catch (err) {
      if (err instanceof QuotaExceededError) {
        writeFileSync(CACHE_PATH, JSON.stringify(cache));
        console.error(`\n  Daily translation quota hit after ${n}/${todo.length} of this batch. ` +
          `Progress saved -- re-run this script later (e.g. tomorrow) to pick up where it left off.`);
        // Fill remaining with the original German text so the app still
        // renders something (and stays easy to spot as untranslated).
        for (let m = n; m < todo.length; m++) results[todo[m]] = strings[todo[m]];
        return results;
      }
      console.error(`\n  failed on: ${JSON.stringify(strings[i])} -- ${err.message}`);
      results[i] = strings[i]; // fall back to original text
    }
    sinceFlush++;
    if (sinceFlush >= FLUSH_EVERY) {
      writeFileSync(CACHE_PATH, JSON.stringify(cache));
      sinceFlush = 0;
    }
    if (n % 20 === 0) process.stdout.write(`\r  translated ${n + 1}/${todo.length}`);
    await sleep(DELAY_MS);
  }
  process.stdout.write("\n");
  writeFileSync(CACHE_PATH, JSON.stringify(cache));
  return results;
}

function headQuery(entry) {
  if (entry.pos === "noun" && entry.gender) {
    const article = ARTICLES[entry.gender.split("/")[0]];
    if (article) return `${article} ${entry.head}`;
  }
  return entry.head;
}

function formatMeaning(entry, translated) {
  if (entry.pos === "verb") {
    const t = translated.trim();
    return /^to\s/i.test(t) ? t : `to ${t}`;
  }
  return translated.trim();
}

async function main() {
  const words = JSON.parse(readFileSync(WORDS_PATH, "utf8"));
  const cache = existsSync(CACHE_PATH) ? JSON.parse(readFileSync(CACHE_PATH, "utf8")) : {};

  const headQueries = words.map(headQuery);
  const exampleLists = words.map((w) => w.examples || []);
  const flatExamples = exampleLists.flat();

  console.log(`Translating ${headQueries.length} headwords...`);
  const headResults = await translateWithFallback(headQueries, cache);

  console.log(`Translating ${flatExamples.length} example sentences...`);
  const exampleResults = await translateWithFallback(flatExamples, cache);

  let cursor = 0;
  const enriched = words.map((entry, i) => {
    const examples = exampleLists[i];
    const examplesEn = examples.map(() => exampleResults[cursor++]);
    return {
      ...entry,
      meaning: formatMeaning(entry, headResults[i]),
      examplesEn,
    };
  });

  writeFileSync(WORDS_PATH, JSON.stringify(enriched, null, 2) + "\n");
  console.log(`Done. Wrote ${enriched.length} entries to ${WORDS_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
