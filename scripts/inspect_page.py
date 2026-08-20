import pdfplumber
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

PDF = "Goethe-Zertifikat_B1_Wortliste.pdf"

page_no = int(sys.argv[1]) if len(sys.argv) > 1 else 16

with pdfplumber.open(PDF) as pdf:
    page = pdf.pages[page_no - 1]
    print("page size:", page.width, page.height)
    words = page.extract_words(x_tolerance=1.5)
    # print raw words sorted by top then x0
    for w in sorted(words, key=lambda w: (round(w["top"]), w["x0"])):
        print(f"top={w['top']:.1f} x0={w['x0']:.1f} x1={w['x1']:.1f} text={w['text']!r}")
