# License

**The rule: all rights reserved by default. MIT is the exception, and every exception is
marked.** Loosening a license later is always possible; tightening one after publication is not —
so anything uncertain is all-rights-reserved. This repository is published for **transparency,
verification, and correction**, not to license the book. A public repo is assumed "free" unless it
says otherwise; this says otherwise.

Licensing is machine-readable via the [REUSE](https://reuse.software) convention: every file's
license is declared in `REUSE.toml`, with full texts in `LICENSES/`. Run `reuse lint` (or read
`REUSE.toml`) for the authoritative answer on any file.

| Scope | License |
|-------|---------|
| Book text & bibliography (`manuscript/`), all art & plates (`art/`, `figures/*.pdf`, `cover/*.png`), the correction record (`record/`), process & memos (`process/`, `memos/`) | **`LicenseRef-BBU-AllRightsReserved`** — read & quote (fair use) & report errors; **no** reproduction/redistribution/derivatives without permission |
| Figure programs (`figures/programs/`), build & cover-builder code (`manuscript/build.bat`, `cover/*.tex`), generation manifests/prompts/PROVENANCE (`cover/cover_tiles.spec.json`, `*/PROVENANCE.md`, `art/art_specs/`, `art/generated/`, `art/provenance/`) | **`MIT`** — the reusable method |
| Figure-check harness (`figures/harness/`) | **`LicenseRef-BBU-AllRightsReserved`** — reproduced from proofviz (unreleased) for **inspection only**, not reuse |

**Carve-out** (in the file headers of `cover/cover_wrap.tex` and `cover/cover_art_build.tex`):
the *code* is MIT; the cover copy embedded in it — headline, blurb, pull quote, reader line,
biography — is book text, all rights reserved.

**`manuscript/ref.bib`**: the bibliographic facts are nobody's property; the annotation notes are
the book's prose. The file is all-rights-reserved for the prose; the facts are free to anyone.

Full texts: [`LICENSES/MIT.txt`](LICENSES/MIT.txt) ·
[`LICENSES/LicenseRef-BBU-AllRightsReserved.txt`](LICENSES/LicenseRef-BBU-AllRightsReserved.txt).
