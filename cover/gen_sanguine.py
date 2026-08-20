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

Ramp endpoints are Fable's colour direction of 2026-08-20, adopted by the
author. SHADOW and MID are deliberately desaturated: dark reds shift brown in
CMYK, and a redder midtone turns maroon in POD print. HIGH sits just above the
EDE4CE ground so the glare still reads as glare rather than as a hole.

Run from cover/:  python gen_sanguine.py
"""
import os

import numpy as np
from PIL import Image

SHADOW, MID, HIGH = "331B17", "7E4437", "FAF4E7"
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
out = np.where(t < 0.5, s + (m - s) * (t / 0.5), m + (h - m) * ((t - 0.5) / 0.5))
out = np.concatenate([np.clip(out, 0, 255), a[..., 3:]], axis=2).astype(np.uint8)
Image.fromarray(out).save(DERIVATIVE)

vis = a[..., 3] / 255.0 > 0.25
print("master     : %s  %.1f%% of the frame is drawing" % (src.size, 100 * vis.mean()))
print("ramp       : %s -> %s -> %s" % (SHADOW, MID, HIGH))
print("tonal hole : %.1f%% below 0.25 luminance, %.1f%% above 0.78, %.1f%% between"
      % (100 * (lum[vis] < 0.25).mean(), 100 * (lum[vis] > 0.78).mean(),
         100 * ((lum[vis] >= 0.25) & (lum[vis] <= 0.78)).mean()))
print("wrote      : %s" % os.path.basename(DERIVATIVE))
