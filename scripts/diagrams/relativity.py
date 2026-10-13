"""Draw the Relativity Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/relativity.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, grey = (164, 84, 29), (150, 142, 130)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 26 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)

# Special relativity Closer Look: muons made 10 km up at 0.995c, mean lifetime 2.2 us.
c, v, height, tau = 3.00e8, 0.995 * 3.00e8, 10_000, 2.2
trip = height / v * 1e6
gamma = 1 / math.sqrt(1 - 0.995 ** 2)
classical = lambda h: math.exp(-(h / v * 1e6) / tau)
relativistic = lambda h: math.exp(-(h / v * 1e6) / gamma / tau)
assert round(trip, 1) == 33.5 and round(gamma) == 10
assert 1 / classical(height) > 4e6 and round(relativistic(height), 2) == 0.22

W, H = 900, 520
L, R, T, B = 110, 860, 40, 440
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda km: (L + (R - L) * km / 10) * SC
Y = lambda f: (B - (B - T) * f) * SC
for f in (0, 0.25, 0.5, 0.75, 1):
    d.line([(L * SC, Y(f)), (R * SC, Y(f))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(f)), f"{f:.0%}", font=fm, fill=soft, anchor="rm")
for km in range(0, 11, 2):
    d.text((X(km), (B + 18) * SC), f"{km}", font=fm, fill=soft, anchor="mt")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
d.text((X(5), (B + 52) * SC), "kilometres fallen", font=fi, fill=ink, anchor="mt")
d.text(((L - 12) * SC, (T - 14) * SC), "muons still alive", font=fm, fill=soft, anchor="ls")
for f, col, lab, at in [(relativistic, amber, "with time dilation", 6.2), (classical, grey, "without", 1.8)]:
    d.line([(X(i / 20), Y(f(i * 50))) for i in range(201)], fill=col, width=4 * SC)
    d.text((X(at) + 10 * SC, Y(f(at * 1000)) - 14 * SC), lab, font=fi, fill=col, anchor="lb")
end = relativistic(height)
d.ellipse([X(10) - 8 * SC, Y(end) - 8 * SC, X(10) + 8 * SC, Y(end) + 8 * SC], fill=ink)
d.text((X(10) - 14 * SC, Y(end) + 14 * SC), f"{end:.0%} reach the ground", font=fm, fill=ink, anchor="rt")
d.text((X(10) - 14 * SC, Y(0) - 12 * SC), "about 1 in 4 million", font=fm, fill=soft, anchor="rb")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/muon-survival.png", optimize=True)
print("muon-survival.png")
