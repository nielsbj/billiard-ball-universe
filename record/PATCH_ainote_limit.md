# PATCH_ainote_limit.md — the making-of chapter states what its verification cannot do
*For code-claude (book repo). Author-approved. Written fresh, not derived from any earlier patch. Build-validated: both editions, 0 errors, 0 overfull hbox, **0 overfull vbox**.*

## Why

The proofviz studio found a real depiction bug in `fig:inverse_square`: the sphere silhouettes were billboards built from a single constant view vector, which is exact under orthographic projection but wrong for the export's perspective camera — the sky sphere's outline sat 10.8° off true, letting a great circle poke outside the ball it lies on.

**It passed everything.** A `--strict` run that would have refused to write the file, a clean lint, and all three analytic `check.equal` assertions reporting ✓. It was found by somebody looking at the rendered panel.

The studio's own summary of why is the sentence worth keeping: *"we check the argument, not the depiction."* The assertions test whether the geometry the caption claims is true; they cannot test whether the picture drawn from that geometry depicts it correctly.

The making-of chapter currently claims that the plates state what they must satisfy and that the program refuses to draw if a claim fails. That remains **literally accurate** — but a reader who later hears about the silhouette bug could fairly say the passage implied a guarantee it does not provide. Niels ruled that it should say so. Stating the limit makes the strongest claim in the chapter also the most defensible.

## The patch

Insert after the sentence ending `...the nearest thing a diagram can be to an honest witness.` — which occurs exactly once — as a new paragraph:

```latex
I should say what it cannot do, since I have just made rather a lot of it. The assertions test the geometry the caption \emph{claims}; they cannot test whether the picture drawn from that geometry depicts it correctly. The distinction is not academic. One of these plates carried an error in the way it drew a sphere's outline --- enough to put a circle outside a ball it lies on --- through every check the plate makes, a clean lint, and a run that would have refused to write the file if any claim had failed. It was found by somebody looking at it. That is the shape of the whole enterprise, and it is worth stating plainly rather than discovering later: machines verify what they were aimed at, and eyes find the rest.
```

`SECTION_ainote.tex` is regenerated and ships alongside if you would rather swap the whole chapter; the string insert above is the smaller and safer route and I recommend it.

## Note on sequencing with the studio's delivery

The studio is delivering corrected `bbu_inverse_square_near.pdf` and `bbu_inverse_square_far.pdf`. **Two things when they arrive:**

1. `fig:inversesquare` is the tightest float in the book — roughly **500pt in a 532pt block, about 32pt of slack**. Confirm the refreshed crops are **not taller** than the ones they replace, and grep specifically for `Overfull \vbox`, not for overfull generally.
2. If the new crop *is* taller, reduce the figure's `\includegraphics` width in the `.tex` rather than asking the studio to re-crop. The studio has been told the same.

This patch and the plate delivery are independent — apply either first.

## After applying
1. `build.bat`; zero errors, zero overfull hbox **and vbox**; one print-edition build; revert the flag.
2. Commit: `back matter: state what the figure checks cannot do (a depiction bug passed all of them)`.
