# TODO: Kapitel-Wörter (wife's chapter words)

Status (2026-10-04): both phases are coded. Tests pass (16 Python, 32 vitest) and the app builds.
All manual `data/Kapit*.json` files have been cleaned of `[cite: N]` tags (originals are kept as `.bak`).
OCR of the whole glossary PDF is cached in `D:\AITools\LocalOCR\cache\glossary\`.
Chapters 1–3 extracted from the PDF match the manual files 99.6–100%.

Rules: don't open the data JSON files (list names only, let code summarize; ask before reading entries).
Commit and push only after the user confirms.

## Left to do

Done 2026-10-04: full extraction + compare (ch. 9-12 99.7-100%; 79 ERROR rows in report.md not reviewed),
app keeps the manual files, old Crawler.py deleted, crawler SSL fixed (certifi), code + data pushed (dd673ac).

1. [ ] Images: crawl DONE 2026-10-04 06:22 — 1663/1665, committed + pushed (19fe83f).
   Still missing (wikipedia pass found nothing): ch5-063 "Öko-Duell", ch9-056 "Präpositionglergänzung"
   (typo in the data? likely "Präpositionalergänzung") -> pick an `image_override_url` by hand.
   Old note: full crawl was running 2026-10-04. Check `data/crawler.log`, then commit + push `public/images/`.
   Words without a hit are in `data/images_missing.txt` (set `image_override_url`, re-run the crawler).
   Watcher: `python scripts/watch_crawler.py` (run under Claude's Monitor, re-armed every 30 min) prints
   status every 15 min, `STALLED` after 30 min without change, `EXITED` + last log lines when the crawler ends.
   Crawler (re)start: `& D:\AITools\LocalOCR\.venv\Scripts\python.exe -u scripts\crawler.py *> data\crawler.log`
   (log is UTF-16 from PowerShell; restarts are cheap: images with credits are skipped).

   Contingency plan:
   - EXITED with "downloaded X, already there Y, not found Z" (normal end) -> run `--source wikipedia`
     (fast backup for nouns), then re-run the commons crawl once more to refresh `images_missing.txt`.
   - EXITED with a Traceback -> read the last 20 log lines; fix the crawler bug if it is one (add a test),
     otherwise just restart. At most 3 restarts for the same error, then stop and leave a note here.
   - STALLED (alive, nothing changing 30 min) -> kill the crawler python processes and restart it.
   - Many "HTTP Error 429/403" lines in `images_missing.txt` (rate limit) -> wait 1 h, restart.
   - Network down (URLError / getaddrinfo in the log) -> retry every 30 min.
   - PC slept/rebooted (watcher and crawler both gone) -> restart both on the next session.
   - Done -> check images vs words, `npm test` + `npm run build`, commit `public/images/` locally.
     Push only after the user confirms. Words still missing need a human pick (`image_override_url`).
2. [ ] Test in the browser (needs the Claude in Chrome extension connected; `npm run dev` -> localhost:5173).
3. [ ] `src/palette.css` + its import in `src/main.jsx` (a "trial palette", made 02:04) are uncommitted; ask the user.
4. [ ] Optional: review the ERROR rows in `data/generated/report.md`.
5. [ ] Plurals: 873 filled from OCR (`glossary fill data/generated data`, 2026-10-04), uncommitted.
   159 nouns still have none (list in `data/generated/fill_plural_report.md`).
6. [ ] Added OCR words missing from ch1 (118) + ch2 (109) as `data/Kapitel{1,2}part2.json` (uncommitted, no images yet
   -> run the crawler). 2026-10-04: ch3-12 missing words added too (KapitelNpartX.json, 142 words); dry run shows 0 left.
   Crawler started for the new words' images (log `data/crawler.log`); then test, build, commit after the user confirms.

## Where things are
- Extractor (reusable): `D:\AITools\LocalOCR\glossary\` + `glossary.bat`, profile `glossary/profiles/netzwerk_neu_b1.json`, tests `LocalOCR/tests/test_glossary_*.py`
- App: `src/components/chapter/*`, `src/lib/{chapterWords,quiz,chapterDb,panda}.js`, profile picker in `src/App.jsx`
- Plan: `C:\Users\monpa\.claude\plans\json-data-format-pasted-content-sparkling-flask.md`
