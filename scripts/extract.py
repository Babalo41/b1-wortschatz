"""
Extract the B1 Wortliste (pages 16-102) into data/words.json.

Layout model (verified visually against rendered page images):
  - Each page has two half-columns (left: x0 < mid, right: x0 >= mid).
  - Each half-column has a headword sub-column (low x0, left-aligned, may be
    indented for visually-nested related entries) and an example sub-column
    (higher x0), with a per-page/per-half empirically-detected split point.
  - Reading order: all entries in the left half top-to-bottom, then all
    entries in the right half top-to-bottom.
  - A headword block is 1-3 lines: nouns are usually 1 line (+ optional
    region/cross-reference continuation lines); verbs are up to 3 lines
    (infinitive+3sg, praeteritum, aux+participle); adjectives/adverbs/
    particles are a single bare token line.
  - Examples are aligned to the preceding headword block by vertical
    position (last headword block whose top <= example line's top).
"""
import json
import re
import statistics
import sys
from collections import defaultdict

import pdfplumber

PDF_PATH = "Goethe-Zertifikat_B1_Wortliste.pdf"
FIRST_PAGE = 16
LAST_PAGE = 102  # inclusive; 103 = Notizen (blank), 104 = colophon

FURNITURE_EXACT = {"WORTLISTE", "ZERTIFIKAT", "B1"}
PAGE_NUM_RE = re.compile(r"^\d{1,3}$")
FOOTER_MARKER_RE = re.compile(r"^\d+_SV$")
SINGLE_LETTER_RE = re.compile(r"^[A-ZÄÖÜ]$")

PLURAL_CODE_RE = re.compile(
    r"^(¨?-[A-Za-zäöüß]*(?:/-?[A-Za-zäöüß]+)?|-|\(Pl\.\))"
)
REGION_TOKEN_RE = re.compile(r"^\(?(D|A|CH)[,\)]?:?$|^→$")

AUX_WORDS = {"hat", "ist"}
AUX_RE = re.compile(r"^(hat|ist)(/(hat|ist))?$")


def is_aux_token(tok):
    return bool(AUX_RE.match(tok))


def is_verb_infinitive_token(tok):
    """First token of a verb headword line: ends in 'n,' and is lowercase
    (allows leading '(' for compounds like '(herunter-)fahren,')."""
    if not tok.endswith(","):
        return False
    stem = tok[:-1]
    if not stem.endswith("n"):
        return False
    first_char = stem.lstrip("(")[:1]
    return first_char.islower() or first_char in "äöü"


def is_noun_article(tok):
    if tok in ("der", "die", "das"):
        return True
    return bool(re.fullmatch(r"(der|die|das)(/(der|die|das))+", tok))


def is_bare_plural_noun_start(tokens):
    """e.g. ['Abgase', '(Pl.)'] -- capitalized word, no article, followed
    directly by a plural-code-like token."""
    if len(tokens) < 2:
        return False
    t0 = tokens[0]
    if not t0[:1].isupper():
        return False
    return bool(PLURAL_CODE_RE.match(tokens[1]))


def is_region_continuation_context(block_tokens_flat):
    """True if the block accumulated so far ends with a region/cross-
    reference cue (e.g. '(D)->A, CH:', '(CH)', '->'), meaning a following
    bare capitalized word is a cross-referenced synonym (e.g. 'Matura'),
    not a new dictionary entry."""
    if not block_tokens_flat:
        return False
    last = block_tokens_flat[-1]
    return bool(last.endswith(":") or last == "→" or re.match(r"^\((D|A|CH)[,)]?", last))


def looks_like_new_entry(tokens, block_tokens_flat=None):
    t0 = tokens[0]
    if is_noun_article(t0):
        return True
    if is_bare_plural_noun_start(tokens):
        return True
    if t0 == "sich" and len(tokens) > 1 and is_verb_infinitive_token(tokens[1]):
        return True
    if is_verb_infinitive_token(t0):
        return True
    # bare adjective/adverb/particle: single all-alone token, lowercase start,
    # not a comma-continuation, not a region abbreviation like "CH:" "D,"
    if (
        not t0.endswith(",")
        and not t0.endswith(":")
        and not is_aux_token(t0)
        and not REGION_TOKEN_RE.match(t0)
        and not re.match(r"^\(.*\)$", t0)
        and (t0[:1].islower() or t0[:1] in "äöü" or t0.endswith("-"))
    ):
        return True
    # a lone capitalized word (no article, no comma, no plural code) is
    # ambiguous: it's a cross-referenced synonym continuation (e.g.
    # "Matura" after "CH:") if the block-so-far ends on a region cue,
    # otherwise treat it as its own new (article-less) noun entry (e.g.
    # a standalone "Volleyball" with no shown plural).
    if len(tokens) == 1 and t0[:1].isupper() and not REGION_TOKEN_RE.match(t0):
        return not is_region_continuation_context(block_tokens_flat or [])
    return False


def clean_plural_token(tok):
    """Strip accidentally-glued example numbering, e.g. '¨-er1.' -> '¨-er'."""
    m = PLURAL_CODE_RE.match(tok)
    return m.group(1) if m else tok


def group_lines(words, tol=2.5):
    """Group words into lines by clustering close 'top' values (not naive
    rounding -- adjacent rows can be as little as ~1.4pt apart, so a rounded
    bucket boundary can split one visual row into two), sorted by x0 within
    a line."""
    if not words:
        return []
    ws = sorted(words, key=lambda w: w["top"])
    lines = []
    current = [ws[0]]
    current_top = ws[0]["top"]
    for w in ws[1:]:
        if w["top"] - current_top <= tol:
            current.append(w)
        else:
            lines.append({"top": current_top, "words": sorted(current, key=lambda x: x["x0"])})
            current = [w]
            current_top = w["top"]
    lines.append({"top": current_top, "words": sorted(current, key=lambda x: x["x0"])})
    return lines


# Empirically verified across pages 16, 17, 50, 90, 100, 101, 102 (x0
# histograms show a consistent, clean gap in this range on every sampled
# page): headword text in the left half never exceeds ~x0=100 (even the
# most-indented nested/related entries top out around 97), and the example
# sub-column never starts before ~x0=131. Same relationship holds in the
# right half, offset by the half-page width. An adaptive per-page gap
# search was tried first but is fooled by headwords sitting at multiple
# indent levels (nested "related word" entries) -- the largest x0 gap on a
# page is sometimes *between* two indent levels of headwords, not between
# headwords and examples. Fixed geometry is more reliable for this
# consistently-templated document.
# Re-verified with a fine-grained (1pt bucket) x0 histogram aggregated
# across ALL 87 wordlist pages: left-half headword words cluster solidly
# up through x0=126 with nothing at 127-131, then a massive example-zone
# cluster starts at x0=132 (numbered-example markers) and 142 (example
# text). Right-half headword words cluster up through x0=405 with nothing
# at 406-410, then example zone starts at 411/421. Thresholds below sit in
# the middle of each empty gap.
LEFT_SPLIT_X = 129.0
RIGHT_SPLIT_X = 408.0


def is_furniture(word):
    text = word["text"]
    top = word["top"]
    if text in FURNITURE_EXACT:
        return True
    if FOOTER_MARKER_RE.match(text):
        return True
    if top < 80 or top > 785:
        return True
    if PAGE_NUM_RE.match(text) and (top < 80 or top > 785):
        return True
    return False


def filter_letter_headings(words):
    """Drop lines that consist of exactly one single-letter token (section
    heading like 'A', 'B', 'C' ...)."""
    buckets = defaultdict(list)
    for w in words:
        buckets[round(w["top"])].append(w)
    drop_tops = {
        top for top, ws in buckets.items() if len(ws) == 1 and SINGLE_LETTER_RE.match(ws[0]["text"])
    }
    return [w for w in words if round(w["top"]) not in drop_tops]


def repair_hyphenation(tokens):
    """Join a list of word-strings, re-merging hyphenated line-break splits
    like ['Aben-', 'teuergeschichten.'] -> ['Abenteuergeschichten.']."""
    out = []
    i = 0
    while i < len(tokens):
        t = tokens[i]
        if t.endswith("-") and i + 1 < len(tokens) and re.match(r"^[a-zäöüß]", tokens[i + 1]):
            merged = t[:-1] + tokens[i + 1]
            out.append(merged)
            i += 2
        else:
            out.append(t)
            i += 1
    return out


def flatten_tokens(lines):
    """Flatten a headword block's lines into a token list, repairing
    hyphenated line-break splits (headwords wrap mid-word too, e.g.
    'Aben-' / 'teuer,' -> 'Abenteuer,')."""
    tokens = []
    for line in lines:
        tokens.extend(w["text"] for w in line["words"])
    return repair_hyphenation(tokens)


NUMBERING_MARKER_RE = re.compile(r"^\d{1,2}\.$")


def build_example_text(example_lines):
    """From a list of {'top', 'words'} example lines, produce a list of
    example sentences (split on leading '1.' '2.' style numbering).

    Numbering markers are only recognized as the FIRST word of a physical
    line (that's where they're typographically placed, in their own
    slightly-left-of-body-text sub-column) -- not anywhere a bare "N."
    token occurs, which also matches in-sentence dates like "am 3. Mai".
    """
    sentences = []
    current = []
    for line in example_lines:
        words = line["words"]
        if not words:
            continue
        toks = [w["text"] for w in words]
        if NUMBERING_MARKER_RE.match(toks[0]):
            if current:
                sentences.append(" ".join(repair_hyphenation(current)))
                current = []
            toks = toks[1:]
        current.extend(toks)
    if current:
        sentences.append(" ".join(repair_hyphenation(current)))
    return [s.strip() for s in sentences if s.strip()]


def parse_verb_lines(lines):
    tokens = flatten_tokens(lines)
    reflexive = False
    if tokens and tokens[0] == "sich":
        reflexive = True
        tokens = tokens[1:]

    joined = " ".join(tokens)
    # Split on commas but keep structure: inf, 3sg, praet, aux+partizip
    parts = [p.strip() for p in joined.split(",")]
    parts = [p for p in parts if p]

    infinitive = parts[0] if parts else None
    p3 = parts[1] if len(parts) > 1 else None
    praet = None
    aux = None
    partizip = None
    trailing_note = None

    if len(parts) > 2:
        rest = parts[2]
        rest_tokens = rest.split()
        if rest_tokens and not is_aux_token(rest_tokens[0]):
            # rest starts with the praeteritum form(s) before aux
            m = re.match(r"^(.*?)\s+(hat/ist|ist/hat|hat|ist)\s+(.*)$", rest)
            if m:
                praet = m.group(1).strip()
                aux = m.group(2)
                partizip = m.group(3).strip()
            else:
                praet = rest.strip()
        else:
            aux = rest_tokens[0] if rest_tokens else None
            partizip = " ".join(rest_tokens[1:]) if len(rest_tokens) > 1 else None
    if len(parts) > 3:
        rest2 = parts[3]
        m = re.match(r"^(hat/ist|ist/hat|hat|ist)\s+(.*)$", rest2.strip())
        if m:
            aux = m.group(1)
            partizip = m.group(2).strip()
        elif partizip is None:
            partizip = rest2.strip()

    m_note = re.search(r"\(([^()]+)\)\s*$", partizip or "")
    if m_note:
        trailing_note = m_note.group(1)
        partizip = partizip[: m_note.start()].strip()

    return {
        "head": infinitive,
        "pos": "verb",
        "gender": None,
        "plural": None,
        "verb": {"p3": p3, "praet": praet, "partizip": partizip, "aux": aux},
        "reflexive": reflexive,
        "governance": trailing_note,
    }


def parse_noun_lines(lines):
    tokens = flatten_tokens(lines)

    gender = None
    if tokens and tokens[0] in ("der", "die", "das"):
        gender = {"der": "m", "die": "f", "das": "n"}[tokens[0]]
        tokens = tokens[1:]
    elif tokens and re.fullmatch(r"(der|die|das)(/(der|die|das))+", tokens[0]):
        # dual-gender adjectival nouns, e.g. "der/die Bekannte, -n"
        gender = "/".join({"der": "m", "die": "f", "das": "n"}[g] for g in tokens[0].split("/"))
        tokens = tokens[1:]

    joined = " ".join(tokens)
    # headword up to first comma or a standalone plural-code token
    if "," in joined:
        head_part, rest = joined.split(",", 1)
        head = head_part.strip()
        rest_tokens = rest.strip().split()
    else:
        rest_tokens = tokens[1:] if tokens else []
        head = tokens[0] if tokens else None

    plural = None
    region_tokens = []
    if rest_tokens:
        plural_raw = clean_plural_token(rest_tokens[0])
        if PLURAL_CODE_RE.match(rest_tokens[0]):
            plural = plural_raw
            region_tokens = rest_tokens[1:]
        else:
            region_tokens = rest_tokens

    region = " ".join(region_tokens).strip() or None

    return {
        "head": head,
        "pos": "noun",
        "gender": gender,
        "plural": plural,
        "verb": None,
        "region": region,
    }


def parse_other_lines(lines):
    tokens = flatten_tokens(lines)
    head = tokens[0] if tokens else None
    region = " ".join(tokens[1:]).strip() or None
    return {
        "head": head,
        "pos": "other",
        "gender": None,
        "plural": None,
        "verb": None,
        "region": region,
    }


def parse_headword_block(lines):
    tokens0 = [w["text"] for w in lines[0]["words"]]
    t0 = tokens0[0]
    if is_noun_article(t0) or is_bare_plural_noun_start(tokens0):
        d = parse_noun_lines(lines)
    elif t0 == "sich" or is_verb_infinitive_token(t0):
        d = parse_verb_lines(lines)
        d["region"] = d.pop("governance", None)
    else:
        d = parse_other_lines(lines)
    return d


def verb_block_complete(block):
    """A verb headword block is complete once it has all 4 comma-separated
    segments (infinitiv, 3sg, praeteritum, aux partizip) AND the aux word
    is followed by at least one more (non-dangling) token -- the aux word
    and/or the participle can each land as the last token of a line, with
    the rest wrapping to the next physical line, with or without a
    hyphen."""
    tokens_flat = [w["text"] for line in block for w in line["words"]]
    joined = " ".join(tokens_flat)
    parts = [p.strip() for p in joined.split(",") if p.strip()]
    if len(parts) < 4:
        return False
    last_tokens = parts[-1].split()
    if not last_tokens or not is_aux_token(last_tokens[0]):
        return False
    if len(last_tokens) < 2:
        return False
    if last_tokens[-1].endswith("-"):
        return False
    return True


def split_headword_blocks(headword_lines):
    """Consume the headword-line stream into a list of raw entry blocks
    (each a list of lines)."""
    blocks = []
    i = 0
    n = len(headword_lines)
    while i < n:
        line = headword_lines[i]
        tokens = [w["text"] for w in line["words"]]
        block = [line]
        i += 1
        if is_noun_article(tokens[0]) or is_bare_plural_noun_start(tokens):
            while i < n:
                nxt_tokens = [w["text"] for w in headword_lines[i]["words"]]
                block_flat = [w["text"] for l in block for w in l["words"]]
                if looks_like_new_entry(nxt_tokens, block_flat):
                    break
                block.append(headword_lines[i])
                i += 1
        elif tokens[0] == "sich" or is_verb_infinitive_token(tokens[0]):
            # A verb headword is always exactly 4 comma-separated segments:
            # "infinitiv, 3sg, praeteritum, aux partizip" (the last segment
            # has no trailing comma). Counting commas is more reliable than
            # looking for "hat"/"ist" as a token, because those words also
            # occur as ordinary 3rd-person-singular conjugations of the
            # irregular verbs haben/sein themselves (e.g. "anhaben, hat an,
            # hatte an, hat angehabt" -- "hat" appears twice).
            while i < n and not verb_block_complete(block) and len(block) < 6:
                block.append(headword_lines[i])
                i += 1
            if i < n:
                trailing_tokens = [w["text"] for w in headword_lines[i]["words"]]
                if len(trailing_tokens) == 1 and re.fullmatch(r"\(.+\)", trailing_tokens[0]):
                    block.append(headword_lines[i])
                    i += 1
        else:
            # Bare adjective/adverb/particle entry: still absorb any
            # trailing continuation lines (grammar notes in parens, region
            # markers, gender-variant markers) that don't look like the
            # start of a fresh entry, same rule as noun continuations.
            while i < n:
                nxt_tokens = [w["text"] for w in headword_lines[i]["words"]]
                block_flat = [w["text"] for l in block for w in l["words"]]
                if looks_like_new_entry(nxt_tokens, block_flat):
                    break
                block.append(headword_lines[i])
                i += 1
        blocks.append(block)
    return blocks


def process_half(words, page_no, side):
    if not words:
        return []
    split_x = LEFT_SPLIT_X if side == "L" else RIGHT_SPLIT_X

    head_words = [w for w in words if w["x0"] < split_x]
    ex_words = [w for w in words if w["x0"] >= split_x]

    head_lines = group_lines(head_words)
    ex_lines = group_lines(ex_words)

    blocks = split_headword_blocks(head_lines)
    if not blocks:
        return []

    block_start_tops = [b[0]["top"] for b in blocks]

    import bisect

    entries = []
    for bi, block in enumerate(blocks):
        parsed = parse_headword_block(block)
        parsed["page"] = page_no
        entries.append(parsed)

    # Assign example lines to entries by "last block whose start_top <=
    # example top", with a small backward tolerance: a headword's own row
    # and its example's own row don't always land at the exact same
    # rendered 'top' (a few points of natural offset is common), so
    # comparing against the raw headword top can push an entry's own
    # first example line into the *previous* entry's bucket. Shifting the
    # cut points a few points earlier absorbs that without meaningfully
    # risking misattribution the other direction (real gaps between
    # unrelated entries are typically tens of points).
    TOP_TOLERANCE = 4.0
    shifted_tops = [t - TOP_TOLERANCE for t in block_start_tops]
    example_bucket = [[] for _ in blocks]
    for line in ex_lines:
        idx = bisect.bisect_right(shifted_tops, line["top"]) - 1
        if idx < 0:
            idx = 0
        example_bucket[idx].append(line)

    for entry, ex_lines_for_entry in zip(entries, example_bucket):
        entry["examples"] = build_example_text(ex_lines_for_entry)

    return entries


def extract_all():
    all_entries = []
    with pdfplumber.open(PDF_PATH) as pdf:
        for page_no in range(FIRST_PAGE, LAST_PAGE + 1):
            page = pdf.pages[page_no - 1]
            words = page.extract_words(x_tolerance=1.5)
            words = [w for w in words if not is_furniture(w)]
            words = filter_letter_headings(words)

            mid = page.width / 2
            left = [w for w in words if w["x0"] < mid]
            right = [w for w in words if w["x0"] >= mid]

            all_entries.extend(process_half(left, page_no, "L"))
            all_entries.extend(process_half(right, page_no, "R"))
    return all_entries


def main():
    entries = extract_all()

    for e in entries:
        e.setdefault("region", None)
        e.setdefault("examples", [])
        e.setdefault("plural", None)
        e.setdefault("gender", None)
        e.setdefault("verb", None)
        if e["pos"] == "verb":
            e.pop("reflexive", None) if False else None

    with open("data/words.json", "w", encoding="utf-8") as f:
        json.dump(entries, f, ensure_ascii=False, indent=1)

    print(f"Total entries: {len(entries)}")
    pos_counts = defaultdict(int)
    for e in entries:
        pos_counts[e["pos"]] += 1
    print("By pos:", dict(pos_counts))

    verbs = [e for e in entries if e["pos"] == "verb"]
    complete_verbs = [
        e for e in verbs if e["verb"] and e["verb"].get("p3") and e["verb"].get("praet") and e["verb"].get("partizip") and e["verb"].get("aux")
    ]
    print(f"Verbs with complete principal parts: {len(complete_verbs)} / {len(verbs)}")

    nouns = [e for e in entries if e["pos"] == "noun"]
    nouns_with_plural = [e for e in nouns if e.get("plural")]
    print(f"Nouns with plural code: {len(nouns_with_plural)} / {len(nouns)}")

    print("\nEntries with suspicious long plural field (>6 chars):")
    for e in entries:
        if e.get("plural") and len(e["plural"]) > 6:
            print(" ", e["head"], "->", repr(e["plural"]), "page", e["page"])


if __name__ == "__main__":
    main()
