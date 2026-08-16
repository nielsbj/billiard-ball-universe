# H3 — HOTFIX: figure 7.5 overprints the text above it on p. 105 (applied 2026-08-16)

**STATUS: CLOSED.** One preamble line. The reported collision is gone, a second unreported
collision (fig. 4.2, p. 43) went with it, page count is unchanged at 200, and the build gate is
still 0/0/0. The gate itself was the second half of the job: neither collision was visible to it,
so `manuscript/check_collisions.py` now reads the built PDF and both `build.bat` and
`FLIP_CHECKLIST.md` call it. See "The gate could not see this class" below.

*Reported by Niels off the page: "on pdf book page 105, figure 7.5 it goes into the text above."
No bundle — diagnosed and fixed in code-claude. Mirrored here per the patch workflow.*

## The defect as it stood

On p. 105 (PDF p. 115) figure 7.5 (`fig:wavemodes`) was set **33 pt too high**, so the picture's
`travel` label and the top of the transverse wave were printed on top of the paragraph's last two
lines. `pdftotext` shows the collision as interleaved characters:

> Hold the note — ev**trave**ery lay**l**er its own c, each faster below

The float box (295.63 pt) ran **177.4 → 472.7 pt** down the page while the body text ran to
**210.3 pt**. The text area ends at 586.8 pt, so 114 pt of the page sat empty *below* the figure
while the figure overlapped the text *above* it.

The build reported this as nothing at all: 0 Overfull hbox, 0 Overfull vbox, 0 float-too-large.
The only trace was one `Underfull \vbox … while \output is active`, which the log carries on eight
other pages that are perfectly fine. **The existing gate cannot see this defect class.**

## What it was not

Ruled out by measurement before anything was changed:

- **Not the TikZ bounding box.** The picture was boxed in isolation with the book's own preamble:
  `\ht = 184.83 pt`, `\dp = 0`, `\wd = 280.45 pt` against 325.22 pt of `\textwidth`. `\fboxsep=0pt
  \fbox{…}` around it, in the real document, drew the frame tight to the ink on all four sides.
  Nothing spills out of the picture. The lesson in CLAUDE.md about node text not scaling was not
  in play here.
- **Not a stale PDF or a short build.** Log 2 250 lines, PDF newer than the source, and the
  collision reproduced on a clean three-pass rebuild.
- **Not the figure being too big for the space.** Text 156.8 pt + `\intextsep` 12 pt + float
  295.6 pt = 464.5 pt against `\@colroom` 534.8 pt. It fits with 70 pt to spare, and LaTeX agreed
  it fits — see the trace below.

## The mechanism, traced

`flafter.sty` is generated with its `trace` option, so `\def\fl@trace#1{\typeout{FLTRACE: #1}}`
makes LaTeX narrate its own placement decision. For this float:

```
FLTRACE: textmin + textfloatsheight: 37.43974pt
FLTRACE: page-so-far: 156.82251pt
FLTRACE: float size = 295.63268pt (addtocurcol)
FLTRACE: colroom = 534.79756pt (addtocurcol)
FLTRACE: reqcolroom = 452.45518pt (addtocurcol)
FLTRACE: ***Success: here
```

So the arithmetic is right and the float is placed **here** — `h` of `[htbp]`. The `h` branch of
`\@addtocurcol` emits, around the box:

```
\vskip \intextsep
\box\@currbox
\penalty\interlinepenalty
\vskip\intextsep
\ifnum\outputpenalty <-\@Mii \vskip -\parskip\fi
```

That last line is the culprit. `\parskip` under KOMA's `parskip=half-` is **`6.8pt plus 6.8pt`**,
so `\vskip -\parskip` puts **6.8 pt of *negative* stretch** on the page. The document is
`\flushbottom`, so `\@makecol` packs the column with `\vbox to\@colht` and TeX must set the glue.
When the page's remaining stretch is driven negative, the glue-set ratio goes negative — and TeX
applies stretch with **no bound in either direction**. The elastic part of the `\intextsep` above
the float inverted:

| `\intextsep` | glue actually set above the float | float box top |
|---|---|---|
| `12pt plus 2pt minus 2pt` (LaTeX default) | **≈ −33 pt** | 177.4 pt — overlaps the text |
| `12pt` (rigid) | +12 pt | 222.6 pt — correct |

A ±2 pt elastic component was set to −45 pt off its natural value. Rigid glue has nothing to
invert, which is the whole of the fix.

**Why it is rare:** it needs a page whose *other* stretchable glue is small enough that the
−6.8 pt from `\vskip -\parskip` dominates the total. A page with several paragraph breaks after
the float has enough positive `\parskip` to keep the ratio positive. Page 105's float is the last
thing on the page, so there was nothing to outvote it.

## The fix as applied

`manuscript/billiard_ball_universe.tex`, preamble, immediately after
`\setcounter{totalnumber}{5}` — one length plus the comment that keeps someone from undoing it:

```latex
% Rigid \intextsep. LaTeX's here-placement of a float emits \vskip -\parskip after
% it; with KOMA's parskip=half- (\parskip = 6.8pt plus 6.8pt) that puts NEGATIVE
% stretch on the page. When a page's remaining stretch goes negative, \flushbottom's
% glue-setting runs at a negative ratio and the elastic part of \intextsep inverts:
% the 12pt plus 2pt above the float was being set to about -33pt, pulling the figure
% up into the last lines of text (fig. 7.5 on p. 105; fig. 4.2 on p. 43). A rigid
% length has nothing to invert. Do not restore the plus/minus components.
\setlength{\intextsep}{12pt}
```

The figure's own `[htbp]` is **unchanged**. Nothing in `fig:wavemodes` was touched.

### The alternatives, measured and rejected

| candidate | result | verdict |
|---|---|---|
| **rigid `\intextsep` (adopted)** | figure sits 12 pt under the text, caption follows, page ends naturally | **fixes the class, best page** |
| `[tbp]` on this figure | no overlap, but the float drops to the bottom band and leaves a ~130 pt hole between text and figure | fixes one page, ugly |
| `[b]` | same as `[tbp]` | same |
| `[t]` | figure moves to p. 106, away from its passage | rejected |
| `[!htbp]` | **still overlaps** — `!` relaxes size tests, not glue setting | no help |
| `[p]` | figure exiles to p. 150 | rejected |

`[tbp]` would have been the surgical answer, but it treats the symptom on one page and leaves the
same trap armed for every other `[htbp]` float in the book — which is all of them.

## A second collision, unreported, fixed by the same line

The fix was checked page-by-page against the pre-fix build. **Eight pages moved, all of them
y-shifts only — not one word of text reflowed, and the page count held at 200.** Two of the eight
were live collisions:

- **p. 105 / fig. 7.5** — the reported one.
- **p. 43 / fig. 4.2 (`fig:layers`)** — worse than the reported one, and never noticed. The three
  panels are `\includegraphics` plates, and each carries an opaque **white background rectangle**.
  That rectangle was printed over the paragraph's last line, *"is an inventory."*, slicing it
  horizontally about a point above its baseline: at 400 dpi the descender of the *y* is gone and
  every letter is cut off mid-stroke. The dashed "continues outward" arcs and the gold dots crossed
  the paragraph as well. It left no trace anywhere — `pdftotext` still extracts the full line,
  because the characters are all still in the text layer; only the pixels were painted over. It is
  now clear by 22.5 pt.

The other six (pp. 31, 67, 70, 77, 97, 103) moved 2.0–7.0 pt — the same glue being set correctly
instead of inverted, on pages where the inversion had not been large enough to collide.

## Build state as committed

- **0 Overfull hbox / 0 Overfull vbox / 0 Float too large / 0 undefined.**
- **Page count 200 pp, unchanged.**
- **Text content byte-identical on all 200 pages** — verified by comparing the extracted word
  stream of every page before and after.
- `Underfull \vbox` **9 → 11**. The two new ones are PDF pp. 70 and 77; both were rastered and
  both are ordinary full-looking pages, short of `\textheight` by a few points. This is the honest
  cost of the fix: removing 2 pt of stretch per in-text float means two pages that previously
  "filled" — by inverting glue, which is the defect — now report that they cannot. `\vbadness=8000`,
  so only badness-10000 cases are reported at all. **Not treated as a regression, but recorded
  rather than buried.**

## The gate could not see this class. It can now.

`Overfull`/`Float too large` greps do **not** catch a float that overlaps its own page's text.
`manuscript/check_collisions.py` was written for this and wired into `build.bat` and
`FLIP_CHECKLIST.md`. It reads the built PDF; 200 pp in about 6 s; exit 0 clean, 1 collisions,
2 could not run.

### Why it does not use the PDF's own vector geometry

The obvious implementation — ask the PDF where the drawings are — **does not work on this book**,
and it is worth recording so nobody rebuilds it that way. For the `figures/` plates placed with
`\includegraphics`, both `get_drawings()` and `get_bboxlog()` report the graphic's *internal*
coordinates, neither scaled by the placement nor clipped: on p. 43 they claim each plate is
226.9 pt wide and runs from x = −0.4 to x = 453.2, off both edges of a 432 pt page, when the plate
is actually set 104 pt wide (`width=0.32\textwidth`). A gate built on those numbers would be
wrong by a factor of 2.2 on exactly the sixteen figures most likely to collide. The checker
therefore takes geometry from the text layer (reliable) and from **rendered pixels** (definitive).

### The three checks, and the numbers each threshold sits on

| check | what it catches | threshold | measured separation |
|---|---|---|---|
| **TEXT** | a figure's own labels printing over prose | overlap > 8 pt wide, > 2 pt tall | real p. 105 collision **25.5 pt** wide; the only other overlaps in the book are inline `\frac`s at **4.0–5.5 pt** |
| **INK** | foreign ink inside a paragraph — rules, dots, curves, plate edges | ≥ 8 eroded px | p. 43 intrusion **132 px**; healthy pages never exceed **2 px** |
| **BLANK** | prose painted over by a plate's white background | ink stops > 1.0 pt above the line's own baseline | p. 43's cut line **1.71 pt**; across all **4 672** prose lines in the book the worst healthy line is **0.54 pt** (99.9th pct 0.53) |

Notes on the two deliberate exclusions, both measured rather than guessed:

- `\lettrine` drop caps are *supposed* to sit in the text block, so a one-glyph line taller than
  1.8× the page's normal line height is exempt from TEXT. Without this, every chapter opener fires.
- Chapter titles are not paragraphs, and the ornament near them puts 8–13 px of legitimate ink
  beside them, so INK only judges blocks of ≥ 3 lines. Without this, folios 65 and 165 fire.

The stacked-fraction overlaps are **counted and printed, not silently dropped** — the run ends with
"5 stacked-fraction overlap(s) below the 8 pt width threshold, not counted." If that number moves,
something changed.

### What it does not catch

A figure that grazes a paragraph with one or two dots and carries no label and no white background
lands at 1–3 px — under INK's floor, and invisible to TEXT and BLANK. The p. 105 figure was in fact
in this position: its wave dots contributed only 3 px, and it was TEXT, via the `travel` label,
that caught it. The three checks are meant to be read together, and none of them is a substitute
for looking at the float pages.

### Verification

Run against the pre-fix build (`git show HEAD~1:manuscript/…`, rebuilt) and the fixed one:

```
pre-fix    p. 43   INK    132 px of non-text ink inside the paragraph at 'Now the compounding…'
           p. 43   BLANK  ink stops 1.7 pt above the baseline in 'is an inventory.'
           p. 105  TEXT   'quicken downward. Every layer has its own c;' over 'travel' (25x2 pt)
           p. 105  TEXT   'ordinance, not a law of the world. Hold the ' over 'travel' (25x5 pt)
           200 pages, 4 collisions -> exit 1
fixed      200 pages, 0 collisions -> exit 0
```
