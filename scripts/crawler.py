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

Usage:  python scripts/crawler.py [--force] [--chapter N] [--limit N]
Pillow is optional: with it, images are re-encoded as JPEG quality 70 to keep
the repo small; without it the 640px Commons thumbnail is saved as-is.
"""

import argparse
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
WIDTH = 640

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
    a = p.parse_args(argv)
    for stream in (sys.stdout, sys.stderr):
        stream.reconfigure(encoding="utf-8")

    files = load_words()
    credits = json.loads(CREDITS_PATH.read_text(encoding="utf-8")) if CREDITS_PATH.exists() else {}
    done, skipped, missing, changed_files = 0, 0, [], set()
    handled = set()

    for path, words in files.items():
        for w in words:
            if a.chapter is not None and str(w.get("chapter")) != str(a.chapter):
                continue
            if not w.get("image_local_path"):
                w["image_local_path"] = f"/images/{slugify(w.get('german_word'))}.jpg"
                changed_files.add(path)
            rel = w["image_local_path"].lstrip("/")
            if rel in handled:
                continue
            handled.add(rel)
            target = PUBLIC_DIR / rel
            if target.exists() and not a.force:
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
                    missing.append(f"{w.get('id')} {w.get('german_word')}")
                    continue
                save_image(http_get(hit["url"]), target)
                credits[Path(rel).name] = {k: hit[k] for k in ("author", "license", "source")}
                done += 1
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
