# figures/ — provenance and self-checks

The 16 plate PDFs in this directory are the book's geometric figures — **machine-checked
vector plates**, not hand-drawn. They are authored and verified in Niels's **proofviz** studio;
this directory carries a *declared snapshot* of the source so the self-checking claim is
inspectable inside the book repo.

- **Upstream:** `proofviz` (in `D:\Niels\Proj-2026\FuncGraph\`), snapshot at commit **`ec9db61`**.
  proofviz is the source of truth; this snapshot is a copy for the record, not the live studio.
- **`programs/`** — the seven plate programs (`bbu_actorsbelow`, `bbu_circulation`,
  `bbu_inverse_square`, `bbu_layers`, `bbu_lightpair`, `bbu_shadowpush`, `bbu_sixthwound`),
  each a `.sketch.js`. These emit the plates in `figures/*.pdf` and carry the caption's
  geometric assertions as in-code checks.
- **`harness/`** — the core of the strict checker: `figure-lint.js`, `geometry-check.js`,
  `interpret-runner.js`, `lint-proof.mjs`. **Reproduced from proofviz (pinned at `ec9db61`)
  solely so the verification of the book's claims is inspectable in-repo** — not so it runs
  turnkey. It is not self-contained: it imports `camera.js`, `sketch.js`, `interpret.js`,
  `geometry.js`, `figure-shapes.js`, and `stage-framing.js`, which are **the engine of proofviz —
  a separate tool, under development, and deliberately not reproduced here.** Those modules stay
  in proofviz; this repo makes no claim on them and no promise about proofviz's future
  publication. The harness is here to be *read* (inspectable, not turnkey); to *run* `--strict`
  you use the proofviz studio at the pinned commit. This is the settled form for this edition.
  Proofviz itself is a tool for making and developing mathematical visualizations of proofs; the
  strict verification mode used for this book is one small, early part of it.

## Regenerate (under --strict, from the proofviz studio)
Run the strict lint/geometry pass over a program and export the plate; a build with any failed
check does not ship. See proofviz `RUNBOOK.md` for the exact invocation at the snapshot commit.

## The known limit (kept honest, per "A Note on How This Book Was Made")
The checks verify the *geometry the caption claims*, not that the picture *depicts* it: a real
sphere-outline depiction bug once passed every check, lint, and `--strict` run and was caught by
eye. Machines verify what they were aimed at; eyes find the rest.
