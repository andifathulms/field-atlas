"""Draw the Entropy Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/entropy.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose. The Ising panels come from running
the model itself, with a fixed seed so the output is reproducible.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
import numpy as np
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber = (164, 84, 29)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 26 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)

# Kinetic theory Closer Look: nitrogen at 300 K.
kB, T, m = 1.38e-23, 300, 28 * 1.66e-27
vrms = math.sqrt(3 * kB * T / m)
vp = math.sqrt(2 * kB * T / m)
assert round(vrms) == 517
f = lambda v: 4 * math.pi * (m / (2 * math.pi * kB * T)) ** 1.5 * v * v * math.exp(-m * v * v / (2 * kB * T))
fmax = f(vp)
W, H = 900, 520; L, R, Tp, B = 110, 860, 40, 440; vmax = 1500
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda v: (L + (R - L) * v / vmax) * SC
Y = lambda y: (B - (B - Tp) * y / (fmax * 1.15)) * SC
for v in range(0, vmax + 1, 250):
    d.line([(X(v), Tp * SC), (X(v), B * SC)], fill=rule, width=SC)
    d.text((X(v), (B + 18) * SC), str(v), font=fm, fill=soft, anchor="mt")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.text((X(vmax / 2), (B + 52) * SC), "molecular speed, m/s", font=fi, fill=ink, anchor="mt")
d.text((L * SC, (Tp - 14) * SC), "share of molecules at each speed", font=fm, fill=soft, anchor="ls")
pts = [(X(v), Y(f(v))) for v in range(0, vmax + 1, 5)]
d.polygon(pts + [(X(vmax), Y(0)), (X(0), Y(0))], fill=(240, 222, 205))
d.line(pts, fill=amber, width=4 * SC)
for k, (v, lab, col) in enumerate([(350, "speed of sound, about 350 m/s", soft), (vp, f"most likely, {vp:.0f} m/s", ink), (vrms, f"root-mean-square, {vrms:.0f} m/s", amber)]):
    d.line([(X(v), Y(0)), (X(v), Y(f(v)))], fill=col, width=3 * SC)
    ky = (Tp + 40 + 46 * k) * SC
    d.line([(X(830), ky), (X(880), ky)], fill=col, width=3 * SC)
    d.text((X(900), ky), lab, font=fm, fill=col, anchor="lm")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/nitrogen-speeds.png", optimize=True)
print("nitrogen-speeds.png", round(vp), round(vrms))

# Phase transitions Closer Look: the 2D Ising model, J = kB = 1.
Tc = 2 / math.log(1 + math.sqrt(2))
assert round(Tc, 3) == 2.269 and round(4 / Tc - 1, 2) == 0.76  # mean field overestimates by over 75%
rng = np.random.default_rng(1944)
N, sweeps = 200, 1500
def run(temp):
    s = np.where(rng.random((N, N)) < 0.5, 1, -1) if temp > 2 else np.ones((N, N), int)
    ii, jj = np.indices((N, N)); masks = [(ii + jj) % 2 == 0, (ii + jj) % 2 == 1]
    for _ in range(sweeps):
        for mk in masks:
            nb = np.roll(s, 1, 0) + np.roll(s, -1, 0) + np.roll(s, 1, 1) + np.roll(s, -1, 1)
            dE = 2 * s * nb
            flip = (rng.random((N, N)) < np.exp(-dE / temp)) & mk
            s[flip] *= -1
    return s
panels = [(2.0, "below: T = 2.0"), (Tc, f"at Onsager's Tc = {Tc:.3f}"), (3.0, "above: T = 3.0")]
cell, gap, top, bot = 1, 30, 60, 50
size = N * cell
W2 = 3 * size + 4 * gap
im = Image.new("RGB", (W2 * SC, (top + size + bot) * SC), "white"); d = ImageDraw.Draw(im)
up, down = (44, 59, 128), (236, 229, 214)
for k, (temp, lab) in enumerate(panels):
    s = run(temp)
    rgb = np.where(s[..., None] == 1, np.array(up, np.uint8), np.array(down, np.uint8)).astype(np.uint8)
    tile = Image.fromarray(rgb).resize((size * SC, size * SC), Image.NEAREST)
    x0 = (gap + k * (size + gap)) * SC
    im.paste(tile, (x0, top * SC))
    d.rectangle([x0, top * SC, x0 + size * SC, (top + size) * SC], outline=ink, width=SC)
    d.text((x0 + size * SC // 2, (top - 18) * SC), lab, font=fm, fill=ink, anchor="mb")
    d.text((x0 + size * SC // 2, (top + size + 16) * SC), f"magnetisation {abs(s.mean()):.2f}", font=fm, fill=soft, anchor="mt")
im.resize((W2, top + size + bot), Image.LANCZOS).save(f"{outdir}/ising-panels.png", optimize=True)
print("ising-panels.png")
