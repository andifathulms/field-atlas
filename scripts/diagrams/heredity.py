"""Draw the Heredity Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/heredity.py src/fonts <outdir>

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
fb = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 34 * SC)
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

def power(d, x, y, text, e, colour, anchor):
    es = str(e).replace("-", "−")
    w = d.textlength(text, font=fm) + d.textlength(es, font=fs) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x
    d.text((x0, y), text, font=fm, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=fm, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=fm) + 1 * SC, top - 3 * SC), es, font=fs, fill=colour, anchor="lt")

def axes(d, L, R, T, B, xlab, ylab):
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 50) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

# Evolutionary biology Closer Look: Nilsson and Pelger's eye, against the Cambrian.
steps = 1829
change = 1.01 ** steps
gens = steps * math.log(1.01) / math.log(1.00005)
assert abs(change / 8e7 - 1) < 0.05 and round(gens, -3) == 364000
cambrian = 20e6
assert round(cambrian / gens) == 55
h = 280
im, d = canvas(h)
X = lambda y: (60 + 780 * y / 20e6) * SC
for y in range(0, 20_000_001, 5_000_000):
    d.line([(X(y), 50 * SC), (X(y), 180 * SC)], fill=rule, width=SC)
    d.text((X(y), 192 * SC), f"{y / 1e6:g} million", font=fm, fill=soft, anchor="mt")
d.rectangle([X(0), 120 * SC, X(cambrian), 160 * SC], fill=pale)
d.text((X(cambrian) - 10 * SC, 140 * SC), "the Cambrian explosion, about 20 million years", font=fm, fill=ink, anchor="rm")
for k in range(int(cambrian // gens)):
    x0 = X(k * gens)
    d.rectangle([x0 + 1 * SC, 72 * SC, X((k + 1) * gens) - 1 * SC, 102 * SC], fill=blue if k == 0 else (150, 160, 200))
d.text((X(0), 50 * SC), f"one camera eye from a flat patch: about {round(gens, -3):,.0f} years; {cambrian / gens:.0f} fit end to end", font=fm, fill=blue, anchor="lm")
d.text((W / 2 * SC, 250 * SC), "years, at one generation a year", font=fi, fill=ink, anchor="mm")
save(im, "eye-time.png", h)

# Genetics Closer Look: the Punnett square, and Mendel's counts.
counts = [("seed shape", 5474, 1850, "round", "wrinkled"), ("seed colour", 6022, 2001, "yellow", "green")]
assert [round(a / b, 2) for _, a, b, _, _ in counts] == [2.96, 3.01]
h = 360
im, d = canvas(h)
ox, oy, c = 90, 80, 100
d.text(((ox + c) * SC, (oy - 44) * SC), "pollen", font=fi, fill=soft, anchor="mm")
d.text(((ox - 50) * SC, (oy + c) * SC), "egg", font=fi, fill=soft, anchor="mm")
for i, a in enumerate("Rr"):
    d.text(((ox + c / 2 + i * c) * SC, (oy - 16) * SC), a, font=fb, fill=ink, anchor="mm")
    d.text(((ox - 18) * SC, (oy + c / 2 + i * c) * SC), a, font=fb, fill=ink, anchor="mm")
for i, a in enumerate("Rr"):
    for j, b in enumerate("Rr"):
        g = "".join(sorted(a + b))
        x0, y0 = (ox + j * c) * SC, (oy + i * c) * SC
        d.rectangle([x0, y0, x0 + c * SC, y0 + c * SC], fill=pale if g == "rr" else (255, 255, 255), outline=ink, width=2 * SC)
        d.text((x0 + c / 2 * SC, y0 + c / 2 * SC), g, font=fb, fill=amber if g == "rr" else blue, anchor="mm")
d.text(((ox - 60) * SC, (oy + 2 * c + 34) * SC), "1 RR : 2 Rr : 1 rr, so 3 round : 1 wrinkled", font=fm, fill=ink, anchor="lm")
X = lambda v: (470 + 330 * v / 7000) * SC
for i, (trait, dom, rec, dn, rn) in enumerate(counts):
    y = 90 + 120 * i
    d.text((470 * SC, (y - 34) * SC), f"Mendel's {trait}: {dom / rec:.2f} : 1", font=fm, fill=ink, anchor="lm")
    d.rectangle([X(0), (y - 14) * SC, X(dom), (y + 6) * SC], fill=blue)
    d.text((X(dom) + 6 * SC, (y - 4) * SC), f"{dom:,} {dn}", font=fs, fill=blue, anchor="lm")
    d.rectangle([X(0), (y + 12) * SC, X(rec), (y + 32) * SC], fill=amber)
    d.text((X(rec) + 6 * SC, (y + 22) * SC), f"{rec:,} {rn}", font=fs, fill=amber, anchor="lm")
save(im, "punnett.png", h)

# Genomics Closer Look: Lander and Waterman's fraction of bases never read.
genome = 3.1e9
table = {1: 0.37, 3: 0.05, 8: 0.0003}
for c_, f in table.items():
    assert abs(math.exp(-c_) / f - 1) < 0.15, (c_, math.exp(-c_))
assert round(genome * math.exp(-1) / 1e9, 1) == 1.1 and round(genome * math.exp(-3) / 1e6, -1) == 150 and round(genome * math.exp(-8) / 1e6) == 1
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda c_: (L + (R - L) * c_ / 30) * SC
Y = lambda lg: (B - (B - T) * (lg + 14) / 14) * SC
for lg in range(-14, 1, 2):
    d.line([(L * SC, Y(lg)), (R * SC, Y(lg))], fill=rule, width=SC)
    power(d, (L - 12) * SC, Y(lg), "10", lg, soft, "rm")
for c_ in range(0, 31, 5):
    d.text((X(c_), (B + 18) * SC), f"{c_}×", font=fm, fill=soft, anchor="mt")
axes(d, L, R, T, B, "coverage, c", "fraction of the genome never read, e^-c")
d.line([(X(k / 10), Y(-k / 10 / math.log(10))) for k in range(0, 301)], fill=blue, width=4 * SC)
for c_, lab in [(1, "1×: 37%, 1.1 billion bases"), (3, "3×: 5%"), (8, "8×: about a million bases"), (30, "30×: none, on average")]:
    x, y = X(c_), Y(-c_ / math.log(10))
    dot(d, x, y, amber)
    if c_ < 30:
        d.text((x + 12 * SC, y - 4 * SC), lab, font=fm, fill=amber, anchor="lb")
    else:
        d.text((x - 12 * SC, y - 10 * SC), lab, font=fm, fill=amber, anchor="rb")
save(im, "coverage.png", h)

# Population genetics Closer Look: cystic fibrosis carriers, and a 1% advantage spreading.
q = math.sqrt(1 / 2500); p = 1 - q
assert round(q, 2) == 0.02 and round(2 * p * q, 3) == 0.039
per = [("affected, two copies", q * q * 2500, amber), ("carriers, one copy", 2 * p * q * 2500, blue), ("no copy", p * p * 2500, soft)]
assert [round(v) for _, v, _ in per] == [1, 98, 2401]
h = 300
im, d = canvas(h)
X = lambda v: (300 + 520 * math.log10(v) / math.log10(3000)) * SC
for v in [1, 10, 100, 1000]:
    d.line([(X(v), 30 * SC), (X(v), 210 * SC)], fill=rule, width=SC)
    d.text((X(v), 220 * SC), f"{v:,}", font=fm, fill=soft, anchor="mt")
for i, (lab, v, colour) in enumerate(per):
    y = (60 + 60 * i) * SC
    d.text((282 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(1) - 4 * SC, y - 16 * SC, max(X(v), X(1) + 4 * SC), y + 16 * SC], fill=colour)
    d.text((max(X(v), X(1) + 4 * SC) + 8 * SC, y), f"{v:,.0f}", font=fm, fill=ink, anchor="lm")
d.text((W / 2 * SC, 268 * SC), "people in every 2,500, with the faulty allele at q = 0.02 (log scale)", font=fi, fill=ink, anchor="mm")
save(im, "carriers.png", h)

s = 0.01
t_sweep = math.log((0.99 / 0.01) / (0.01 / 0.99)) / s
assert round(t_sweep, -1) == 920
freq = lambda t: 1 / (1 + (0.99 / 0.01) * math.exp(-s * t))
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda t: (L + (R - L) * t / 1200) * SC
Y = lambda f: (B - (B - T) * f) * SC
for f in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(L * SC, Y(f)), (R * SC, Y(f))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(f)), f"{f:.0%}", font=fm, fill=soft, anchor="rm")
for t in range(0, 1201, 200):
    d.text((X(t), (B + 18) * SC), f"{t}", font=fm, fill=soft, anchor="mt")
axes(d, L, R, T, B, "generations", "frequency of the favoured allele")
d.line([(X(t), Y(freq(t))) for t in range(0, 1201, 2)], fill=blue, width=4 * SC)
d.line([(X(t_sweep), Y(0)), (X(t_sweep), Y(0.99))], fill=amber, width=2 * SC)
dot(d, X(0), Y(0.01), amber); dot(d, X(t_sweep), Y(0.99), amber)
d.text((X(20), Y(0.92)), f"a 1% advantage: from 1% to 99%", font=fm, fill=amber, anchor="lm")
d.text((X(20), Y(0.92) + 26 * SC), f"in about {round(t_sweep, -1):.0f} generations", font=fm, fill=amber, anchor="lm")
d.text((X(t_sweep) + 12 * SC, Y(0.2)), "humans: about 23,000 years", font=fs, fill=soft, anchor="lm")
d.text((X(t_sweep) + 12 * SC, Y(0.12)), "bacteria: under three weeks", font=fs, fill=soft, anchor="lm")
save(im, "selection-sweep.png", h)
