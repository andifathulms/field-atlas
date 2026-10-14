"""Draw the Flow Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/flow.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose. The polymer chain is a seeded
random walk, so the output is reproducible.
"""
import math, random, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue = (164, 84, 29), (44, 59, 128)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 24 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)

# Fluid dynamics Closer Look: Reynolds numbers from bacterium to weather system.
Re = lambda U, L, nu: U * L / nu
car, bug = Re(30, 4, 1.5e-5), Re(30e-6, 1e-6, 1e-6)
assert car == 8e6 and abs(bug - 3e-5) < 1e-12 and round(math.log10(car / bug)) == 11
items = [(bug, "swimming bacterium", "3e-5"), (1e2, "tadpole", "100"), (1e4, "sparrow", "10,000"),
         (car, "car on a motorway", "8 million"), (1e8, "whale", "100 million"), (1e9, "weather system", "1 billion")]
W, H = 900, 470; L, R, Yl = 70, 850, 330
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
lo, hi = -6, 10
X = lambda re: (L + (R - L) * (math.log10(re) - lo) / (hi - lo)) * SC
d.rectangle([X(1e-6), (Yl - 10) * SC, X(1), (Yl + 10) * SC], fill=(226, 232, 244))
d.rectangle([X(1), (Yl - 10) * SC, X(1e10), (Yl + 10) * SC], fill=(244, 230, 216))
d.text(((X(1e-6) + X(1)) / 2, (Yl + 24) * SC), "viscosity rules", font=fm, fill=blue, anchor="mt")
d.text(((X(1) + X(1e10)) / 2, (Yl + 24) * SC), "inertia rules", font=fm, fill=amber, anchor="mt")
for e in range(lo, hi + 1, 2):
    d.line([(X(10 ** e), (Yl + 10) * SC), (X(10 ** e), (Yl + 16) * SC)], fill=soft, width=SC)
    d.text((X(10 ** e), (Yl + 56) * SC), {0: "1", 2: "100", 4: "10,000", -2: "0.01", -4: "1e-4", -6: "1e-6", 6: "1e6", 8: "1e8", 10: "1e10"}[e], font=fm, fill=soft, anchor="mt")
for k, (re, name, val) in enumerate(items):
    ty = (40 + 40 * k) * SC
    d.line([(X(re), (Yl - 10) * SC), (X(re), ty + 10 * SC)], fill=rule if k < 5 else rule, width=SC)
    d.ellipse([X(re) - 5 * SC, (Yl - 5) * SC, X(re) + 5 * SC, (Yl + 5) * SC], fill=ink)
    right = re < 1e6
    d.text((X(re) + (8 if right else -8) * SC, ty), f"{name}: {val}", font=fm, fill=ink, anchor="lm" if right else "rm")
d.text((W / 2 * SC, (H - 26) * SC), "Reynolds number, UL/ν (logarithmic)", font=fi, fill=ink, anchor="mm")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/reynolds-scale.png", optimize=True)
print("reynolds-scale.png")

# Soft matter Closer Look: a freely jointed chain, N = 1000 segments of 0.25 nm.
N, b = 1000, 0.25
SEED = 33
Rexp = b * math.sqrt(N)
assert round(Rexp, 1) == 7.9 and N * b == 250
rng = random.Random(SEED)
pts, x, y, z = [(0.0, 0.0)], 0.0, 0.0, 0.0
for _ in range(N):  # projected 3D steps
    th, ph = math.acos(rng.uniform(-1, 1)), rng.uniform(0, 2 * math.pi)
    x += b * math.sin(th) * math.cos(ph); y += b * math.sin(th) * math.sin(ph); z += b * math.cos(th); pts.append((x, y))
xs, ys = [p[0] for p in pts], [p[1] for p in pts]
cx, cy = (max(xs) + min(xs)) / 2, (max(ys) + min(ys)) / 2
W2, H2 = 900, 560; s = 400 / max(max(xs) - min(xs), max(ys) - min(ys), 2 * Rexp)
im = Image.new("RGB", (W2 * SC, H2 * SC), "white"); d = ImageDraw.Draw(im)
ox, oy = 250, H2 / 2
P = lambda p: ((ox + (p[0] - cx) * s) * SC, (oy - (p[1] - cy) * s) * SC)
d.line([P(p) for p in pts], fill=blue, width=SC, joint="curve")
for p, lab in [(pts[0], "start"), (pts[-1], "end")]:
    q = P(p); d.ellipse([q[0] - 6 * SC, q[1] - 6 * SC, q[0] + 6 * SC, q[1] + 6 * SC], fill=amber)
d.line([P(pts[0]), P(pts[-1])], fill=amber, width=2 * SC)
end = math.sqrt(x * x + y * y + z * z)  # true 3D distance; the drawing is a projection
assert abs(end - Rexp) < 1.5
d.line([((W2 - 420) * SC, (H2 - 120) * SC), ((W2 - 420 + 10 * s) * SC, (H2 - 120) * SC)], fill=ink, width=3 * SC)
d.text(((W2 - 420) * SC, (H2 - 132) * SC), "10 nm", font=fm, fill=ink, anchor="lb")
lines = [f"{N:,} segments of {b} nm", f"length along the chain: {N * b:.0f} nm", f"typical end-to-end: {Rexp:.1f} nm", f"this chain's ends: {end:.1f} nm apart"]
for k, t in enumerate(lines):
    d.text(((W2 - 420) * SC, (90 + 40 * k) * SC), t, font=fm, fill=amber if k == 3 else ink, anchor="lm")
im.resize((W2, H2), Image.LANCZOS).save(f"{outdir}/polymer-coil.png", optimize=True)
print("polymer-coil.png", round(end, 1))
