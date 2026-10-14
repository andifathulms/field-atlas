"""Draw the Nuclear Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/nucleus.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue = (164, 84, 29), (44, 59, 128)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 24 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)

def axes(d, X, Y, L, R, T, B, xt, yt, xlab, ylab):
    for y in yt:
        d.line([(L * SC, Y(y)), (R * SC, Y(y))], fill=rule, width=SC)
        d.text(((L - 12) * SC, Y(y)), f"{y:g}", font=fm, fill=soft, anchor="rm")
    for x in xt:
        d.text((X(x), (B + 18) * SC), f"{x:g}", font=fm, fill=soft, anchor="mt")
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 52) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

# Nuclear structure Closer Look: binding energy per particle from atomic masses.
mH, mn, u = 1.007825, 1.008665, 931.5
nuclei = [("²H", 1, 1, 2.014102), ("⁴He", 2, 2, 4.002602), ("¹²C", 6, 6, 12.0), ("⁵⁶Fe", 26, 30, 55.934936), ("²³⁵U", 92, 143, 235.04393)]
per = {}
for name, Z, N, M in nuclei:
    per[name] = (Z * mH + N * mn - M) * u / (Z + N)
assert [round(per[k], 1) for k in ("²H", "⁴He", "¹²C", "⁵⁶Fe", "²³⁵U")] == [1.1, 7.1, 7.7, 8.8, 7.6]
# Semi-empirical (Weizsäcker) curve for the shape between the measured points.
def semf(A):
    Z = A / (1.98 + 0.015 * A ** (2 / 3))
    B = 15.75 * A - 17.8 * A ** (2 / 3) - 0.711 * Z * Z / A ** (1 / 3) - 23.7 * (A - 2 * Z) ** 2 / A
    return B / A
W, H = 900, 520; L, R, T, B = 100, 860, 40, 440
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda A: (L + (R - L) * A / 250) * SC
Y = lambda e: (B - (B - T) * e / 10) * SC
axes(d, X, Y, L, R, T, B, [0, 50, 100, 150, 200, 250], [0, 2, 4, 6, 8, 10], "number of protons and neutrons, A", "binding energy per particle, MeV")
d.line([(X(a), Y(semf(a))) for a in range(12, 251)], fill=soft, width=2 * SC)
labels = {"²H": (14, 1.1, "lm"), "⁴He": (30, 6.2, "lm"), "¹²C": (34, 9.2, "lm"), "⁵⁶Fe": (75, 9.4, "lm"), "²³⁵U": (225, 6.8, "rm")}
for name, Z, N, M in nuclei:
    A = Z + N; e = per[name]; lx, ly, anc = labels[name]
    d.line([(X(A), Y(e)), (X(lx), Y(ly))], fill=rule, width=SC)
    d.ellipse([X(A) - 7 * SC, Y(e) - 7 * SC, X(A) + 7 * SC, Y(e) + 7 * SC], fill=blue)
    d.text((X(lx) + (4 if anc == "lm" else -4) * SC, Y(ly)), f"{name}  {e:.1f}", font=fi, fill=blue, anchor=anc)
d.text((X(56), Y(per["⁵⁶Fe"]) + 18 * SC), "peak near iron", font=fm, fill=ink, anchor="mt")
d.text((X(12), Y(4.2)), "← fusion moves up this side", font=fm, fill=amber, anchor="lm")
d.text((X(240), Y(6.1)), "fission moves up this side →", font=fm, fill=amber, anchor="rm")
d.text((X(240), Y(5.3)), "grey curve: liquid-drop formula", font=fm, fill=soft, anchor="rm")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/binding-energy.png", optimize=True)
print("binding-energy.png")

# Radiometric dating Closer Look: radiogenic 207Pb/206Pb against age.
# Standard decay constants (Jaffey et al. 1971), per billion years; the rounded half-lives
# 4.47 and 0.70 Gyr are too coarse for the table's third decimal place.
l238, l235 = 0.155125, 0.98485
ratio = lambda t: (math.exp(l235 * t) - 1) / (137.88 * (math.exp(l238 * t) - 1))
table = {4.00: 0.425, 4.50: 0.597, 4.55: 0.618, 4.60: 0.639}
for t, r in table.items():
    assert abs(ratio(t) - r) < 0.001, (t, ratio(t))
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda t: (L + (R - L) * t / 5) * SC
Y = lambda r: (B - (B - T) * r / 0.8) * SC
axes(d, X, Y, L, R, T, B, [0, 1, 2, 3, 4, 5], [0, 0.2, 0.4, 0.6, 0.8], "age, billion years", "lead-207 made per lead-206 made")
d.line([(X(t / 100), Y(ratio(t / 100))) for t in range(1, 501)], fill=blue, width=4 * SC)
t0 = 4.55
d.line([(X(t0), Y(0)), (X(t0), Y(ratio(t0)))], fill=amber, width=2 * SC)
d.line([(L * SC, Y(ratio(t0))), (X(t0), Y(ratio(t0)))], fill=amber, width=2 * SC)
d.ellipse([X(t0) - 7 * SC, Y(ratio(t0)) - 7 * SC, X(t0) + 7 * SC, Y(ratio(t0)) + 7 * SC], fill=amber)
d.text((X(t0) - 12 * SC, Y(ratio(t0)) - 12 * SC), f"the Earth: 4.55 billion years, ratio {ratio(t0):.3f}", font=fm, fill=amber, anchor="rb")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/lead-clock.png", optimize=True)
print("lead-clock.png", [round(ratio(t), 3) for t in table])
