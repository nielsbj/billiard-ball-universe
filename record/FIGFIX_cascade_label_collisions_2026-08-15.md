# FIGFIX — two label collisions in `fig:cascade` (Figure 7.1), fixed 2026-08-15

**STATUS: FIXED.** Two overlapping-text defects in the cascade figure, both pre-existing, both
closed by coordinate/width changes only. No artwork, no wording, no bounding box changed. Both
editions 0/0, **198 pp — unchanged**.

*Reported by Niels off the page (folio 95), from a screen crop of the "the gap: / the floor"
label. Investigation found a second collision he had not flagged.*

## What was wrong

### Collision A — the momentum arrow struck "the gap:"

```
\node[anchor=east, align=center, text width=2.2cm] at (2.05,3.05)
  {\small the gap: the floor\\ the cascade: the valve};
```

Measured widths at `\small` (Palatino, `linespread 1.05`, line height **12.60 pt = 0.443 cm**):

| string | natural width |
|---|---|
| `the gap: the floor` | **2.67 cm** |
| `the cascade: the valve` | **3.39 cm** |

`text width=2.2cm` is narrower than both, so **each authored line wrapped into two**. The node was
never the intended 2 lines — it rendered as **4**: *the gap: / the floor / the cascade: / the
valve*. Four lines plus inner sep is ~2.04 cm tall, and centred at `y=3.05` its top reached
**y≈4.07**. The thick momentum arrow is drawn at **y=3.9**:

```
\draw[->, bbuBlue, line width=1.3pt] (0.4,3.9) -- (1.98,3.9);
```

The arrow spans x = 0.4 → 1.98 and the node's box spans x = −0.15 → 2.05, so the arrow ran
horizontally straight **through the word "the gap:"**. This is the defect visible in Niels's crop:
what looks like a rule above the label is the arrow shaft crossing it.

### Collision B — the energy caption overprinted the "layer N+1" label

```
\node[anchor=west, align=left, text width=5.2cm] at (3.4,2.1)
  {\small energy sold down, into ever-faster channels --- momentum-cheap};
```

At 5.2 cm this set in **3 lines** (*energy sold down, into ever- / faster channels — momentum- /
cheap*), ~1.33 cm tall. Centred at `y=2.1`, its top reached **y≈2.77**. The band label sits at
`y=2.82`:

```
\node[anchor=east] at (9.45,2.82) {\small layer $N{+}1$ --- faster: $w \gg u$};
```

That label is 4.27 cm wide anchored east at 9.45, so it spans x = 4.92 → 9.45; the caption spanned
x = 3.4 → 8.6. The two boxes overlapped in both axes and **the ascenders of "energy sold down, into
ever-" printed through "layer N+1 — faster: w ≫ u"**. This one Niels did not flag; it is the more
serious of the two.

## The constraint that shaped the fix

Band $N{+}1$ is `(0,1.6) rectangle (9.6,3.0)` — **1.4 cm tall**. A one-line layer label (0.44 cm)
plus a three-line caption (1.33 cm) cannot both live in it at overlapping x. The caption had to
become two lines, and its top had to be *pinned* rather than centred.

Measured: `energy sold down, into ever-faster` = **5.33 cm**, `channels --- momentum-cheap` =
**4.75 cm**. So any `text width` in [5.35, ~6.0] cm sets it in exactly two lines.

## The fix

| | before | after |
|---|---|---|
| A — gap/cascade label | `at (2.05,3.05)` | `at (2.05,2.72)` |
| B — energy caption | `anchor=west, text width=5.2cm, at (3.4,2.1)` | `anchor=north west, inner sep=0pt, text width=5.5cm, at (3.4,2.48)` |

**A** keeps the 4-line rendering. Setting it as the intended 2 lines needs `text width` ≥ 3.39 cm,
which at `anchor=east` on x=2.05 would push the node's left edge to x ≈ −1.6 — 1.6 cm outside the
bands, unbalancing the whole picture. There is no room in the composition for the two-line form, so
the node was lowered instead: its top now sits at y≈3.74, **0.16 cm clear** of the arrow, and its
bottom at y≈1.70, clear of the lower red arrows (top y=1.58).

**B** is set in two lines at 5.5 cm and pinned by its top corner. Top at y=2.48 gives **0.24 cm**
clearance below the layer label's descenders; `inner sep=0pt` lets the two lines finish at y≈1.59,
flush with the band's floor at 1.6. Right edge lands at x=8.9, inside the band at 9.6.

Both nodes carry an in-file comment recording the measurement and the failure mode, so the next
person to touch this figure does not have to rediscover it — in the spirit of the TikZ lessons
already in `CLAUDE.md`.

**Nothing else moved.** The picture's bounding box is set by the top caption node (y=4.72) and the
`\vdots` (y=−0.32); neither node touched either bound, so the figure's height is unchanged and
nothing repaginated.

## Provenance: this is not P11/P11b damage

`fig:cascade`'s source was untouched by P11 and P11b — those commits changed only the split-ledger
box, one prose sentence, and one `\enlargethispage`. TikZ coordinates are absolute within the
picture, so the overlaps did not depend on which page the float landed on. **Both collisions have
been in the book since the figure was drawn**; P11b merely moved the figure to the top of folio 95,
where Niels happened to look at it closely.

## Gates

- **Both editions — digital and print: 0 errors / 0 `Overfull` / 0 `Float too large for page by` /
  0 undefined.**
- **`Underfull \vbox` 4, `\hbox` 2** — unchanged, same pages (25, 43, 82, 96).
- **Page count 198 pp — unchanged.**
- **Rastered folio 95 at 300 dpi (digital) and 250 dpi (print).** Both collisions gone in both;
  the grayscale print rendering was checked separately because the arrows change colour there.
- Iterated on a standalone `figprobe.tex` preview rather than the full book (≈2 s per pass instead
  of ≈2 min), following the `nbj/toymap_preview.tex` precedent; the fix was only ever applied to
  the master once it rendered clean in isolation.

## Note for Niels — the PDF is locked again

The master build hit `! I can't write on file billiard_ball_universe.pdf` (the 1340-line log that
greps as a false 0/0). Every number above was measured against a byte-identical copy of the master
under a different jobname; the truncated log and aux were deleted so they cannot be mistaken for a
pass. **Close the PDF viewer and run `manuscript/build.bat` once** to refresh the artifact — the
committed `.tex` is correct and complete.
