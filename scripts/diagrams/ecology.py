"""Draw the Ecology Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/ecology.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule, pale = (28, 26, 23), (112, 104, 92), (217, 208, 191), (238, 230, 214)
amber, blue, green = (164, 84, 29), (44, 59, 128), (58, 110, 72)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 22 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)
fs = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 12 * SC)
W = 900

def canvas(h):
    im = Image.new("RGB", (W * SC, h * SC), "white")
    return im, ImageDraw.Draw(im)

def save(im, name, h):
    im.resize((W, h), Image.LANCZOS).save(f"{outdir}/{name}", optimize=True)
    print(name)

def dot(d, x, y, colour, r=7):
    d.ellipse([x - r * SC, y - r * SC, x + r * SC, y + r * SC], fill=colour)

def axes(d, L, R, T, B, xlab, ylab):
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 50) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

# Biogeography Closer Look: S = c A^z with c = 5, z = 0.3.
c, z = 5, 0.3
S = lambda a: c * a ** z
table = {10: 10.0, 100: 19.9, 1000: 39.7, 10000: 79.2, 100000: 158.1}
for a, s in table.items():
    assert round(S(a), 1) == s, (a, S(a))
assert round(0.1 ** z, 2) == 0.50 and round(0.5 ** z, 2) == 0.81
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda a: (L + (R - L) * (math.log10(a) - 0.5) / 5) * SC
Y = lambda s: (B - (B - T) * (math.log10(s) - math.log10(5)) / (math.log10(250) - math.log10(5))) * SC
for a in [10, 100, 1000, 10000, 100000]:
    d.line([(X(a), T * SC), (X(a), B * SC)], fill=rule, width=SC)
    d.text((X(a), (B + 18) * SC), f"{a:,}", font=fm, fill=soft, anchor="mt")
for s in [5, 10, 20, 40, 80, 160]:
    d.line([(L * SC, Y(s)), (R * SC, Y(s))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(s)), f"{s}", font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "island area, km² (log scale)", "species (log scale)")
d.line([(X(10 ** (e / 100)), Y(S(10 ** (e / 100)))) for e in range(50, 551)], fill=blue, width=4 * SC)
for a, s in table.items():
    dot(d, X(a), Y(S(a)), amber)
    d.text((X(a) + 10 * SC, Y(S(a)) + 8 * SC), f"{S(a):.1f}", font=fm, fill=amber, anchor="lt")
d.text((X(4), Y(160)), "S = 5 A^0.3: ten times the area,", font=fm, fill=ink, anchor="lm")
d.text((X(4), Y(160) + 26 * SC), "about twice the species", font=fm, fill=ink, anchor="lm")
save(im, "species-area.png", h)

# Population ecology Closer Look: logistic surplus production and fixed quotas.
r, K = 0.4, 1_000_000
g = lambda n: r * n * (1 - n / K)
for n, v in [(100_000, 36_000), (250_000, 75_000), (500_000, 100_000), (750_000, 75_000), (900_000, 36_000)]:
    assert round(g(n)) == v
assert r * K / 4 == 100_000 and g(400_000) < 100_000
roots = sorted((K + s * math.sqrt(K * K - 4 * K * 80_000 / r)) / 2 for s in (-1, 1))
assert round(roots[0], -3) == 276_000 and round(roots[1], -3) == 724_000
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda n: (L + (R - L) * n / K) * SC
Y = lambda v: (B - (B - T) * v / 120_000) * SC
for n in range(0, K + 1, 250_000):
    d.line([(X(n), T * SC), (X(n), B * SC)], fill=rule, width=SC)
    d.text((X(n), (B + 18) * SC), f"{n // 1000:,}k", font=fm, fill=soft, anchor="mt")
for v in range(0, 120_001, 20_000):
    d.line([(L * SC, Y(v)), (R * SC, Y(v))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(v)), f"{v // 1000}k", font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "stock, tonnes", "tonnes per year")
d.line([(X(n), Y(g(n))) for n in range(0, K + 1, 5000)], fill=blue, width=4 * SC)
d.line([(X(0), Y(100_000)), (X(K), Y(100_000))], fill=amber, width=2 * SC)
d.text((X(0.99 * K), Y(100_000) - 8 * SC), "quota 100k = MSY: any dip below 500k collapses", font=fs, fill=amber, anchor="rb")
d.line([(X(0), Y(80_000)), (X(K), Y(80_000))], fill=green, width=2 * SC)
for n in roots:
    dot(d, X(n), Y(80_000), green)
d.text((X(roots[0]) - 10 * SC, Y(80_000) - 8 * SC), "276k: unstable", font=fs, fill=green, anchor="rb")
d.text((X(roots[1]) + 10 * SC, Y(80_000) - 8 * SC), "724k: stable", font=fs, fill=green, anchor="lb")
d.text((X(0.5 * K), Y(40_000)), "growth of the stock, rN(1 − N/K)", font=fm, fill=blue, anchor="mm")
save(im, "fish-quota.png", h)

# Community ecology Closer Look: Lotka-Volterra competition, coexistence and exclusion.
K1, K2, a12 = 100, 80, 0.5
def eq(a21):
    return (K1 - a12 * K2) / (1 - a12 * a21), (K2 - a21 * K1) / (1 - a12 * a21)
n1, n2 = eq(0.6)
assert round(n1, 1) == 85.7 and round(n2, 1) == 28.6 and round(eq(0.9)[1]) == -18
assert a12 < K1 / K2 and 0.6 < K2 / K1 and not 0.9 < K2 / K1
def run(a21, r1=0.5, r2=0.5, steps=8000, dt=0.01):
    N1, N2, out = 10.0, 10.0, []
    for k in range(steps):
        if k % 20 == 0:
            out.append((k * dt, N1, N2))
        d1 = r1 * N1 * (1 - (N1 + a12 * N2) / K1); d2 = r2 * N2 * (1 - (N2 + a21 * N1) / K2)
        N1, N2 = N1 + d1 * dt, N2 + d2 * dt
    return out
co, ex = run(0.6), run(0.9, steps=30000)
assert abs(co[-1][1] - n1) < 0.5 and abs(co[-1][2] - n2) < 0.5 and ex[-1][2] < 1 and abs(ex[-1][1] - K1) < 1
h = 380
im, d = canvas(h)
for p, (traj, title, tmax) in enumerate([(co, "α₂₁ = 0.6: both persist", 80), (ex, "α₂₁ = 0.9: species 2 is excluded", 300)]):
    L, R, T, B = 70 + 430 * p, 420 + 430 * p, 50, 300
    X = lambda t: (L + (R - L) * t / tmax) * SC
    Y = lambda n: (B - (B - T) * n / 110) * SC
    for n in (0, 50, 100):
        d.line([(L * SC, Y(n)), (R * SC, Y(n))], fill=rule, width=SC)
        d.text(((L - 8) * SC, Y(n)), f"{n}", font=fs, fill=soft, anchor="rm")
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(X(t), Y(a)) for t, a, b in traj if t <= tmax], fill=blue, width=3 * SC)
    d.line([(X(t), Y(b)) for t, a, b in traj if t <= tmax], fill=amber, width=3 * SC)
    d.text((((L + R) / 2) * SC, 26 * SC), title, font=fi, fill=ink, anchor="mm")
    d.text((X(tmax), Y(traj[-1][1] if tmax > 100 else n1) - 10 * SC), "species 1", font=fs, fill=blue, anchor="rb")
    d.text((X(tmax), Y(max(traj[-1][2], 0) if tmax > 100 else n2) - 10 * SC), "species 2", font=fs, fill=amber, anchor="rb")
    d.text((((L + R) / 2) * SC, (B + 14) * SC), "time", font=fs, fill=soft, anchor="mt")
d.text((W / 2 * SC, 350 * SC), "populations from ten each, K₁ = 100, K₂ = 80, α₁₂ = 0.5", font=fi, fill=ink, anchor="mm")
save(im, "competition.png", h)

# Ecosystem ecology Closer Look: a tenth passes up each level.
levels = [("plants", 10000), ("herbivores", 1000), ("first carnivores", 100), ("second carnivores", 10), ("third carnivores", 1)]
assert all(levels[i + 1][1] * 10 == levels[i][1] for i in range(4))
area = 3_650_000 / 10
assert abs(area / 1e6 - 0.365) < 1e-9 and 3_650_000 / 1 / 1e6 == 3.65
h = 340
im, d = canvas(h)
cx = W / 2
for i, (name, e) in enumerate(levels):
    y = 260 - 46 * i
    half = 30 + 58 * math.log10(e)
    d.rectangle([(cx - half) * SC, (y - 18) * SC, (cx + half) * SC, (y + 18) * SC], fill=green if i == 0 else (blue if i == 1 else amber))
    d.text(((cx - half - 14) * SC, y * SC), name, font=fi, fill=ink, anchor="rm")
    d.text(((cx + half + 14) * SC, y * SC), f"{e:,} kJ/m²", font=fm, fill=ink, anchor="lm")
d.text((W / 2 * SC, 314 * SC), "energy per square metre per year (bar width on a log scale)", font=fi, fill=ink, anchor="mm")
save(im, "energy-pyramid.png", h)

# Conservation biology Closer Look: heterozygosity lost to drift.
Ht = lambda ne, t: (1 - 1 / (2 * ne)) ** t
tab = {10: (0.599, 0.006), 50: (0.904, 0.366), 500: (0.990, 0.905), 5000: (0.999, 0.990)}
for ne, (a, b) in tab.items():
    assert round(Ht(ne, 10), 3) == a and round(Ht(ne, 100), 3) == b
assert 4 * 10 * 190 / 200 == 38 and round(3 / (1 / 1000 + 1 / 10 + 1 / 1000)) == 29
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda t: (L + (R - L) * t / 100) * SC
Y = lambda f: (B - (B - T) * f) * SC
for f in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(L * SC, Y(f)), (R * SC, Y(f))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(f)), f"{f:.0%}", font=fm, fill=soft, anchor="rm")
for t in range(0, 101, 20):
    d.text((X(t), (B + 18) * SC), f"{t}", font=fm, fill=soft, anchor="mt")
axes(d, L, R, T, B, "generations", "genetic variation remaining, H/H₀")
for ne, colour in [(10, amber), (50, (190, 120, 60)), (500, blue), (5000, green)]:
    d.line([(X(t), Y(Ht(ne, t))) for t in range(0, 101)], fill=colour, width=4 * SC)
    end = Ht(ne, 100)
    below = ne in (50, 500)
    d.text((X(100) - 6 * SC, Y(end) + (10 if below else -8) * SC), f"Ne = {ne:,}: {end:.0%}" if ne > 10 else f"Ne = 10: {end:.1%}", font=fm, fill=colour, anchor="rt" if below else "rb")
save(im, "heterozygosity.png", h)
