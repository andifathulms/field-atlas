"""Draw the Matter Thread's diagram from the numbers in its chapter.

Usage: python3 scripts/diagrams/matter.py src/fonts <outdir>

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

# Topological matter Closer Look: Hall resistance plateaus at R_K / nu, R_K = h/e^2 exactly (SI 2019).
h, e = 6.62607015e-34, 1.602176634e-19
RK = h / e ** 2
assert round(RK, 3) == 25812.807
table = {1: 25812.807, 2: 12906.404, 3: 8604.269, 4: 6453.202}
for nu, val in table.items():
    assert abs(RK / nu - val) < 0.001
n = 3e15  # electrons per square metre, a typical 2D electron gas
Bnu = lambda nu: n * h / (e * nu)  # field at which filling nu is reached exactly
W, H = 900, 540; L, R, T, B = 120, 850, 50, 450
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
Bmax, Rmax = 16, 28000
X = lambda b: (L + (R - L) * b / Bmax) * SC
Y = lambda r: (B - (B - T) * r / Rmax) * SC
for b in range(0, Bmax + 1, 2):
    d.text((X(b), (B + 18) * SC), str(b), font=fm, fill=soft, anchor="mt")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
d.text(((L + R) / 2 * SC, (B + 52) * SC), "magnetic field, tesla", font=fi, fill=ink, anchor="mt")
d.text(((L - 12) * SC, (T - 14) * SC), "Hall resistance, ohms", font=fm, fill=soft, anchor="ls")
# classical Hall line R = B / (n e)
d.line([(X(0), Y(0)), (X(Bmax), Y(Bmax / (n * e)))], fill=soft, width=2 * SC)
d.text((X(9.4), Y(19000)), "classical line, B / ne", font=fm, fill=soft, anchor="lm")
# idealised staircase: filling f(x) = x - sin(2 pi x) / (2 pi) is flat at every whole number x,
# so R = R_K / f(nu_c) sits exactly on R_K / nu at each plateau and rises smoothly between them.
f1 = lambda x: x - math.sin(2 * math.pi * x) / (2 * math.pi)
f = lambda x: f1(f1(f1(x)))  # repeating keeps whole numbers fixed and widens each plateau
for nu in (1, 2, 3, 4):
    assert abs(RK / f(nu) - RK / nu) < 1e-6
pts = [(X(0), Y(0))]
for i in range(1, 1601):
    b = Bmax * i / 1600
    pts.append((X(b), Y(min(RK / f(n * h / (e * b)), Rmax))))
d.line(pts, fill=blue, width=4 * SC)
for nu in (1, 2, 3, 4):
    d.line([(L * SC, Y(RK / nu)), ((L + 6) * SC, Y(RK / nu))], fill=ink, width=2 * SC)
    d.text(((L - 12) * SC, Y(RK / nu)), f"{RK / nu:,.0f}", font=fm, fill=ink, anchor="rm")
    d.text((X(Bnu(nu)), Y(RK / nu) + 10 * SC), f"ν = {nu}", font=fi, fill=blue, anchor="mt")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/quantum-hall-steps.png", optimize=True)
print("quantum-hall-steps.png", round(Bnu(1), 2))
