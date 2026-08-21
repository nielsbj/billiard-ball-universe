# Pre-release audit: the book was not in order (2026-08-21)

*Author's ruling: **"well it is not that final, make sure the book is in order."** The interior was
reopened hours after being declared final, and the reopening was correct: the build that had been
certified was the wrong build, and the shipping state contained defects that would have reached
print.*

## The finding that mattered most: the certified build was stale

**`manuscript/build.bat` was writing a log but not a PDF.** Every page count read on 2026-08-21
before this audit came from a PDF dated **2026-08-20 15:12** — yesterday's file. The log was fresh
(0 errors, 0 Overfull, and those numbers were real), so the gate looked green while `pdfinfo` and
`pdftotext` were reading a superseded artifact. This is the failure mode the laptop-era note already
recorded for this repo; it recurred and was not caught until a `pdftotext` sweep returned twelve
hits for "Craft notes" in a build whose apparatus was supposedly off.

**Rule going forward, and it is not optional:** run the cycle directly ---
`pdflatex` · `biber` · `makeindex` · `pdflatex` · `pdflatex` --- and **check the PDF's modification
time**, not just the log. A green log proves pdflatex ran; only the timestamp proves it wrote.

## The shipping state was the draft state

Two settings meant the "final" interior was the working draft:

| | was | now |
|---|---|---|
| `\draftnotestrue` (line 125) | craft-note apparatus **on** | `\draftnotesfalse`, marked RELEASE STATE |
| title page (line 149) | `{\small Draft 1 --- \today\par}` | `{\small First edition\par}` |

The title page of the book about to go to press read **"Draft 1 --- 21. august 2026"**. Verified in
a genuine build: "Craft notes" now appears **0** times and "Draft" **0** times in the extracted text
of both editions.

**The page count did not move.** 202 pp with the apparatus on, 202 pp with it off. The spine set
yesterday at 0.5050 in is therefore correct and needs no revision --- checked, not assumed.

## PDF metadata

`pdfsubject` read **"Draft version"** and would have shipped embedded in the released file, where it
outlives everyone's memory of writing it. `hyperxmp` was loaded but never given the ISBN.

Now: a real subject line, plus `pdfisbn`, `pdfpublisher`, `pdfpubtype` and `pdfdate`. Verified in the
built XMP packet --- `<dc:identifier>urn:ISBN:978-87-977519-1-6</dc:identifier>` and
`<prism:isbn>978-87-977519-1-6</prism:isbn>`.

## The References printed the book's own audit trail

Note fields print in this annotated bibliography. Roughly a dozen of them were **fact-check working
notes addressed to the project, not to the reader**, and they were printing on pp. 175--190:

- `Confirmed against ADS 1980ApJ...238..471R (2026-07-27)` --- dated audit stamps
- `LOAD-BEARING row, cleared` · `caught by the run-4 fact-check` · `per the run-3 fact-check`
- `(CONFIRMED)` · `wording CONFIRMED against the published translation`
- `would be a tighter anchor if added` --- an unexecuted instruction to an editor, shipped as annotation
- **two raw BibTeX keys in print**: `baadezwicky1934cr` and `feynman1955`, meaningless to a reader
- `the book's ``one part in a million million'' matches` --- an annotation grading the book's own phrasing

Fifteen notes were rewritten into reader-facing form, keeping every piece of substance and dropping
the process vocabulary. **The annotated bibliography itself is a good device and was kept** --- the
Bell-interview provenance, the retired double-slit claim, the Ehrenfest volume-numbering note are
exactly what it is for. Only the scaffolding came out.

Post-fix sweep of the built PDF: `Confirmed` 0 · `run-3` 0 · `run-4` 0 · `LOAD-BEARING` 0 ·
`baadezwicky1934cr` 0 · `feynman1955` 0 · dated stamps 0.

## The VERIFY convention is closed

Two entries still carried live flags, against a sentence on p. 162 claiming *"every number, date,
page reference and attribution in this book was fetched against a named source."* Both are now
**cleared against sources**, and the evidence is recorded in a comment above each entry:

**`mossbauer1958`** --- CrossRef record for `10.1007/BF01344210`: *Kernresonanzfluoreszenz von
Gammastrahlung in Ir191*, Zeitschrift für Physik **151**(2), 124--143, 1958. All four flagged fields
(volume, issue, page range, exact German title) match the entry exactly.

**`guetlich2011`** --- CrossRef record for `10.1007/978-3-540-88428-6`: Gütlich, Bill, Trautwein;
Springer Berlin Heidelberg; 2011; print ISBN 9783540884279. No edition statement exists and the entry
claims none. The three iron-57 values were confirmed **independently rather than against Gütlich's
own pages, which are paywalled** --- recorded that way deliberately rather than dressed up:

| value | check |
|---|---|
| 14.4 keV gamma | standard Fe-57 Mössbauer transition, 14.4125 keV |
| free-nucleus recoil "near 2 meV" | $R = E^2/2Mc^2 = 1.958$ meV |
| lattice quanta "some tens of meV" | iron's Debye energy ≈ 40 meV |
| linewidth "near $4.7\times10^{-9}$ eV" | $\Gamma = \hbar/\tau$ with $t_{1/2} = 98.3$ ns gives $4.64\times10^{-9}$ eV |
| "one part in three million million" | $\Gamma/E = 3.2\times10^{-13}$ |

Corroborated against the UCSB Physics 128 Mössbauer lab notes (14.4 keV, excited-state lifetime
≈0.1 µs, resolution "part in $10^{12}$"). The header's VERIFY paragraph now records the convention
as closed rather than standing open.

## Other defects fixed

**A sixteen-page References section was missing from the Contents.** `\printbibliography` was never
given `heading=bibintoc` while the index had `intoc=true`. The Contents now carries *References 175*.

**"A Note to the Reader" was breaking across a page.** The heading sat alone at the foot of folio ix
with its untitled body stranded on folio x --- a heading promising something the page did not
deliver, on the second page a reader looks at. It was a `\textbf` line plus a separate `\parbox`,
two boxes with a legal break between them; it is now one `minipage`, which cannot break.

**Three claims that a table sits "at the chapter's end"** --- in the front matter and twice inside
Chapter 7. `tab:wounds` prints on pp. 126--129 and the chapter runs to p. 154, so a reader taking the
book's own offered licence ("read each wound's opening and its scoreboard and skip the fight") would
flip to the back of the chapter and land in the dark-matter inventory. All three now read *"where the
wounds close."*

**"for a hundred and some pages"** (p. 163) described a book of 142--151 pp. The main text now runs
pp. 3--163. Changed to *"for a hundred and sixty pages"* --- same rhythm, and true.

**The electron precision figure contradicted itself.** Chapter 7 says the magnetic moment is measured
to about a part in ten million million; Appendix B said a part in a million million. The appendix now
matches the chapter.

**The First Wound's load-bearing numbers were uncited.** Poincaré's $24\times10^{17}c$, $10^{26}$
degrees per second and $10^{20}\times$ solar output --- the three figures the whole Chapter 7
scoreboard rests on, and the subject of Problem One of the research programme --- carried no `\cite`
at all. Now `\cite[517--522]{poincare1908}`, the locator taken from the entry's own note, plus
`\cite{maxwell1875}` where Maxwell is credited with pressing the objection.

**A citation attached to a claim it cannot support.** `damourdyson1996` is the Oklo natural-reactor
bound --- terrestrial, and a constraint in *time*, not distance --- and it was cited for constants
being steady *"across billions of light-years of quasar light."* The sentence now also says *"and
across billions of years of the terrestrial record,"* which is what Oklo actually shows.

## Verification, on genuine builds

| | digital | print |
|---|---|---|
| errors | **0** | **0** |
| Overfull | **0** | **0** |
| Float too large | **0** | **0** |
| collision gate (H3) | **0 collisions** | **0 collisions** |
| pages | **202** | **202** |
| undefined citations/references | none | none |
| "Craft notes" / "Draft" in text | 0 / 0 | 0 / 0 |

Spine unchanged at 0.5050 in; the cover needs no rebuild.

## STILL OPEN --- these need the author, and none is mechanical

Ranked. Two independent audits produced these; neither is fixed.

1. **`ligo2017` is cited for a claim it does not make.** At the neutron-star mass ("something over
   two solar masses") the co-citation is `oppenheimervolkoff1939,ligo2017`. GW170817's paper carries
   a speed bound, not a mass limit; and Oppenheimer--Volkoff's own value is ≈0.7 solar masses. A
   reader following that citation finds 0.7 in one source and gamma-ray timing in the other. **Fix:
   add a direct mass measurement** --- Fonseca et al. 2021 (PSR J0740+6620, 2.08 M☉).
2. **`searle1980` was researched, entered, and then dropped.** The Chinese Room is *the* canonical
   attack on the substrate-independence claim the book makes, and the book's stated method is to
   state every objection at full strength. It is in `ref.bib` and cited nowhere. For this book
   specifically, this is the orphan that matters.
3. **Zero page locators, book-wide.** None of 92 `\cite` calls uses `\cite[...]{...}`, including
   several that cite whole books for narrowly page-specific claims (the Newton--Bentley quotation,
   the Bell "cheapest resolution" interview, Nietzsche §341, Lucretius' spear). **The locators
   already exist inside the bib notes** --- promoting them is mechanical and is the highest-value
   systematic improvement available.
4. **The Newton--Bentley quotation has a known textual variant and no locator.** The prose says it
   "will now quote properly", then silently picks *"a competent faculty"* where the Newton Project
   transcript reads *"any competent faculty"*. The disclosure currently reaches the reader only via
   the bibliography annotation. In a book whose concessions stay on the page, this one should be on
   the page.
5. **Uncited precise empirical bounds**, several with no supporting entry at all: the electron
   substructure limit ("a hundred thousand times smaller than a proton" --- one of the four figures
   `CLAUDE.md` flags), the charge attraction/repulsion agreement, and the pulsar-timing transparency
   claim.
6. **Two footnotes argue rather than decode**, which the front matter forbids by name. The one at
   Chapter 7's fourth wound retracts and re-apportions a substantive claim ("I now think"); the one
   in Chapter 3 makes a promissory cross-reference about what Chapter 7 establishes.
7. **Four terms are footnoted somewhere other than first use** (black hole, superfluid, plasma,
   anisotropic), and **"horizon" is a homonym trap**: decoded in the cosmological sense in Chapter 4,
   then used throughout Chapter 7 in the event-horizon sense with no re-decoding.
8. **The index gives every one of its 77 entries exactly one page reference.** Newton is argued with
   across four chapters and indexed at p. 4; Le Sage is the subject of the First Wound and indexed at
   p. 16. Also `Bell, 112` and `Bell's theorem, 112` on consecutive lines, and the running head on
   the second index page is set `INDEX` in caps while every other head in the book is title case.
9. **Appendix A omits terms the front matter promises** --- it claims a dictionary of "every
   technical term the book leans on", and *dark matter*, *cascade*, *frozen state*, *pincer*, *local
   surplus* and *tower/layer* are absent while the index treats them as terms.
10. **Date mismatches between prose and cited work**: Hawking "argued in 1974" cites the 1975 CMP
    paper; Einstein's 1920 Leiden lecture cites a 1922 collection; Lorentz "from 1892 onward" cites
    1904.
11. **The Chandrasekhar anecdote** (computed the figure at nineteen, on the voyage from India to
    England) is sourced to the 1931 physics paper, which contains the calculation and not the story.
12. **Day-one dependency, currently in no checklist:** the imprint prints
    *billiardballuniverse.com* as where "the full correction record" lives. If that site does not
    link the repository the day the book ships, the book's most distinctive claim dead-ends.
13. Bibliography hygiene: four entries missing publishers; author names inconsistently initialised
    (the same Zwicky appears as "Zwicky, Fritz" and "Zwicky, F.", both printing); DOIs handled in
    four different styles; five cited entries bare of annotation among 94 annotated neighbours.

## Cosmetic, noted and not done

No half-title page. "First edition" now appears on both the title page and its verso. The front
matter promises footnotes ending *(Dictionary)* while they end *(Dictionary.)*. No "About the Author"
page.
