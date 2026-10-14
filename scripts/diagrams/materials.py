"""Draw the Materials Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/materials.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule, pale = (28, 26, 23), (112, 104, 92), (217, 208, 191), (238, 230, 214)
amber, blue = (164, 84, 29), (44, 59, 128)
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

def dot(d, x, y, colour, r=7, outline=None):
    d.ellipse([x - r * SC, y - r * SC, x + r * SC, y + r * SC], fill=colour, outline=outline, width=SC)

def power(d, x, y, text, e, colour, anchor):
    w = d.textlength(text, font=fm) + d.textlength(str(e), font=fs) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x
    d.text((x0, y), text, font=fm, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=fm, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=fm) + 1 * SC, top - 3 * SC), str(e), font=fs, fill=colour, anchor="lt")

# Solid-state chemistry Closer Look: Goldschmidt's tolerance factor for three titanates.
r_ti, r_o = 0.605, 1.40
t = lambda r_a: (r_a + r_o) / (math.sqrt(2) * (r_ti + r_o))
tis = [("CaTiO₃", 1.34, "orthorhombic: octahedra tilt"), ("SrTiO₃", 1.44, "cubic: fits exactly"), ("BaTiO₃", 1.61, "tetragonal, ferroelectric")]
assert [round(t(r), 3) for _, r, _ in tis] == [0.966, 1.002, 1.062]
h = 300
im, d = canvas(h)
X = lambda v: (60 + 780 * (v - 0.9) / 0.2) * SC
d.rectangle([X(0.985), 60 * SC, X(1.015), 200 * SC], fill=pale)
for v in [0.90, 0.95, 1.00, 1.05, 1.10]:
    d.line([(X(v), (182 if v == 1 else 60) * SC), (X(v), 200 * SC)], fill=rule if v != 1 else ink, width=SC if v != 1 else 2 * SC)
    d.text((X(v), 212 * SC), f"{v:.2f}", font=fm, fill=soft, anchor="mt")
d.line([(X(0.9), 200 * SC), (X(1.1), 200 * SC)], fill=ink, width=2 * SC)
for i, (name, r_a, sym) in enumerate(tis):
    v = t(r_a); y = 90 + 46 * i
    dot(d, X(v), 200 * SC, amber if i != 1 else blue, 9)
    d.line([(X(v), (y + 12) * SC), (X(v), 191 * SC)], fill=rule, width=SC)
    d.text((X(v), y * SC), f"{name}  t = {v:.3f}", font=fm, fill=ink, anchor="mm")
    d.text((X(v), (y + 20) * SC) if False else (X(v), (y - 22) * SC), sym, font=fs, fill=soft, anchor="mm")
d.text((X(0.91), 50 * SC), "A ion too small", font=fs, fill=soft, anchor="lm")
d.text((X(1.09), 50 * SC), "A ion too large", font=fs, fill=soft, anchor="rm")
d.text((W / 2 * SC, 262 * SC), "tolerance factor t = (rA + rO) / √2 (rB + rO)", font=fi, fill=ink, anchor="mm")
save(im, "tolerance-factor.png", h)

# Defect chemistry: the two neutral defects of an ionic crystal, drawn on a square lattice.
h = 360
im, d = canvas(h)
def lattice(ox, title, holes, extra):
    s = 46
    for i in range(7):
        for j in range(6):
            x, y = (ox + i * s) * SC, (70 + j * s) * SC
            if (i, j) in holes:
                d.rectangle([x - 15 * SC, y - 15 * SC, x + 15 * SC, y + 15 * SC], outline=amber, width=2 * SC)
                continue
            if (i + j) % 2:
                dot(d, x, y, blue, 11)
            else:
                dot(d, x, y, (255, 255, 255), 17, outline=ink)
    for (i, j, k) in extra:
        x, y = (ox + i * s) * SC, (70 + j * s) * SC
        dot(d, x, y, blue, 11, outline=amber)
    d.text(((ox + 3 * s) * SC, 30 * SC), title, font=fi, fill=ink, anchor="mm")
lattice(60, "Schottky: a cation and an anion missing", {(2, 2), (4, 3)}, [])
lattice(500, "Frenkel: a cation moved between sites", {(3, 2)}, [(3.5, 2.5, 0)])
d.text((W / 2 * SC, 340 * SC), "large rings: anions   small dots: cations   squares: vacancies", font=fs, fill=soft, anchor="mm")
save(im, "schottky-frenkel.png", h)

# Defect chemistry Closer Look: vacancies per cubic centimetre in NaCl, three ways.
dH, sites = 2.3, 2.2e22
frac = lambda kt: math.exp(-dH / (2 * kt))
cold, hot, doped = frac(0.0259) * sites, frac(0.0862) * sites, 1e-3 * sites
assert 500 < cold < 2000 and abs(hot / 3.5e16 - 1) < 0.05 and doped == 2.2e19
assert round(doped / hot, -2) == 600
h = 300
im, d = canvas(h)
X = lambda lg: (300 + 540 * lg / 20) * SC
for lg in range(0, 21, 5):
    d.line([(X(lg), 30 * SC), (X(lg), 210 * SC)], fill=rule, width=SC)
    power(d, X(lg) - 10 * SC, 222 * SC, "10", lg, soft, "lt")
rows = [("thermal, 300 K", cold, soft), ("thermal, 1,000 K", hot, amber), ("0.1% calcium, any temperature", doped, blue)]
for i, (lab, v, colour) in enumerate(rows):
    y = (60 + 62 * i) * SC
    d.text((282 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 16 * SC, X(math.log10(v)), y + 16 * SC], fill=colour)
d.text((X(math.log10(cold)) + 10 * SC, (60 + 62 * 0) * SC), "about a thousand", font=fm, fill=soft, anchor="lm")
d.text((W / 2 * SC, 272 * SC), "sodium vacancies per cubic centimetre of salt", font=fi, fill=ink, anchor="mm")
save(im, "vacancies.png", h)

# Polymer synthesis Closer Look: Carothers's equation, and the cap set by an imbalance.
dp = lambda p: 1 / (1 - p)
cap = lambda r: (1 + r) / (1 - r)
for p, v in [(0.5, 2), (0.9, 10), (0.99, 100), (0.999, 1000), (0.9999, 10000)]:
    assert round(dp(p)) == v
assert [round(cap(r)) for r in (0.909, 0.990, 0.999)] == [21, 199, 1999]
h = 500; L, R, T, B = 110, 860, 40, 420
im, d = canvas(h)
X = lambda lg: (L + (R - L) * lg / 4) * SC          # x is -log10(1 - p)
Y = lambda v: (B - (B - T) * math.log10(v) / 4) * SC
for lg, lab in [(0, "0"), (1, "0.9"), (2, "0.99"), (3, "0.999"), (4, "0.9999")]:
    d.line([(X(lg), T * SC), (X(lg), B * SC)], fill=rule, width=SC)
    d.text((X(lg), (B + 18) * SC), lab, font=fm, fill=soft, anchor="mt")
for v in [1, 10, 100, 1000, 10000]:
    d.line([(L * SC, Y(v)), (R * SC, Y(v))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(v)), f"{v:,}", font=fm, fill=soft, anchor="rm")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
d.text((((L + R) / 2) * SC, (B + 52) * SC), "fraction of groups reacted, p", font=fi, fill=ink, anchor="mt")
d.text(((L - 12) * SC, (T - 14) * SC), "average chain length, units", font=fm, fill=soft, anchor="ls")
d.line([(X(k / 100), Y(dp(1 - 10 ** (-k / 100)))) for k in range(0, 401)], fill=blue, width=4 * SC)
r1 = 0.99
d.line([(X(k / 100), Y(min(dp(1 - 10 ** (-k / 100)), cap(r1)))) for k in range(0, 401)], fill=amber, width=3 * SC)
d.text((X(2.5), Y(cap(r1)) + 12 * SC), "1% too much of one monomer:", font=fm, fill=amber, anchor="lt")
d.text((X(2.5), Y(cap(r1)) + 36 * SC), "stuck at 199 units", font=fm, fill=amber, anchor="lt")
d.text((X(3.9), Y(8000) - 6 * SC), "exact balance", font=fm, fill=blue, anchor="rb")
dot(d, X(1), Y(10), ink); d.text((X(1) + 12 * SC, Y(10) + 4 * SC), "90%: ten units, a powder", font=fm, fill=ink, anchor="lt")
save(im, "chain-length.png", h)

# Porous frameworks Closer Look: MOF-5's density, and internal areas against graphene.
bdc = 8 * 12.011 + 4 * 1.008 + 4 * 15.999   # C8H4O4, 164.12; the prose shows it as 164.1
mass = 4 * 65.38 + 16.00 + 3 * bdc
rho = 8 * mass / 6.022e23 / (25.9e-8) ** 3
assert round(mass, 1) == 769.9 and round(rho, 2) == 0.59
areas = [("zeolite Y", 900), ("MCM-41 silica", 1000), ("graphene, both faces", 2630), ("MOF-5", 3800), ("NU-110", 7100)]
assert 105 * 68 == 7140
h = 380
im, d = canvas(h)
X = lambda v: (270 + 560 * v / 8000) * SC
for v in range(0, 8001, 2000):
    d.line([(X(v), 20 * SC), (X(v), 320 * SC)], fill=rule, width=SC)
    d.text((X(v), 330 * SC), f"{v:,}", font=fm, fill=soft, anchor="mt")
for i, (lab, v) in enumerate(areas):
    y = (46 + 58 * i) * SC
    colour = soft if "graphene" in lab else blue
    d.text((252 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 16 * SC, X(v), y + 16 * SC], fill=colour)
    d.text((X(v) + 8 * SC, y), f"{v:,}", font=fm, fill=ink, anchor="lm")
d.line([(X(2630), 20 * SC), (X(2630), 320 * SC)], fill=amber, width=2 * SC)
d.text((X(7100) - 8 * SC, (46 + 58 * 4) * SC), "one gram ≈ a football pitch", font=fs, fill="white", anchor="rm")
d.text((W / 2 * SC, 362 * SC), "internal surface, m² per gram", font=fi, fill=ink, anchor="mm")
save(im, "surface-areas.png", h)
