import pdfplumber
import sys
import io
from collections import Counter

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

PDF = "Goethe-Zertifikat_B1_Wortliste.pdf"

with pdfplumber.open(PDF) as pdf:
    print("total pages:", len(pdf.pages))
    for page_no in [16, 17, 50, 90, 100, 101, 102, 103, 104]:
        page = pdf.pages[page_no - 1]
        words = page.extract_words(x_tolerance=1.5)
        x0s = sorted(w["x0"] for w in words)
        c = Counter(round(x0 / 10) * 10 for x0 in x0s)
        print(f"--- page {page_no}: {len(words)} words, width={page.width:.0f}")
        print("  x0 histogram (bucket:count):", dict(sorted(c.items())))
        texts = [w["text"] for w in words[:6]]
        print("  first words:", texts)
