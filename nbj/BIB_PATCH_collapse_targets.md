# BIB_PATCH_collapse_targets.md — the two entries you held for
*For code-claude. Both catches accepted; both were real, and both would have shipped a wrong reference. This patch is **bibliography-only** — no prose changes, because your report confirms the sentences themselves are accurate. Applies on top of 5c92f5c.*

**Answer to your closing question: yes, apply the moment this lands.**

## Scope warning — do not re-touch these

My local `ref.bib` is one commit behind yours, so it still shows cleared-in-repo VERIFY flags on `chandrasekhar1931`, `oppenheimervolkoff1939` and `bekenstein1973`. **Your repo state is master; ignore my copy for those three and leave them as you set them.** This patch touches exactly four entries: two new, two re-noted.

## Patch 1 — add `baadezwicky1934cr`

Insert immediately before `@article{baadezwicky1934,`:

```bibtex
@article{baadezwicky1934cr,
  author    = {Baade, W. and Zwicky, F.},
  title     = {Cosmic Rays from Super-novae},
  journal   = {Proceedings of the National Academy of Sciences},
  volume    = {20},
  number    = {5},
  pages     = {259--263},
  year      = {1934},
  doi       = {10.1073/pnas.20.5.259},
  note      = {The neutron-star proposal proper. The companion paper ``On Super-novae'' (PNAS 20, 254--259) does not contain it --- caught by the run-4 fact-check}
}
```

Cite it at **"a body made almost entirely of neutrons"** in the collapse section. Your call on whether to co-cite `baadezwicky1934` alongside it: I would cite only the `cr` paper, since the sentence is specifically the neutron-star claim and a reader following the reference should land where the claim is. Use your judgement if the pair reads better.

## Patch 2 — add `eht2022`

Insert immediately before `@article{eht2019,`:

```bibtex
@article{eht2022,
  author    = {{Event Horizon Telescope Collaboration}},
  title     = {First {S}agittarius {A*} Event Horizon Telescope Results. {I}. The Shadow of the Supermassive Black Hole in the Center of the {M}ilky {W}ay},
  journal   = {The Astrophysical Journal Letters},
  volume    = {930},
  number    = {2},
  pages     = {L12},
  year      = {2022},
  doi       = {10.3847/2041-8213/ac6674},
  note      = {The image of our own galaxy's centre --- the one Ch.~7's text actually refers to}
}
```

Cite it at **"independently from the size of the ring the Event Horizon Telescope photographed"** in the Sixth Wound. That sentence is inside the consistency argument about the mass of the object at our galaxy's centre, so Sgr A* is the correct target and M87 would have been a genuine mis-citation. Good catch.

## Patch 3 — re-note the two superseded entries

Both stay in the file, uncited, per the standing ruling on uncited entries (`searle1980` and company). Re-note them so no future pass mistakes them for the right target:

`baadezwicky1934` — replace its note with:
```
  note      = {NOT the neutron-star proposal --- that is the companion, baadezwicky1934cr. Retained uncited for the supernova claim itself}
```

`eht2019` — replace its note with:
```
  note      = {M87, the first image. Retained uncited: Ch.~7's sentence is about our own galaxy's centre, which is eht2022}
```

## One small check on apply

Confirm both new DOIs resolve. I built these entries from your report rather than from the sources, so the fields are yours and the transcription is mine — the transcription is the part worth checking.

## Still open after this

Only `witten1983`, from `TODO.md` §3D-witten — opened after your previous run, so your §3D-collapse pass would not have covered it. The question there is genuine and I would rather have your answer than guess: which of the two 1983 Nucl. Phys. B223 papers is the right anchor for the skyrmion's fermionic quantization — "Current Algebra, Baryons, and Quark Confinement" (433--444, currently in the entry) or the companion "Global Aspects of Current Algebra" (422--432), which carries the Wess--Zumino argument. Report; do not switch it unilaterally.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: cite the correct Baade--Zwicky and EHT papers (run-4 catches)`.
3. Append to `FACTCHECK_REPORT.md`: "Run-4 held citations resolved; baadezwicky1934cr and eht2022 added and placed; only witten1983 remains open."
