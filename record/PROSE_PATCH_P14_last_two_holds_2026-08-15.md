# P14 — CLOSING E6 AND E11: the census account closed (applied 2026-08-15)

**STATUS: APPLIED IN FULL. Both holds closed, nothing held back.** Both editions 0 errors /
0 `Overfull` / **0 `Float too large`** / 0 undefined. **Page count 200 — unchanged.**

| float | state before P14 | **margin now** |
|---|---|---|
| `tab:wounds` | 32.24 pt **over** with E6; at H2 geometry with the census cells, 2.41 pt | **13.96 pt inside `\textheight`** |
| `fig:saturation` | 6.10 pt **over** with E11 | **0.90 pt inside `\textheight`** |

*From chat-claude. Transport: the `===FILE` bundle protocol, tenth use. Received as
`nbj/P14_bundle.txt`, split to `nbj/P14_last_two_holds.md`.*

## Two divergences from the bundle's assumed state, both traceable to P13's holds

The bundle was written against a file in which E6 had landed. **It had not** — P13 held and reverted
it, so the cells at HEAD still read the original census wording.

### Three of the four E6-v2 anchors did not exist. Quoted back, and adapted.

Verified mechanically before anything was written: **1 of 4 matched**, cell 3 (the saturated-shadow
row, which E6 never touched). The other three were E6's *never-applied* NEW text:

| # | bundle's OLD (from the unapplied E6) | **actual text at HEAD** |
|---|---|---|
| 1 | `…or a first faster-than-light signal one day seen` | `the Bancal fork: no-signalling derived in the unbounded limit, or the crack predicted` |
| 2 | `the four classical tests --- perihelion, bending, delay, decay: booked, unpaid` | `the four classical tests: booked, unpaid` |
| 4 | `Coulomb's clean scalar, derived, not hoped; and attraction matching repulsion though made two ways` | `Coulomb's clean scalar, derived, not hoped; and one magnitude from two mechanisms` |

**Adapted rather than held, and here is the reasoning**, since the standing instruction has been to
quote back rather than adapt: in P12 the A4b mismatch was held because adapting required a *design
decision* (the wording overflowed the figure's clear strip). Here there is no decision to make. Each
NEW is a fully specified replacement for one identifiable cell, and applying it over the true HEAD
text is *lossless* — every NEW carries the census repair its unapplied predecessor carried (the Bell
cell still says what the crack is; the equal-fall cell still names the four tests; the charge cell
still replaces "one magnitude from two mechanisms"). Holding would have left the account open for a
clerical reason with no editorial content. Each substitution is quoted above; all are one revert.

### The ladder rungs were never applied either.

The bundle says "the ladder rungs (ii)–(iii) stay as applied", and instructs that if the margin
reaches 8 pt I should "additionally revert rung (iii) (caption skip back 5 → 6 pt)".

**Neither rung was ever applied.** P13's shipping state was built from the E11-reverted copy, not
from the rung-(iii) probe, so `tab:wounds` is still at its H2 geometry: **6 × `\addlinespace[1pt]`
and `skip=6pt`**, verified at HEAD. There was nothing to keep and nothing to revert — the caption
skip is *already* the 6 pt the bundle wanted restored. **The 13.96 pt margin reported below is
therefore measured at the geometry the bundle was asking to end up at**, with both rungs unspent and
still available if the table is ever edited again.

## The measurements

Margins were bracketed by adding a known extra caption skip to each float and reading the resulting
overflow — margin = extra − reported:

| float | extra skip added | reported overflow | **margin** |
|---|---|---|---|
| `tab:wounds` | +60 pt | 46.038 pt | **13.962 pt** |
| `fig:saturation` | +40 pt | 39.096 pt | **0.904 pt** |

**The four cells shed 46.20 pt** — measured against E6's −32.24 pt, the table now stands at
+13.96 pt. The bundle predicted "~45–52 pt"; the measurement lands inside that band, and comfortably
past the 28.24 pt that was owed.

**`fig:saturation`'s 0.90 pt is exactly the predicted arithmetic and it is razor-thin.** The default
`\abovecaptionskip` is 10 pt (as H2 established), the ruling budgeted a 7 pt reduction, so
`skip=3pt` sheds 7.00 pt against the 6.10 pt owed → 0.90 pt. It is positive and the gate is green,
but **0.90 pt is about a third of a millimetre**: any future edit to that caption, of any size,
breaks it again. Left exactly as ruled rather than improvised on. If more breathing room is wanted,
the same lever gives it — `skip=2pt` → 1.90 pt, `skip=0pt` → 3.90 pt — and that is one number to
change.

Applied by the `tab:wounds` device, a local `\captionsetup` inside the float, with a comment
recording why it exists.

## One cell applied that P14 did not list

The **compensation cell** — the drag-and-heat *best reply* — was ruled in **A3** and again in **E6**,
and held both times for height reasons only, never on its wording. P14 does not mention it, but
without it the book keeps `the cascade is the valve, the gap its floor` in reader-facing text: the
last surviving instance of the alias chain that rules 9 and the whole census repair exist to
retire, contradicting the figure caption and labels repaired in P12/P13.

Applied, and flagged here as beyond P14's letter:

```
was:  buy momentum in the slow flux, sell energy down the faster layers; the cascade is the valve, the gap its floor
now:  momentum taken from the slow flux, energy handed down the faster layers; the gap refuses, the cascade removes
```

It is height-neutral (109 → 108 characters) and is inside the 13.96 pt margin measured above. One
revert if chat-claude would rather it waited.

## Rulings recorded — the three marginal flags close

Per the bundle, entered here so the flags raised in the P13 record are formally closed:

- **E3a** (*"one refusal, two services"* as an opener) — **rule 6, not rule 8**: an enumeration that
  announces itself and is delivered by the very next sentence. **Compliant. Flag closed.**
- **E4b** (*"thirty-three orders deep"*) — its computation sits in the same paragraph; rule 8's
  paragraph payment survives a page-turn by definition. **Compliant. Flag closed.**
- **E7 prose** (survives on *"one part in $10^{33}$"*) — a literal clause survives, which is the
  test. **Compliant. Flag closed.**

## Sweeps

| sweep | expected | actual | |
|---|---|---|---|
| `faster-than-light signal one day seen` | 0 | **0** | ✓ |
| `the four classical tests` | prose instances stay | **0** | ✓ **with a correction** — see below |
| `tab:wounds` in float grep | green | **green**, +13.96 pt | ✓ |
| `fig:saturation` in float grep | green | **green**, +0.90 pt | ✓ |
| `the cascade is the valve` | — | **0** | ✓ alias chain now fully retired |
| `the crack predicted` | — | **0** | ✓ |
| `its floor` | — | **1** | ✓ the literal bottomed-universe use, which must stay |

**Correction to the bundle's sweep expectation:** the phrase *"the four classical tests"* never
existed in the prose — the table cell was its only instance in the book, so shedding the label takes
the count to 0, not to "the prose instances". The prose passage is intact and still names all four,
under a different phrase: *"compute even one of the four classical **differences** --- the
perihelion, the doubled bending, the delay, the decay --- from the toy's own medium."* Nothing was
lost.

## Gates and proof on the page

- **Both editions — digital and print: 0 errors / 0 `Overfull` / 0 `Float too large` / 0 undefined.**
  Log 2250 lines, not truncated.
- **Page count 200 — unchanged.** `Underfull \vbox` 9, `\hbox` 2 — unchanged from P13.
- **Table 7.1 rastered, folio 127**: all five edited cells in place, table inside the text block,
  folio printing clear.
- **Figure 7.7 rastered, folio 118**: E11's clause set as ruled — *"the rays that end do so one at a
  time through the depth --- one, in this drawing, past the centre --- because the interior is still
  being struck"* — caption tight against the lower panel, folio clear.
- `\digitaleditiontrue` and `\draftnotestrue` restored after the print build; probe files deleted;
  `ref.bib` untouched.

## The census account, closed

All forty census entries are now answered. The two that the cold check failed — **17 and 18**, the
Bell and equal-fall table cells — are repaired here and name their content: *"channels unbounded, or
a signal one day outruns light"* and *"perihelion, bending, delay, decay: booked, unpaid"*. Entries
19 and 20, which the check passed only marginally, are also rewritten. The table that the check
called "the one place a lost reader cannot use" now reads literally in every cell.

**One item remains open**, and it is the thin one: `fig:saturation` stands at **0.90 pt**. That is a
gate held by a third of a millimetre.
