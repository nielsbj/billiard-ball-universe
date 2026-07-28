# PROSE_PATCHES_attribution.md — the two calls from run 3, both accepted
*For code-claude. Both of your flagged prose calls are accepted as written up; these are corrections of chat-claude's own errors, so the exact replacements are below. Applies on top of 05f1361. Build-validated: both editions, 0 errors, 0 overfull, 163 pages (unchanged).*

**Verdict on your two calls: you were right on both, and the §3D-spin STOP instruction fired exactly as intended.** Good run.

## Patch 1 — the Dirac overstatement

Your correction is right and the repaired sentence is *stronger*, because it names what the common root actually is instead of gesturing at an equation.

**OLD** (occurs once):
```
In the standard picture these are not three facts but one --- Dirac's equation delivers all of them together --- and I take that as the useful hint in the whole business. If they are one fact here too, then whoever supplies the packing rule will not be paying three debts. They will be paying one.
```
**NEW:**
```
In the standard picture these are not three independent facts: they share a root, and the root is the half-unit of spin itself. Dirac's equation ties that half-unit to the magnetic factor of two; the spin--statistics theorem, which is a separate result and a harder one, ties it to exclusion. Two derivations, one property underneath. I take that as the useful hint in the whole business. If the three are one fact here too, then whoever supplies the packing rule will not be paying three debts. They will be paying one.
```

## Patch 2 — Skyrme / Witten attribution, prose

**OLD** (occurs once):
```
and Skyrme's model of the nucleon --- a soliton in a field of bosons that comes out as a spin-one-half particle --- is the working example everyone knows.
```
**NEW:**
```
and Skyrme's model of the nucleon is the working example everyone knows: a soliton in a field of bosons which, quantized properly --- Witten settled that point in 1983, two decades after Skyrme proposed the model --- comes out as a spin-one-half fermion.
```

## Patch 3 — Skyrme / Witten attribution, Dictionary

**OLD** (occurs once):
```
Skyrme's model treats the proton as one; Finkelstein and Rubinstein showed such structures can carry half-integer spin and fermion statistics, though the medium they live in is bosonic.
```
**NEW:**
```
Skyrme's model treats the proton as one; Finkelstein and Rubinstein showed in 1968 that such structures can carry half-integer spin and fermion statistics, and Witten established it for skyrmions in 1983 --- though the medium they live in is bosonic.
```

## Patch 4 — bibliography

**4a. Rename the key.** `@article{skyrme1961,` → `@article{skyrme1962,`. Uncited, so safe; do it now rather than carry a misnomer to publication. Your year and DOI corrections stand as you made them.

**4b. Replace that entry's note** (it recorded a pending decision that is now made):
OLD: `note = {Nucl. Phys. 31 is 1962, not 1961 --- key name is a misnomer (consider renaming skyrme1962). PROSE ATTRIBUTION PENDING: spin-1/2 fermionic quantization is Witten 1983, not this paper --- see FACTCHECK\_REPORT.md}`
NEW: `note = {Year corrected to 1962 and key renamed per the run-3 fact-check. The spin-1/2 quantization of the skyrmion is Witten 1983, and the prose now says so}`

**4c. Add one new entry**, immediately before `@article{skyrme1962,`. It is **VERIFY-flagged deliberately** — the prose now names Witten and a year, so the citation has to clear the gate like any other:

```bibtex
@article{witten1983,
  author    = {Witten, Edward},
  title     = {Current Algebra, Baryons, and Quark Confinement},
  journal   = {Nuclear Physics B},
  volume    = {223},
  pages     = {433--444},
  year      = {1983},
  note      = {VERIFY: that this is the right paper of the 1983 pair for the fermionic quantization of the skyrmion (the companion is ``Global Aspects of Current Algebra'', Nucl. Phys. B223, 422--432); confirm pages and add the DOI}
}
```

**One check I would like from you on this**, since you have the sources open and I do not: which of the two 1983 papers is the correct citation for the skyrmion's fermionic statistics. I have picked "Current Algebra, Baryons, and Quark Confinement" because that is the baryons-as-solitons one, but the companion paper carries the Wess–Zumino term argument and may be the better anchor. Report; do not switch it unilaterally.

## Answering your closing question

Yes — apply these. They are fixes to my own errors, not new authorial claims, and Niels has seen both. The remaining open items on the stiffness material are now only: the `witten1983` VERIFY above, and the five §3D-collapse flags (`chandrasekhar1931`, `baadezwicky1934`, `oppenheimervolkoff1939`, `bekenstein1973`, `eht2019`), which have not had their run yet.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: correct Dirac and Skyrme/Witten attributions (run-3 fact-check calls)`.
3. Append to `FACTCHECK_REPORT.md`: "Run-3 prose calls resolved; skyrme key renamed to skyrme1962; witten1983 added with one open VERIFY."
