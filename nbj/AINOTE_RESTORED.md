# AINOTE_RESTORED.md — v5, the sentence the studio earned
*For code-claude (repo). The proofviz studio implemented all of Priority 1, so the claim the book retreated from two drops ago is now literally true and has been restored — in a stronger form than it ever had. `SECTION_ainote.tex` here is **v5**; apply as a whole-section replacement (`\addchap{\emph{A Note on How This Book Was Made}}` up to but not including `\appendix`), superseding v1–v4 whichever you hold. Both editions: 0 errors, 0 overfull, 169 pp here.*

## What changed in the studio

- The tautological tangent check is gone, replaced by a real perpendicularity test on the drawn geometry (OT·CT = 0, exact to machine precision), with the tangent formula hoisted into a shared helper so the check and the drawing cannot drift apart.
- `make-deliverables --strict` (or `PROOFVIZ_STRICT=1`) now **throws before writing anything** and exits 1 if any check fails. Verbatim from the deliberately broken run: `FAIL bbu_inverse_square: strict: 1 check failed — refusing to write deliverables`, exit code 1, **zero files written, not even the SVGs.** Advisory remains the development default, by design.
- `layers` and `actorsbelow` now carry checks of their own — the cross-panel magnification claim, which is exactly the relationship those figures ask the reader to trust. All six plates are covered.
- No plate's picture changed: every stage SVG was rendered before and after and diffed byte-identical. **No PDFs need re-uploading and the book does not need rebuilding for the figures.**

## The restored sentence

```
It drew most of the diagrams in code, so that their geometry would be arithmetic rather than eyeballing. The plates showing three-dimensional shapes go further: each states in advance what its own construction must satisfy --- that the grazing line really does meet the ball's radius at a right angle, that the blocked patch really is a quarter of its neighbour, that the small region marked in one panel really is the region the next panel magnifies --- and the program that made the figures in this book refuses to draw at all if one of those statements has stopped being true. I am fond of that arrangement, and not only because it caught mistakes. A picture that can fail its own test is the nearest thing a diagram can be to an honest witness.
```

Three examples chosen to span the whole set: the repaired tangent check, the quarter-of-its-neighbour check, and one of the new cross-panel checks. All three are now falsifiable.

**One condition attaches to that sentence and it must not be lost.** The guarantee lives on the strict path, not the development default. The prose says "the program that made the figures in this book refuses to draw at all", which is true only if the plates that ship were produced under `--strict`. A TODO row now requires exactly that before the print interior is cut. Since the SVGs are byte-identical, regenerating under strict changes no pixel — it only makes the provenance true.

## Also corrected: `MANUAL.md` §3b and a new §11

§3b now records the tested state and keeps the superseded wording visible with its lesson attached. **§11 is new and is about my error, not the studio's:** I read `tol = 0.02` as a *relative* 2% when it is *absolute*, and reported a comfortable 82% margin as a precarious 7% — then raised a warning about spurious failures under strict mode that was groundless. The studio corrected the premise before acting on it. §11 records the rule: margins are `|lhs−rhs| / tol`, tolerances are absolute, and the checks are closed-form on sketch constants so rendering changes cannot move them.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `back matter: restore the figure claim, now earned by the studio's strict mode`.
3. Append to `FACTCHECK_REPORT.md`: "Figure self-verification claim RESTORED and now true: strict mode refuses to write on a failed check (verified, exit 1, no files); all six 3D plates carry falsifiable assertions; tangent tautology replaced. Condition: final plates must be generated under --strict — see TODO."
