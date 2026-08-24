# P21 — the world wounds the toy, and the wounds are shown (2026-08-24)

*Cover copy, not manuscript. Niels, reading the KDP description, ruled that "the toy is challenged
but not broken" — and the wounds table agrees with him: its columns are best reply · price · still
open, both explicit scoreboards say **open**, and the chapter ends with a research programme ("it
can lose", not "it lost"). "The breaks are shown" claimed more than the table shows. The manuscript's
own two "breaks" sentences (Ch. 1 "because it does break, in instructive places"; Ch. 6 "this
beautiful toy, tested against the world, breaks") are **deliberately untouched** — inside the book
both are immediately framed as breakage-in-specific-places-as-a-virtue, and the text is closed and
anchored. **Nothing is tagged and the repo is not flipped**; both still wait on the physical proof.*

## The ruling

Delivered in-session (no bundle file — the applier is the scribe, per the patch workflow). Two
choices were put to Niels and answered:

1. **Wording** — of three candidates ("the world wounds the toy", "is wounded", a table-columns
   version), Niels chose the recommended active form.
2. **Scope** — description only, description + cover, or leave as-is. Niels chose **description +
   cover**, taken before anything is uploaded, so the listing and the printed back cover stay
   identical.

## P21/E1 — applied

OLD (verified unique in each file before the edit):

> Where the toy universe breaks, the breaks are shown --- in a table, which the book then reads
> backward, as a specification of the layer below.

NEW:

> Where the world wounds the toy, the wounds are shown --- in a table, which the book then reads
> backward, as a specification of the layer below.

Four locations, one sentence each:

| file | note |
|---|---|
| `cover/cover_wrap.tex` (back panel, line 81) | the printed copy — the change that matters |
| `cover/BOOK_COVER.md` §3 | spec; **also repaired a pre-existing drift** — it ended "— in a table." and lacked the reads-backward clause the print has carried; now matches print verbatim |
| `FINAL/3_reference/COVER_SPEC.md` §3 | same drift, same repair (untracked mirror) |
| `FINAL/README.md`, the KDP description | now identical to the back cover, full clause included |

## The checks

**Rebuild, genuine.** `pdflatex cover_wrap.tex` ×2, run directly from `cover/`. PDF mtime moved from
2026-08-21 10:52 to the run (the stale-PDF trap checked, not assumed). Log: **0 errors, 0 Overfull**.

**Layout, measured not eyeballed.** Old and new wraps rendered at 300 dpi and diffed: every changed
pixel lies inside one band, `1386×166 px at +201+1100` on the back panel — the reflowed final lines
of the edited paragraph. The paragraph kept its line count; the pull quote, reader line, and barcode
below it are **pixel-identical**. The new sentence sets with no bad break and no hyphenation, read
from the render.

**Sweeps:**

| string | required | found |
|---|---|---|
| `toy universe breaks` (whole repo incl. gitignored) | 0 | 0 |
| `the world wounds the toy` | exactly the 4 files above | exactly those 4 |
| tracked diff | 2 files, 1 line each | `cover_wrap.tex` + `BOOK_COVER.md`, 2 insertions 2 deletions |
| manuscript | byte-identical | byte-identical (not in the diff) |

## Release mechanics

The interiors are untouched — this is the mirror image of P20, which touched the interiors and left
the cover alone. Page count 206, spine 0.5150 in, wrap geometry 12.7650 × 9.25 in: all unchanged, so
nothing upstream of the cover build was re-run, correctly.

**Re-staged in `FINAL/1_upload/`**, with `CHECKSUMS.sha256` and the `FINAL/README.md` table refreshed:

```
2302f3d394f4ba8fe0ec33c9f0776c2e3f4ecc61ab3e8a4676905be3004acd75  BBU_interior_print_206pp.pdf     (unchanged)
cafbc26be821de687c74faab3782d19cb9791af58ddbd59f839df42b18e48971  BBU_interior_digital_206pp.pdf   (unchanged)
bd183ddd8b1922802731fc6dfdfae07503375c7b6a48a268757cd50be2474eb8  BBU_cover_wrap_206pp.pdf         (NEW)
```

New source hash: `cover/cover_wrap.tex` = `b0d6dff0c93d3f80b564433fb8e1d25e6a9b7e7c7d37efcd6791de7a2830a1f7`.

The three `FINAL/2_proof/` rasters were re-rendered from the new wrap (crop geometry matched against
the shipped rasters before regenerating: back `1800×2700+38+38`, spine `235×2775+1799+0`, front
`1800×2700+1992+38`, supersampled from 600 dpi).

## The timestamp consequence

`cover/cover_wrap.tex` no longer matches the hash the 2026-08-21 batch anchored (`ce6d20b9…`); its
proof now verifies against a checkout of `2de4de2` with `ots verify -f`, exactly as the manuscript's
has since P20. The superseded wrap PDF's proof moved to `FINAL/_superseded_2026-08-21/`, joining the
P20 interiors' — a proof of vanished bytes must not sit beside new files.

**Unlike P20, a fresh interim stamp WAS taken.** P20 was a pure deletion, so every surviving word was
already inside the 21 August anchor. P21 *adds* words — "the world wounds the toy, the wounds are
shown" is new text on the cover — and a stamp proves *not later than*, which the old anchor cannot
say about words it never contained. The new batch is `timestamps/2026-08-24-p21-cover/` (anchor +
the new tex + the new wrap PDF); status and block heights live in `timestamps/README.md`, nowhere
else. OTS-3 is unaffected and still waits on the tag.

## Still not done, by design

No tag. No OTS-3. No repo flip. No publish. All four wait on the physical proof — which, when it
arrives, will now be judged against the P21 cover.
