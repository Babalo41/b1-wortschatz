"""Download a picture for every chapter word from Wikimedia Commons.

Reads every data/Kapit*.json file. For each word:
  * the image is saved to public/<image_local_path> (e.g. public/images/apfel.jpg);
    existing files are skipped unless --force;
  * if image_override_url is set, that URL is downloaded instead of searching;
  * otherwise Wikimedia Commons is searched by the English translation, then
    by the German word (free API, no key);
  * a word without image_local_path gets "/images/<slug>.jpg" written back
    into its JSON file (the only change this script makes to the JSON).

Attribution required by Commons licenses is saved to public/images/credits.json
and shown under the picture in the app.

--source wikipedia is a fast backup for nouns: Wikipedia article lead images are
looked up 50 titles per request (English translation, then the German word on
de.wikipedia) and downloaded in parallel. It also fills in credits for existing
images that have none, so it can be re-run after a commons run.

Usage:  python scripts/crawler.py [--force] [--chapter N] [--limit N] [--source commons|wikipedia]
Pillow is optional: with it, images are re-encoded as JPEG quality 70 to keep
the repo small; without it the 500px Commons thumbnail is saved as-is.
"""

import argparse
import concurrent.futures
import html
import io
import json
import re
import ssl
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
PUBLIC_DIR = ROOT / "public"
CREDITS_PATH = PUBLIC_DIR / "images" / "credits.json"
API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "B1-Wortschatz-ImageCrawler/1.0 (personal vocabulary app)"
WIDTH = 500  # must be a standard Wikimedia thumbnail size (https://w.wiki/GHai)

try:  # the Windows/OpenSSL store can hold an expired root; certifi is current
    import certifi

    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CTX = ssl.create_default_context()


def slugify(text: str) -> str:
    text = re.sub(r"^sich\s+", "", text or "").lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        text = text.replace(a, b)
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "_", text).strip("_") or "word"


def chapter_no(w: dict) -> int | None:
    """"Kapitel 5: ..." -> 5"""
    m = re.search(r"\d+", str(w.get("chapter") or ""))
    return int(m.group()) if m else None


def search_query(english: str) -> str:
    q = re.sub(r"\(.*?\)", "", english or "")
    q = re.sub(r"^(hier:\s*)?(to|a|an|the)\s+", "", q.strip(), flags=re.I)
    return q.split(";")[0].split(",")[0].strip()


def http_get(url: str, params: dict | None = None) -> bytes:
    if params:
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=60, context=SSL_CTX) as resp:
                return resp.read()
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == 4:
                raise
            time.sleep(int(e.headers.get("Retry-After") or 0) or 5 * 2 ** attempt)
    raise RuntimeError("unreachable")


def strip_html(text: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", text or "")).strip()


def find_on_commons(query: str) -> dict | None:
    """First JPEG/PNG search hit -> {url, author, license, source}."""
    if not query:
        return None
    data = json.loads(http_get(API, {
        "action": "query", "format": "json", "formatversion": 2,
        "generator": "search", "gsrsearch": f"{query} filetype:bitmap", "gsrnamespace": 6, "gsrlimit": 8,
        "prop": "imageinfo", "iiprop": "url|mime|extmetadata", "iiurlwidth": WIDTH,
    }))
    pages = sorted(data.get("query", {}).get("pages", []), key=lambda p: p.get("index", 0))
    for page in pages:
        info = (page.get("imageinfo") or [{}])[0]
        if info.get("mime") not in ("image/jpeg", "image/png"):
            continue
        meta = info.get("extmetadata", {})
        return {
            "url": info.get("thumburl") or info.get("url"),
            "author": strip_html(meta.get("Artist", {}).get("value", "")) or "unknown",
            "license": strip_html(meta.get("LicenseShortName", {}).get("value", "")),
            "source": info.get("descriptionurl", ""),
        }
    return None


def save_image(raw: bytes, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    try:
        from PIL import Image

        img = Image.open(io.BytesIO(raw))
        img.thumbnail((WIDTH, WIDTH))
        img.convert("RGB").save(target, "JPEG", optimize=True, quality=70)
    except ImportError:
        target.write_bytes(raw)


def lookup_wikipedia(wiki: str, titles: list[str]) -> dict:
    """{title: {url, file}} for each title whose article has a free lead image."""
    api = f"https://{wiki}.wikipedia.org/w/api.php"
    found = {}
    for i in range(0, len(titles), 50):
        chunk = titles[i:i + 50]
        data = json.loads(http_get(api, {
            "action": "query", "format": "json", "formatversion": 2, "redirects": 1,
            "prop": "pageimages", "piprop": "thumbnail|name", "pithumbsize": WIDTH,
            "titles": "|".join(chunk),
        }))["query"]
        alias = {}
        for step in data.get("normalized", []) + data.get("redirects", []):
            alias[step["from"]] = step["to"]
        pages = {pg["title"]: pg for pg in data.get("pages", [])}
        for t in chunk:
            final = t
            while final in alias:
                final = alias[final]
            pg = pages.get(final, {})
            if pg.get("thumbnail") and pg.get("pageimage"):
                found[t] = {"url": pg["thumbnail"]["source"], "file": pg["pageimage"], "wiki": wiki}
    return found


def wikipedia_credits(wiki: str, files: list[str]) -> dict:
    """{file name: {author, license, source}} via imageinfo, 50 files per request."""
    api = f"https://{wiki}.wikipedia.org/w/api.php"
    out = {}
    for i in range(0, len(files), 50):
        chunk = files[i:i + 50]
        data = json.loads(http_get(api, {
            "action": "query", "format": "json", "formatversion": 2,
            "prop": "imageinfo", "iiprop": "url|extmetadata",
            "titles": "|".join("File:" + f for f in chunk),
        }))["query"]
        alias = {n["to"]: n["from"] for n in data.get("normalized", [])}
        for pg in data.get("pages", []):
            info = (pg.get("imageinfo") or [{}])[0]
            meta = info.get("extmetadata", {})
            name = alias.get(pg["title"], pg["title"]).split(":", 1)[1]
            out[name] = {
                "author": strip_html(meta.get("Artist", {}).get("value", "")) or "unknown",
                "license": strip_html(meta.get("LicenseShortName", {}).get("value", "")),
                "source": info.get("descriptionurl", ""),
            }
    return out


def run_wikipedia(files: dict, credits: dict, a) -> None:
    """Backup source: nouns only, batched lookups, parallel downloads."""
    todo = {}  # rel path -> word
    for words in files.values():
        for w in words:
            if a.chapter is not None and chapter_no(w) != a.chapter:
                continue
            rel = (w.get("image_local_path") or "").lstrip("/")
            if not rel or not w.get("article") or rel in todo:
                continue
            exists = (PUBLIC_DIR / rel).exists()
            if (exists and not a.force and Path(rel).name in credits) or w.get("image_override_url"):
                continue
            todo[rel] = w

    hits = {}
    en_titles = {rel: search_query(w.get("english_translation")) for rel, w in todo.items()}
    en = lookup_wikipedia("en", sorted({t for t in en_titles.values() if t}))
    for rel, t in en_titles.items():
        if t in en:
            hits[rel] = en[t]
    de_titles = {rel: re.sub(r"^sich\s+", "", todo[rel].get("german_word") or "").strip() for rel in todo if rel not in hits}
    de = lookup_wikipedia("de", sorted({t for t in de_titles.values() if t}))
    for rel, t in de_titles.items():
        if t in de:
            hits[rel] = de[t]

    meta = {}
    for wiki in ("en", "de"):
        meta.update(wikipedia_credits(wiki, sorted({h["file"] for h in hits.values() if h["wiki"] == wiki})))

    def fetch(item):
        rel, hit = item
        target = PUBLIC_DIR / rel
        if not target.exists() or a.force:
            save_image(http_get(hit["url"]), target)
            return rel, True
        return rel, False

    jobs = list(hits.items())[: a.limit] if a.limit is not None else list(hits.items())
    done = credited = failed = 0
    with concurrent.futures.ThreadPoolExecutor(6) as pool:
        futures = {pool.submit(fetch, j): j for j in jobs}
        for fut in concurrent.futures.as_completed(futures):
            rel, hit = futures[fut]
            try:
                downloaded = fut.result()[1]
            except Exception:
                failed += 1
                continue
            if hit["file"] in meta:
                credits[Path(rel).name] = meta[hit["file"]]
            done += downloaded
            credited += not downloaded

    save_credits(credits)
    print(f"wikipedia: nouns to do {len(todo)}, found {len(hits)}, downloaded {done}, "
          f"credits filled {credited}, failed {failed}")


def save_credits(credits: dict) -> None:
    """Merge into the file on disk, so parallel runs don't drop each other's entries."""
    CREDITS_PATH.parent.mkdir(parents=True, exist_ok=True)
    on_disk = json.loads(CREDITS_PATH.read_text(encoding="utf-8")) if CREDITS_PATH.exists() else {}
    on_disk.update(credits)
    CREDITS_PATH.write_text(json.dumps(on_disk, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")


def load_words():
    files = {}
    for path in sorted(DATA_DIR.glob("Kapit*.json")):
        files[path] = json.loads(path.read_text(encoding="utf-8"))
    return files


def main(argv=None):
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--force", action="store_true", help="re-download existing images")
    p.add_argument("--chapter", type=int, help="only this chapter")
    p.add_argument("--limit", type=int, help="stop after N downloads (testing)")
    p.add_argument("--source", choices=("commons", "wikipedia"), default="commons")
    a = p.parse_args(argv)
    for stream in (sys.stdout, sys.stderr):
        stream.reconfigure(encoding="utf-8")

    files = load_words()
    credits = json.loads(CREDITS_PATH.read_text(encoding="utf-8")) if CREDITS_PATH.exists() else {}
    if a.source == "wikipedia":
        return run_wikipedia(files, credits, a)
    done, skipped, missing, changed_files = 0, 0, [], set()
    handled = set()

    for path, words in files.items():
        for w in words:
            if a.chapter is not None and chapter_no(w) != a.chapter:
                continue
            if not w.get("image_local_path"):
                w["image_local_path"] = f"/images/{slugify(w.get('german_word'))}.jpg"
                changed_files.add(path)
            rel = w["image_local_path"].lstrip("/")
            if rel in handled:
                continue
            handled.add(rel)
            target = PUBLIC_DIR / rel
            credit_only = target.exists() and not a.force  # image there, credit lost -> look it up again
            if credit_only and Path(rel).name in credits:
                skipped += 1
                continue
            if a.limit is not None and done >= a.limit:
                continue
            try:
                if w.get("image_override_url"):
                    hit = {"url": w["image_override_url"], "author": "", "license": "", "source": w["image_override_url"]}
                else:
                    hit = find_on_commons(search_query(w.get("english_translation"))) or find_on_commons(w.get("german_word"))
                if not hit:
                    if not credit_only:
                        missing.append(f"{w.get('id')} {w.get('german_word')}")
                    continue
                if not credit_only:
                    save_image(http_get(hit["url"]), target)
                    done += 1
                credits[Path(rel).name] = {k: hit[k] for k in ("author", "license", "source")}
                if len(credits) % 25 == 0:  # survive an interrupted run
                    save_credits(credits)
                    print(f"  {len(handled)} words checked, {done} downloaded", flush=True)
            except Exception as e:  # keep going; report at the end
                missing.append(f"{w.get('id')} {w.get('german_word')} ({e})")
            time.sleep(0.5)

    for path in changed_files:
        path.write_text(json.dumps(files[path], ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    CREDITS_PATH.parent.mkdir(parents=True, exist_ok=True)
    CREDITS_PATH.write_text(json.dumps(credits, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    print(f"downloaded {done}, already there {skipped}, not found {len(missing)}")
    if missing:
        report = DATA_DIR / "images_missing.txt"
        report.write_text("\n".join(missing) + "\n", encoding="utf-8")
        print(f"not found list: {report} (set image_override_url for these and re-run)")


if __name__ == "__main__":
    main()
