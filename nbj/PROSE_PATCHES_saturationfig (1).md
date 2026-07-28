# PROSE_PATCHES_saturationfig.md — v2, caption reconciled against the studio's checks
**Supersedes the v1 drop.** The studio's check report has arrived, so the outstanding item in v1 — "caption written without the check report, reconcile before print" — is now closed. Use the caption below, not v1's.

**Filenames confirmed:** `bbu_sixthwound_transparent` and `bbu_sixthwound_opaque`, as the figure block already had them. The studio is generating under `--strict` and delivering the two cropped PDFs into `figures/`; if its export produces different step names it will tell you, and the `.tex` and filesystem should then be changed together in one commit.

**One thing the studio caught that is worth knowing when you look at the plate:** without a shared window frame, the exporter crops each stage to its own ink — and because the transparent panel's rays run off to the right while the opaque panel's stop at the body, the body would have rendered at *different sizes* in the two panels. It added a shared frame (the same device `fig:layers` and `fig:actorsbelow` use). The caption's clause "drawn at the same size" depends on that fix.

## The caption (v2 — replaces v1's)

```latex
\caption{The two regimes, which are the whole of this wound. Both panels show the same body under the same rain, drawn at the same size, differing only in how densely the matter inside is packed. Above: matter that stops only a little of what crosses it. Every piece blocks on its own account and nothing stands in anything else's shadow --- the rays that end do so one at a time through the depth, one of them past the centre, because the interior is still being struck. The shadow counts all the matter, and the push follows the body's \emph{mass}. Below: the same outline packed dense enough to stop very nearly everything. Every ray ends at the front face, and whatever lies behind stands in shadow and adds nothing, however much of it there is. The shadow counts only the outline, and the push follows the \emph{silhouette}. Double the matter in the upper picture and the shadow doubles; treble it in the lower and the shadow scarcely stirs. Gravity, wherever it has been weighed, follows mass. The shadow push therefore requires the upper picture everywhere --- including inside bodies that have fallen past the last rung we know of. That is a requirement, and not a result.}
```

Every quantitative clause maps to one of the plate's four `check.equal` assertions (thin limit ∝ N; blocked(2N) ≈ 2·blocked(N); thick limit saturated near 1; blocked(3N) ≈ blocked(N)). The caption deliberately says nothing about the number of dots drawn — the studio flagged that the drawn counts are illustrative and the scaling is carried by the checks.

**Close the TODO row** opened in v1 ("reconcile fig:saturation's caption with the sketch's checks before print") — it is done.

---

## Patch 1 — the figure block


Insert immediately **after** this sentence, which occurs exactly once, in the Sixth Wound:

```
and stops caring how much matter is stacked up behind it.
```

Insert:

```latex
\begin{figure}[htbp]
\centering
\includegraphics[width=0.86\textwidth]{figures/bbu_sixthwound_transparent}\\[1.2em]
\includegraphics[width=0.86\textwidth]{figures/bbu_sixthwound_opaque}
\caption{The two regimes, which are the whole of this wound. Above: matter that stops only a little of what crosses it. Every piece blocks on its own account, nothing stands in anything else's shadow, and the rays that end do so one at a time throughout the depth --- so the shadow is the sum over all the matter present, and the push follows the body's \emph{mass}. Below: matter dense enough to stop very nearly everything it meets. The rays end at the front face, and whatever lies behind it is already in shadow and adds nothing, however much of it there is --- so the shadow is the outline, and the push follows the \emph{silhouette}. Gravity, wherever it has been weighed, follows mass. The shadow push therefore requires the upper picture everywhere --- including inside bodies that have fallen past the last rung we know of. That is a requirement, and not a result.}
\label{fig:saturation}
\end{figure}
```

**Stacked, not side by side**, and at 0.86 textwidth — the panels are landscape, and two of them abreast would be about 2.3 inches each, too small for the sparse/dense distinction to read. This follows the `fig:inversesquare` pattern.

**No LaTeX panel lines**, deliberately. The plates carry `transparent` / `blocking ∝ mass` and `opaque` / `blocking ∝ area` baked in, and MANUAL §3b rule (3) forbids double-captioning a baked panel. The caption is written to complement those labels rather than repeat them.

## ⚠ Two things I could not do from here — please check both

**1. Confirm the two filenames.** I have written `bbu_sixthwound_transparent` and `bbu_sixthwound_opaque` from the panel labels, but only the page proof (`bbu_sixthwound_page.pdf`) reached me, not the cropped deliverables. **Look at what the studio actually exported into `figures/` and substitute the real step names if they differ.** A wrong filename here is a build failure, not a silent error, so it will announce itself — but check first rather than discovering it.

**2. My build test used stand-ins.** I split the page proof into its two pages and used those as placeholder files. That validates the LaTeX, the float behaviour and the caption length — it does **not** validate the real plates, which are cropped and lack the proof furniture ("bbu sixthwound", "(claim)", "Deduction. (prose placeholder)"). My page count of 173 is therefore indicative only; yours from the real files is authoritative.

## What is still outstanding, and it is mine not yours

I wrote the caption **without the studio's check report**, which has not reached me. The book's convention is that a caption's quantitative claims must match the sketch's assertions, so I deliberately kept the caption to claims that are physics rather than measurements: "the shadow is the sum over all the matter present" (the thin limit, blocked fraction → N·s/A) and "the shadow is the outline" (the thick limit, 1 − e^(−τ) → 1). Both are elementary and I recomputed them; neither asserts a tolerance or a figure that a check would have to underwrite.

**When the studio's check report arrives I will reconcile the caption against it** and send a correction if anything needs to move. Please add a row to `TODO.md` §3D noting that `fig:saturation`'s caption is pending reconciliation with the sketch's checks — it should not go to print unreconciled, since the making-of chapter now makes a claim about exactly this relationship.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: figure for the sixth wound --- transparent versus opaque`.
3. Report the real page count; the spine calculation continues to come from the final print interior, not from this number.
