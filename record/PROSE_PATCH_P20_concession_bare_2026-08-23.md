# P20 — the concession states the fact and stops (2026-08-23)

*Reverses the P19 "keep" ruling on the same paragraph. Niels, via chat-claude, ruled that the
invited-readers clause hands recognizable people guilt, and that the ordinary-fate clause is an
excuse in a book that forbids them. One deletion; no addition. **Nothing is tagged and the repo is
not flipped**; both still wait on the physical proof.*

## The bundle

Delivered as `nbj/P20_bundle.txt`, in the `===FILE…===END===` wrapper, naming
`nbj/P20_concession_bare.md`.

> P20 --- THE CONCESSION LOSES ITS NARRATIVE. From chat-claude; Niels reversed his
> "keep": the invited-readers clause hands recognizable people guilt, and the
> ordinary-fate clause is an excuse in a book that forbids them. The fix is one
> deletion --- bare fact, no story, no absolution. Verify OLD once; mirror to
> record/ as P20.
>
> E1:
> OLD: read this book before publication --- I invited readers, and the window closed empty, which is the ordinary fate of a first book from an unknown author, not a special one. The adversarial readers
> NEW: read this book before publication. The adversarial readers
>
> CHECKS: rule-7 both ends (quote the paragraph's final form); rule-8 masking
> still passes; the following paragraph's "machine work too" seam still lands
> (machines remain the salient subject --- confirm by reading, not assuming).
> SWEEPS: "window closed empty" 0 · "ordinary fate" 0 · "I invited readers" 0 ·
> "You are how it finds out" = 1 · the note's other paragraphs byte-identical.
>
> RELEASE MECHANICS: rebuild both editions, genuine-build check, all gates;
> report the page count --- expect 206 unchanged, in which case \PAGECOUNT,
> spine, and cover are untouched and only the two interior PDFs re-stage with
> fresh checksums; if the count moves, run R2-R4 of the P19 sequence again and
> report the new spine. Refresh RELEASE_PACKAGE/ and its checksum table either
> way. Still no tag, no flip. Commit: prose: the concession states the fact and
> stops --- narrative and absolution removed (P20).

## P20/E1 — applied

**OLD verified unique before the edit** (`grep -c` → 1), at line 2001 of
`manuscript/billiard_ball_universe.tex`, in "A Note on How This Book Was Made". One line changed in
the whole manuscript; no other paragraph touched.

The paragraph's final form, quoted in full as the checks require:

> One more fact belongs here, under this note's own rule that I would rather give a thing than have
> it found out. No one but its author read this book before publication. The adversarial readers who
> wounded it --- the ones who forced the seventh wound into existence --- were machines, briefed to
> hurt it, and their reports are in the record. So the first person to test this book against a human
> chest is you, and the letterbox is open: the record's address is printed on the copyright page,
> corrections become errata, errata become the next printing. The book said it can lose. You are how
> it finds out.

## The checks

**Rule 7 (patch hygiene), both ends.** The deletion sits mid-paragraph, so both seams were read.

- *Before:* the sentence now ends "…read this book before publication." Its subject is still "No one
  but its author", unchanged; the sentence was not otherwise rewritten.
- *After:* "The adversarial readers who wounded **it**…". Rule 1 asks how far that bare *it* reaches.
  It reaches to "this book", now in the immediately preceding clause instead of across the deleted
  invited-readers material. **The deletion shortens the anaphor's reach rather than lengthening it**,
  which is the direction rule 1 wants. Passing, and passing better than before.

**Rule 8 (every sentence pays its own way).** The new short sentence — "No one but its author read
this book before publication." — is literal and self-contained; masking every coined term in the book
leaves it fully parseable. It survives the black-rectangle test on its own, without borrowing from
the paragraph. Passing.

**The "machine work too" seam.** Read, not assumed. The next paragraph opens "The pictures that are
not diagrams are machine work **too**", which leans on machines being the salient subject of what
precedes it. In the revised paragraph the clause "were machines, briefed to hurt it" is untouched and
is now the only agent-claim in the paragraph, the human-reader material having gone. Machines are
*more* salient after the deletion, not less. The seam lands.

**Sweeps, as specified:**

| string | required | found |
|---|---|---|
| `window closed empty` | 0 | 0 |
| `ordinary fate` | 0 | 0 |
| `I invited readers` | 0 | 0 |
| `You are how it finds out` | 1 | 1 |
| other paragraphs byte-identical | yes | yes — `git diff` is 1 line changed |

## What the fact still concedes

The paragraph still says, in the book, that no human read it before publication. **The concession was
not softened — it was stripped.** What went was the story around the fact (an invitation was issued)
and the consolation attached to it (this is normal for a first book). What remains is the fact alone.
The two standing facts in `process/STATE_2026-08-21.md` are unaffected: the window did close empty,
and it is still conceded in print.

## Release mechanics

**Both editions rebuilt from scratch**, full cycle run directly — `pdflatex · biber · makeindex ·
pdflatex · pdflatex` — not via `build.bat`.

**Genuine-build check passed on both.** The digital interior's stale PDF was found **locked by an
open Foxit PDF Reader window**, so the first attempt produced a clean log against a two-day-old
artifact — precisely the failure `STATE_2026-08-21.md` §1 warns about. Caught on the modification
time, not the log. Reader closed, both editions then rebuilt with mtimes matching the run to the
second.

| | digital | print |
|---|---|---|
| pages | 206 | 206 |
| LaTeX errors | 0 | 0 |
| Overfull | 0 | 0 |
| Float too large | 0 | 0 |
| Undefined references | 0 | 0 |
| collision gate (H3) | 0 | 0 |

**The page count did not move.** So `\PAGECOUNT`, the spine (0.5150 in) and the cover wrap are
untouched, R2–R4 of the P19 sequence were correctly not re-run, and the cover PDF's hash is unchanged
from 21 August.

**The edition toggle was flipped to `\digitaleditionfalse` for the print build and flipped back**;
the committed state is `\digitaleditiontrue`, verified by the manuscript diff being the single prose
line and nothing else.

**Re-staged in `FINAL/1_upload/`** (the folder the bundle calls `RELEASE_PACKAGE/`), with
`CHECKSUMS.sha256` and the table in `FINAL/README.md` both refreshed:

```
2302f3d394f4ba8fe0ec33c9f0776c2e3f4ecc61ab3e8a4676905be3004acd75  BBU_interior_print_206pp.pdf
cafbc26be821de687c74faab3782d19cb9791af58ddbd59f839df42b18e48971  BBU_interior_digital_206pp.pdf
458615992e30bf89886be96c38b084a0164ebee5df6d900e3dd4336a49689748  BBU_cover_wrap_206pp.pdf   (unchanged)
```

## The timestamp consequence, stated rather than left to be discovered

The 2026-08-21 interim OTS batch anchors the manuscript at `c279d309…`. **P20 changes the tex, so the
working tree no longer matches that hash**, and the two interior PDFs it stamps are no longer the
bytes in the upload folder. Handled as follows:

- The superseded interiors' `.ots` proofs were **moved out of `1_upload/`** to
  `FINAL/_superseded_2026-08-21/`, since a proof of vanished bytes sitting beside new files reads as
  proving those files. The proofs themselves remain valid — for what they actually stamp.
- The proofs in `timestamps/2026-08-21-final-text/` are untouched and the anchor stays frozen. The tex
  proof now verifies against a checkout of `2de4de2`, not against the working tree; `timestamps/
  README.md` says so.
- **No re-stamp was taken, deliberately.** P20 is a pure deletion: every word of the text as it now
  stands was already inside the 21 August anchor. A timestamp proves *not later than*, and removing a
  sentence cannot weaken that, so nothing newly written is unprotected. OTS-3 will anchor whatever
  the tag finally points at.

## Still not done, by design

No tag. No OTS-3. No repo flip. No publish. All four wait on the physical proof.
