"""Draw the Light Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/light.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue, grey = (164, 84, 29), (44, 59, 128), (150, 142, 130)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 26 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)

# Lasers and photonics Closer Look: loss against distance for three fibres, with a 50 dB budget.
budget = 50
fibres = [(1000, "1965: 1,000 dB/km", grey), (20, "Kao: 20 dB/km", amber), (0.2, "today: 0.2 dB/km", blue)]
spacing = {loss: budget / loss for loss, _, _ in fibres}
assert spacing[20] == 2.5 and spacing[0.2] == 250 and spacing[1000] == 0.05
W, H = 900, 520; L, R, T, B = 110, 860, 40, 440
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
lo, hi = -2, 3  # distance from 0.01 km to 1,000 km, log scale
X = lambda km: (L + (R - L) * (math.log10(km) - lo) / (hi - lo)) * SC
Y = lambda db: (T + (B - T) * db / 100) * SC  # loss grows downward
for e in range(lo, hi + 1):
    km = 10 ** e
    d.line([(X(km), T * SC), (X(km), B * SC)], fill=rule, width=SC)
    d.text((X(km), (B + 18) * SC), f"{km:g}", font=fm, fill=soft, anchor="mt")
for db in (0, 25, 50, 75, 100):
    d.text(((L - 12) * SC, Y(db)), f"{db}", font=fm, fill=soft, anchor="rm")
d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.text(((L + R) / 2 * SC, (B + 52) * SC), "length of fibre, km (logarithmic)", font=fi, fill=ink, anchor="mt")
d.text(((L - 12) * SC, (T - 14) * SC), "light lost, dB", font=fm, fill=soft, anchor="ls")
d.line([(L * SC, Y(budget)), (R * SC, Y(budget))], fill=ink, width=2 * SC)
d.text((X(20), Y(budget) - 10 * SC), "50 dB budget", font=fm, fill=ink, anchor="lb")
for k, (loss, lab, col) in enumerate(fibres):
    pts = [(X(10 ** (lo + i / 100)), Y(min(100, loss * 10 ** (lo + i / 100)))) for i in range(501) if loss * 10 ** (lo + i / 100) <= 100]
    d.line(pts, fill=col, width=4 * SC)
    s = spacing[loss]
    d.ellipse([X(s) - 7 * SC, Y(budget) - 7 * SC, X(s) + 7 * SC, Y(budget) + 7 * SC], fill=col)
    d.text((X(s) + 10 * SC, Y(budget) - 10 * SC), f"{s:g} km", font=fm, fill=col, anchor="lb")
    d.text((X(0.11), (B - 105 + 32 * k) * SC), lab, font=fm, fill=col, anchor="lm")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/fibre-loss.png", optimize=True)
print("fibre-loss.png")
