"""Watch a running crawler.py and print one status line per event (for Claude's Monitor).

Prints a status line every --interval seconds, STALLED when nothing (images,
credits, log) changed for --stall seconds, and EXITED with the crawler's last
log lines when its process is gone; then it exits.

Usage:  python scripts/watch_crawler.py [--interval 900] [--stall 1800]
"""

import argparse
import json
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from crawler import CREDITS_PATH, DATA_DIR, PUBLIC_DIR, load_words, slugify  # noqa: E402

LOG = DATA_DIR / "crawler.log"
MISSING = DATA_DIR / "images_missing.txt"


def crawler_running() -> bool:
    out = subprocess.run(
        ["powershell", "-NoProfile", "-Command",
         "Get-CimInstance Win32_Process -Filter \"Name like 'python%'\" | ForEach-Object CommandLine"],
        capture_output=True, text=True).stdout
    return any("crawler.py" in line and "watch_crawler" not in line for line in out.splitlines())


def log_lines() -> list[str]:
    if not LOG.exists():
        return []
    raw = LOG.read_bytes()
    text = raw.decode("utf-16") if raw[:2] == b"\xff\xfe" else raw.decode("utf-8-sig", "replace")
    lines = (line.strip("﻿ \t") for line in text.splitlines())  # PowerShell may leave BOMs
    return [line for line in lines if line]


def total_images() -> int:
    """Distinct image paths the crawler will handle (same rule as crawler.main)."""
    return len({w.get("image_local_path") or f"/images/{slugify(w.get('german_word'))}.jpg"
                for words in load_words().values() for w in words})


def snapshot() -> dict:
    try:
        credits = len(json.loads(CREDITS_PATH.read_text(encoding="utf-8")))
    except (OSError, ValueError):  # crawler may be mid-write
        credits = -1
    lines = log_lines()
    return {"images": sum(1 for _ in (PUBLIC_DIR / "images").glob("*.jpg")),
            "credits": credits, "log": lines[-1] if lines else ""}


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--interval", type=int, default=900)
    p.add_argument("--stall", type=int, default=1800)
    a = p.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")
    total = total_images()
    last, last_change, last_print = None, time.time(), 0.0
    while True:
        now = time.time()
        s = snapshot()
        if s != last:
            last, last_change = s, now
        stamp = datetime.now().strftime("%H:%M")
        status = f"images {s['images']}/{total}, credits {s['credits']}, log: {s['log'] or '-'}"
        if not crawler_running():
            print(f"[{stamp}] EXITED {status}")
            print("  last log lines: " + " | ".join(log_lines()[-4:]))
            if MISSING.exists():
                print(f"  {MISSING.name}: {len(MISSING.read_text(encoding='utf-8').splitlines())} lines")
            return
        if now - last_change >= a.stall:
            print(f"[{stamp}] STALLED {int((now - last_change) / 60)} min, {status}", flush=True)
            last_change = now  # report a stall once per --stall period
        elif now - last_print >= a.interval:
            print(f"[{stamp}] running, {status}", flush=True)
            last_print = now
        time.sleep(30)


if __name__ == "__main__":
    main()
