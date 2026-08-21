# P18 — the audit close-out (2026-08-21)

*All thirteen open items from `PRERELEASE_AUDIT_2026-08-21.md`, worked in one pass. Defaults taken
per the ballot (B1 emend, B2 verified-bound, B4 as ruled). Every new bibliography entry was
CrossRef-verified before use. **206 pp**, both editions 0/0/0/0.*

## Page count moved, and the spine was deliberately not recomputed

**202 → 206.** The bundle predicted 204; the extra two pages come from the Searle paragraph, six new
Dictionary entries, four relocated footnotes and the emended quotation. **`\PAGECOUNT` is untouched
at 202 and the cover was not rebuilt** — per the bundle, the spine recomputes once, at the author's
re-declaration of final. At 206 pp on cream the spine will be **0.5150 in** and the wrap
**12.7650 × 9.25 in**; nothing has been written to the cover yet.

## Citations and claims

**C1 — the `ligo2017` miscite is gone.** The neutron-star mass sentence cited a gamma-ray timing
paper for a mass limit. Now `oppenheimervolkoff1939,fonseca2021`, and the Oppenheimer--Volkoff note
says plainly that *"their own computed limit was near 0.7 solar masses --- cited here as the idea's
origin, not the modern number."*

**C2 — Searle is on the page.** Inserted as its own paragraph after the junction *"On that view the
copy is not like you. He is a second occurrence of you."* It states the Chinese Room at full
strength, then answers it with the one reply available to this book: the copies are not simulations
running on other hardware but *"another performance"* of the same arrangement, and *"there is no
program here --- only physics, twice."*

**Rule-7 check, and it caught something.** The sentence after the insertion read *"So much is
Tegmark's territory."* With Searle now standing between, the bare *"So much"* would have swept in the
Chinese Room, which is not Tegmark's. Re-nouned: **"The copies argument to this point is Tegmark's
territory."**

**C3 — locators promoted where they exist, flagged where they do not.**

| entry | locator | site |
|---|---|---|
| `poincare1908` | 517--522 | the First Wound's three figures (done in the prior pass) |
| `davies1986` | 48--49 | Bell's *"cheapest resolution"* interview |
| `bell1987` | 67--80 | *"How to teach special relativity"* |
| `nietzsche1974` | §341 | the demon announcing eternal recurrence |
| `lucretius` | I.967--982 | the spear at the boundary |
| `sextus` | I | Agrippa's modes / the trilemma |

**Flagged, not guessed:** `janiak2014` (the Newton--Bentley volume) has **no page in its note**, so
none was invented. `tegmark2014` — the bundle proposed pp. 130--132, but the entry's note records
only *"Ch. 4"* for the dimensionality discussion and no page range for the copy estimates; not
promoted. `darwin1905` has no locator recorded. A full book-wide sweep beyond these remains open.

**C4 — the Newton--Bentley quotation is emended (ballot B1 default).** *"a competent faculty"* →
**"any competent faculty"**, the Newton Project transcript's reading, which is the text the book
cites. The bib note now states the variant as fact rather than as a discovery: *"The book quotes the
Newton Project transcript, which reads 'any competent faculty'; some printed texts read 'a competent
faculty'."*

**C5 — the uncited bounds now have sources.**
- *charge agreement* → `bressi2011` (PRA **83**, 052101), matter neutral to better than a part in
  $10^{21}$.
- *pulsar-timing* → `kramer2021` (PRX **11**, 041050), sixteen years of the double pulsar.
- *electron size, ballot B2* — **the number came down, and this is the substantive finding of C5.**
  The prose claimed *"a hundred thousand times smaller than a proton."* The PDG's LEP
  contact-interaction bounds run from about **8.5 to 26 TeV**; at $\hbar c/\Lambda$ that is
  $2.3\times10^{-20}$ m at the weakest and $7.5\times10^{-21}$ m at the strongest, i.e. between
  **3.6 × 10⁴ and 1.1 × 10⁵** times smaller than a proton. *A hundred thousand is reachable only by
  the single most favourable model in the range.* The prose now reads **"ten thousand times smaller
  than a proton"** and cites `pdg2024` — the largest word-form the source supports across the whole
  range. The craft note that had marked this item "resolved" is corrected too, so the record does not
  keep the old number alive.

**C6 — the anecdote and the physics are cited separately.** *"Above about one and a half times the
mass of the sun"* keeps `chandrasekhar1931`; *"computed the figure at nineteen, on the voyage from
India to England"* now cites `wali1991`, the biography.

**C7 — date mismatches.** Prose: *"Hawking argued in 1974, and gave the full account the next
year."* `einstein1920`'s note now says *"delivered at Leiden in 1920 ... printed in the 1922
collection cited here, which is why the two years differ."* `lorentz1904`'s note opens *"The 1904
paper crowning the contraction programme begun in 1892."*

## Footnote discipline

**F1 — the arguing footnote is now text.** The fourth wound's *"I now think"* retraction has moved
out of the footnote and onto the page as its own paragraph, opening preserved. Rule-7 at both ends:
the following sentence read *"I will not hide how much this answer must deliver"*, and with a
paragraph now intervening *"this answer"* had lost its referent — re-nouned to **"the resonance
answer."**

**F2 — the promissory footnote is an inline pointer.** Chapter 3's three-sentence footnote about what
Chapter 7 would establish is replaced by **"(Chapter 7's fifth wound returns to this stake, and
collects it.)"**

**F3 — four decodes moved to first use.** *black hole* (Chapter 4 → was decoded in Chapter 7),
*plasma* (Chapter 6 → was Chapter 7), *anisotropic* (Second Wound → was the fourth wound). The fourth
case was **not what the audit assumed**: the footnote at the superfluid site decodes *Bose--Einstein
condensate*, not *superfluid*, so moving it would have mislabelled it. `superfluid` had in fact never
been decoded anywhere despite having a Dictionary entry; it now gets its own two-sentence footnote at
first use, ending *(Dictionary.)*.

**F4 — the horizon homonym is fenced.** At Chapter 7's first event-horizon use: *"Horizon, from here
to the end of the book: the event horizon ... Not Chapter 4's horizon, which was cosmological ...
Same word, two different fences, and the book now switches fences."*

## Apparatus

**A1 — six Dictionary entries added**, alphabetically placed: *Cascade*, *Dark matter*, *Frozen
state*, *Local surplus*, *Pincer*, *Tower; layer*. (*Superfluid* already had an entry, which is why
F3's new footnote can point at it.)

**A2 — index.** (i) `Bell's theorem` merged into `Bell`. (ii) The running head is title-case:
`\indexsetup{headers={Index}{Index}}` — the built text now contains **zero** occurrences of `INDEX`.
(iv) Second locators for all eight argued-with names, verified in the built index:

> `Bell, 105, 112` · `Einstein, 5, 98` · `Kelvin, 17, 91` · `Le Sage, 16, 90` ·
> `Lucretius, 6, 61` · `Maxwell, 17, 90` · `Newton, 4, 26` · `Poincaré, 90, 128`

*One anchor was placed and then withdrawn.* The Lucretius anchor first landed inside a **craft note**
— suppressed prose. It would have written an index entry from inside a discarded box, pointing at
whatever page the box happened to be building on. Moved to the real Chapter 5 passage
(*"And Lucretius, from whose infinite worlds this book descends"*). **Any future index work must
check that anchors are not inside `draftnote` environments.**

**(iii) is NOT done** — giving every Dictionary-backed entry the Dictionary page as a second locator
means touching ~45 headwords and matching each against its index form. It is real work with real
mismatch risk, and it is the remaining index item.

**A3 — bibliography hygiene, partly.** Four missing publishers added and each verified: Descartes →
**Louis Elzevir, Amsterdam**; Huygens → **Pieter van der Aa, Leiden**; Maxwell → **A. and C. Black,
Edinburgh**; Laplace → **Courcier, Paris** (and *Volume IV* moved out of the title into a `volume`
field). Author forms unified: `Baade, W. and Zwicky, F.` → `Baade, Walter and Zwicky, Fritz`, so one
Zwicky appears throughout.

> **A LaTeX trap worth recording.** `publisher` is a biblatex **list** field, so the unbraced
> `A.\ and C.\ Black` was split on `" and "` into two publishers, producing a runaway argument that
> killed the build and left a malformed `.bcf` — nine errors and no PDF. Fixed by double-bracing:
> `publisher = {{A.\ and C.\ Black}}`. Any firm name containing "and" needs the same.

**DOI normalization and the five bare-entry annotations are NOT done** — the bundle routes those
annotations to chat-claude's eye before commit, so they are listed at the end of this file rather
than applied.

**A4** — the front-matter promise now reads *(Dictionary.)*, matching the mark the footnotes
actually use.

## Release mechanics

**R1** — `FLIP_CHECKLIST.md` gains a hard release-day row: **billiardballuniverse.com resolves and
links the repository BEFORE the publish button**, marked [NIELS], with the reason on the line.

**R2 — cosmetic rulings recorded, not actioned:** no half-title (two pages and a spine change for a
convention); no About-the-Author page (the bio lives on the cover); "First edition" stands on both
title page and verso.

## Gates

Direct cycle only, PDF mtime checked against each run. **Both editions: 0 errors, 0 Overfull,
0 Float-too-large, 0 undefined references, 0 collisions, 206 pp.**

Sweeps of the extracted text: `Craft notes` 0 · `Draft` 0 · `Confirmed` 0 · `run-3`/`run-4` 0 ·
`LOAD-BEARING` 0 · raw bibkeys (`baadezwicky1934cr`, `feynman1955`, `ligo2017`, `searle1980`) 0 ·
`2026-07` 0 · `INDEX` 0 · `a competent faculty` 0 / `any competent faculty` 2.

> **Build note.** `edwards2002` is `\cite`d from *inside another entry's note field*, so it cannot be
> known to biber until the bibliography itself has been typeset. It needs a **second biber pass**
> (pdflatex · biber · makeindex · pdflatex · **biber** · pdflatex · pdflatex) or it reports undefined
> forever. That is now the cycle for this book. The cleaner fix is to make that reference plain text
> instead of a `\cite`; not done, since it prints correctly.

## Still open

1. **Index (iii)**: Dictionary page as second locator across ~45 entries.
2. **Locator sweep** beyond the six promoted above; `janiak2014`, `tegmark2014` and `darwin1905` need
   locators found before they can be promoted.
3. **DOI normalization** to the house `url` form; four papers still link arXiv rather than the
   journal DOI (`fan2023`, `ligo2017graviton`, `uzan2003`, `damourdyson1996`).
4. **Five bare entries** need one-line annotations, drafted here for review rather than committed:
   - `bekenstein1973` — Black-hole entropy proportional to horizon area; the result Chapter 7's
     entropy section leans on when it counts states rather than volumes.
   - `feynman1955` — The review that put quantized circulation and vortex lines at the centre of
     superfluid helium; the ancestor of this book's circulation talk.
   - `vinen1961` — The first direct measurement of the quantum of circulation in helium II: the
     laboratory proof that circulation comes in whole units.
   - `shin2004` — Vortex lattices in a rotating Bose--Einstein condensate, imaged directly; the
     picture behind Chapter 7's "crowd strung with its own circulations".
   - `finkelstein1968` — Kinks: the early argument that stable knots in a field can behave like
     particles, which is what the toy's frozen assemblies are asked to be.
5. **The six orphaned entries** other than `searle1980` (now cited): `holt2012`, `krauss2012`,
   `baadezwicky1934`, `eht2019`, and `edwards2002`'s odd nested-cite status.
