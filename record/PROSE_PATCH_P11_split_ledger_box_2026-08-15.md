# P11 — THE SPLIT-LEDGER BOX: bounce and Mössbauer, ledgers separated with numbers (applied 2026-08-15)

**STATUS: APPLIED.** One box inserted in Ch. 7 after the cascade paragraph; two bibliography
entries added; one rule-7 repair fired on the sentence the box displaced. Both editions 0/0,
float gate green book-wide, **198 pp — unchanged**.

*From chat-claude, ruled by Niels. Transport: the `===FILE` bundle protocol, sixth use. Received as
`nbj/P11_bundle.txt`, split to `nbj/P11_split_ledger_box.md`. Mirrored verbatim at the foot.*

## Applier's record (code-claude)

### E1 — the insertion

Anchor `"The Earth never warms, because the Earth was never the destination."` verified **unique**
at HEAD before anything was touched, and confirmed to end its line. The box was inserted as its own
block immediately after that paragraph — i.e. between the paragraph and `\begin{figure}` for
`fig:cascade`.

**Set in the chapter-head box's idiom, literally.** The bundle gave `\begin{center}\fbox{...}\end{center}`
on one line; the existing "The toy, for the road" box at the head of Ch. 7 puts `\begin{center}` and
`\end{center}` on their own lines around a single long `\fbox{\parbox{0.90\linewidth}{\small ...}}`.
The insertion matches that shape. Output is identical; the source now matches its sibling.

**Citation joined, not replaced — the choice the bundle asked to be flagged.** The 1958 discovery
paper is *iridium-191*; the numbers the box quotes are *iron-57*. Citing only `mossbauer1958` beside
the words "a gamma photon strikes an iron nucleus" would send a reader to a paper about a different
nucleus. So the cite is `~\cite{mossbauer1958,guetlich2011}`: the discovery for the effect, the
standing text for the iron numbers. Multi-key cites are house style (six others in the book), and
the pair renders `[66, 47]` — unsorted, exactly as every other multi-cite in this book renders.

### The arithmetic, recomputed independently (the gate's condition)

| claim in the box | recomputed | verdict |
|---|---|---|
| bounce: wall takes **all** the momentum change | Δ*p* = 2*mv* = 2.85 kg m/s for 0.057 kg at 25 m/s | ✓ |
| bounce: Earth's energy share | Δ*p*²/2*M* = 8.12 / 1.194×10²⁵ = **6.8×10⁻²⁵ J** vs the ball's 17.8 J | ✓ (bundle: ~7×10⁻²⁵ J, ~18 J) |
| "about one part in ten million million million million" | ratio = **3.8×10⁻²⁶** = one part in **2.6×10²⁵** | ✓ order-of-magnitude, **but see below** |
| Fe-57 free-nucleus recoil | *E*²/2*Mc*², *Mc*² = 57 × 931.494 MeV = 53.10 GeV → **1.95 meV** | ✓ (bundle: ~2 meV) |
| "smaller than the lattice's first available quantum" | iron phonon quanta ~20–40 meV (Debye ≈ 470 K → 40.5 meV) vs 1.95 meV | ✓ recoil-free channel dominates |
| "sharp to about one part in three million million" | Γ = ħ/τ, τ = 141 ns → 4.67×10⁻⁹ eV; Γ/*E* = **3.24×10⁻¹³** vs the chain's 3.3×10⁻¹³ | ✓ (2.7% — the chain is right) |

**Word-chains checked as instructed.** "million million" = 10¹²; "three million million" = 3×10¹²,
so one part in it = 3.3×10⁻¹³ against the computed 3.24×10⁻¹³ — that chain is **exact to within 3%**.
"Ten million million million million" = 10²⁵, so one part in it = 10⁻²⁵ against the computed
3.8×10⁻²⁶ — the chain is **2.6× loose**, and loose in the direction that *understates the book's own
case*: it credits the wall with more of the ball's energy than it actually takes. Left as ruled,
under the word "about", and flagged here rather than silently retuned. One line reverses it if
chat-claude or Niels prefers the tighter chain: *"about one part in twenty-five million million
million million."*

**A finding worth keeping:** the bounce ratio is Δ*p*²/2*M* ÷ ½*mv*² = **4*m*/*M*** — the speed
cancels. The claim does not depend on the 25 m/s the bundle chose; any tennis ball off any wall
gives the same 3.8×10⁻²⁶. The box is more robust than its arithmetic note suggests.

### The bibliography entries, and a trap caught in the probe

Both added under *Part IV — The Machinery / Chapters 6–7*, before `tisza1938`:

- `mossbauer1958` — R. L. Mössbauer, "Kernresonanzfluoreszenz von Gammastrahlung in Ir¹⁹¹",
  *Zeitschrift für Physik* **151**(2), 124–143 (1958), doi:10.1007/BF01344210.
- `guetlich2011` — Gütlich, Bill & Trautwein, *Mössbauer Spectroscopy and Transition Metal
  Chemistry: Fundamentals and Applications*, Springer, Berlin/Heidelberg, 2011,
  doi:10.1007/978-3-540-88428-6.

**The trap: this book's bibliography is annotated — `note` fields print in the book.** The first
draft of these entries carried the bundle's `VERIFY` marker and a cross-reference to the sibling key
inside `note`, and the probe build duly set *"VERIFY (volume, pages, exact title…)"* and
*"sourced here to guetlich2011"* in the printed References. No `VERIFY` string had ever reached the
PDF before; the header comment in `ref.bib` says entries are "marked VERIFY" but none in fact were,
and this is why. **Convention established and used here: the VERIFY marker goes in a `%` comment
line above the entry, never in a printed field.** Both entries now carry such a comment naming
exactly what is unverified, and both `note` fields were rewritten as reader-facing prose. Confirmed
against the final PDF: `VERIFY` appears **0** times, the raw key `guetlich2011` **0** times.

**What is still unverified, precisely.** Neither source was in reach of this machine. For
`mossbauer1958`: volume, issue, page range and the exact German title. For `guetlich2011`: edition,
year, publisher imprint, and the three iron-57 values its note quotes. The physics behind the values
was recomputed above and is self-consistent; the *bibliographic* facts are asserted from memory and
are marked as such.

### Rule 7 (patch hygiene) — the check fired, and needed a repair

The first body sentence after the insertion point is the one that opens the next paragraph:

> **Now the price**, because this book does not sell escapes without their invoices.

Read against rule 1: *"the price"* is a bare definite whose referent is the cascade escape, and the
box is exactly the kind of boundary rule 1 names — and worse, the box supplies a **nearer competing
referent**, since its own subject is costs and ledgers ("a receiver's energy cost", "takes the
momentum nearly free"). A reader crossing back out of the box can fairly ask *the price of what?*
Repaired in prose, by the christened name (rules 3 and 4), one noun phrase, no parenthesis:

> **Now the price of the cascade**, because this book does not sell escapes without their invoices.

*This is one edit beyond E1, and is flagged as such.* It is not scope creep: the bundle's own gate
list demanded "the writing-law rule-7 check on the sentence following the insertion", and the check
found a live displacement. Reverting is one noun phrase.

### Probe-build first, as the bundle required

The whole of E1 was built as a throwaway copy (`manuscript/p11probe.tex`, deleted afterwards); the
master was not written until the page was known. The probe answered the two questions the gate asked:

- **The box does not push its page over.** It is not a float, so it cannot be reported by the
  `Float too large` gate — an unbreakable `\fbox` that will not fit simply moves to the next page,
  and the failure mode to watch for is `Overfull \vbox` on the host page. There is none. The box
  sets in **20 lines** and lands on physical p. 104 / **folio 94**, with 13 body lines above it and
  the resumed paragraph below it on the same page.
- **The float below it was not disturbed.** `fig:cascade` still lands on the next page (physical
  105) exactly as before. What moved is the scoreboard paragraph, from p. 105 to p. 106.

### Gates and proof on the page

- **Both editions — digital and print: 0 errors / 0 `Overfull` / 0 `Float too large for page by` /
  0 undefined.** The float gate is green **book-wide**, not merely on this page.
- **Rastered physical p. 104 (folio 94) at 110 dpi, digital and print.** The two are identical; the
  box sits clear of both margins and **the folio prints clear** below the resumed paragraph.
- **Underfull `\vbox` 5 → 4**, `Underfull \hbox` unchanged at 2. Total underfull 7 → 6: the box
  absorbed slack that had been sitting in the region.
- **Page count 198 pp — unchanged.** Campaign total stays 184 → 198.
- **Log not truncated** (2231 lines, `Output written` present) — the H1 lock-trap does not apply.
- Sweeps: box present exactly once ✓ · anchor paragraph intact and still ends the same sentence ✓ ·
  `\digitaleditiontrue` restored with its comment after the print build ✓ · `\draftnotestrue`
  untouched ✓ · manuscript diff is exactly the 4-line insertion plus the one rule-7 line ✓ ·
  `ref.bib` diff is exactly the two new entries with their VERIFY comments ✓ · probe files deleted ✓.

### Note on the biblatex settling cycle

The fresh probe needed `pdflatex → biber → pdflatex ×2 → biber → pdflatex` before `undefined`
reached zero. The cause is benign and worth recording: `ref.bib` contains a `\cite{edwards2002}`
*inside a printed `note` field*, so that citation is not registered until the bibliography itself is
typeset, and it needs one further biber pass to resolve. On the master, whose `.bbl` already carried
it, the standard `build.bat` cycle sufficed. **Any future build from a cleared aux state must run
the extra biber pass before reading the undefined count as a failure.**

## The bundle as received (verbatim, from nbj/P11_bundle.txt)

```
===FILE nbj/P11_split_ledger_box.md===
P11 --- THE SPLIT-LEDGER BOX: momentum on one book, energy on another, with
numbers. From chat-claude, ruled by Niels. One insertion, one bib entry [VERIFY],
arithmetic for the gate below. Probe-build (float/box height vs page) before
committing; mirror to record/.

E1 (insert immediately after the paragraph ending "The Earth never warms, because
the Earth was never the destination." -- as a free-standing box, matching the
chapter-head box's idiom):

\begin{center}\fbox{\parbox{0.90\linewidth}{\small \textbf{Two ledgers, separated
in the laboratory.} The split the cascade asks you to believe --- momentum landing
on one book, energy on another --- is not speculative; nature runs it routinely,
because a receiver's energy cost is set by the receiver, not the projectile: for
the same momentum $p$, the energy taken is $p^2/2M$, and a heavy enough receiver
takes the momentum nearly free. Kitchen version: a tennis ball bouncing off a wall
gives the wall (and the Earth behind it) \emph{all} of its momentum change and
about one part in ten million million million million of its energy. Laboratory
version, and the crown: in the M\"ossbauer effect~\cite{mossbauer1958}, a gamma
photon strikes an iron nucleus bound in a crystal, and the books split three ways
--- the photon's energy lands in the nucleus's internal step; the momentum lands
on the whole crystal at once; and the recoil heat lands \emph{nowhere}, because it
is smaller than the lattice's first available quantum and the gap refuses the sip.
The absorption line stays sharp to about one part in three million million
\emph{because} the heat was refused --- momentum delivered, energy forbidden, by a
gap. Neither case is the toy; the analogy stops at the split itself. But the split
itself is measured physics.}}\end{center}

BIB [VERIFY before commit]: mossbauer1958 --- candidate: R. L. M\"ossbauer,
"Kernresonanzfluoreszenz von Gammastrahlung in Ir(191)," Zeitschrift f\"ur Physik
151, 124-143 (1958). (The iron-57 numbers below are the textbook case that
followed; if you prefer a source stating Fe-57 directly, a standard M\"ossbauer-
spectroscopy text may join or replace -- flag your choice.)

ARITHMETIC FOR THE GATE (recompute; the box's claims trace here):
- Ball: m=0.057 kg at 25 m/s; bounce Delta-p = 2.85 kg m/s; Earth's energy gain
  = (Delta-p)^2 / 2M_Earth ~= 8.1 / 1.2e25 ~= 7e-25 J vs ball's ~18 J
  -> ratio ~4e-26: "one part in ten million million million million" (1e25-class).
- Fe-57: E_gamma = 14.4 keV; free-nucleus recoil E_R = E^2/(2Mc^2), Mc^2 ~= 53.1
  GeV -> E_R ~= 2.0e-3 eV = 2 meV; typical iron phonon quanta ~20-40 meV, so the
  recoil-free (zero-phonon) channel dominates: the 2 meV sip is refused.
- Line sharpness: natural width ~4.7e-9 eV over 14.4 keV ~= 3.2e-13
  -> "one part in three million million" (3e12-class). Check the word-chains.

GATES: probe-build first --- the box must not push its page over (the float
lesson of p. 125 applies to boxes too: raster the page, folio clear); then both
editions 0/0, float-grep green; page count reported; the writing-law rule-7 check
on the sentence following the insertion; mirror to record/; commit:
prose: the split-ledger box --- bounce and M\"ossbauer, ledgers separated with
numbers (P11).
===END===
```

## Open, for chat-claude and Niels

1. **The 2.6× loose word-chain** on the bounce ratio — keep "ten million million million million"
   under "about", or tighten to "twenty-five"? Applier's recommendation: keep. The looseness is
   conservative against the book's own claim, and the tighter chain is harder to say aloud.
2. **The two bibliographic VERIFYs** — both entries assert publication details from memory. They
   need a human with the sources, or a machine with a network, before the flip.
3. **The joined citation** — `\cite{mossbauer1958,guetlich2011}` is the applier's exercise of the
   licence in the bundle ("may join or replace — flag your choice"). Replacing the pair with the
   discovery paper alone would leave the iron numbers unsourced; the reverse would lose the crown.
