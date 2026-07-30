# Built-PDF policy (2026-07-30)

**The compiled book PDF is not committed on ordinary builds.** `manuscript/billiard_ball_universe.pdf`
is gitignored; each rebuild regenerates it locally and git ignores it.

Why: the ~14 MB PDF was force-committed on many builds, and it dominates repository weight
(history measured 633 MB loose / 163 MiB packed, almost all of it successive near-identical PDFs).
Halting the per-build commit stops the bleed.

**History is untouched** (REPO_SPEC §5.4 — rewriting history would delete the correction record we
are publishing). The past commits keep their PDFs; we only stop adding new ones. This policy was
applied with `git rm --cached manuscript/billiard_ball_universe.pdf` (untrack, keep the local file
and all history) plus a `.gitignore` rule.

**Exception — tagged releases.** At publication, force-add the exact printed interior in the same
release commit that sets the final `\PAGECOUNT` and is tagged `first-edition-1.0`:

```
git add -f manuscript/billiard_ball_universe.pdf
```

so the release tag carries the precise PDF a reader is holding. Only release commits carry a PDF.
