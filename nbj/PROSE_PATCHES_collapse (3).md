# PROSE_PATCHES_collapse.md — new Chapter 7 section: collapse and the ladder
*For code-claude. Author-commissioned (Niels asked for this section; chat-claude drafted it; Niels approves the draft going into the repo for his read-through). Ships with a companion file `SECTION_collapse.tex` containing the section body — do not retype it. Build-validated on chat-claude's side against the current repo state: both editions, 0 errors, 0 overfull, 155 pages (was 145).*

**Note on line endings:** the repo `.tex` was CRLF earlier in the project and is **LF** as of the 2026-07-24 master chat-claude was given. `SECTION_collapse.tex` now ships with **LF** to match. Before inserting, check the master's actual endings and convert the fragment if they differ — do not mix both styles in one file.

## Patch 1 — three section inserts (fragment files; do not retype)

Each fragment is a complete section. Insert the **entire contents** of the named file immediately before the named anchor line, each of which occurs exactly once.

| fragment file | insert immediately before |
|---|---|
| `SECTION_secondrule.tex` | `\section{Gravity: The Shadow Push}` (Chapter 6) |
| `SECTION_sixthwound.tex` | `\section{The State of the Wounds}` (Chapter 7) |
| `SECTION_collapse.tex` | `\section{What That Teaches}` (Chapter 7) |

Chapter 7 then reads: wounds one to five → **Sixth Wound** → State of the Wounds → entropy counter-invoice → **The Ladder Under Load** → What That Teaches. Every cross-reference points backwards; there are no forward references.

## Patch 1b — the sixth row of `tab:wounds`

**OLD** (the last data row plus the rule that follows it):
```
the correlations (Bell) & sub-layer channels --- the lower layer's own light --- faster than ours, in the frame already bought and hidden: Bell's recommended ether & a second conspiracy: fast channels that can never signal & no-signalling derived, not decreed \\
\bottomrule
```
**NEW:**
```
the correlations (Bell) & sub-layer channels --- the lower layer's own light --- faster than ours, in the frame already bought and hidden: Bell's recommended ether & a second conspiracy: fast channels that can never signal & no-signalling derived, not decreed \\
\addlinespace
the saturated shadow & a horizon is our layer's optical fact, not the crowd's: collapsed bodies may trap light and still pass the rain & then the area law for black-hole entropy keeps only its bookkeeping account, not its mechanical one & the massion's stopping chance: at what density does the shadow saturate? \\
\bottomrule
```

## Patch 1c — five/six counts (all single occurrences)

| OLD | NEW |
|---|---|
| `Five wounds: one three hundred years old,` | `Six wounds: one three hundred years old,` |
| `Five wounds, five responses, five invoices.` | `Six wounds, six responses, six invoices.` |
| `Five problems, then, constitute the toy's open research program` | `Six problems, then, constitute the toy's open research program` |
| `Five wounds, and the table above holds their state.` | `Six wounds, and the table above holds their state.` |

Plus two longer single-occurrence replacements — the chapter-opening sentence that ends `...to be the recommended remedy.` gains a sixth clause, and the research-program list gains a sixth problem. Both are reproduced verbatim in `PATCH_1c_long.txt` alongside this file.

**Do not change** the sentence beginning `The five wounds above were handed to me` — that is inside the new Sixth Wound section and correctly refers to wounds one to five.


## Patch 2 — three Dictionary entries

Each is an insert *before* an existing entry. All three anchors occur exactly once.

**Before** `\paragraph{Diagonal theorems.}` insert:
```
\paragraph{Degeneracy pressure.} The stiffness that arises because identical particles of certain kinds cannot occupy the same state: not a force between them but a prohibition on their arrangement. It holds up white dwarfs (electrons) and neutron stars (neutrons), and in this book it is the gap doing structural work.

```

**Before** `\paragraph{Sufficient reason.}` insert:
```
\paragraph{Singularity.} A point where a theory's predictions become infinite --- in general relativity, the centre of a black hole. Standardly read as the theory failing rather than as a description of something real; in this book, as a floor by another name.

```

**Before** `\paragraph{Wave-packet.}` insert:
```
\paragraph{White dwarf; neutron star.} The two observed end-states of a star that has run out of fuel: the first held up by electron degeneracy (the mass of the sun in the volume of the Earth), the second, above about one and a half solar masses, by neutron degeneracy (the mass of the sun in the space of a city).

```

## Patch 3 — five bibliography entries

Add all five to `ref.bib` immediately before `@article{michelsonmorley1887,`. **All five carry VERIFY notes on purpose** — they are new, unchecked claims and must go through the normal fact-check gate before publication. Do not clear the flags in this run.

```bibtex
@article{chandrasekhar1931,
  author    = {Chandrasekhar, Subrahmanyan},
  title     = {The Maximum Mass of Ideal White Dwarfs},
  journal   = {The Astrophysical Journal},
  volume    = {74},
  pages     = {81--82},
  year      = {1931},
  note      = {VERIFY: pages/volume, and the biographical claim in Ch.7 that he computed the limit at nineteen on the voyage from India to England (commonly told; confirm age and voyage before publication)}
}

@article{baadezwicky1934,
  author    = {Baade, Walter and Zwicky, Fritz},
  title     = {On Super-novae},
  journal   = {Proceedings of the National Academy of Sciences},
  volume    = {20},
  pages     = {254--259},
  year      = {1934},
  note      = {VERIFY: the neutron-star proposal and its companion paper; pages}
}

@article{oppenheimervolkoff1939,
  author    = {Oppenheimer, J. Robert and Volkoff, George M.},
  title     = {On Massive Neutron Cores},
  journal   = {Physical Review},
  volume    = {55},
  pages     = {374--381},
  year      = {1939},
  note      = {VERIFY: pages; the modern maximum-mass value (~2--3 solar masses) should be cited to a current source, e.g. the GW170817 constraints already in this file}
}

@article{bekenstein1973,
  author    = {Bekenstein, Jacob D.},
  title     = {Black Holes and Entropy},
  journal   = {Physical Review D},
  volume    = {7},
  pages     = {2333--2346},
  year      = {1973},
  note      = {VERIFY: pages. Underwrites the area-entropy invoice item in Ch.7's collapse section}
}

@article{eht2019,
  author    = {{Event Horizon Telescope Collaboration}},
  title     = {First {M87} Event Horizon Telescope Results. {I}. The Shadow of the Supermassive Black Hole},
  journal   = {The Astrophysical Journal Letters},
  volume    = {875},
  pages     = {L1},
  year      = {2019},
  note      = {VERIFY: the imaging claim as stated in Ch.7's saturation invoice}
}
```

## Patch 4 — citations for the new section

This section is **deliberately shipped uncited**, because the citation pass is already complete and these five sources are unverified. After the fact-check run clears them (see `TODO.md` §3D-collapse), do a small Stage-2-style pass placing:
- `\cite{chandrasekhar1931}` at the sentence naming the one-and-a-half-solar-mass limit
- `\cite{baadezwicky1934}` and `\cite{oppenheimervolkoff1939}` at the neutron-star sentences
- `\cite{bekenstein1973}` at the area-entropy invoice item
- `\cite{eht2019}` at the Event Horizon Telescope sentence

Report the placements; do not invent additional ones.

## Amendments already folded into `SECTION_collapse.tex` (v2)

The fragment has been revised since first draft, on the author's objections. Two changes, both inside the fragment — no extra patching needed:
1. **The exclusion smuggle removed.** The first draft claimed degeneracy pressure "is the gap." It is not: the gap gives discreteness, exclusion is a further principle, and describing the strut as a prohibition with nothing doing the forbidding is action at a distance in another costume. The section now states this as an open **debt**, names where an account would have to come from (circulation, Chapter 6), and keeps only the weaker surviving claim — that the stiffness comes layer by layer, each rung with its own limit mass.
2. **Locality stated, and the conjecture graded.** The section now asserts the thesis plainly (*the tower has no floor*) and separately advances, as a strongly-held but unproven conjecture, that what happens in a layer is local to that layer and its neighbours — no action at a distance and none at a depth — from which a collapse halts at the first sufficiently stiff floor. It says explicitly that the author cannot prove it **and is not claiming the alternative impossible**, tying back to Chapter 3's retracted impossibility claim.

## Status of the three decisions (v3 — all resolved)

This drop resolves everything v2 left open. **The saturation problem IS promoted to a Sixth Wound and `tab:wounds` DOES gain a row** — see Patches 1b and 1c. (An earlier revision of this file carried a paragraph saying the opposite; it was stale text left behind by a hand-edit, and Patches 1b/1c plus the collapse body's phrase "it is the sixth wound" are authoritative. Corrected here.)

- **Locality → stated Chapter 6 rule:** yes, `SECTION_secondrule.tex`.
- **Saturation → Sixth Wound:** yes, `SECTION_sixthwound.tex` + 1b + 1c.
- **Area-entropy route:** the censorship account is taken in the prose; the author's massion-shielding account is credited, preferred "by some margin," and left on the invoice as what the sixth wound charges for.

**What genuinely remains open, and must not be anticipated:** the mechanical account of exclusion. The collapse section states it as an unpaid debt ("a prohibition is not a push"), names circulation as where an account would have to come from, and stops. That paragraph is the author's to replace when he has one. Do not draft it.

## After applying
1. `build.bat` — zero errors, zero overfull. Then one print-edition build (`\digitaleditionfalse`), then revert the flag.
2. Confirm the new figure `fig:collapseladder` lands inside its own section (chat-claude's build put the section on pp. 119–121 with the figure on 120; exact numbers will differ once `art/` is included).
3. Commit: `ch7: new section — the ladder under load (collapse); dictionary + bib entries, all VERIFY-flagged`.
4. Append to `FACTCHECK_REPORT.md`: "New unverified section added; 5 new VERIFY flags open; see TODO.md §3D-collapse."
