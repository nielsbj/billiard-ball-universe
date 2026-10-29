#!/usr/bin/env python3
# SPDX-License-Identifier: MIT
"""audiobook/scan_pronunciation.py — find what a narrator will get wrong.

The flag markers in the narration script catch everything that needed an
editorial DECISION. This catches the other class: text that is perfectly
ordinary on the page and goes wrong only when spoken, and which therefore
carries no marker at all — diacritics in names a synthetic English voice may
anglicise, digits inside words, Greek letters loose in prose, Latin
abbreviations, Roman numerals, and the handful of terms this book invented.

It emits audiobook/build/PRONUNCIATION.md: a candidate lexicon to hand to the
TTS engine (ElevenLabs supports per-project pronunciation dictionaries) plus a
list of spots to listen to in the first render. It changes no text and makes no
decisions; everything it finds is a listening item for the author.

Run: python audiobook/scan_pronunciation.py
"""

import collections
import glob
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRIPT = ROOT / "audiobook" / "build" / "script"
OUT = ROOT / "audiobook" / "build" / "PRONUNCIATION.md"

# Terms this book coined or leans on, where a wrong stress would be obvious to
# the author and invisible to everyone else. Listed so the first render is
# checked against them deliberately rather than by luck.
HOUSE_TERMS = ["massion", "massions", "shadow push", "the gap", "cascade",
               "the local surplus", "circulation", "Le Sage", "Fatio",
               "Tkachenko", "skyrmion", "Oklo"]

# Latin/scholarly abbreviations: a narrator may spell them out or say them
# wrong; in speech they usually want expanding.
ABBREV = {"cf.": "compare", "i.e.": "that is", "e.g.": "for example",
          "etc.": "and so on", "vs.": "versus", "ibid.": "the same source",
          "pp.": "pages", "ca.": "about", "c.": "about"}


def main():
    files = sorted(glob.glob(str(SCRIPT / "*.txt")))
    if not files:
        print("ERROR: no narration script; run make_narration_script.py first",
              file=sys.stderr)
        sys.exit(1)

    diacritics = collections.Counter()   # word -> count
    greek = collections.Counter()
    digits_in_words = collections.Counter()
    abbrevs = collections.Counter()
    romans = collections.Counter()
    house = collections.Counter()
    where = collections.defaultdict(set)  # token -> set of files

    for path in files:
        name = Path(path).name
        text = Path(path).read_text(encoding="utf-8")
        # Markers are editorial scaffolding, not speech; exclude their content
        # so the lexicon describes what will actually be read.
        spoken = re.sub(r"\[\[[A-Z]+[^\]]*\]\]", " ", text)
        # Typographic punctuation is non-ASCII but says nothing about
        # pronunciation; left in, every possessive ("book's") reads as a
        # diacritic hit and buries the real names.
        spoken = spoken.translate(str.maketrans({"’": "'", "‘": "'",
                                                 "“": '"', "”": '"',
                                                 "—": " ", "–": " ",
                                                 "…": " ", " ": " "}))

        for word in re.findall(r"[^\W\d_]+(?:[-'’][^\W\d_]+)*", spoken, re.UNICODE):
            if any(ord(c) > 127 for c in word):
                if any("GREEK" in unicodedata.name(c, "") for c in word):
                    greek[word] += 1
                else:
                    diacritics[word] += 1
                where[word].add(name)
        for tok in re.findall(r"\b\w*\d+\w*\b", spoken):
            digits_in_words[tok] += 1
            where[tok].add(name)
        low = spoken.lower()
        for ab in ABBREV:
            n = len(re.findall(r"(?<![\w.])" + re.escape(ab), low))
            if n:
                abbrevs[ab] += n
                where[ab].add(name)
        for rn in re.findall(r"\b(?<!\.)(?:I{2,3}|IV|VI{0,3}|IX|XI{0,2})\b", spoken):
            romans[rn] += 1
            where[rn].add(name)
        for term in HOUSE_TERMS:
            n = len(re.findall(r"\b" + re.escape(term) + r"\b", spoken, re.I))
            if n:
                house[term] += n
                where[term].add(name)

    def table(counter, head, note):
        if not counter:
            return [f"### {head}", "", "None found.", ""]
        rows = [f"### {head}", "", note, "",
                "| token | times | files |", "|---|---|---|"]
        for tok, n in sorted(counter.items(), key=lambda kv: (-kv[1], kv[0])):
            rows.append(f"| `{tok}` | {n} | {', '.join(sorted(where[tok]))} |")
        rows.append("")
        return rows

    out = ["# Pronunciation and listening list — generated, do not edit", "",
           "Everything here is ORDINARY TEXT that carries no flag marker: it needs",
           "no editorial decision, only a correct reading. Use it twice — to seed the",
           "TTS engine's pronunciation dictionary before the render, and as the list of",
           "spots to listen to in the first pass.", ""]
    out += table(diacritics, "Names and words with diacritics",
                 "A synthetic English voice will often anglicise these. The Danish "
                 "**Ø** and the French **é/è** are the likeliest to go wrong, and "
                 "Ørsted is a name the author will hear instantly.")
    out += table(greek, "Greek letters loose in prose",
                 "These sit outside the math markers, so nothing else catches them.")
    out += table(digits_in_words, "Digits inside the spoken text",
                 "The book otherwise spells numbers out, so each of these is either "
                 "deliberate or a leftover. Note the book is British: it wants "
                 "\"a hundred **and** eighteen\", which US-trained voices often drop.")
    out += table(abbrevs, "Latin and scholarly abbreviations",
                 "In speech these usually want expanding: "
                 + "; ".join(f"`{k}` → {v}" for k, v in ABBREV.items()) + ".")
    out += table(romans, "Roman numerals in prose",
                 "The classic failure is \"Part I\" read as \"Part eye\". The part "
                 "pages are already converted by the generator; these are the rest.")
    out += table(house, "House terms — listen for stress, not pronunciation",
                 "Coined or load-bearing vocabulary. A wrong stress here is the kind "
                 "of thing only the author will notice, and will notice every time.")

    OUT.write_text("\n".join(out) + "\n", encoding="utf-8", newline="\n")
    total = sum(map(len, (diacritics, greek, digits_in_words, abbrevs, romans)))
    print(f"OK: {total} distinct pronunciation items "
          f"({len(diacritics)} diacritic, {len(greek)} greek, "
          f"{len(digits_in_words)} digit, {len(abbrevs)} abbrev, "
          f"{len(romans)} roman) + {len(house)} house terms -> {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
