# P17 — final-read close-out (2026-08-21)

*From chat-claude's end-to-end read of the final state. One conditional scoreboard, one cosmetic
source comment, two confirmations for the record. **The conditional did not fire** — the Second
Wound already carries a prose scoreboard — so the only edit in this patch is a comment.*

## The bundle, verbatim

Delivered as `nbj/P17_final_read_closeout.md`. **There was no `P17_bundle.txt`** — unlike P10–P15,
this drop produced only the `.md`, which carries the `===FILE…===END===` wrapper itself and is
therefore the bundle. Nothing was missing; the naming was.

```
P17 --- FINAL-READ CLOSE-OUT: one conditional scoreboard, one cosmetic comment,
two confirmations for the record. From chat-claude's end-to-end read of the
final state. Mirror to record/ with the read's ledger noted.

E1 (conditional): grep case-insensitive "scoreboard" within the Second Wound
section (heading to the Third Wound heading). If any prose form exists, quote it
and make no edit. If none exists, insert as the section's final prose paragraph,
before the wavemodes figure environment:
Scoreboard: \emph{open --- answered only as a specification: transverse, two
polarizations, one speed, no sound; one clause with a laboratory address, and
the rest a very special crowd indeed.}
Then rule-7 check the junction and quote it back.

E2 (cosmetic, source-only, discretionary): the TikZ comment "% the valve at the
body's floor" predates the relabel; update to "% the refusal line at the body"
or leave with a dated note --- applier's choice, reported either way.

CONFIRMATIONS (gates, no edits): (a) the cascade christening --- quote the
sentence containing "its name" + cascade (expect the S1 wording with an \Ix
wrapper); (b) the Coda-reprise plate --- quote the \includegraphics line and its
asset path, for the record (chat-claude's regex could not see it; the rasters
already proved presence).
SWEEPS: "Scoreboard" case-insensitive count per wound section = at least one
each, seven of seven; both editions 0/0/0/0; page count reported; mirror;
commit: prose: final-read close-out --- second wound's scoreboard (conditional);
read ledger filed (P17).
```

## E1 — the conditional did NOT fire. No edit.

The Second Wound runs from `\section{Second Wound: The Wave in Nothing}` (line 1334) to
`\section{Third Wound: The Stubbornness of Charge}` (line 1449). A case-insensitive search for
*scoreboard* in that range returns **one hit, at line 1417**, and it is a prose form. Quoted as
instructed:

> The scoreboard here reads: *survivable, at the price of a conspiracy* --- the crowd must be a
> very special crowd: transversely stiff yet swimmable --- stiff by shear, or by the tension of its
> own circulations --- transverse-only, carrying exactly two branches (light's dipole pair,
> gravity's quadrupole pair) and nothing else, dispersionless, frameless in effect, its waves
> clocked at exactly c.

**Per E1's own instruction, no edit was made.** The insertion would in any case have duplicated the
existing verdict rather than supplied a missing one: the proposed text's "transverse, two
polarizations, one speed, no sound" and "a very special crowd indeed" are already on the page in
the sentence above, and the "laboratory address" clause appears in the same paragraph's closing
movement. **No insertion means no junction, so the rule-7 check does not apply** — nothing was
displaced and no anaphor moved.

## E2 — applied, and here is the reasoning behind the choice

The bundle left this to the applier. **Updated**, not left with a note, because the old wording is
not merely stale but forbidden: *valve* is one of the retired aliases for **the gap**, and
`WRITING_RULES` rule 9 (ONE NAME PER OBJECT) exists precisely because a cold census found
*gap = floor = seal = lock = throttle* by p. 131. Leaving a retired alias in the source is how it
finds its way back into prose.

The element the comment labels — the two short strokes at `(2.18,3.34)–(2.45,3.34)` and
`(2.75,3.34)–(3.02,3.34)` — is the broken line under the body, which the figure's own callout names
**the gap refuses** and which the neighbouring comment at line 1272 already calls *"the refusal at
the body's underside."* The comment was the last place still saying *valve*.

```diff
-  % the valve at the body's floor
+  % the refusal line at the body (P17/E2: was "the valve at the body's floor",
+  % a retired alias for the gap --- rule 9, one name per object)
```

A comment-only change: it cannot affect typesetting, which the identical page count and box counts
below confirm.

## Confirmation (a) — the cascade christening

Line 866, in Ch. 6's "Second Rule: No Action at a Distance --- and None at a Depth". The S1 wording
with the `\Ix` wrapper, as expected:

> And it settles the shape of the escape the next chapter's first wound will need, and gives it its
> name: the `\emph{\Ix{cascade}}` --- energy handed downward one layer at a time, each layer passing
> on what it cannot keep, none of them warming.

## Confirmation (b) — the Coda-reprise plate

Lines 1915–1916, immediately before `\addchap{\emph{Coda --- One Mystery}}` at line 1919:

```latex
 \centerline{\includegraphics[height=0.86\textheight,width=\textwidth,keepaspectratio]%
   {cover/cover_recursive_ball}}
```

Asset path **`cover/cover_recursive_ball`**, resolved by the master's `\graphicspath{{../}}` to
`cover/cover_recursive_ball.png` — the live 1417 × 1417 master the cover itself builds from, not the
superseded `art/cover/` candidate. It sits inside `{\thispagestyle{empty}\null\vfill … \vfill}`
preceded by `\ifodd\value{page}…\newpage\fi`, so it lands full-page on the verso facing the Coda,
carrying no folio and no text.

**Why chat-claude's regex could not see it:** the `\includegraphics[…]%` line ends with a comment
percent *before* its brace argument, so the asset name lives on the following line. Any single-line
pattern of the form `includegraphics.*cover_recursive_ball` must miss it. The file was correct all
along; the search was.

## Sweeps

### "Scoreboard" per wound section — seven of seven ✓

| § | section | hits |
|---|---|---|
| 1208 | First Wound: The Pincer of Drag and Heat | 1 |
| 1334 | Second Wound: The Wave in Nothing | 1 |
| 1449 | Third Wound: The Stubbornness of Charge | 1 |
| 1457 | Fourth Wound --- or First Door: The Exactness of Everything | 1 |
| 1482 | Fifth Wound: The Correlations | 1 |
| 1538 | Sixth Wound: The Saturated Shadow | 1 |
| 1587 | Seventh Wound: The Equal Fall | 1 |

**Seven numbered wounds, seven scoreboards. The sweep passes.**

Two further wound-titled sections return zero, and **both are correct at zero** — noted here so a
future sweep does not read them as misses. *The State of the Wounds* (1601) is the summary table
itself, which tabulates the seven verdicts rather than issuing an eighth. *A Wound That Runs the
Other Way: Entropy* (1641) is explicitly the inverted entry — the tower's credit, not a debit — and
a scoreboard line there would mis-file it among the debts.

### Both editions

| edition | errors | Overfull | Underfull | pages | trim |
|---|---|---|---|---|---|
| digital (`\digitaleditiontrue`) | **0** | **0** | 9 | **202** | 432 × 648 pt |
| print (`\digitaleditionfalse`) | **0** | **0** | 9 | **202** | 432 × 648 pt |

Both **0/0**, both 202 pp, identical box counts — as they must be, since the only edit is a
comment. The nine underfull boxes are pre-existing and outside the zero-**overfull** policy. The
edition toggle was flipped, built, and **reverted**; `git diff` confirms the master's only change is
the two comment lines.

## Ledger

The read that produced this patch was chat-claude's end-to-end pass over the final state. It found:
one genuinely open question (E1) that turned out to be already answered on the page; one stale
source comment (E2); and two items its own tooling could not verify, both of which verify clean by
hand. **No prose was changed by P17.** The interior stands at 202 pp, 0/0 in both editions.
