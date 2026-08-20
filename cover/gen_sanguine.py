# SPDX-FileCopyrightText: 2026 Niels Bonde Jensen
# SPDX-License-Identifier: MIT
"""Pull the cover plate in sanguine ink.

Reads the locked master `cover_recursive_ball.png` and writes
`cover_recursive_ball_sanguine.png`, mapping the drawing's luminance onto a
three-point colour ramp. The master is never modified; delete the derivative
and re-run this to rebuild it byte-for-byte.

WHY A TRITONE AND NOT A TINT. The master is monochrome and strongly bimodal:
over its visible (non-transparent) pixels, 40.2% fall below luminance 64 and
46.1% above 200, with a nearly empty middle. It is black hatching plus white
highlight and very little else. At storefront thumbnail size (90 px) the
hatching optically averages toward the ramp's MIDPOINT, so a two-point tint
that darkens the shadows and leaves the highlights at paper reproduces the
same grey average with a faint cast -- all the work, none of the fix. Putting
a warm midtone in is the whole trick: it fills the tonal hole the drawing
leaves, which is exactly where the eye lands when the detail disappears.

WHERE THE MIDTONE SITS MATTERS AS MUCH AS WHAT COLOUR IT IS. BREAK is the
luminance at which the ramp turns: below it the drawing interpolates
SHADOW->MID, above it MID->HIGH. The obvious 0.5 is wrong for this drawing.
With the mass at <0.25 and >0.78, a 0.5 break carries the whole light-hatching
population 60-80% of the way to near-white, so the arriving thumbnail colour is
the midtone diluted into a milky taupe -- measured at #C4B5A7, luminance 182,
against a target of ~165. At BREAK = 0.68 that same mass lands only a quarter
to a third up the mid->high leg and arrives warm, while the true glare at
0.95-1.0 still reaches HIGH, so the ball keeps its highlight and its shape.

Ramp values are Fable's colour direction of 2026-08-20, tuned against the built
result on the same day, and adopted by the author. They sit deliberately inside
hard print limits, all of which are ceilings and not preferences:
  - SHADOW #331B17 is ~240% total ink, at KDP's coverage ceiling. Do not darken:
    a #2A1210-class shadow puts the dense inset hatching over TAC and it prints
    as a brown-black slab.
  - MID is one notch deeper and redder than the screen ideal on purpose. POD
    comes back browner and darker than screen; that shift is already priced in.
    Do NOT correct back toward red after seeing a proof or the reprint chases
    its own tail. Floor: value >= ~45%, saturation <= ~65%.
  - HIGH IS THE GROUND, and this is the whole point rather than a coincidence.
    38.9% of the drawing sits at luminance 0.95+ -- not the specular glare,
    which is a small unhatched disc, but the paper gaps *inside* the hatching,
    drawn as opaque white. Pinning that mass to anything brighter than the
    ground prints a second, whiter "paper" inside the ball, which is what made
    it read as a glowing pale mushroom at thumbnail size. At HIGH = the ground
    the gaps ARE the paper, as in a real steel engraving, and the ball becomes
    a warm solid object. The glare survives because it reads by local contrast
    against surrounding line work, not by absolute luminance above the page.
    The floor is the ground itself: a step below (#E4D9BE was tested) inverts
    the highlight into ink where the drawing says paper, the glare dies and the
    tint drifts to a dead olive. If the proof shows dot gain closing the
    hatching gaps, the fix is NOT darker ink -- raise HIGH a half step to
    #F1E9D6 and rebuild. That is the only sanctioned fallback.
  - BREAK 0.68 is the ask, 0.70 the tolerance, 0.72 the wall. Past the wall the
    paper gaps inside the hatching tint so heavily that the plate reads as
    printed on toned stock and the engraving identity dies.

Run from cover/:  python gen_sanguine.py
"""
import os

import numpy as np
from PIL import Image

SHADOW, MID, HIGH = "331B17", "874531", "EDE4CE"
BREAK = 0.68
HERE = os.path.dirname(os.path.abspath(__file__))
MASTER = os.path.join(HERE, "cover_recursive_ball.png")
DERIVATIVE = os.path.join(HERE, "cover_recursive_ball_sanguine.png")


def rgb(h):
    return np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=float)


src = Image.open(MASTER).convert("RGBA")
a = np.asarray(src, dtype=float)
lum = (0.299 * a[..., 0] + 0.587 * a[..., 1] + 0.114 * a[..., 2]) / 255.0

s, m, h = rgb(SHADOW), rgb(MID), rgb(HIGH)
t = np.clip(lum, 0.0, 1.0)[..., None]
out = np.where(t < BREAK,
               s + (m - s) * (t / BREAK),
               m + (h - m) * ((t - BREAK) / (1.0 - BREAK)))
out = np.concatenate([np.clip(out, 0, 255), a[..., 3:]], axis=2).astype(np.uint8)
Image.fromarray(out).save(DERIVATIVE)

vis = a[..., 3] / 255.0 > 0.25
print("master     : %s  %.1f%% of the frame is drawing" % (src.size, 100 * vis.mean()))
print("ramp       : %s -> %s -> %s, break at %.2f" % (SHADOW, MID, HIGH, BREAK))
print("tonal hole : %.1f%% below 0.25 luminance, %.1f%% above 0.78, %.1f%% between"
      % (100 * (lum[vis] < 0.25).mean(), 100 * (lum[vis] > 0.78).mean(),
         100 * ((lum[vis] >= 0.25) & (lum[vis] <= 0.78)).mean()))

# What the eye actually receives at thumbnail size. This is the number the
# ramp is tuned against, so the generator reports it rather than leaving it to
# be rediscovered: target ~#AC8570, luminance ~165, saturation ~0.24.
ground = rgb("EDE4CE")
alpha = (a[..., 3:] / 255.0)
flat = out[..., :3] * alpha + ground * (1 - alpha)
w = flat.shape[1]
ball = flat[int(0.10 * w):int(0.62 * w), int(0.04 * w):int(0.56 * w)]
small = np.asarray(Image.fromarray(ball.astype(np.uint8)).resize((36, 36), Image.LANCZOS),
                   dtype=float).reshape(-1, 3)
mean = small.mean(axis=0)
mx, mn = small.max(axis=1), small.min(axis=1)
sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0).mean()
print("arrival    : optical mean #%02X%02X%02X  luminance %.1f  saturation %.3f"
      % (int(mean[0]), int(mean[1]), int(mean[2]), mean.mean(), sat))
print("wrote      : %s" % os.path.basename(DERIVATIVE))
