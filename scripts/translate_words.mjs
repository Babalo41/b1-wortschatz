// One-off data enrichment: adds an English "meaning" for each headword and
// an "examplesEn" array (parallel to "examples") to src/data/words.json,
// using Google's free unauthenticated translate endpoint (no API key, no
// LLM tokens). Batches many strings per HTTP request by joining them with
// newlines -- Google's sentence splitter returns one segment per line,
// which we verify against the expected count and fall back to
// smaller batches (down to one item) whenever a batch doesn't split back
// into exactly as many segments as it was given.
//
// Results are cached in scripts/.translation-cache.json keyed by the exact
// source string, so re-running after adding new words only translates the
// new ones.
//
// Usage: node scripts/translate_words.mjs

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORDS_PATH = path.join(__dirname, "../src/data/words.json");
const CACHE_PATH = path.join(__dirname, ".translation-cache.json");
const BATCH_SIZE = 25;
const DELAY_MS = 350;
const FLUSH_EVERY = 200; // write cache to disk every N newly-translated strings

const ARTICLES = { m: "der", f: "die", n: "das" };

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

class RateLimitError extends Error {}

async function translateRaw(text) {
  const params = new URLSearchParams({ client: "gtx", sl: "de", tl: "en", dt: "t" });
  params.append("q", text);
  const res = await fetch("https://translate.googleapis.com/translate_a/single?" + params.toString());
  if (res.status === 429) throw new RateLimitError("HTTP 429");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data[0].map((seg) => seg[0].replace(/\n$/, ""));
}

// Rate limiting isn't a per-item problem -- bisecting a batch just turns
// one 429 into many. Retry the exact same request with growing backoff
// instead, and only fall through to the caller's error handling (segment
// mismatch -> bisect) once we've genuinely given up on the rate limit.
async function withRateLimitRetry(fn, maxAttempts = 6) {
  let attempt = 0;
  for (;;) {
    try {
      return await fn();
    } catch (err) {
      if (!(err instanceof RateLimitError) || attempt >= maxAttempts) throw err;
      attempt++;
      const backoff = Math.min(2000 * 2 ** attempt, 30000);
      console.error(`\n  rate limited, backing off ${backoff}ms (attempt ${attempt}/${maxAttempts})...`);
      await sleep(backoff);
    }
  }
}

// Google's own sentence-splitter sometimes cuts one of our newline-joined
// lines into two output segments (e.g. a source string containing two
// sentences, like "Es war sehr schön. Jetzt muss ich aber gehen."). That
// desyncs every item after it in the batch, so any count mismatch throws
// and the caller bisects down to isolate the offending line.
async function translateBatch(strings) {
  const segments = await withRateLimitRetry(() => translateRaw(strings.join("\n")));
  if (segments.length !== strings.length) {
    throw new Error(`segment mismatch: sent ${strings.length}, got ${segments.length}`);
  }
  return segments;
}

// For a single string that itself contains multiple sentences, Google
// returns one segment per sentence -- all of them are the translation of
// our one input, so join them back into one string instead of failing.
async function translateSingle(str) {
  const segments = await withRateLimitRetry(() => translateRaw(str));
  return segments.join(" ").replace(/\s+/g, " ").trim();
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
  function maybeFlush(n) {
    sinceFlush += n;
    if (sinceFlush >= FLUSH_EVERY) {
      writeFileSync(CACHE_PATH, JSON.stringify(cache));
      sinceFlush = 0;
    }
  }

  async function run(indices) {
    if (indices.length === 0) return;
    const batchStrings = indices.map((i) => strings[i]);
    try {
      const translated = await translateBatch(batchStrings);
      indices.forEach((i, j) => {
        results[i] = translated[j];
        cache[strings[i]] = translated[j];
      });
      maybeFlush(indices.length);
    } catch (err) {
      if (indices.length === 1) {
        const i = indices[0];
        try {
          const translated = await translateSingle(strings[i]);
          results[i] = translated;
          cache[strings[i]] = translated;
        } catch (err2) {
          console.error(`  failed on: ${JSON.stringify(strings[i])} -- ${err2.message}`);
          results[i] = strings[i]; // fall back to original text
        }
        maybeFlush(1);
        return;
      }
      const mid = Math.ceil(indices.length / 2);
      await run(indices.slice(0, mid));
      await sleep(DELAY_MS);
      await run(indices.slice(mid));
    }
  }

  for (let i = 0; i < todo.length; i += BATCH_SIZE) {
    const chunk = todo.slice(i, i + BATCH_SIZE);
    await run(chunk);
    process.stdout.write(`\r  translated ${Math.min(i + BATCH_SIZE, todo.length)}/${todo.length}`);
    await sleep(DELAY_MS);
  }
  process.stdout.write("\n");
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
  writeFileSync(CACHE_PATH, JSON.stringify(cache));

  console.log(`Translating ${flatExamples.length} example sentences...`);
  const exampleResults = await translateWithFallback(flatExamples, cache);
  writeFileSync(CACHE_PATH, JSON.stringify(cache));

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
