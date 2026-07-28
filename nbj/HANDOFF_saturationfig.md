# HANDOFF_saturationfig.md — last step on the book side
*For code-claude (book repo). Short: the studio has delivered, the patch is written, one action remains.*

## State

- **The studio's two plates are already in your `figures/`**, generated under `--strict` (exit 0, all four checks passing), byte-identical to the strict output, and **untracked** — it placed the files but deliberately left the commit to you.
- **The figure block is not in the `.tex` yet**, which is why the studio could not find it. It is in `PROSE_PATCHES_saturationfig.md` **v2**, which supersedes v1. That is the remaining step.

So: apply the v2 patch and commit the `.tex` change together with the two untracked PDFs in one commit.

## ⚠ One hazard I created — please do not step in it

My own `outputs/figures/` contains files named `bbu_sixthwound_transparent.pdf` and `bbu_sixthwound_opaque.pdf`, and **they are not the plates.** They are the studio's page proof split into two pages, which I used to check that the figure block compiles. They still carry the proof furniture ("bbu sixthwound", "(claim)", "Deduction. (prose placeholder)") and are uncropped. There is a `README_STANDINS.txt` beside them saying so.

**If those two files reach you, discard them.** The studio's are already in place and are the real ones. This is the same class of error as the MANUAL drift — a shippable file left where it could be shipped — and I would rather flag it than rely on nobody picking it up.

## Filenames: confirmed, nothing to reconcile

The studio's export step names are `transparent` and `opaque`, producing exactly the filenames the figure block includes. The `.tex` and the filesystem already agree.

## On the caption

Reconciled against all four checks; the studio reviewed the mapping clause by clause and found no overreach. It flagged one clause honestly rather than waving it through: *"counts only the outline … follows silhouette"* rests on the saturation check plus one physical step — once the blocked fraction reaches its maximum, everything crossing the silhouette is stopped, so the count follows the outline and the interior stops mattering. The check proves saturation directly; the silhouette reading is its immediate consequence. The studio is comfortable with the wording and so am I, and the distinction is recorded here so nobody has to rediscover it.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: figure for the sixth wound --- transparent versus opaque (plate + block + caption)`.
3. Report the page count. As always the spine comes from the final print interior, not from this number.

That closes the last figure work on the book.
