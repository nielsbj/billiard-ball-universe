# Phase 5 — index population, first pass (2026-08-20)

*`TODO.md` §5, the `[EITHER]` item. Tagged from §5's own starter list, plus a curated set of
additions the book leans on hard enough to look up. This is a **first pass, not a finished index**:
it is meant to be read and extended by the author, who knows which terms a reader will actually
hunt for. Nothing here is prose.*

## What changed

**Tagging.** 77 index anchors — **41 terms and 36 persons**. By macro: 38 `\Ix` (terms, key
auto-lowercased), 36 `\Iy` (34 persons + 2 proper-noun terms), 3 `\Iyk` (2 persons + 1 term).
One anchor per entry — first or best occurrence, per the ledger's "not every
occurrence" rule. Anchors sit in body prose except three: `shadow push` (the phrase occurs in Ch. 6
only in the figure caption on its own spread — the section head carries it, and tagging a heading
risks a doubled `\index` write through the TOC), and `diagonal theorems` and the Schrödinger
attribution (footnotes, same page as the passage they serve).

**Preamble.** One new macro beside the two house ones, and a comment saying why:

```latex
\newcommand{\Iyk}[2]{#2\index{#1@#2}}   % \Iy with an explicit makeindex sort key
```

Needed because `\Iy{\O rsted}` sorts on a leading backslash and lands *above* Agrippa, in a
symbols block ahead of A. `\Iyk{Orsted}{\O rsted}` prints Ørsted and sorts under O. Used three
times: Ørsted, Gödel, Mössbauer effect. `\Iy` also now carries the two terms whose headword is a
proper noun — `Bell's theorem`, `Gibbs paradox` — which `\Ix` would have printed lowercased.

**`\printindex` activated** (line 2020). `makeindex` was already wired into `build.bat` with an
`if exist` guard, so no build-script change was needed.

## Proof that no prose changed

The pass was applied by a script that refuses to touch a line unless the anchor string occurs
**exactly once** on it, so a mis-transcribed anchor halts the run rather than landing somewhere
unintended. Afterwards, every `\Ix{…}` / `\Iy{…}` / `\Iyk{…}{…}` wrapper was stripped back out of
the working file and the result diffed against `HEAD:manuscript/billiard_ball_universe.tex`. The
diff is **three hunks, all apparatus**: the preamble comment, the `\Iyk` definition, and the
`\printindex` line. Zero prose lines differ — not a word, not a character.

## Build

`makeindex`: **77 entries accepted, 0 rejected, 0 warnings.**

| | pages | Overfull | Float too large | undefined | errors | collisions |
|---|---|---|---|---|---|---|
| digital | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |
| print | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |

**200 → 202 pp.** The index is two pages, two columns, folios 191–192, set after the References and
listed in the table of contents. The stacked-fraction note still reads 5, unmoved.

## The entries (77)

**Persons (36).** Agrippa · Bell · Bohm · Bruno · Chandrasekhar · Clarke · Democritus · Descartes ·
Dirac · Ehrenfest · Einstein · Epicurus · Fatio · Galileo · Gödel · Huygens · Kai · Kelvin ·
Le Sage · Leibniz · Lorentz · Lucretius · Mach · Maxwell · Michelson · Morley · Newton · Ørsted ·
Planck · Poggio · Poincaré · Schrödinger · Skyrme · Tarski · Tegmark · Witten
*(plus the three proper-noun terms indexed verbatim: Bell's theorem, Gibbs paradox, Mössbauer effect)*

**Terms (38 via `\Ix`; the other three are the proper-noun terms listed above).** arrow of time · black hole · brute fact · cascade · circulation · coarse-graining ·
contraction · dark matter · depletion force · diagonal theorems · entangled · entropy ·
equipartition · equivalence principle · ether · flux · frozen state · gap · heat death ·
hidden variable · local surplus · massion · neutron star · phonon · photon · pilot wave · pincer ·
quantization · regress · shadow push · spin · sufficient reason · superdeterminism · superfluid ·
trilemma · ultraviolet catastrophe · vortex · white dwarf

## Open, for the author

1. **This is a first pass, and it is deliberately thin.** Every entry has exactly one page
   reference. For the house terms that carry the book — *massion*, *the gap*, *cascade*,
   *shadow push*, *the local surplus* — a reader who looks one up wants the two or three places it
   does real work, not only the place it was coined. Second anchors are cheap to add; say which
   terms deserve them, or mark them on your own read-through. **The Dictionary (Appendix A) is the
   obvious second anchor for most of them** and was deliberately left untagged for now, because
   tagging it doubles the index's length and that is a judgement about the book's back matter, not
   a mechanical call.
2. **Starter-list terms with no exact home in the prose.** Three items on §5's list do not appear
   as written and were indexed under the nearest phrase actually on the page: *Lorentz contraction*
   → `contraction` (the person entry Lorentz sits on the same page), *Bell inequality* →
   `Bell's theorem` + `hidden variable`, *entanglement* → `entangled` (the noun never appears; the
   book uses the adjective). *Equivalence class* does not appear at all and was dropped in favour of
   `equivalence principle`, which does. Say if you want any of these three worded differently — it
   would take a prose change, so it is your call and not mine.
3. **Names that exist only in citations, never in prose,** and so cannot be indexed without a prose
   change: Zwicky, Rubin, Bekenstein, Onsager, Feynman, Couder, Aspect, Boltzmann. Several of them
   carry real arguments in Ch. 7. If any should be visible to a reader who goes looking, that is a
   sentence to write, not a tag to place.
4. **Small asymmetry, pre-existing:** the Index is now listed in the table of contents
   (`\makeindex[intoc=true]`) but the References are not. Either both or neither reads more
   deliberate than one of each. One word from you and I set `heading=bibintoc`.
5. **Page count moved 200 → 202** and is still not locked: the two pending plate rulings (Coda
   reprise, toy map) both move it again, and `cover/cover_wrap.tex` still carries
   `\PAGECOUNT{182}`, which is now twenty pages stale. Nothing to do until the rulings land — the
   spine is computed last by design.
