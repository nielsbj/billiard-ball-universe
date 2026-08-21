# P19 — the note concedes the empty gate; and the release package is staged (2026-08-21)

*Author ruled YES on the concession and re-declared the interior final — **final = corrections change
price, not possibility**. One wording change from the approved draft was flagged in the bundle and is
recorded below. The release sequence R1–R5 then ran in the same pass. **Nothing is tagged and the
repo is not flipped**; both wait on the physical proof.*

## The bundle

Delivered as `nbj/P19_final_declaration.md`. **There was no `P19_bundle.txt`** — the same
naming break as P17: the `.md` carries the `===FILE…===END===` wrapper and *is* the bundle.

## P19/E1 — the concession, inserted

**Anchor verified once before insertion**, and it was unique within the note: the paragraph ending
*"…a machine told me a number I had used was wrong, and it was."* Unchanged; the bundle's OLD and NEW
were identical, so nothing was rewritten — the paragraph was only used as an address.

Inserted after it, as its own paragraph:

> One more fact belongs here, under this note's own rule that I would rather give a thing than have it
> found out. No one but its author read this book before publication --- I invited readers, and the
> window closed empty, which is the ordinary fate of a first book from an unknown author, not a
> special one. The adversarial readers who wounded it --- the ones who forced the seventh wound into
> existence --- were machines, briefed to hurt it, and their reports are in the record. So the first
> person to test this book against a human chest is you, and the letterbox is open: the record's
> address is printed on the copyright page, corrections become errata, errata become the next
> printing. The book said it can lose. You are how it finds out.

**The flagged wording change stands.** Sentence one reads *"No one but its author read this book
before publication"* rather than the earlier phrasing, which implied family readers existed. None
did. The author may veto by reverting that clause.

### Rule 7, both ends — quoted

**Before.** The anchor paragraph ends *"…and it was."* The new paragraph opens *"One more fact belongs
here, under **this note's** own rule…"* — the referent is re-nouned explicitly (*this note*), so no
bare anaphor crosses the boundary. Clean.

**After.** The junction, quoted as required:

> …The book said it can lose. You are how it finds out.
>
> **The pictures that are not diagrams are machine work too**, and of a different kind.

*"machine work **too**"* now follows a paragraph whose machines are critics rather than makers.
Checked and passed: *"machine work"* is stated in full, not carried by a bare anaphor, so rule 1 is
not engaged; and the new paragraph makes machines the most salient thing on the page, so the *"too"*
lands harder than it did before rather than softer. No repair needed.

### Rule 8 — masking check on the new paragraph

Each sentence carries at least one clause of literal, self-contained content with coined terms
masked. The only coinage is *the seventh wound*; masked, sentence three still reads *"The adversarial
readers who wounded it were machines, briefed to hurt it, and their reports are in the record."*
Sentence five, *"The book said it can lose,"* spends a line earned elsewhere in the book — permitted
because it is explicitly attributed (*the book said*), which makes it restatement rather than an
unearned draw, and sentence six is the closing verdict spending only what sentence five just set up.

### Sweeps

| target | result |
|---|---|
| `You are how it finds out` | **1** |
| `window closed empty` | **1** — present, but hyphenated as *"the win-/dow closed empty"* across a line break, so a naive text sweep reads 0. Confirmed by whitespace-flexible match and by eye in the typeset paragraph. A sweep-method artifact, not a defect. |
| `Craft notes` / `Draft` | 0 / 0 |

### The note's other paragraphs are byte-identical

Diffed the whole note before and after: **2 lines added, 0 removed, 0 changed** — the blank line and
the new paragraph. Every other paragraph of the note is untouched at the byte level.

## Release sequence

### R1 — genuine builds, all gates

PDF modification time checked against each run, per the rule adopted after `build.bat` was found
writing a stale file.

| | digital | print |
|---|---|---|
| errors | **0** | **0** |
| Overfull | **0** | **0** |
| Float too large | **0** | **0** |
| undefined references | **0** | **0** |
| collision gate (H3) | **0** | **0** |
| pages | **206** | **206** |
| trim | 432 × 648 pt | 432 × 648 pt |

**FINAL PAGE COUNT: 206.**

### R2 — the spine

`\PAGECOUNT` 202 → **206**.

| | |
|---|---|
| spine | 206 × 0.0025 in = **0.5150 in** |
| full wrap | **12.7650 × 9.25 in** |
| at 300 dpi | **3830 × 2775 px** |

### R3 — cover rebuilt at the real spine

0 errors, 0 Overfull, 602-line log (a real build). Built page size **919.115 × 666 pt** against a
nominal 919.08 — the same 0.035 pt of TeX `\real{}` rounding recorded before, 0.0005 in, three orders
inside tolerance.

**Barcode re-scanned on the shifted geometry**, at 1200 dpi: decoded `9788797751916`, check digit
valid, module 0.0117 in, quiet zones 0.4683 / 0.4208 in against a 0.0819 in minimum — **SCANS
CORRECTLY**.

**Spine ink measured, not assumed:** occupies columns 57–99 of the spine's 154.5 px, giving margins
**0.1900 in left and 0.1817 in right** — centred within 0.009 in, both margins about three times
KDP's 0.0625 in minimum. Nothing needed refitting at the wider spine.

Front, spine and back rastered at 300 dpi into the package.

### R4 — the release package

| file | pages / size | bytes | sha256 |
|---|---|---|---|
| `BBU_interior_print_206pp.pdf` | 206 pp, 432 × 648 pt | 15,562,290 | `512ba94cab5c3bf38d8936e3ccfa8fbba8a782468cbfbe53d1016cedc0539b43` |
| `BBU_interior_digital_206pp.pdf` | 206 pp, 432 × 648 pt | 15,565,958 | `6c5b32084f1f5ebd44c4ff488d1003dca12ebe0627571b66336c6c8344a6e2ea` |
| `BBU_cover_wrap_206pp.pdf` | 1 p, 919.115 × 666 pt | 1,132,165 | `458615992e30bf89886be96c38b084a0164ebee5df6d900e3dd4336a49689748` |

**ISBN `978-87-977519-1-6` confirmed in all three places it must appear:** the kolofon
(*"ISBN: 978-87-977519-1-6 (paperback)"*, beneath *"Published by Niels Bonde Jensen, Denmark"*), the
cover's human-readable line above the bars, and the PDF XMP (`<dc:identifier>urn:ISBN:…`,
`<prism:isbn>…`).

### R5 — staged only

**No tag. No repo flip.** `first-edition-1.0` and OTS-3 both wait on the physical proof's verdict, per
`FLIP_CHECKLIST`. The package goes to the author for KDP: previewer, then order the one proof.

## Proof-day watch-list, unchanged and now binary on every axis

- **parchment right, sanguine not maroon** — resist pushing the midtone redder; POD returns browner
  and that shift is already priced into the ramp.
- **hatching gaps open** — check the sparsest hatching near the glare and the densest at the
  ball-cluster inset and the spiral. Plugged by dot gain → `HIGH` = `#F1E9D6`, **never darker ink**.
- **the black title sits *with* the plate, not *on* it** — reads detached → `#241812`, never oxblood.
- **plates crisp** — the accepted cost of the cream ruling; ten grayscale plates on warmer stock.
