#!/usr/bin/env python3
# SPDX-License-Identifier: MIT
"""audiobook/make_narration_script.py — narration-script generator.

Consumes the ebook pipeline's verified XHTML (ebook/build/text/, spine.json)
and emits one plain-text narration file per spine item into audiobook/build/
script/, plus FLAGS.md listing every place the text needs an author ruling
before it can be read aloud. The master tex and the ebook build are never
modified; like the ebook pipeline, this is a one-way conversion.

Markers left in the script files (all double-bracketed, so a sweep for
r"\\[\\[" finds anything unresolved before render):

  [[PAUSE]]            — the ❦ separator; maps to a long break at render time
  [[SPEAKER: Kai]]     — dialogue attribution (policy ruled in README)
  [[FIGURE n: ...]]    — a diagram the prose may lean on; needs a spoken bridge
  [[PLATE]]            — decorative art (chapter plates, coda reprise); silent
  [[TABLE: ...]]       — a table; needs a spoken adaptation
  [[BOX: ...]]         — a boxed insert (the E3 box); needs placement ruling
  [[FOOTNOTE n: ...]]  — footnote body, placed where its marker sat
  [[MATH: ...]]        — non-trivial math (superscripts etc.); spoken form TBD

Citations ([66]-style) are stripped silently — standard audiobook practice;
the count is reported. Run: python audiobook/make_narration_script.py
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXT = ROOT / "ebook" / "build" / "text"
SPINE = ROOT / "ebook" / "build" / "spine.json"
OUT = ROOT / "audiobook" / "build" / "script"

# Spine files and how the narration treats them. Everything not listed is
# skipped with a note (titlepage/kolofon become the spoken credits, authored
# separately; references and the index have no spoken form).
INCLUDE = [
    "dedication.xhtml", "howtoread.xhtml",
    "part1.xhtml", "ch1.xhtml", "ch2.xhtml",
    "part2.xhtml", "ch3.xhtml",
    "part3.xhtml", "ch4.xhtml", "ch5.xhtml",
    "part4.xhtml", "ch6.xhtml", "ch7.xhtml",
    "coda.xhtml", "epilogue.xhtml", "howmade.xhtml",
    "appA.xhtml", "appB.xhtml",
]
SKIP = {"titlepage.xhtml": "spoken opening credits are authored, not converted",
        "kolofon.xhtml": "spoken closing credits are authored, not converted",
        "references.xhtml": "no spoken form; companion PDF carries them"}


def fail(msg):
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def untag(s):
    s = re.sub(r"<[^>]+>", "", s)
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


class Converter:
    def __init__(self):
        self.flags = []          # (file, kind, detail)
        self.cite_count = 0
        self.unknown = []

    def flag(self, fname, kind, detail):
        self.flags.append((fname, kind, detail))

    def convert(self, fname, src):
        out = []
        self.current = fname

        # Footnote bodies, keyed by id, removed from the flow first.
        notes = {}
        def grab_note(m):
            body = untag(re.sub(r"<a[^>]*>[^<]*</a>", "", m.group(2), count=1))
            notes[m.group(1)] = body
            return ""
        src = re.sub(r'<aside epub:type="footnote" id="(fn\d+)"[^>]*>(.*?)</aside>',
                     grab_note, src, flags=re.S)
        src = re.sub(r'<hr class="fnrule"/?>', "", src)
        src = re.sub(r'<div class="footnotes">\s*</div>', "", src, flags=re.S)

        # Note markers -> inline [[FOOTNOTE]] at the exact sentence position.
        def put_note(m):
            body = notes.pop(m.group(1), None)
            if body is None:
                fail(f"{fname}: noteref {m.group(1)} has no footnote body")
            n = m.group(1)[2:]
            self.flag(fname, "FOOTNOTE", f"fn{n}: {body[:90]}…" if len(body) > 90 else f"fn{n}: {body}")
            return f" [[FOOTNOTE {n}: {body}]] "
        src = re.sub(r'<a class="noteref"[^>]*href="#(fn\d+)"[^>]*>.*?</a>',
                     put_note, src, flags=re.S)

        # Citations: strip silently (with the nbsp glue before them), count.
        src, n = re.subn(r'[  ]*<span class="cite">.*?</span>', "", src, flags=re.S)
        self.cite_count += n

        # Figures.
        def do_figure(m):
            body = m.group(0)
            cap = re.search(r"<figcaption>(.*?)</figcaption>", body, flags=re.S)
            if "chapterart" in body or 'class="plate"' in body:
                return "\n[[PLATE]]\n"
            cap_text = untag(cap.group(1)) if cap else "(no caption)"
            self.flag(fname, "FIGURE", cap_text)
            return f"\n[[FIGURE: {cap_text}]]\n"
        src = re.sub(r"<figure.*?</figure>", do_figure, src, flags=re.S)

        # Tables -> flag with the header row as identity.
        def do_table(m):
            first = untag(re.sub(r"P[\d.]+cm", "", m.group(0)))[:100]
            self.flag(fname, "TABLE", first)
            return f"\n[[TABLE: {first}]]\n"
        src = re.sub(r"<table.*?</table>", do_table, src, flags=re.S)

        # Boxed inserts (centerbox/fbox, e.g. the E3 box).
        def do_box(m):
            text = untag(m.group(0))
            self.flag(fname, "BOX", text[:100])
            return f"\n[[BOX: {text}]]\n"
        src = re.sub(r'<div class="centerbox">.*?</div>\s*</div>|<div class="centerbox">.*?</div>',
                     do_box, src, flags=re.S)

        # Display math.
        def do_dispmath(m):
            text = untag(m.group(1))
            self.flag(fname, "MATH", f"display: {text}")
            return f"\n[[MATH: {text}]]\n"
        src = re.sub(r'<div class="dispmath">(.*?)</div>', do_dispmath, src, flags=re.S)

        # Inline math spans: trivial ones (plain words/numbers, no sup) pass
        # through as text; anything with a superscript or operators is flagged.
        def do_math(m):
            inner = m.group(1)
            if "<sup>" in inner or re.search(r"[×·√∝≈≤≥−/^]", untag(inner)):
                spoken = untag(re.sub(r"<sup>([^<]*)</sup>", r"^\1", inner))
                self.flag(fname, "MATH", spoken)
                return f"[[MATH: {spoken}]]"
            return untag(inner)
        src = re.sub(r'<span class="math">(.*?)</span>', do_math, src, flags=re.S)
        # Superscripts outside math spans (rare) get the same treatment.
        src = re.sub(r"(\S*)<sup>([^<]+)</sup>",
                     lambda m: (self.flag(fname, "MATH", f"{m.group(1)}^{m.group(2)}"),
                                f"[[MATH: {m.group(1)}^{m.group(2)}]]")[1], src)

        # Separators and speakers.
        src = re.sub(r'<p class="sep">.*?</p>', "\n[[PAUSE]]\n", src, flags=re.S)
        src = re.sub(r'<p class="speakerline"><span class="speaker">([^<:]+):</span>',
                     lambda m: f'<p>[[SPEAKER: {m.group(1)}]] ', src)

        # Headings become spoken headings on their own line.
        for tag in ("h1", "h2", "h3"):
            src = re.sub(rf"<{tag}[^>]*>(.*?)</{tag}>",
                         lambda m: f"\n\n{untag(m.group(1))}\n\n", src, flags=re.S)

        # Paragraph flow.
        src = re.sub(r"<p[^>]*>", "\n\n", src)
        src = re.sub(r"</p>", "", src)
        src = re.sub(r"<li[^>]*>", "\n\n", src)
        src = re.sub(r"<(blockquote|div|ul|ol)[^>]*>|</(blockquote|div|li|ul|ol)>", "\n", src)

        # Anything still tag-shaped that we did not plan for is an error,
        # same spirit as the ebook converter's zero-warning rule.
        leftovers = set(re.findall(r"<(/?[a-zA-Z][a-zA-Z0-9]*)", src))
        known = {"em", "/em", "strong", "/strong", "span", "/span", "a", "/a",
                 "i", "/i", "b", "/b", "br", "img", "body", "/body", "html",
                 "/html", "head", "/head", "title", "/title", "meta", "link",
                 "section", "/section", "header", "/header"}
        bad = leftovers - known
        if bad:
            self.unknown.append((fname, sorted(bad)))
        src = re.sub(r"<[^>]+>", "", src)

        text = html.unescape(src)
        text = re.sub(r"[ \t]+", " ", text)
        text = re.sub(r" ?\n ?", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text).strip()
        if notes:
            fail(f"{fname}: footnote bodies never referenced: {sorted(notes)}")
        return text


def main():
    if not SPINE.exists():
        fail("ebook/build/spine.json missing - run the ebook pipeline first "
             "(python ebook/build_ebook.py)")
    spine = [e["file"] for e in json.loads(SPINE.read_text(encoding="utf-8"))]
    order = [f for f in ["dedication.xhtml"] + spine if f in INCLUDE]
    OUT.mkdir(parents=True, exist_ok=True)

    conv = Converter()
    index = []
    for i, fname in enumerate(order, 1):
        p = TEXT / fname
        if not p.exists():
            fail(f"missing {p}")
        text = conv.convert(fname, p.read_text(encoding="utf-8"))
        out_name = f"{i:02d}_{fname.replace('.xhtml', '')}.txt"
        (OUT / out_name).write_text(text + "\n", encoding="utf-8", newline="\n")
        words = len(text.split())
        index.append((out_name, words))

    if conv.unknown:
        for fname, tags in conv.unknown:
            print(f"ERROR unplanned tags in {fname}: {tags}", file=sys.stderr)
        sys.exit(1)

    total_words = sum(w for _, w in index)
    total_chars = sum((OUT / n).stat().st_size for n, _ in index)
    kinds = {}
    for _, kind, _ in conv.flags:
        kinds[kind] = kinds.get(kind, 0) + 1

    report = ["# Narration flags — generated, do not edit",
              "",
              f"Files: {len(index)} · words {total_words:,} · bytes {total_chars:,} · "
              f"citations stripped {conv.cite_count} · flags {len(conv.flags)} {kinds}",
              "",
              "| # | file | kind | detail |", "|---|---|---|---|"]
    for k, (fname, kind, detail) in enumerate(conv.flags, 1):
        detail = detail.replace("|", "\\|")
        report.append(f"| {k} | {fname} | {kind} | {detail} |")
    (OUT.parent / "FLAGS.md").write_text("\n".join(report) + "\n", encoding="utf-8", newline="\n")

    for n, w in index:
        print(f"  {n:28s} {w:7,d} words")
    print(f"OK: {len(index)} files, {total_words:,} words, ~{total_words/150/60:.1f} h at 150 wpm; "
          f"{len(conv.flags)} flags -> audiobook/build/FLAGS.md; skipped: {', '.join(SKIP)}")


if __name__ == "__main__":
    main()
