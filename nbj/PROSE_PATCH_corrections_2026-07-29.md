# PROSE_PATCH_corrections_2026-07-29.md
*From chat-claude. Fresh document, no predecessor. Authorised by Niels this thread ("correct what you can"). Twenty-five exact-string edits in three parts. **[M]** = mechanical/unambiguous. **[A]** = my wording, shipped for approval: forwarding this file approves them; to strike any, tell me and I cut a fresh patch without it --- never edit this file in place.*

**Anchors.** Verified against the 2026-07-29 uploaded manuscript (pre-specification-patch); every anchor is disjoint from that patch's insertion, so all remain valid at HEAD. Code-claude must still confirm each OLD occurs exactly once at HEAD before applying, in order, and stop on any mismatch.

**Excluded on purpose** (rulings pending; see chat): the second-wound reorder, the Ch.4/Ch.5 copies concession, spelling/number/date conventions and their sweeps, the Ch.5-opening echo decision, the toy-vs-tower sentence, the Ørsted callback.

## PART A --- prose corrections

### A1 [A] Ch.5 opener (p.55 of the current PDF). Number per Ch.4/Tegmark; garnish clause recalibrated --- the old clause was true only of the 118 figure.
**OLD:**
```
your nearest copy is roughly $10^{10^{118}}$ meters away, a number so large that writing it out would itself require more space than the visible universe.
```
**NEW:**
```
your nearest copy is roughly $10^{10^{29}}$ meters away --- a distance against which the whole visible universe is a rounding error.
```

### A2 [M] Unify with Ch.2's (correct, plural) translation. p.35.
**OLD:**
```
\emph{hypotheses non fingo}, I feign no hypothesis. By your phrasing
```
**NEW:**
```
\emph{hypotheses non fingo}, I feign no hypotheses. By your phrasing
```

### A3 [M] The book's only imperial unit; 12,742 km. p.118.
**OLD:**
```
The Earth is a ball of rock eight thousand miles thick
```
**NEW:**
```
The Earth is a ball of rock nearly thirteen thousand kilometres thick
```

### A4 [M] Matches the requirement derived two paragraphs earlier ('nearer fifty million times'). p.140.
**OLD:**
```
A circulation whose parts move at ten million times our light speed
```
**NEW:**
```
A circulation whose parts move at fifty million times our light speed
```

### A5 [A] Softens a false universal aimed at exactly the reader it could wound. p.65.
**OLD:**
```
Suffering does not exempt you from the task. It has never yet prevented anyone from performing it, and some
```
**NEW:**
```
Suffering does not exempt you from the task. It rarely prevents anyone from performing it, and some
```

### A6 [A] The argument supports the shape, not the necessity; the next sentence already carries the modality. p.135.
**OLD:**
```
An area law is what layer-indexed entropy \emph{must} give at a censored boundary.
```
**NEW:**
```
An area law is what layer-indexed entropy would naturally give at a censored boundary.
```

### A7 [A] Ch.1 paraphrased; it did not quote. p.20.
**OLD:**
```
the sentence I have already quoted once in this book and will now quote properly
```
**NEW:**
```
the sentence I have already given once in this book, in paraphrase, and will now quote properly
```

### A8 [A] 'Last' became false when the sixth wound was added; 'handed to me' echoes the sixth wound's opener. p.114.
**OLD:**
```
The last wound is the deepest, because it is not aimed at massions
```
**NEW:**
```
This wound is the deepest of the five that were handed to me, because it is not aimed at massions
```

### A9 [A] Resolves the deepest-vs-deepest collision; the fifth keeps the crown, as the chapter preview already awards it. p.110.
**OLD:**
```
Now the deepest one. It has appeared in every chapter
```
**NEW:**
```
Now the one that runs deepest through this book's own pages. It has appeared in every chapter
```

### A10 [A] Glosses a forward reference whose content is load-bearing three chapters early. p.51.
**OLD:**
```
and a basement, by the second rule of Chapter~6, does push upward eventually, floor by floor.
```
**NEW:**
```
and a basement, by the second rule of Chapter~6 --- influence travels only between neighbouring layers --- does push upward eventually, floor by floor.
```

### A11 [M] PDF-confirmed: Appendix B is five paragraphs across pp.167--168.
**OLD:**
```
Five pages of it, owed to the reader who has never been given them.
```
**NEW:**
```
Five paragraphs of it, owed to the reader who has never been given them.
```

### A12 [A] Dictionary, Massion entry: bridges the two names the reader meets.
**OLD:**
```
bodies are pushed together by the shadows they cast in one another's supply.
```
**NEW:**
```
bodies are pushed together by the shadows they cast in one another's supply. Le Sage's name for the role was \emph{ultramundane corpuscles}, and Chapter~7 keeps his century's word when running its arithmetic.
```

### A13 [A] Completes the pattern: wounds 1--5 each close on a scoreboard line; the sixth trailed off. p.121.
**OLD:**
```
take away from me.


\section{The State of the Wounds}
```
**NEW:**
```
take away from me.


Scoreboard: \emph{open --- pinned from three sides, and derived from none.}

\section{The State of the Wounds}
```

### A14 [A] Adds the far-field caveat the Ch.6 craft note has requested since Draft 1. p.87.
**OLD:**
```
An inverse-square law, not assumed, but \emph{inherited from geometry itself} --- from the mere fact that shadows shrink with distance in three-dimensional space.
```
**NEW:**
```
An inverse-square law, not assumed, but \emph{inherited from geometry itself} --- from the mere fact that shadows shrink with distance in three-dimensional space.\footnote{Exactly, in the limit that the bodies are small compared to the distance between them --- a condition every orbit in this book satisfies with room to spare.}
```

## PART B --- craft-note hygiene (resolved-markers, house style)

### B1 [M] 
**OLD:**
```
(3) Consider a one-page ``scoreboard'' figure after the Settlement: the three positions (floor / regress / agnostic) scored against local grounding, global grounding, arbitrariness.
```
**NEW:**
```
(3) [resolved: built as tab:settlement.]
```

### B2 [M] 
**OLD:**
```
(1) a real scene for the comfort section, if a memory exists;
```
**NEW:**
```
(1) [resolved: the brother scene, in the comfort section;]
```

### B3 [M] 
**OLD:**
```
(1) The inverse-square-from-shadow-geometry derivation is the chapter's strongest physics moment --- verify the solid-angle argument carefully; it is correct for absorption-shadowing at separations large compared to the bodies, which should be stated or footnoted.
```
**NEW:**
```
(1) [resolved: far-field caveat footnoted at the inverse-square passage, 2026-07-29.]
```

### B4 [M] 
**OLD:**
```
(4) Consider a simple figure: two bodies, the flux, the mutual shadows. One drawing may spare three paragraphs.
```
**NEW:**
```
(4) [resolved: built as the shadow-push figure.]
```

### B5 [M] 
**OLD:**
```
Michelson--Morley precision \emph{lineage} (the improvement chain) still unverified if invoked.
```
**NEW:**
```
[resolved 2026-07-29: invoked twice (second wound; stiffness section) and verified --- Michelson--Morley 1887 probed $\Delta c/c$ at the $10^{-8}$ level (the expected $v^2/c^2$ of orbital motion); Herrmann et al.\ 2009 (PRD 80, 105011 = herrmann2009) reached $\Delta c/c \sim 1\times10^{-17}$: a billionfold, as the prose says, and the two passages agree with each other.]
```

### B6 [M] 
**OLD:**
```
Electron substructure: the book's ``$\sim10^{-18}$ m'' is safe but conservative --- current contact-interaction bounds ($\Lambda$ of 20--37 TeV) imply $\sim10^{-20}$ m; consider updating or dropping the number.
```
**NEW:**
```
Electron substructure: [resolved: the prose already states the current bound --- ``a hundred thousand times smaller than a proton'' ($\sim10^{-20}$ m) --- in the fourth wound and the spin section.]
```

### B7 [M] 
**OLD:**
```
(3) The four scoreboard verdicts (``unanswered / survivable at the price of a conspiracy / open, leaning against / open --- with a growing literature'') could become a small table; decide against the book's figure policy.
```
**NEW:**
```
(3) [resolved: built as tab:wounds.]
```

### B8 [M] 
**OLD:**
```
(4) The closing pivot promises a short Coda about ``one thing'' --- the Coda must deliver exactly that.
```
**NEW:**
```
(4) [resolved: the Coda delivers exactly one thing.]
```

## PART C --- preamble repair (the print-links fix)

### C1 [M] Removes the duplicate xcolor load (option clash against line 37's plain load) and the TeBlue/FePurple/SeRed triad, unused once C2 lands. The provenance comment near the bbulink definitions still names the triad; that is intentional --- it documents where the RGB values came from.
**OLD:**
```
\usepackage[dvipsnames]{xcolor}
\definecolor{TeBlue}{RGB}{0,76,153}
\definecolor{FePurple}{RGB}{128,0,128}
\definecolor{SeRed}{RGB}{200,0,0}
```
**NEW:** *(delete)*

### C2 [M] Deletes the second hyperref/hyperxmp/hypersetup block, whose unconditional colorlinks=true was silently defeating the print edition's hidelinks.
**OLD:**
```
% ---------------------------
% Metadata + hyperref
% ---------------------------
\usepackage{hyperref}
\usepackage{hyperxmp}
\hypersetup{
  pdfauthor   = {Niels Bonde Jensen},
  pdftitle    = {The Billiard Ball Universe: A World With No Bottom},
  pdfsubject  = {Draft version},
  pdfkeywords = {infinite regress, mechanical philosophy, Le Sage gravity, relational space, multiverse, infinite copies, ethics, grounding, metaphysics},
  pdfproducer = {TeX version},
  pdfcreator  = {LaTeX editor},
  pdfcopyright= {Copyright (C) 2026 by Niels Bonde Jensen. All rights reserved.},
  colorlinks  = true,
  linkcolor   = TeBlue,
  citecolor   = FePurple,
  urlcolor    = SeRed
}
```
**NEW:** *(delete)*

### C3 [M] Union of the two keyword lists, so deleting the second block loses nothing. Niels may trim.
**OLD:**
```
pdfkeywords  = {cosmology, philosophy of physics, infinite regress, Le Sage gravity, mechanical philosophy, infinite universe, ethics of infinity},
```
**NEW:**
```
pdfkeywords  = {cosmology, philosophy of physics, infinite regress, Le Sage gravity, mechanical philosophy, infinite universe, relational space, multiverse, infinite copies, grounding, metaphysics, ethics of infinity},
```

## VERIFICATION, SWEEP, BUILD
1. Confirm each OLD occurs exactly once at HEAD; apply in order; stop and report on any mismatch.
2. Post-apply sweeps, expected counts: `$10^{10^{118}}$` -> 1 (Ch.4 only) | `The last wound` -> 0 | `Now the deepest one.` -> 0 | `eight thousand miles` -> 0 | `ten million times our light` -> 0 | `Five pages of it` -> 0 | `dvipsnames` -> 0 | `TeBlue`, `FePurple`, `SeRed` -> 1 each (the provenance comment only) | `\hypersetup` -> 3 (all inside the surviving conditional block) | `\usepackage{hyperref}` -> 1.
3. Build both editions: zero errors, zero Overfull (hbox and vbox). **The print edition is the point of Part C: build it and visually confirm links render black.** Also report whether the log previously showed an xcolor option-clash and no longer does --- we want to know if the old zero-errors claim was ever true.
4. Report the new page count (183 before this patch).

## LEDGER
Merge into TODO.md a row equivalent to: `CORR-1 | [CC] | apply PROSE_PATCH_corrections_2026-07-29 (25 edits); run sweeps; print-edition link check; report page count` --- mark CLOSED when done.

## COMMIT
One commit, one file: `fix: read-through corrections --- Tegmark echo, wound superlatives, print links, craft-note hygiene (25 edits)`

## NOTES FOR NIELS
- [A] items to eyeball before forwarding: A1 (the rounding-error clause), A5--A10, A12, A13 (the new scoreboard line), A14 (the new footnote).
- C3 carries the union of the two keyword lists; trim if you like. pdfsubject stays "Draft version" and the title page stays "Draft 1" until release, per the production checklist.
- Your paper copy predates all of this. In the current PDF the touched pages are: 20, 35, 51, 55, 65, 87, 110, 114, 118, 121, 135, 140, 167, plus the gray craft-note blocks.