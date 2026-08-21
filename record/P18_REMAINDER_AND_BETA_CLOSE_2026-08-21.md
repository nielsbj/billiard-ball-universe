# P18 remainder — all five dispositions, and the beta window closes empty (2026-08-21)

*The five items left open by the P18 close-out, worked to the author's dispositions. Plus the
beta-window fact, which arrived mid-pass and changes what the record has to say about how this book
was checked.*

## The beta window closed empty, and the book claims nothing it did not get

From chat-claude: the window ran **30 July – 20 August**. **R1 was invited and never replied. R2 was
contingent on R1 and never happened. The physicist seat was never filled.** So **no external human
read this book before publication.**

**What stood in for it**, all of it in `record/` and all of it machine or author rather than a
stranger's eyes: the hostile read (P1–P16), the reference census, the cold check, and the
pre-release audit that found the shipping build was still the draft build.

**Verified by sweep, 2026-08-21: the manuscript makes no false claim about this.** No
acknowledgements page, no thanks to a reviewer, no assertion of outside review. The only "early
readers" phrases in the source sit inside suppressed craft notes and never print. Nothing to
retract.

**The one open question is the author's alone.** The book's standing rule is that concessions stay on
the page. That no one outside read it is a concession, and it is currently not on the page. Whether
the how-made note should say so is a ruling nobody else can make.

The reception gate therefore moves to publication, and the errata loop is its instrument. `TODO-NIELS`
§3 now records all of this instead of the earlier, kinder "no further replies are expected."

## (1) Second locators — done, 26 paragraphs, 28 entries

Every Dictionary paragraph whose headword matches an index entry now plants `\index{}` in its own
body, so the term's Dictionary page becomes a second locator. **26 paragraphs anchored, 28 index
entries gained the Dictionary page.**

Twenty matched exactly. Six were near-matches taken deliberately, because the concept is the same
even though the wording differs: *Bell inequality; hidden variables* → `hidden variable`; *Bohmian
(pilot-wave) mechanics* → `pilot wave`; *Energy gap; ground state* → `gap`; *Equal fall (equivalence
principle)* → `equivalence principle`; *Lorentz contraction* → `contraction`; *Münchhausen trilemma*
→ `trilemma`.

**Result, measured on the built index: 34 of 76 entries now carry two or more locators, against 8
before this pass.** The remaining 42 single-locator entries are mostly proper names with one real
discussion (Poggio, Dirac, Tarski, Democritus) plus terms with no Dictionary paragraph.

The rendered spread is in the report to the author for the two-minute skim.

## (2) Locator sweep — closed

`tegmark2014` → **`\cite[pp.~130--132]{tegmark2014}`** at the copies claim, on the author's
verification against the physical copy (2026-08-12).

`janiak2014` and `darwin1905` keep **textual** locators, and both phrases were missing from the notes
and have been added: janiak2014 now reads *"The 'so great an absurdity' passage on action at a
distance is in the third letter to Bentley, of 25 Feb. 1692/93"*; darwin1905 now reads *"the
zero-net-force result for perfectly elastic scattering, **in the closing paragraph**"*. **No page
numbers were invented.**

## (3) DOI normalization — done

House form is `url = {https://doi.org/…}`, which 31 entries already used.

| | count |
|---|---|
| `doi =` fields converted to the house url form | **14** |
| arXiv abstract links replaced by the journal DOI | **4** |
| entries now pointing at doi.org | **49** |
| entries still pointing at arXiv | **0** |
| stray `doi =` fields left | **0** |

The four arXiv swaps were CrossRef-verified before use, not assumed: `fan2023` →
10.1103/PhysRevLett.130.071801 (*Measurement of the Electron Magnetic Moment*, PRL **130**, 071801);
`uzan2003` → 10.1103/RevModPhys.75.403 (RMP **75**, 403–455); `ligo2017graviton` →
10.1103/PhysRevLett.118.221101 (*GW170104*, PRL **118**, 221101); `damourdyson1996` →
10.1016/S0550-3213(96)00467-1 (Nucl. Phys. B **480**, 37–54).

## (4) The five bare-entry annotations

Drafted and put to the author in the report, not committed — per the bundle, these go to
chat-claude's eye first. They are listed in the P18 close-out record and repeated in the report.

## (5) Orphans — one cited, four cut

| entry | disposition |
|---|---|
| `edwards2002` | **CITED**, at the natural site: alongside `lesage1782` where the book names *Lucrèce Newtonien*, which is the work `edwards2002` translates |
| `holt2012` | **CUT** — reading-list book, author never named in the manuscript |
| `krauss2012` | **CUT** — same |
| `baadezwicky1934` | **CUT** — entered only to be distinguished from its companion; the distinction now lives in `baadezwicky1934cr`'s own note, where a reader can actually see it |
| `eht2019` | **CUT** — deliberately uncited (Ch. 7 means our own galaxy's centre, `eht2022`), and an uncited entry does not print, so its explanation was invisible |

Each cut leaves a source comment in `ref.bib` carrying the full citation and the reason, so nothing
is lost to someone reading the file; git history keeps the entries themselves. **No further-reading
section was invented to house the two reading-list books.**

**A real benefit fell out of citing `edwards2002`.** It had been reachable only from inside another
entry's `note`, which meant biber could not know it until the bibliography had already been typeset —
the reason the build needed a *second biber pass*. With a genuine in-text citation the key is known
on pass one. **Verified: the standard cycle (pdflatex · biber · makeindex · pdflatex · pdflatex) now
gives 0 undefined references.** The double-biber note in the P18 record is superseded.

## Gates

Direct cycle, PDF mtime checked against each run. **Both editions: 0 errors, 0 Overfull,
0 Float-too-large, 0 undefined references, 0 collisions, 206 pp.**

`\PAGECOUNT` remains **202** and the cover is untouched — the spine still recomputes once, at the
author's re-declaration of final. At 206 pp on cream that will be **0.5150 in**, wrap
**12.7650 × 9.25 in**.

## Still open

- The five bare-entry annotations, pending the author's ruling.
- Whether the how-made note should disclose that no one outside read the book.
- The index's second folio is only about a third full — cosmetic, and balancing it would cost a
  reflow for no reader benefit.
