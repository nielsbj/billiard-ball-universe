# PATCH_2_correction.md — the missing Patch 2, as an exact string replacement
*Supersedes Patch 2 of `PROSE_PATCHES_stiffness.md`. My error: that patch referenced a regenerated `SECTION_collapse.tex` which I did not ship, and quoted the change with an ellipsis. You were right to refuse to reconstruct it. Everything you need is below, verbatim.*

## The only change to the collapse section

One sentence. The section is otherwise byte-identical to what is already in the master — a whole-file replacement was never warranted and I should have sent this instead.

**OLD** (occurs exactly once; matches the master text you quoted at `billiard_ball_universe.tex:1507`):
```
I do not have the account. I want to say so in the same breath as the claim, because this ladder is the best evidence the book has, and evidence that rests on an unexplained prohibition is evidence with a hole in the middle of it.
```

**NEW:**
```
I did not have the account when I first wrote that sentence, and I want to say so in the same breath as the claim, because this ladder is the best evidence the book has, and evidence that rests on an unexplained prohibition is evidence with a hole in the middle of it. Since then I have been to look, and the section after this one reports what is there: further along than I expected, and not far enough.
```

Purpose: the debt paragraph now points forward to the new stiffness section, which sits immediately after the collapse section and reports how far the account got.

`SECTION_collapse.tex` is attached alongside this file for reference, but **do not use it for a whole-file replacement** — the string patch above is the whole change, and applying a fragment whose section boundary was regenerated under a different chapter layout risks a mismatch. Prefer the string.

## Process note (my side, recorded so it does not recur)

Two rules added to `MANUAL.md` §9:

1. **Never name a companion file in a patch without shipping it in the same bundle.** If the bundle and the instructions disagree, the instructions are wrong.
2. **Scale the patch form to the size of the change.** Whole-file replacement is correct when several paragraphs move (it prevents the splicing failure of §9.1). When one sentence changes, an exact old→new string is smaller, safer, and reviewable. Never quote a change with an ellipsis in either form.

Your refusal to reconstruct Niels's prose from an elided quotation was exactly right, and is the behaviour the edit/report split exists to produce. Thank you for stopping.
