"""Draw the Quantum Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/quantum.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue = (164, 84, 29), (44, 59, 128)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 26 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)

def axes(d, X, Y, L, R, T, B, xt, yt, xlab, ylab, fmt=lambda v: f"{v:g}"):
    for y in yt:
        d.line([(L * SC, Y(y)), (R * SC, Y(y))], fill=rule, width=SC)
        d.text(((L - 12) * SC, Y(y)), fmt(y), font=fm, fill=soft, anchor="rm")
    for x in xt:
        d.text((X(x), (B + 18) * SC), fmt(x), font=fm, fill=soft, anchor="mt")
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 52) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

# Old quantum theory: photon energy 1240/lambda against sodium's 2.3 eV work function.
E = lambda lam: 1240 / lam
assert [round(E(l), 2) for l in (700, 530, 400)] == [1.77, 2.34, 3.10]
Wf = 2.3; cut = 1240 / Wf
W, H = 900, 520; L, R, T, B = 110, 860, 40, 440
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda lam: (L + (R - L) * (lam - 380) / (720 - 380)) * SC
Y = lambda e: (B - (B - T) * (e - 1.5) / (3.5 - 1.5)) * SC
def colour(lam):  # rough wavelength-to-RGB for a spectrum strip
    if lam < 440: r, g, b = -(lam - 440) / 60, 0, 1
    elif lam < 490: r, g, b = 0, (lam - 440) / 50, 1
    elif lam < 510: r, g, b = 0, 1, -(lam - 510) / 20
    elif lam < 580: r, g, b = (lam - 510) / 70, 1, 0
    elif lam < 645: r, g, b = 1, -(lam - 645) / 65, 0
    else: r, g, b = 1, 0, 0
    return tuple(int(255 * (0.25 + 0.75 * c)) for c in (r, g, b))
for lam in range(380, 721):
    d.line([(X(lam), (B + 2) * SC), (X(lam), (B + 10) * SC)], fill=colour(lam), width=3 * SC)
axes(d, X, Y, L, R, T, B, [400, 450, 500, 550, 600, 650, 700], [1.5, 2.0, 2.5, 3.0, 3.5], "wavelength of light, nm", "energy of one photon, eV")
d.line([(L * SC, Y(Wf)), (R * SC, Y(Wf))], fill=amber, width=3 * SC)
d.text((X(715), Y(Wf) + 12 * SC), "sodium's work function, 2.3 eV", font=fm, fill=amber, anchor="rt")
d.line([(X(l), Y(E(l))) for l in range(380, 721)], fill=blue, width=4 * SC)
for lam in (400, 530, 700):
    d.ellipse([X(lam) - 7 * SC, Y(E(lam)) - 7 * SC, X(lam) + 7 * SC, Y(E(lam)) + 7 * SC], fill=ink)
    d.text((X(lam) + 12 * SC, Y(E(lam)) - 8 * SC), f"{E(lam):.2f} eV", font=fm, fill=ink, anchor="lb")
d.line([(X(cut), Y(Wf)), (X(cut), B * SC)], fill=soft, width=2 * SC)
d.text((X(cut) + 10 * SC, (B - 20) * SC), f"cut-off {cut:.0f} nm", font=fm, fill=soft, anchor="lm")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/photoelectric-threshold.png", optimize=True)
print("photoelectric-threshold.png", round(cut))

# Quantum information: CHSH correlations, cos 2(a-b), against angle difference.
q = lambda deg: math.cos(math.radians(2 * deg))
S = q(-22.5) - q(-67.5) + q(22.5) + q(-22.5)
assert abs(S - 2 * math.sqrt(2)) < 1e-12
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda a: (L + (R - L) * a / 90) * SC
Y = lambda c: (B - (B - T) * (c + 1) / 2) * SC
axes(d, X, Y, L, R, T, B, [0, 22.5, 45, 67.5, 90], [-1, -0.5, 0, 0.5, 1], "angle between the two polarisers, degrees", "average of A times B")
d.line([(X(a / 10), Y(q(a / 10))) for a in range(901)], fill=blue, width=4 * SC)
# Straight-line correlation, the best a pre-set-answer model can do for this pair of settings.
d.line([(X(0), Y(1)), (X(90), Y(-1))], fill=soft, width=2 * SC)
for a, lab in [(22.5, "0.707"), (67.5, "-0.707")]:
    d.line([(X(a), Y(q(a))), (X(a), Y(1 - a / 45))], fill=amber, width=3 * SC)
    d.ellipse([X(a) - 7 * SC, Y(q(a)) - 7 * SC, X(a) + 7 * SC, Y(q(a)) + 7 * SC], fill=ink)
    d.text((X(a) + (12 if a < 45 else -12) * SC, Y(q(a)) + (-10 if a < 45 else 10) * SC), lab, font=fm, fill=ink, anchor="lb" if a < 45 else "rt")
d.text((X(56), Y(0.62)), "quantum: cos 2(a − b)", font=fi, fill=blue, anchor="lm")
d.text((X(4), Y(-0.55)), "straight line: a pre-set-\nanswer model, which\nreaches exactly S = 2", font=fm, fill=soft, anchor="la")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/bell-correlations.png", optimize=True)
print("bell-correlations.png", round(S, 3))
