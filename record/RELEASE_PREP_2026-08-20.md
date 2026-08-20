# Release prep — the checklist run at the final state (2026-08-20)

*Beta closed the same day with no further replies expected. The interior is **not** declared final —
the author's own cold read is still open — so this is the safe half of the release work: everything
verified, nothing committed to a number. `\PAGECOUNT` deliberately untouched at 182.*

## Gates, both editions, at HEAD

| | pages | errors | Overfull | Float too large | undefined | collisions |
|---|---|---|---|---|---|---|
| digital | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |
| print | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |

Stacked-fraction note reads 5 in both, unmoved from where H3 measured it.

**The H3 guard earned its keep during this run.** The first attempt failed with
`! I can't write on file 'billiard_ball_universe.pdf'` and a 1340-line log — the interior was open
in a viewer. `check_collisions.py` exited 2 and said so rather than reporting a pass it had not
performed. That is exactly the trap the checklist warns about, and the gate behaved.

## Sweeps

- **`[RULING PENDING]`** — down to the two expected `first-edition-1.0` tag lines (`README.md:40`,
  `ERRATA.md:15`). Both resolve in the release commit.
- **Personal residue (REPO_SPEC §5.3)** — unchanged at 7 tracked files; **no `C:\Users\…` anywhere**.
- **History size (§5.4)** — 162.52 MiB, steady. Report, do not act.
- **Beta-name proxies** — `nbj/` gitignored and untracked; no `archive/` content tracked; the only
  email in tracked text is the committer's own, inside the ruling about itself; readers are R1–R4
  throughout `TODO-NIELS`.

**Checklist repaired.** The dry run found that the marker grep can never return zero, because this
checklist line contains the string it greps for. Worse by the afternoon: the dry-run *report* now
quotes both the marker and the path patterns, so it reports itself in two sweeps. `FLIP_CHECKLIST.md`
now carries the required exclusions (`.git`, `nbj/`, `FLIP_CHECKLIST.md`, `FLIP_DRYRUN_*.md`,
`REPO1_SCRUB_*.md`) and says in terms that they are not optional — otherwise release day is spent
chasing ghosts.

## Spine and wrap, computed but NOT set

| stock | in/page | spine at 202 pp | full wrap |
|---|---|---|---|
| **white** (assumed everywhere) | 0.002252 | **0.4549 in** | 12.7049 × 9.25 in |
| cream | 0.0025 | 0.5050 in | 12.7550 × 9.25 in |

The cover as built carries `\PAGECOUNT{182}` → spine 0.4099 in → wrap 12.6599 in, which matches the
built PDF's measured 12.661 in. Setting 202 adds **0.0450 in** of spine.

**Paper stock is an undecided decision, not a settled default.** Nothing in the repo records a
choice; the constant was simply inherited. Cream is warmer and more period-correct for an
engraved-plate book and would sit better beside a parchment cover — but the interior now carries ten
grayscale plates, and cream warms and slightly muddies halftones where white holds them. **White is
the recommendation** and is what every existing number assumes, so it costs nothing to confirm; it
just needs a conscious yes before the spine is set. Added to `FLIP_CHECKLIST.md` as its own gate.

## Documentation corrected

`BOOK_COVER.md` §5 carried two stale figures: the spine was still quoted *"At the current 139 pages:
0.313 in"*, and the art resolution referred to a 1024 × 1536 source. That figure describes
`art/cover_recursive_ball.png`, a **superseded** earlier candidate — the live master the cover builds
from is `cover/cover_recursive_ball.png` at 1417 × 1417, which places 3.7 in wide at **383 DPI**,
comfortably over the 300 floor. Both corrected, with the confusion named so it is not re-made.

## What is left, and what it waits on

| item | waits on |
|---|---|
| declare the interior final | the author's cold read |
| paper stock | one word |
| `\PAGECOUNT` → spine → previewer | interior final + stock |
| physical proof; gaps-open/gaps-plugged read | the wrap |
| gitleaks + `reuse lint` | CI (neither tool installable here) |
| beta-name sweep proper | the list, which correctly lives outside the repo |
| tag, OTS-3, flip public | all of the above |

Nothing on that list is blocked by anything I can do alone.
