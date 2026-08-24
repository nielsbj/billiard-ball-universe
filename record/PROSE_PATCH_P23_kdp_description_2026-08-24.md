# P23 — the description grows its two selling points, and Bell loses "by name" (2026-08-24)

*From chat-claude, via Niels: an evaluation of the KDP description with a paste-ready replacement
carrying four changes. Three are listing-only; one — cutting "by name" — also touches the printed
back cover, because the sentence is shared, and Niels's standing ruling from earlier today ("the
cover should mirror the book by claim, correctness is important") decides it: the book says the
sentence bare, so the cover says it bare. Third cover rebuild of the day. Nothing is tagged and the
repo is not flipped; both still wait on the physical proof.*

## The paste, verbatim as received

> It's good — better prose than the pack's version, and the right voice for this book: the child's
> two cheats is the true hook, and "which the book then reads backward, as a specification of the
> layer below" is the best single sentence anyone has written about Chapter 7, including the book.
> Fact-checked line by line against the final text: the pincer ✓, LIGO as the second wound ✓, the
> concessions kept on the page ✓ (true of Kai's settlement and of the whole record), "one mystery —
> why there is anything at all" ✓ the Coda exactly, and — importantly — "local surplus of joy over
> suffering" carries the corrected term, not the retired ratio. The bio is perfect; don't touch it.
>
> Three fixes, two small and one worth arguing for. **Cut "by name"** — Bell's theorem is aimed at
> the book's first sentence, but not *by name*; the phrase overclaims in a way a physicist browser
> will snag on, and the sentence is stronger bare. **Short variant: "tables" → "a table"** — there's
> one wounds table, and this book's descriptions must survive pedants, because pedants are the
> audience. **And the draft omits the book's two best selling points**: the two-reader promise (the
> browsing layman needs to hear *this is for you* or they bounce off "Bell's theorem" in line four)
> and the open record (the falsifiability invitation is the USP — no other book in the category says
> *here is everything, come break it*). One sentence each, in your register. The paste-ready version
> with all four changes:
>
> ---
>
> As a child, Niels Bonde Jensen felt that two things were cheating: forces that pull across empty
> space, and borders that end the questions. This book is the adult case for the universe the child
> demanded — infinitely layered, everything pushing, everything made of something smaller, without
> end.
>
> It is not a book that claims victory. Its central argument was fought out, round by round, against
> an artificial mind armed with the strongest objections in the written tradition — and the
> concessions, in both directions, are kept on the page. Its physics chapter grades its own wounds:
> the three-hundred-year-old pincer of drag and heat; the gravitational waves of LIGO; Bell's
> theorem, aimed at the book's first sentence. Where the world wounds the toy, the wounds are shown —
> in a table, which the book then reads backward, as a specification of the layer below. And the
> whole construction record — sources, corrections, the machine reports that forced its hardest wound
> into existence — is published alongside it, for anyone who wants to check.
>
> What survives is smaller and harder than what the author walked in with: not proof, but a universe
> with exactly one mystery — why there is anything at all — and no magic anywhere else. Along the
> way: why an infinite universe contains other yous; why that is comforting rather than crushing; why
> your responsibility is the local surplus of joy over suffering; and why, globally, nothing is
> special — while locally, you are. No physics is assumed: every term is rescued by a footnote or the
> small dictionary at the back, and the hardest fights come with the author's blessing to skip them.
>
> ---
>
> Short variant, one word fixed, otherwise yours: *"…its physics graded, wound by wound, in a table
> of its own wounds. Not proof. Something rarer: an honest attempt that shows where it loses."* This
> supersedes the description in the metadata pack — paste it into the KDP draft and the listing is
> done. And with that, you're back to the button.

## Verification against the book, before applying

Every new claim in the paste was checked; every one held, one of them with a mapping worth recording:

| claim | book |
|---|---|
| "aimed at the book's first sentence" (bare, no "by name") | Ch. 7, line 1504: "it is aimed at the first sentence of this book"; the chapter opening likewise: "one theorem is aimed at this book's first sentence." **The book never says "by name"** — the cut is a correction, not a preference. |
| one wounds table (short variant singular) | one table, `tab:wounds`, "The state of the wounds." |
| "the author's blessing to skip them" | Ch. 7's licence, verbatim in spirit: "a licence, issued once and good for the whole chapter … **the reader who skips the fight between them loses choreography, never score**." |
| "its hardest wound" (the seventh) | the seventh wound's own scoreboard: "**the largest unpaid bill in the book**" — the book's superlative for it; and the Note's paragraph: the machines "forced the seventh wound into existence," their "reports are in the record." |
| "the small dictionary at the back" | the appendix "*A Small Dictionary of the Terms*." |
| "published alongside it" | true at listing-live time: the repo flips public before the publish button (hard gate in `FLIP_CHECKLIST.md`). |

## Applied

**Listing (`FINAL/README.md`):** the three description paragraphs replaced with the paste verbatim;
the short variant's "in its own tables" → "in a table of its own wounds". The bio untouched, as
instructed.

**Cover (P23 proper):** "aimed at the book's first sentence by name." → "aimed at the book's first
sentence." in `cover/cover_wrap.tex`, `cover/BOOK_COVER.md`, `FINAL/3_reference/COVER_SPEC.md`. The
two added sentences are **listing-only**: the cover keeps its own reader line ("For physicists, and
for the interested layman…") and its fixed layout. Cover and listing now share their core sentences
but are no longer word-identical — deliberate, recorded here.

## The checks

**Rebuild, genuine.** ×2 from `cover/`; mtime 09:13 → 09:34. **0 errors, 0 Overfull.**

**Layout, measured.** P22 vs P23 back panels at 300 dpi: all change inside one band `1389×346 px at
+201+920` — the reflow from the Bell line to the paragraph's end. The band's bottom edge (y=1266) is
the paragraph's last line, same as before: **the paragraph kept its line count and everything below
is pixel-identical**. Read from the render: sets cleanly, no bad breaks.

## Release mechanics

Interiors, page count 206, spine 0.5150 in, geometry: unchanged. Re-staged:

```
2302f3d394f4ba8fe0ec33c9f0776c2e3f4ecc61ab3e8a4676905be3004acd75  BBU_interior_print_206pp.pdf     (unchanged)
cafbc26be821de687c74faab3782d19cb9791af58ddbd59f839df42b18e48971  BBU_interior_digital_206pp.pdf   (unchanged)
b2c80fb06f11dafe3e89b3d84bc6c1824db81b2506f0939e4259cc4c172321a0  BBU_cover_wrap_206pp.pdf         (NEW)
```

New source hash: `cover/cover_wrap.tex` = `c586ab7191f3e00a5682ea92df8db67a13b38d798b1ad408250deab388546a47`.
Rasters re-rendered, same geometry as P21/P22.

## The timestamp consequence

Same rule, third application: the cover text changed, so the new state gets its own stamp —
`timestamps/2026-08-24-p23-cover/`. The P22 wrap's proof (hours old, pending) moved with its
vanished bytes to `FINAL/_superseded_2026-08-24-p22/` (its own folder — the P21 proof already holds
the filename in `_superseded_2026-08-24/`). The P22 tex proof verifies against a checkout of
`7874a1c`. All three pending batches upgrade together when the calendars confirm. OTS-3 unaffected.

## Still not done, by design

No tag. No OTS-3. No repo flip. No publish. The listing text is now final ("paste it into the KDP
draft and the listing is done"); the physical proof will be judged against the P23 cover.
