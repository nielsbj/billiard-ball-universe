# The cover takes its last typographic pass (2026-08-21)

*Author's ruling: **"we will go with best-cover."** Five changed lines, one hunk. Two back-cover
defects repaired, three front-panel proportions corrected. No colour, no ink, no artwork, no copy
and no frame were touched — every plate ruling of 2026-08-20 stands. The interior is untouched;
this is a cover-only change.*

## How it was arrived at

A Fable agent was given the built renders, the print constraints, and the standing rulings —
including the title-colour ruling, with instructions to attack it rather than defer to it — and
told it could run experiments rather than predict. It did: six title variants built at print size,
downsampled to true 90 px, measured and looked at. Its recommendations were then **built as four
real covers** (`pdflatex` ×2 each, all 0/0) and compared side by side before anything was applied.
That package is `best-cover/` and `cover-suggestions/`, both gitignored — a proposal committed
beside the real cover is a trap.

## The patch, verbatim

```diff
--- a/cover/cover_wrap.tex  (committed, ef30986)
+++ b/cover/cover_wrap.tex  (variant B)
@@ -60,29 +60,29 @@
   \ifARTFINAL
-    \node[anchor=north] at (\fC,9.125-3.28) {\includegraphics[width=\ARTW]{cover_recursive_ball_sanguine}};
+    \node[anchor=north] at (\fC,9.125-3.17) {\includegraphics[width=\ARTW]{cover_recursive_ball_sanguine}};
   \else
...
-  \node[anchor=north] at (\fC,9.125-7.32) {\fontsize{22}{24}\itshape\selectfont A World With No Bottom};
-  \node[anchor=south] at (\fC,0.125+0.60) {\fontsize{19}{21}\selectfont\textls[120]{NIELS BONDE JENSEN}};
+  \node[anchor=north] at (\fC,9.125-7.32) {\fontsize{24}{26}\itshape\selectfont A World With No Bottom};
+  \node[anchor=south] at (\fC,0.125+0.60) {\fontsize{18}{20}\selectfont\textls[120]{NIELS BONDE JENSEN}};
...
-    {\fontsize{15}{18}\bfseries\selectfont A universe with no bottom --- argued by an author who shows you where he loses.\par}\vspace{9pt}
+    {\fontsize{15}{18}\bfseries\selectfont\hyphenpenalty=10000\exhyphenpenalty=10000 A universe with no bottom --- argued\\ by an author who shows you where he loses.\par}\vspace{9pt}
...
-      {\fontsize{13}{16}\itshape\selectfont ``Globally nothing is special. Locally, you are. Live there.''}\\[5pt]
+      {\fontsize{13}{16}\itshape\selectfont ``Globally nothing is special.\\ Locally, you are. Live there.''}\\[5pt]
```

The full five-line unified diff and the complete pre-apply file are in `best-cover/`.

## What each change fixes

**The headline hyphenated.** As built the back cover's display headline broke mid-word — *"argued
by an **au-** / **thor** who shows you where he loses"* — a hyphen in display type, on the word
*author*, on a book whose author is its unknown quantity. `\hyphenpenalty=10000` now forbids
hyphenation in that headline outright, so no future copy edit can reintroduce one silently, and the
explicit `\\` chooses where the line turns.

**The pull quote widowed.** The book's best sentence ended on a one-word line: *"…Locally, you are.
Live / **there.**"* It now breaks on its own rhetorical seam — the global claim, then the local
claim and the instruction — at 29 and 30 characters, two balanced lines.

**The art sagged in its window.** Measured on the built panels with the frame rules excluded, the
drawing's *inked* extent (not the PNG's bounding box, which carries transparent margin):

| | gap above, oxblood rule → art | gap below, art → subtitle |
|---|---|---|
| as built | 0.653 in | 0.377 in |
| **now** | **0.543 in** | **0.487 in** |

At 90 px the old 0.653 in was roughly ten of the thumbnail's 135 rows doing nothing, directly under
the rule, at the point where the eye drops from title into image.

*Noted honestly:* 0.11 in does not equalise the gaps exactly — 0.138 in would, at 0.515/0.515. The
difference is 0.028 in, about 8 px. 0.11 was kept because it is the version that was built and
looked at, and this file has argued before that sending an unjudged combination to a proof to save
a line of config is a bad trade at the last cheap moment.

**The subtitle and byline fought to a draw** at 22 pt italic against 19 pt letterspaced caps. For an
author with no name recognition the subtitle is the hook and the byline is a credit line. Both sit
near the legibility floor at 90 px either way, so the swap costs nothing at thumbnail.

## The title-colour question, asked properly and answered

The title stays `#1A1A1A`. **But the reason recorded in `BOOK_COVER.md` was wrong, and has been
rewritten rather than left standing.** The old line said the title's contrast "must not be spent on
colour." Measured against the `#EDE4CE` ground that is false:

| candidate | contrast at print | arrival at true 90 px |
|---|---|---|
| `#1A1A1A` as built | 13.75:1 | 10.09:1 |
| `#241812` warm sepia | 13.66:1 (−0.6 %) | 10.03:1 |
| `#331B17` the plate's own shadow | 12.66:1 (−8 %) | 9.24:1 |
| `#6B2E2E` oxblood | — | **6.08:1 (−40 %)** |

The first three are visually indistinguishable at thumbnail. The contrast budget was never the
binding constraint, so the thumbnail does not decide this question at all.

What does decide it: **oxblood is refuted on measurement** — a 40 % loss, visibly paler, and it
drifts toward *Sapiens*' colouring on the very shelf this competes on. And **the temperature-clash
argument that condemned the grey ball does not transfer to type.** A halftone field optically
averages into a perceived surface colour, so a grey ball on warm cream is a wrong object; type never
averages into a surface, staying ink on paper at every scale, and cream stock physically warms
perceived black in the hand. Black type beside a sanguine plate is the historical norm, not a
violation of the one-ink conceit — sanguine plates were bound into books set in black.

One modern argument nobody had made: Amazon's storefront images are chroma-subsampled JPEGs, so at
90 px anything carried in hue degrades while luminance survives. Pure near-black puts the title's
entire signal in the channel that survives.

**Fallback named in advance, so the proof read stays binary:** if the black type reads detached from
the warm system on paper, set the three title nodes to `#241812` — 0.6 % of contrast, invisible at
thumbnail. Never oxblood. `cover-suggestions/pdfs/C_warm_title.pdf` is that exact build.

## Examined and deliberately left alone

The **oxblood rule stays 1.8 pt** — heavier was considered, but at 90 px it is sub-pixel either way
and at print it is already the heaviest rule on the cover. The **art stays 3.7 in** — 4.0 in is
still over the 300 dpi floor but buys about 2 px of ball diameter at thumbnail while crushing the
vertical gaps to 0.36 in. The **art is not recentred**: its inked centre measures 3.087 in against a
panel centre of 3.000 in, but that 0.087 in is the drawing's deliberate diagonal — heavy ball
upper-left, cluster right, light debris lower-left — and recentring the ink would un-centre the
composition. The **tagline stays** though it is illegible at 90 px; it is furniture that pays off at
print size and the shelf test showed it costs nothing.

## Verification

| check | result |
|---|---|
| `git diff --numstat` | 5 insertions, 5 deletions, one file |
| `pdflatex cover_wrap.tex` ×2 | **0 errors, 0 Overfull** (602-line log — a real build, not the ~1340-line locked-PDF signature) |
| underfull \hbox | 5 — **identical to baseline**, all pre-existing in the bio parbox at line 92; none introduced |
| `scan_ean13.py` | decoded `9788797751916`, check digit valid, module 0.0117 in, quiet zones 0.4683 / 0.4208 in against a 0.0819 in minimum — **SCANS CORRECTLY** |
| page size | 914.791 × 666 pt, unchanged — still `\PAGECOUNT{182}` |
| interior | untouched |

## Documentation correction made in passing

`BOOK_COVER.md` §4 said the art is placed *"~3.9 in wide."* It is and always was **3.7 in**
(`\ARTW`), which is what every DPI figure in that file is computed from. Corrected to match what
builds.

## Still open — not this patch's job

- **`\PAGECOUNT` is still 182 against a 202 pp interior.** The spine is the last thing set, in the
  release commit: 202 × 0.0025 in = **0.5050 in**, full wrap **12.7550 × 9.25 in**. The cover built
  here is still not the one to upload.
- **The interior must be declared final first** (`process/TODO-NIELS.md` §3).
- **Proof-day watch-list**, now with one addition: *parchment right, sanguine not maroon, hatching
  gaps open — and the black type sits with the plate rather than on it.* Gaps plugged by dot gain →
  `HIGH` = `#F1E9D6` and never darker ink.

## The cover's honest limits, recorded because the book's own standard demands it

**The recursion does not survive the thumbnail.** At 90 px you see a sphere and some round things
beside it; the connecting lines vanish and the zoom relationship — the entire idea of the book — is
illegible until print size. The concept lands for someone holding the book, not for someone
scrolling. Fixing it means re-drawing the art, and the trade is a cover that explains itself at
90 px and is duller in the hand. Judged not worth it. It is still a real cost.

**The antique look cuts both ways.** Scholarly and permanent, but it can read as a public-domain
reissue rather than a new book — a live risk when the author's name means nothing yet. The tagline
is what pushes back, and it is invisible at thumbnail.

Against that, what the shelf test actually proved: on a row of ten dark, photographic physics
bestsellers this is the only pale cover, and that is what draws the eye. The title is legible at
90 px, which several of its neighbours are not.
