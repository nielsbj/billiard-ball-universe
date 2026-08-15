# P12 — THE REFERENCE REPAIRS: 40 census entries answered (applied 2026-08-15)

**STATUS: APPLIED IN PART. 34 of 39 ruled edits in, 5 held.** Both editions 0 errors / 0 `Overfull`
/ 0 `Float too large` / 0 undefined. **Page count 198 → 200 (+2, against the bundle's expected
+0 to +1).** Rules 8–10 and the rule-2 insert adopted.

**Two blocks are held, both for reasons the bundle's own machinery caught:**

| held | why | who rules |
|---|---|---|
| **A3** (4 table cells + compensation) | the cells push `tab:wounds` **20.69 pt** past `\textheight`; the pre-authorized ladder's only step sheds **1 pt** | chat-claude / Niels — measurements below |
| **A4b** (figure node) | anchor stale (the FIGFIX commit split that node in two) **and** the new wording overflows the figure's clear strip | chat-claude / Niels — measurements below |

*From chat-claude, ruled by Niels. Transport: the `===FILE` bundle protocol, eighth use. Received as
`nbj/P12_bundle.txt`, split to `nbj/P12_reference_repairs.md` and `nbj/COLD_CHECK_BRIEF.md`.
Mirrored at the foot. Census entry numbers in [brackets] throughout.*

## Anchor verification — the bundle's warning was well placed, once

The bundle flagged that chat-claude's local copy predates H1/H2/P11/P11b and told me to verify every
OLD exactly once at HEAD regardless, and to **quote back any mismatch rather than adapting**. The 39
OLD/NEW pairs were parsed mechanically out of the split file — not retyped — and counted against
HEAD before a single byte was written:

**38 of 39 verified `old=1, new=0`.** One did not:

### A4b — HELD, quoted back

```
BUNDLE OLD:  {\small the gap: the floor\\ the cascade: the valve};
AT HEAD:     \node[anchor=north west, align=left, inner sep=0pt, text width=2.0cm] at (0.15,3.78)
               {\small the gap:\\ the floor};
             \node[anchor=north west, align=left, inner sep=0pt, text width=2.0cm] at (0.15,2.72)
               {\small the cascade:\\ the valve};
```

The node was split into two by `cbdebbc` (FIGFIX pass two), after Niels rejected a single wrapped
node that hung outside the bands. **Adapting is not mechanical, and this is why the rule exists:**

| proposed label | width at `\small` | verdict |
|---|---|---|
| `the gap refuses` | **2.34 cm** | overflows |
| `the cascade removes` | **3.18 cm** | overflows |
| *(the clear strip left of the ball)* | **2.10 cm** | — |

Applying A4b's wording as given would re-create the exact wrap-and-overhang defect that was fixed
two commits ago. It needs a label placement decision, not a text swap. **Held, unadapted, as
instructed.**

Consequence to be aware of while it is held: **A4a was applied** (the caption now reads "The gap
refuses; the cascade removes"), so Figure 7.1's caption and its in-figure labels currently disagree,
and the labels still carry the retired aliases *floor* and *valve*. That is a real inconsistency and
it is on the books until ruled.

## A3 — HELD. The table probe ladder, run and exhausted

Applied with the rest, `tab:wounds` broke the float gate:

```
LaTeX Warning: Float too large for page by 20.68837pt on input line 1543.
```

The ladder the bundle pre-authorized: **(i)** caption `skip` 6 pt → 5 pt; **(ii)** report back with
measurements before any further step, `scriptsize` off the menu without Niels. Both steps executed:

| probe | float over by |
|---|---|
| A3 applied, as ruled | **20.69 pt** |
| **+ ladder step (i)**, `skip` 6 pt → 5 pt | **19.69 pt** |
| **A3 reverted**, everything else kept | **fits — 0 hits** |

Step (i) sheds exactly the 1 pt its arithmetic predicts and cannot close a 20.69 pt gap. So the
ladder is exhausted at step (ii), and I stopped there rather than reaching for anything not on the
menu. **A3 is reverted in full — the four cells and the compensation together — so the rest of P12
could ship green.** Census entries [17][18][19][20] are therefore *unrepaired* and the cold checker
should be expected to fail them.

**The budget for the re-repair, measured:** the four cells plus the compensation must come in at
least **20.69 pt lighter than the ruled text** — about **1.5 rendered table lines** — against an H2
margin of only 2.41 pt. The compensation as written does not compensate: it swaps a 109-character
cell for a 108-character one, which is height-neutral. Note also that holding A3 is what leaves the
`"the cascade is the valve" = 0` sweep failing at 1 (see below) — the surviving instance is inside
the reverted compensation cell.

## The rest — applied

**Class S (structural), 10 of 11 pairs.** S1 and S2 christen the *cascade* and the *gap* at their
birth in Ch. 6 [28][27] — the census's finding that both were introduced with a definite article
before existing. S3a–S3f retire the alias chain: *elastic floor*, *valve*, *floor-work*, *seal
above*, *priced in regress* are gone from the book (all sweeps 0), and "thirty-three orders" now
carries its noun in all three places. S4 frees *fork* for Bancal alone. S5 gives the ordinal its
wound-name.

**Class A (apparatus), 7 of 12 pairs.** A1 makes the chapter-head box self-glossing [1][2] — the box
grew as predicted and folio 88 holds it, rastered clear in both editions. A2a/A2b give the two
scoreboards their constraints [21][22]. A4a, A4c, A5 repair the figure caption, the settlement
caption and the Dictionary's Bancal entry [10][37][38].

**Class B (prose), 17 of 17.** All applied clean, including B35, which the bundle sent as
locate-and-quote-back rather than as an anchor pair. **B35 final form, quoted back as required:**

> One thing does come back from the exercise, and it belongs to the saturated shadow --- the sixth
> wound.

## One inert line removed

The `\enlargethispage{\baselineskip}` guard added by P11b was deleted. Its purpose was to keep the
split-ledger box on folio 94; S3f grew that box from 26 to **30 lines**, and its paragraph now runs
24 lines, so **54 lines are competing for a 39-line page** — the box cannot stay under any lever,
and the guard was doing nothing. Measured: with and without it the layout is byte-for-byte the same
(folio 94 = 27 lines either way). Removing it is pure cleanup; its comment now misdescribed the
situation.

## Page-count and layout consequences — reported, not repaired

- **200 pp, +2 against the bundle's expected +0 to +1.** The overshoot is prose expansion, not the
  table: the A3-reverted build is also 200 pp.
- **`Underfull \vbox` 4 → 6**, new short pages at folios **94, 100, 132**. Folios 100 and 132 are
  near-full (31 and 34 lines) and are marginal warnings.
- **Folio 94 carries a hole: 27 lines of ~39.** The split-ledger box, now 30 lines, has migrated
  whole to the top of folio 95, where it and the following paragraph fill the page. Rastered both
  editions: **the box sits clear, the folios print clear** — the bundle's probe condition is met —
  but the hole on 94 is real and there is no filler available (the cascade figure is on 96, and
  moving it was measured as harmful back in P11b). Flagged for ruling.

## Sweeps

| sweep | expected | actual | |
|---|---|---|---|
| `elastic floor` | 0 | **0** | ✓ |
| `the cascade is the valve` | 0 | **1** | ✗ — the held A3 compensation cell, see above |
| `floor-work` | 0 | **0** | ✓ |
| `Seal above` | 0 | **0** | ✓ |
| `priced in regress` | 0 | **0** | ✓ |
| `thirty-three orders of refusal` | 0 | **0** | ✓ |
| `thirty-three orders of magnitude` | ≥ 3 | **3** | ✓ |
| `leaning against` | 2, both noun-bearing | **2**, both noun-bearing | ✓ |
| `--- ---` | 0 | **0** | ✓ |
| `the fork` | report count | **2 bare + 2 `the Bancal fork`** | ✓ with note |

**The two bare `the fork` uses are both in one sentence inside the fifth wound's own section** — *"The
toy holds the fork open and pays for both tines, and Problem Five below is restated as the fork."* —
where the referent **is** the Bancal fork, called by its short name in its home section. That is rule
9 satisfied (one object, one name, short form), not violated. The collision S4 was sent to fix was a
*different* fork borrowing the word in the synthesis pages, and that one is now *the crossroads*.

Also verified: `\digitaleditiontrue` and `\draftnotestrue` restored after the print build,
`\enlargethispage` count 0, all probe files deleted, `ref.bib` untouched.

## WRITING_RULES.md

Rules **8** (every sentence pays its own way), **9** (one name per object), **10** (one metaphor
family per sentence) appended, and the rule-2 insert on compound adjectives applied, all verbatim as
ruled, in this commit.

## The bundle as received (verbatim, from nbj/P12_bundle.txt)

*Split to `nbj/P12_reference_repairs.md` (185 lines) and `nbj/COLD_CHECK_BRIEF.md` (15 lines); both
files hold the bundle's text verbatim and are the authoritative copies. Not duplicated here — the
bundle is long, and the split files are in the drop-zone alongside this record.*

## Open, for chat-claude and Niels

1. **A3 re-repair** — the four table cells and the compensation need to come in **≥ 20.69 pt lighter
   than the ruled wording** (~1.5 table lines). Census [17][18][19][20] stay open until then.
2. **A4b re-repair** — the figure node is two nodes now, and "the gap refuses" / "the cascade
   removes" measure 2.34 cm and 3.18 cm against a 2.10 cm strip. Needs a placement decision. Until
   ruled, Figure 7.1's labels contradict its own caption.
3. **Folio 94's hole** — 27 lines of ~39, structural, no filler available.
4. **+2 pages** against the expected +0 to +1.
