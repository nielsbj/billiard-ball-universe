# P13 — CENSUS CLOSE-OUT (applied 2026-08-15)

**STATUS: APPLIED IN PART. 16 of 18 ruled edits in, 2 held.** Both editions 0 errors / 0 `Overfull`
/ 0 `Float too large` / 0 undefined. **Page count 200 — unchanged.**

| held | why |
|---|---|
| **E6** (Table 7.1, census 17–20) | the cells put `tab:wounds` **32.24 pt** past `\textheight`. The full ladder — every rung — sheds **4.00 pt**. Still **28.24 pt** owed at rung (iv), which is STOP-and-report. |
| **E11** (Fig. 7.7 caption, straggler (i)) | the added clause pushed `fig:saturation` **6.10 pt** past `\textheight` — a **second, new** float overflow the bundle did not anticipate and for which nothing was pre-authorized. |

*From chat-claude. Transport: the `===FILE` bundle protocol, ninth use. Received as
`nbj/P13_bundle.txt`, split to `nbj/P13_census_closeout.md`. Census entry tags in (parens).*

## Anchor verification and the E1 gate

18 OLD/NEW pairs parsed mechanically from the split file and counted at HEAD before anything was
written. **17 verified `old=1, new=0`.** The one miss was E7's figure node — the same stale anchor
as P12's A4b, and expected: this time the bundle authorized minimal adaptation with a quote-back.

**E1's gate passes.** The verdict E1 quotes was verified verbatim at its wound *before* the edit was
applied: `survivable, at the price of a conspiracy` occurs exactly once, in the hidden-rest-frame
scoreboard — *"The scoreboard here reads: \emph{survivable, at the price of a conspiracy} --- the
crowd must be a very…"*. The claim the cold check exposed as false is now a quotation that checks out.

## The probe ladder, every rung measured

| rung | action | `tab:wounds` over by |
|---|---|---|
| **(i)** | as ruled | **32.2384 pt** |
| **(ii)** | `\addlinespace` 1 pt → 0.5 pt, this table only (6 rows) | **29.2384 pt** — sheds exactly 3.00 pt |
| **(iii)** | + caption `skip` 6 pt → 5 pt | **28.2384 pt** — sheds exactly 1.00 pt |
| **(iv)** | STOP and report | **28.24 pt still owed** |

Each rung shed exactly what its arithmetic predicts, and the three of them together are worth
**4.00 pt against a 32.24 pt debt**. I stopped at (iv) as instructed and reached for nothing else.

**E6 is 11.55 pt heavier than the P12 wording it replaces.** A3 overflowed by 20.69 pt; E6
overflows by 32.24 pt. The difference is almost entirely the Bell cell: A3 proposed *"channels
unbounded (no-signalling then derivable), or finite (a crack one day visible)"*; E6 proposes *"…or a
first faster-than-light signal one day seen"*, which is materially longer. **For the next attempt
the budget is: ≥ 28.24 pt lighter than E6 with the full ladder spent, or ≥ 32.24 pt lighter without
it** — roughly two rendered table lines.

## The second overflow, which was nobody's expectation

Rung (i) reported **two** `Float too large` hits, not one:

```
Float too large for page by  6.09596pt  on input line 1468   -> fig:saturation
Float too large for page by 32.23840pt  on input line 1545   -> tab:wounds
```

Isolated by reverting E11 alone: the 6.10 pt hit disappears. **E11 caused it.** The edit replaces
`, one of them past the centre,` (25 characters) with `--- one, in this drawing, past the centre ---`
(44 characters), which grows the caption by a line and tips a float that had been sitting just
inside `\textheight`. E11 is a good repair to a real straggler, but nothing in the bundle
pre-authorizes shrinking `fig:saturation`, so it is **held, not improvised on**. Straggler (i)
stays open.

With E6 and E11 both reverted the book is clean: **0 float hits, 0 Overfull, 200 pp.**

## Applier-level black-rectangle check, per edit

As required, each NEW was masked (coinages, figurative bookkeeping, ordinals-as-names, bare
cross-references) and checked for a surviving literal clause. No edit failed; three are marginal and
are marked as such rather than waved through.

| edit | survives masking | verdict |
|---|---|---|
| **E1** | *"survivable, at the price of a conspiracy"* — a quoted verdict, now verifiably the book's own | **PASS** |
| **E2** | *"a system that cannot absorb below its first step cannot quietly leak"* | **PASS** |
| **E3a** | *"one refusal, two services"* — thin on its own | **marginal**: it is an opening pointer, not a closing verdict, so the carve-out does not strictly cover it. It survives because the very next sentence (E2's) states both services in full. Flagged. |
| **E3b** | the third duty plus three `because` clauses | **PASS** |
| **E4a** | *"thirty-three orders of magnitude… that much energy in, that little warmth out"* | **PASS** |
| **E4b** | *"thirty-three orders deep"* | **marginal**: the quantity keeps its noun ("orders"), but the deliberate thinning at the third site leaves *"the refusal just computed"* leaning on the previous page. Flagged. |
| **E5** | *"one medium, two wave-shapes — light's and gravity's — and no reason yet for one speed"* | **PASS** |
| **E7** (prose) | *"one part in $10^{33}$"* — a literal ratio, and consistent with the thirty-three orders elsewhere | **marginal but PASS** |
| **E7** (figure labels) | nothing — but they are labels, and the caption carries the literal statement | **N/A by kind** |
| **E8** | *"the hidden rest frame bought for Michelson–Morley"*, *"regress of energy with no last account"* | **PASS** |
| **E9** | deletion plus a trim; nothing asserted | **PASS** |
| **E10** | the specification itself follows the colon | **PASS** |

## E7 — the figure node, adapted minimally, change quoted

The bundle's OLD was the pre-FIGFIX single node; at HEAD it is two nodes. The bundle authorized
minimal adaptation. **The adaptation is zero geometry change** — same anchors, same `text width`,
same coordinates — because all four words fit the existing 2.0 cm box:

| word | width at `\small` |
|---|---|
| `the gap` | 1.16 cm |
| `refuses` | 1.10 cm |
| `the cascade` | 1.77 cm |
| `removes` | 1.32 cm |

```
was:  {\small the gap:\\ the floor};          now:  {\small the gap\\ refuses};
      {\small the cascade:\\ the valve};            {\small the cascade\\ removes};
```

The ruled one-line-each wording is preserved word-for-word; only the line break falls differently,
which two nodes require. Rastered both editions on folio 96: labels clear of the ball, the arrows
and the bands. *(Worth noting against the bundle's parenthetical: the new text is **not** shorter
than the old on both lines — as single lines, "the gap refuses" is 2.34 cm and "the cascade removes"
3.18 cm, both wider than the 2.10 cm strip. It fits only because it is broken one word per line.)*

**Rule-7 quote-back**, the sentence now following E7's heat-figure edit:

> The demanded intake is some $10^{20}$ times the sun's whole output, while the Earth's entire
> outflow of internal warmth --- about fifty million million watts, and geology has already spoken
> for it~\cite{daviesdavies2010} --- is a vanishing fraction of that.

A full noun phrase; nothing displaced.

## E9 quote-back, the join after the deletion

> …then say honestly whether the reply closes the wound or only bandages it. **By my own count the
> toy leaves this chapter alive and changed.** Seven wounds: one three hundred years old --- drag and
> heat --- …

The scoring instruction now arrives once, after the seven wounds are listed, in the fuller sentence
that also promises the table.

## Sweeps

| sweep | expected | actual | |
|---|---|---|---|
| `three-word verdict` | 0 | **0** | ✓ |
| `cannot be taken in sips` | 1 | **1** | ✓ |
| `two services` | 1 | **2** | ✓ — **bundle slip**: E3's own second NEW contains "the two services already on its record", so 2 is the correct target |
| `third duty` | 1 | **1** | ✓ |
| full thirty-three-orders gloss | 1 | **1** | ✓ |
| each variant | 1 | **1**, **1** | ✓ |
| `keep score` | 1 (+1 in the licence sentence) | **1** | ✓ — **bundle slip**: the licence sentence reads "loses choreography, never *score*", not "keep score", so there is no second instance to find |
| `survivable, at the price of a conspiracy` | 2 | **2** | ✓ |
| `the crack predicted` | 0 | **1** | ✗ — the held E6 Bell cell |
| `the valve` | 0 | **3** | ✗ with note — **two are TikZ source comments**, not reader-facing; the third is the held E6 cell |
| `its floor` | 0 | **2** | ✗ with note — one is the held E6 cell; the other is **literal and must stay**: *"once more at its floor, that final layer of which you may not ask 'why this?'"*, about a bottomed universe, not the cascade |

So in reader-facing prose the alias sweep is clean **except inside the held E6 cell**. Also verified:
`\digitaleditiontrue` and `\draftnotestrue` restored after the print build, all probe files deleted,
`ref.bib` untouched.

## Gates

- **Both editions: 0 errors / 0 `Overfull` / 0 `Float too large` / 0 undefined.** Log 2250 lines,
  not truncated.
- **Page count 200 — unchanged** by P13.
- `Underfull \vbox` 6 → 9. The three added are a consequence of the reflow around the reworded
  boxes; folio 95's box page and folio 96's figure page were rastered in both editions and are clear.
- Figure 7.1 rastered both editions at folio 96: the relabelled callouts sit inside the bands with no
  collisions, and the figure now agrees with its own caption for the first time since P12.

## Open

1. **E6 / census 17–20** — Table 7.1 still unrepaired, now with a measured budget: **28.24 pt with
   the full ladder spent**. The E6 wording is 11.55 pt heavier than P12's A3 attempt; the Bell cell
   is where the weight is.
2. **E11 / straggler (i)** — `fig:saturation` overflows by 6.10 pt with the clause added. Needs
   either a shorter clause or an authorized way to shrink that float.
3. **E3a and E4b** are marginal by the book's own rule 8 — flagged above, not repaired.
