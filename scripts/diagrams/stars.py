"""Draw the Stars Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/stars.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 26 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)

# Spectroscopy Closer Look: black-body spectra of three stars, peaks by Wien's law.
h, c, k, b = 6.626e-34, 2.998e8, 1.381e-23, 2.898e-3
stars = [("Betelgeuse", 3600, (176, 62, 38)), ("the Sun", 5772, (164, 120, 20)), ("Sirius", 9900, (44, 59, 128))]
peaks = {n: b / T * 1e9 for n, T, _ in stars}
assert round(peaks["Betelgeuse"], -1) == 800 and round(peaks["the Sun"]) == 502 and abs(peaks["Sirius"] - 290) < 5
B = lambda lam, T: 1 / (lam ** 5 * (math.exp(h * c / (lam * k * T)) - 1))
W, H = 900, 520; L, R, T0, Bm = 110, 860, 40, 440
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda nm: (L + (R - L) * (nm - 100) / (2000 - 100)) * SC
d.rectangle([X(380), T0 * SC, X(750), Bm * SC], fill=(244, 238, 226))
d.text((X(565), (T0 + 8) * SC), "visible", font=fm, fill=soft, anchor="mt")
for nm in range(250, 2001, 250):
    d.text((X(nm), (Bm + 18) * SC), str(nm), font=fm, fill=soft, anchor="mt")
d.line([(L * SC, Bm * SC), (R * SC, Bm * SC)], fill=ink, width=2 * SC)
d.text((X(1050), (Bm + 52) * SC), "wavelength, nm", font=fi, fill=ink, anchor="mt")
d.text((L * SC, (T0 - 14) * SC), "brightness at each wavelength, each star scaled to its own peak", font=fm, fill=soft, anchor="ls")
for k_, (name, T, col) in enumerate(stars):
    peak = B(peaks[name] * 1e-9, T)
    Y = lambda v: (Bm - (Bm - T0 - 40) * v / peak) * SC
    d.line([(X(nm), Y(B(nm * 1e-9, T))) for nm in range(100, 2001, 4)], fill=col, width=4 * SC)
    px = peaks[name]
    d.ellipse([X(px) - 6 * SC, Y(peak) - 6 * SC, X(px) + 6 * SC, Y(peak) + 6 * SC], fill=col)
    d.text((X(1250), (T0 + 70 + 40 * k_) * SC), f"{name}, {T:,} K: peak {px:.0f} nm", font=fm, fill=col, anchor="lm")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/star-spectra.png", optimize=True)
print("star-spectra.png")

# Galactic astronomy Closer Look: S2's orbit, a = 1030 AU, P = 16.05 yr, closest approach about 120 AU.
a, P, peri = 1030, 16.05, 120
M = a ** 3 / P ** 2
assert round(M / 1e6, 1) == 4.2
e = 1 - peri / a
bb = a * math.sqrt(1 - e * e)
W2, H2 = 900, 560
im = Image.new("RGB", (W2 * SC, H2 * SC), "white"); d = ImageDraw.Draw(im)
s = 760 / (2 * a)  # pixels per AU; the long axis spans 760 px
cx = 70 + (2 * a - peri) * s  # focus (black hole) sits 120 AU from the right-hand end
cy = H2 / 2 - 10
pts = []
for i in range(721):
    t = 2 * math.pi * i / 720
    x, y = -a * e + a * math.cos(t), bb * math.sin(t)  # focus at origin
    pts.append(((cx + x * s) * SC, (cy - y * s) * SC))
d.line(pts, fill=(44, 59, 128), width=4 * SC)
r = 9 * SC
d.ellipse([cx * SC - r, cy * SC - r, cx * SC + r, cy * SC + r], fill=ink)
nep = 30 * s * SC
d.ellipse([cx * SC - nep, cy * SC - nep, cx * SC + nep, cy * SC + nep], outline=(164, 84, 29), width=2 * SC)
d.text(((cx - 40) * SC, (cy + 50) * SC), "black hole, about 4.2 million Suns", font=fm, fill=ink, anchor="rt")
d.line([((cx - 4) * SC, (cy - 30 * s) * SC), ((cx - 60) * SC, (cy - 80) * SC)], fill=(164, 84, 29), width=SC)
d.text(((cx - 64) * SC, (cy - 84) * SC), "Neptune's orbit around the Sun, to scale", font=fm, fill=(164, 84, 29), anchor="rb")
px = cx + peri * s
d.text(((px + 6) * SC, (cy + 18) * SC), "120 AU", font=fm, fill=soft, anchor="lt")
apo = a * (1 + e)
assert round(apo, -1) == 1940
d.text(((cx - apo * s + 10) * SC, cy * SC), f"{apo:,.0f} AU", font=fm, fill=soft, anchor="lm")
d.text((W2 / 2 * SC, (H2 - 40) * SC), "distances measured from the black hole: closest 120 AU, farthest 1,940 AU", font=fm, fill=soft, anchor="mm")
d.text((W2 / 2 * SC, 30 * SC), f"S2: one lap every {P} years, long axis 2 × {a:,} AU", font=fi, fill=ink, anchor="mt")
im.resize((W2, H2), Image.LANCZOS).save(f"{outdir}/s2-orbit.png", optimize=True)
print("s2-orbit.png", round(e, 3))
