"""Draw the chemistry Analysis Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/analysis.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue = (164, 84, 29), (44, 59, 128)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 22 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)
fe = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 12 * SC)
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
    d.text((((L + R) / 2) * SC, (B + 52) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

# Chemical analysis Closer Look: Poisson sampling error for an ore with 1% mineral grains.
rho = 2.7
grain = lambda mm: rho * (mm / 10) ** 3          # grams per grain, diameter in mm
rsd = lambda mass, mm: 1 / math.sqrt(0.01 * mass / grain(mm))
assert round(1 / grain(1)) == 370 and abs(0.01 / grain(1) - 3.7) < 0.01 and round(100 * rsd(1, 1)) == 52
need = lambda mm: 1e6 * grain(mm)                 # grams for 1% RSD: 10^4 analyte grains in 10^6
assert round(need(1)) == 2700 and round(need(0.1), 1) == 2.7
h = 500; L, R, T, B = 110, 860, 40, 420
im, d = canvas(h)
X = lambda m: (L + (R - L) * (math.log10(m) + 2) / 6) * SC
Y = lambda r: (B - (B - T) * (math.log10(r) + 1) / 4) * SC
for m, lab in [(0.01, "10 mg"), (0.1, "100 mg"), (1, "1 g"), (10, "10 g"), (100, "100 g"), (1000, "1 kg"), (10000, "10 kg")]:
    d.line([(X(m), T * SC), (X(m), B * SC)], fill=rule, width=SC)
    d.text((X(m), (B + 18) * SC), lab, font=fm, fill=soft, anchor="mt")
for r, lab in [(0.1, "0.1%"), (1, "1%"), (10, "10%"), (100, "100%"), (1000, "")]:
    d.line([(L * SC, Y(r)), (R * SC, Y(r))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(r)), lab, font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "mass of sample", "relative standard deviation from sampling alone")
for mm, colour, lab in [(1, amber, "grains 1 mm across"), (0.1, blue, "crushed to 0.1 mm")]:
    pts = [(10 ** (e / 100), rsd(10 ** (e / 100), mm)) for e in range(-200, 401)]
    d.line([(X(m), Y(100 * r)) for m, r in pts if 0.1 <= 100 * r <= 1000], fill=colour, width=4 * SC)
    dot(d, X(need(mm)), Y(1), colour)
    m0 = 25 if mm == 1 else 0.04
    d.text((X(m0) + 8 * SC, Y(100 * rsd(m0, mm)) - 10 * SC), lab, font=fm, fill=colour, anchor="lb")
dot(d, X(1), Y(100 * rsd(1, 1)), amber)
d.text((X(1) + 12 * SC, Y(100 * rsd(1, 1)) - 4 * SC), "1 g: 52%", font=fm, fill=amber, anchor="lb")
d.text((X(need(1)) - 12 * SC, Y(1) + 10 * SC), "2.7 kg for 1%", font=fm, fill=amber, anchor="rt")
d.text((X(need(0.1)) - 12 * SC, Y(1) + 10 * SC), "2.7 g for 1%", font=fm, fill=blue, anchor="rt")
save(im, "sampling-error.png", h)

# Chromatography Closer Look: plates needed for a resolution of 1, against the selectivity alpha.
plates = lambda a: (4 * a / (a - 1)) ** 2
assert round(math.sqrt(plates(1.05))) == 84 and round(plates(1.05), -2) == 7100
assert round(math.sqrt(plates(1.01))) == 404 and round(plates(1.01), -3) == 163000
h = 500; L, R, T, B = 130, 860, 40, 420
im, d = canvas(h)
X = lambda a: (L + (R - L) * (math.log10(a - 1) + 2.5) / 2) * SC
Y = lambda n: (B - (B - T) * (math.log10(n) - 2) / 5) * SC
for a in [1.005, 1.01, 1.02, 1.05, 1.1, 1.2, 1.3]:
    d.line([(X(a), T * SC), (X(a), B * SC)], fill=rule, width=SC)
    d.text((X(a), (B + 18) * SC), f"{a:g}", font=fm, fill=soft, anchor="mt")
for n, lab in [(100, "100"), (1000, "1,000"), (10000, "10,000"), (100000, "100,000"), (1000000, "1,000,000"), (10000000, "")]:
    d.line([(L * SC, Y(n)), (R * SC, Y(n))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(n)), lab, font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "selectivity α, the ratio of the two affinities", "theoretical plates needed for R = 1")
d.line([(X(1 + 10 ** (e / 100)), Y(plates(1 + 10 ** (e / 100)))) for e in range(-250, -49)], fill=blue, width=4 * SC)
for a, lab in [(1.05, "5% apart: 7,100 plates"), (1.01, "1% apart: 163,000 plates")]:
    dot(d, X(a), Y(plates(a)), amber)
    d.text((X(a) + 14 * SC, Y(plates(a)) - 4 * SC), lab, font=fm, fill=amber, anchor="lb")
save(im, "plates-needed.png", h)

# Spectroscopic structure determination Closer Look: ethanol's proton spectrum, and NMR's weak signal.
def pascal(n):
    return [math.comb(n, k) for k in range(n + 1)]
groups = [("CH₃", 1.2, 3, 2), ("CH₂", 3.7, 2, 3), ("OH", 2.6, 1, 0)]  # label, ppm, protons, neighbours
assert [len(pascal(nb)) for _, _, _, nb in groups] == [3, 4, 1] and pascal(3) == [1, 3, 3, 1]
pop = (6.626e-34 * 4.0e8) / (1.381e-23 * 298) / 2
assert round(pop * 1e5, 1) == 3.2 and round(1 / pop, -3) == 31000
h = 420; L, R, B = 60, 860, 330
im, d = canvas(h)
X = lambda ppm: (R - (R - L) * ppm / 5) * SC
spread = 0.09  # ppm between drawn lines; the real 7 Hz spacing at 400 MHz is 0.018 ppm
top = 250
for ppm in range(0, 6):
    d.text((X(ppm), (B + 14) * SC), f"{ppm}", font=fm, fill=soft, anchor="mt")
    d.line([(X(ppm), (B) * SC), (X(ppm), (B + 6) * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
for label, ppm, n_h, nb in groups:
    tri = pascal(nb)
    for k, w in enumerate(tri):
        x = X(ppm + (k - nb / 2) * spread)
        hgt = 1.2 * top / 3 * n_h * w / sum(tri)  # line heights sum to the group's proton count
        d.line([(x, B * SC), (x, B * SC - hgt * SC)], fill=blue if nb else amber, width=3 * SC)
    mult = {0: "singlet", 2: "triplet", 3: "quartet"}[nb]
    peak = max(1.2 * top / 3 * n_h * w / sum(tri) for w in tri)
    d.text((X(ppm), (B - peak - 34) * SC), label, font=fi, fill=ink, anchor="mb")
    d.text((X(ppm), (B - peak - 12) * SC), f"{ppm} ppm, {n_h}H, {mult}", font=fe, fill=soft, anchor="mb")
d.text((W / 2 * SC, (B + 52) * SC), "chemical shift, ppm (increasing to the left)", font=fi, fill=ink, anchor="mt")
d.text((L * SC, 16 * SC), "line heights in each group sum to its protons, 3 : 2 : 1; spacing exaggerated fivefold; OH moves between 2 and 5", font=fe, fill=soft, anchor="lt")
save(im, "ethanol-nmr.png", h)

# Mass spectrometry Closer Look: CO and N2 at nominal mass 28.
m_co, m_n2 = 12.0 + 15.99491, 2 * 14.00307
dm = m_n2 - m_co
assert round(dm, 5) == 0.01123 and round(dm / 28 * 1e6, -1) == 400 and round(28 / dm, -2) == 2500
h = 330
im, d = canvas(h)
panels = [(1000, "resolving power 1,000"), (2500, "2,500"), (10000, "10,000")]
for i, (rp, lab) in enumerate(panels):
    x0, x1 = 40 + 290 * i, 290 + 290 * i
    base, peak = 240, 150
    fwhm = 28 / rp
    s = fwhm / (2 * math.sqrt(2 * math.log(2)))
    lo, hi = 27.97, 28.03
    X = lambda m: (x0 + (x1 - x0) * (m - lo) / (hi - lo)) * SC
    g = lambda m, c: math.exp(-((m - c) ** 2) / (2 * s * s))
    ys = [(lo + (hi - lo) * k / 600) for k in range(601)]
    tot = [g(m, m_co) + g(m, m_n2) for m in ys]
    top_ = max(tot)
    d.line([(X(m), (base - peak * t / top_) * SC) for m, t in zip(ys, tot)], fill=blue, width=3 * SC)
    d.line([(x0 * SC, base * SC), (x1 * SC, base * SC)], fill=ink, width=2 * SC)
    for c, name in [(m_co, "CO"), (m_n2, "N₂")]:
        d.line([(X(c), (base) * SC), (X(c), (base + 8) * SC)], fill=ink, width=2 * SC)
        d.text((X(c), (base + 14) * SC), name, font=fi, fill=amber, anchor="mt")
    d.text((((x0 + x1) / 2) * SC, 40 * SC), lab, font=fm, fill=ink, anchor="mt")
d.text((W / 2 * SC, 300 * SC), f"CO at {m_co:.5f}, N₂ at {m_n2:.5f}: {dm:.5f} apart", font=fm, fill=soft, anchor="mm")
save(im, "co-n2.png", h)

# Surface analysis Closer Look: area per gram, and the fraction of atoms at the surface.
d15 = 6 / (2000 * 2e5)
frac = lambda dnm: 6 * 0.25 / dnm
mol = 200 / 0.162e-18 / 6.022e23
assert round(d15 * 1e9) == 15 and round(frac(15), 2) == 0.10 and round(frac(2), 2) == 0.75
assert round(mol * 1e3, 2) == 2.05 and round(mol * 22414) == 46
h = 500; L, R, T, B = 110, 860, 40, 420
im, d = canvas(h)
X = lambda dn: (L + (R - L) * (math.log10(dn) - 0) / 3) * SC
Y = lambda f: (B - (B - T) * f / 1.0) * SC
for dn in [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]:
    d.line([(X(dn), T * SC), (X(dn), B * SC)], fill=rule, width=SC)
    d.text((X(dn), (B + 18) * SC), f"{dn:g}", font=fm, fill=soft, anchor="mt")
for f in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(L * SC, Y(f)), (R * SC, Y(f))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(f)), f"{f:.0%}", font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "particle diameter, nm (log scale)", "fraction of atoms in the outermost layer, about 6a/d")
d.line([(X(10 ** (e / 100)), Y(frac(10 ** (e / 100)))) for e in range(18, 301)], fill=blue, width=4 * SC)
for dn, lab, anc in [(2, "platinum at 2 nm: three quarters", "lb"), (15, "15 nm, 200 m²/g silica: 10%", "lb")]:
    dot(d, X(dn), Y(frac(dn)), amber)
    d.text((X(dn) + 12 * SC, Y(frac(dn)) - 6 * SC), lab, font=fm, fill=amber, anchor=anc)
save(im, "surface-fraction.png", h)
