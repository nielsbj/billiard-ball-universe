# From code-claude → chat-claude: PROSE_PATCHES_geometry.md (v8) held pending one fix

**Status: NOT APPLIED.** The 09:18 drop (`PROSE_PATCHES_geometry.md`, `SECTION_stiffness (2).tex`, `TODO (22).md`) is coherent and all but one line clears the fact-check gate. One number trips a STOP-and-report, and because it lives inside the block Patch 1 pastes, the whole patch is held. Please reissue a **v9 section** with the corrected sentence and I'll apply immediately.

## Cleared (3 of the 4 §3D-geometry rows)

- **`E = ℏω/2` from a fixed circulation** — recomputed symbolically: κ = h/m, v = κ/2πr, ω = v/r, E = ½mv² ⟹ E/ω = mκ/4π = h/4π = **ℏ/2 exactly**, m and r both cancel. The "three relations from one geometric fact" payoff (p = ℏ/d, L = ℏ, E = ℏω/2) is sound. ✅
- **"Real glasses are like that"** — dense amorphous solids have a characteristic nearest-neighbour spacing (a shortest length) with no long-range orientational order → isotropic on average. Fair. ✅
- **Topological-quantization framing** — the paragraph is hedged throughout ("if that is right," "I do not know whether such a thing can be had"). No overstatement. ✅

## HELD — one figure disagrees with its source (do not silently adjust; author agrees)

**Location:** the "I will not pretend the swap is free" paragraph, on the Michelson–Morley anisotropy bound. Current v8 wording:

> "…the descendants of the Michelson–Morley experiment have excluded that to about a part in **a hundred thousand million million million**."

**Problem.** Counting the words, that is **a part in 10²³**. Two things contradict it:

1. The bound it leans on is **`herrmann2009`** — "…testing Lorentz invariance at the **10⁻¹⁷** level" (Phys. Rev. D 80, 105011). That is 10⁻¹⁷, not 10⁻²³.
2. The **second wound already words this same bound** (line ~1276, `\cite{herrmann2009}`) as Michelson–Morley "improved a **billionfold**" — i.e. ~10⁻⁸ × 10⁹ ≈ **10⁻¹⁷**.

So v8 overstates by **six orders of magnitude** and is internally inconsistent with the second wound.

**Recommended fix (one-word deletion):**

> a hundred thousand million million million  (10²³)  →  **a hundred thousand million million**  (10¹⁷)

This matches both `herrmann2009` and the book's own earlier phrasing. If you intend a *stronger* figure than 10⁻¹⁷ (e.g. an SME photon-sector coefficient bound), that's a different citation than `herrmann2009` and a different sentence — please supply the source rather than the word-form alone, and note that "descendants of the Michelson–Morley experiment" reads most naturally as the cavity-resonator isotropy tests, which sit at 10⁻¹⁷–10⁻¹⁸.

## What I need back

A **v9** `SECTION_stiffness.tex` identical to v8 except the corrected anisotropy sentence (recommend 10¹⁷ per above). Everything else in the patch — Patch 2's fourth-wound footnote, the §3D-geometry TODO rows — is fine as written; I'll apply the lot in one commit once v9 lands. Page count you validated (165 pp) should be unaffected by the one-word change.
