#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Niels Bonde Jensen
# SPDX-License-Identifier: MIT
"""Find figures that print into the text column.

The build log cannot see this defect class. A float whose box overlaps the text
column above it produces no Overfull, no "Float too large", nothing -- at most an
Underfull \\vbox, which eight healthy pages of this book also produce. It was found
by eye on p. 105 (H3, 2026-08-16), and a second instance on p. 43 had been sitting
in the book unreported.

Two checks, run over the built PDF:

  TEXT   two text lines from different blocks whose boxes overlap. Catches a
         figure's own labels printing over prose -- how p. 105 was noticed
         ("travel" interleaved into "every layer its own c").

  INK    non-text ink inside a paragraph's box. The page is rendered, every glyph
         box is masked out, one erosion pass removes the antialiasing fringe that
         survives masking, and whatever dark pixels remain inside a paragraph are
         foreign -- rules, dots, curves, plate edges. This is the check that would
         have caught p. 105 even if that figure had carried no "travel" label.

  BLANK  a prose line whose glyphs stop short of their own baseline. That is what a
         plate's white background rectangle painted over text looks like, and it is
         how p. 43 failed: the top plate's white box cut "is an inventory." through
         the middle, taking the baseline and the descenders with it. Letters sit on
         the baseline, so a line whose ink does not reach it has been painted over.

Geometry is taken from the text layer and from rendered pixels, never from
get_drawings()/get_bboxlog(): for the \\includegraphics plates in figures/ those
report the graphic's *internal* coordinates, unscaled and unclipped -- on p. 43
they claim a 227 pt width for a plate set 104 pt wide, running off the page edge.
Pixels do not lie about where the ink landed.

Usage:  python check_collisions.py [billiard_ball_universe.pdf]
Exit:   0 clean, 1 collisions found, 2 could not run.
"""
import os
import sys
from collections import Counter

try:
    import numpy as np
    import pymupdf as fitz
except ImportError as exc:                                    # pragma: no cover
    sys.stderr.write(
        "check_collisions.py needs PyMuPDF and numpy:  pip install pymupdf numpy\n"
        f"({exc})\n")
    raise SystemExit(2)

DPI = 200            # whole book renders in about 5 s; 1 px = 0.36 pt
DARK = 190           # 0..255 grey; at or below this a pixel counts as ink
GLYPH_PAD = 2        # px of slack around each glyph box, to absorb antialiasing
PROSE_FRAC = 0.60    # a block is prose if its widest line reaches this of the measure
MIN_LINES = 3        # judge foreign ink only in real paragraphs, not headings
MIN_GLYPHS = 8       # do not judge the baseline of a line shorter than this

# Eroded foreign pixels inside a paragraph before it counts as an intrusion.
# Measured over the whole book: healthy pages never exceed 2 px (stray fringe on
# an em-dash), while the plate that landed in the p. 43 paragraph put 132 px in
# it. 8 px keeps a wide margin on both sides. A figure that merely grazes a
# paragraph with a dot or two stays under this -- that is what TEXT and BLANK
# are for; the three checks are meant to be read together.
MIN_FOREIGN = 8
MIN_W = 8.0          # pt of horizontal overlap for a TEXT hit
MIN_H = 2.0          # pt of vertical overlap for a TEXT hit
DROPCAP = 1.8        # a one-glyph line this much taller than normal is a lettrine

# How far above its own baseline a line's ink may stop. Measured over all 4 672
# prose lines of the book: healthy lines never exceed 0.54 pt (99.9th percentile
# 0.53), while the white plate box that cut "is an inventory." on p. 43 put that
# line at 1.71 pt. 1.0 pt sits in the empty gap between the two populations.
BASELINE_DEFICIT = 1.0


def line_records(page):
    """Blocks -> lines, with per-glyph boxes and a prose/not-prose verdict."""
    raw = page.get_text("rawdict")
    blocks = []
    for blk in raw["blocks"]:
        if blk["type"] != 0:
            continue
        lines = []
        for ln in blk["lines"]:
            chars = [c for sp in ln["spans"] for c in sp["chars"]]
            text = "".join(c["c"] for c in chars).strip()
            if not text:
                continue
            solid = [c for c in chars if c["c"].strip()]
            lines.append({
                "bbox": fitz.Rect(ln["bbox"]),
                "text": text,
                "boxes": [fitz.Rect(c["bbox"]) for c in solid],
                "origins": [c["origin"][1] for c in solid],
            })
        if lines:
            blocks.append(lines)
    return blocks


def page_measure(blocks):
    """This page's text measure and left margin. Recto and verso differ here
    (inner 0.85 in, outer 0.65 in), so it must be decided per page, not once."""
    widths = [ln["bbox"].width for b in blocks for ln in b]
    if not widths:
        return 0.0, 0.0
    measure = max(widths)
    lefts = [round(ln["bbox"].x0, 1) for b in blocks for ln in b
             if ln["bbox"].width > 0.5 * measure]
    if not lefts:
        return measure, 0.0
    return measure, Counter(lefts).most_common(1)[0][0]


def is_prose(lines, measure, left):
    widest = max(ln["bbox"].width for ln in lines)
    leftmost = min(ln["bbox"].x0 for ln in lines)
    return widest >= PROSE_FRAC * measure and abs(leftmost - left) < 4


def erode(mask):
    """Drop every pixel that is not surrounded by ink. Masking glyph boxes leaves
    a one-pixel antialiasing fringe around italics and em-dashes; erosion removes
    it and leaves anything with real area -- a dot, a rule, a curve."""
    out = mask.copy()
    out[1:, :] &= mask[:-1, :]
    out[:-1, :] &= mask[1:, :]
    out[:, 1:] &= mask[:, :-1]
    out[:, :-1] &= mask[:, 1:]
    return out


def leader_line(text):
    """TOC dot leaders are legitimately sparse; they are not erased text."""
    stripped = text.replace(" ", "")
    return stripped and stripped.count(".") > 0.5 * len(stripped)


def check_page(page):
    blocks = line_records(page)
    if not blocks:
        return [], 0
    measure, left = page_measure(blocks)
    prose = [is_prose(b, measure, left) for b in blocks]
    hits = []
    narrow = 0

    # ---- TEXT: lines from different blocks sharing space
    heights = sorted(ln["bbox"].height for b in blocks for ln in b)
    normal = heights[len(heights) // 2] if heights else 0

    def dropcap(ln):
        # \lettrine sets a chapter's first letter three lines deep; it is *meant*
        # to sit in the text block, so it is not a collision.
        return len(ln["boxes"]) == 1 and ln["bbox"].height > DROPCAP * normal

    flat = [(bi, ln) for bi, b in enumerate(blocks) for ln in b if not dropcap(ln)]
    for i in range(len(flat)):
        bi, a = flat[i]
        for j in range(i + 1, len(flat)):
            bj, b = flat[j]
            if bi == bj:
                continue                      # same block: consecutive lines, not a clash
            inter = a["bbox"] & b["bbox"]
            if inter.is_empty or inter.height <= MIN_H or inter.width <= 0:
                continue
            if inter.width <= MIN_W:
                # An inline \frac makes MuPDF emit numerator and denominator as
                # their own blocks, overlapping the neighbouring line by exactly
                # the width of the fraction. Measured across this book: 4.0-5.5 pt,
                # against 25.5 pt for the real p. 105 collision. Counted, not hidden.
                narrow += 1
                continue
            hits.append(("TEXT", f"{a['text'][:44]!r} over {b['text'][:44]!r} "
                                 f"({inter.width:.0f}x{inter.height:.0f} pt)"))

    prose_lines = [ln for bi, b in enumerate(blocks) if prose[bi] for ln in b]
    if not prose_lines:
        return hits, narrow

    # ---- pixels
    zoom = DPI / 72.0
    pix = page.get_pixmap(dpi=DPI, colorspace=fitz.csGRAY)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width)
    ink = img <= DARK

    def to_px(r):
        return (max(0, int(r.y0 * zoom)), min(pix.height, int(r.y1 * zoom) + 1),
                max(0, int(r.x0 * zoom)), min(pix.width, int(r.x1 * zoom) + 1))

    glyph = np.zeros_like(ink)
    for b in blocks:
        for ln in b:
            for box in ln["boxes"]:
                y0, y1, x0, x1 = to_px(box)
                glyph[max(0, y0 - GLYPH_PAD):y1 + GLYPH_PAD,
                      max(0, x0 - GLYPH_PAD):x1 + GLYPH_PAD] = True
    foreign = erode(ink & ~glyph)

    # ---- INK: foreign ink inside a paragraph
    for bi, b in enumerate(blocks):
        if not prose[bi] or len(b) < MIN_LINES:
            continue
        box = fitz.Rect(b[0]["bbox"])
        for ln in b:
            box |= ln["bbox"]
        y0, y1, x0, x1 = to_px(box)
        n = int(foreign[y0:y1, x0:x1].sum())
        if n >= MIN_FOREIGN:
            hits.append(("INK", f"{n} px of non-text ink inside the paragraph at "
                                f"{b[0]['text'][:38]!r}"))

    # ---- BLANK: prose whose glyphs stop short of their own baseline
    for ln in prose_lines:
        if len(ln["boxes"]) < MIN_GLYPHS or leader_line(ln["text"]):
            continue
        base = float(np.median(ln["origins"]))
        short = []
        for box in ln["boxes"]:
            y0, y1, x0, x1 = to_px(box)
            rows = np.where(ink[y0:y1, x0:x1].any(axis=1))[0]
            if len(rows):
                short.append(base - (y0 + rows[-1]) / zoom)
        if not short:
            continue
        deficit = float(np.median(short))
        if deficit > BASELINE_DEFICIT:
            hits.append(("BLANK", f"ink stops {deficit:.1f} pt above the baseline in "
                                  f"{ln['text'][:44]!r} -- painted over"))
    return hits, narrow


def main(argv):
    here = os.path.dirname(os.path.abspath(__file__))
    path = argv[1] if len(argv) > 1 else os.path.join(here, "billiard_ball_universe.pdf")
    if not os.path.exists(path):
        sys.stderr.write(f"no such PDF: {path}\n")
        return 2

    # Refuse to certify a PDF the current source did not produce. pdflatex leaves
    # the previous PDF in place when it dies, so without this the gate cheerfully
    # passes a stale file and reports the book clean when the build never ran --
    # which is exactly what it did on 2026-08-16 with the PDF open in a viewer.
    stem = os.path.splitext(path)[0]
    tex, log = stem + ".tex", stem + ".log"
    if os.path.exists(tex) and os.path.getmtime(tex) > os.path.getmtime(path):
        sys.stderr.write(
            f"STALE: {os.path.basename(tex)} is newer than {os.path.basename(path)}.\n"
            "The build did not produce this PDF; nothing here can be trusted.\n")
        return 2
    if os.path.exists(log):
        with open(log, encoding="utf-8", errors="replace") as fh:
            tail = fh.read()
        if "Fatal error occurred" in tail:
            sys.stderr.write(
                f"BUILD FAILED: {os.path.basename(log)} records a fatal error.\n")
            if "I can't write on file" in tail:
                sys.stderr.write(
                    "The PDF is locked -- close it in your viewer and rebuild.\n")
            return 2
    doc = fitz.open(path)
    total = narrow = 0
    for pno in range(len(doc)):
        page = doc[pno]
        hits, n = check_page(page)
        narrow += n
        if hits:
            total += len(hits)
            print(f"PDF p.{pno + 1} (folio {page.get_label() or '?'})")
            for kind, msg in hits:
                print(f"    {kind:6s} {msg}")
    print(f"check_collisions: {len(doc)} pages, {total} collision(s); "
          f"{narrow} stacked-fraction overlap(s) below the {MIN_W:.0f} pt width "
          f"threshold, not counted.")
    if total:
        print("A figure is printing into the text. Zero-tolerance gate (H3).")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
