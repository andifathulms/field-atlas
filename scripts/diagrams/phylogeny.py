"""Draw the Tree of Life Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/phylogeny.py src/fonts <outdir>

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

# Systematics Closer Look: years to describe the rest at 18,000 species a year.
named, rate = 2_100_000, 18_000
years = lambda total: max(total - named, 0) / rate
assert round(years(8_700_000), -1) == 370 and round(years(100_000_000), -2) == 5400 and years(2_000_000) == 0
h = 300
im, d = canvas(h)
X = lambda y: (330 + 470 * y / 6000) * SC
for y in range(0, 6001, 1500):
    d.line([(X(y), 30 * SC), (X(y), 210 * SC)], fill=rule, width=SC)
    d.text((X(y), 220 * SC), f"{y:,}", font=fm, fill=soft, anchor="mt")
rows = [("2 million species", years(2_000_000), green, "nearly done"), ("8.7 million (Mora, 2011)", years(8_700_000), blue, "about 370 years"),
        ("100 million", years(100_000_000), amber, "about 5,400 years")]
for i, (lab, v, colour, text) in enumerate(rows):
    y = (60 + 58 * i) * SC
    d.text((310 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 16 * SC, max(X(v), X(0) + 3 * SC), y + 16 * SC], fill=colour)
    d.text((max(X(v), X(0) + 3 * SC) + 8 * SC, y), text, font=fm, fill=ink, anchor="lm") if v < 4000 else \
        d.text((X(v) - 8 * SC, y), text, font=fm, fill="white", anchor="rm")
d.text((W / 2 * SC, 268 * SC), "years to name the rest of the eukaryotes at today's 18,000 a year", font=fi, fill=ink, anchor="mm")
save(im, "catalogue-years.png", h)

# Phylogenetics Closer Look: Fitch parsimony on the eight-site alignment, for the three trees.
sites = ["GGAA", "CCTT", "TTGG", "ACAC", "GTGT", "ATTA", "CCCC", "GGGA"]
def fitch(tree, site):
    (a, b), (c, e) = tree
    idx = {"A": 0, "B": 1, "C": 2, "D": 3}
    cost = 0
    def join(x, y):
        nonlocal cost
        if x & y:
            return x & y
        cost += 1
        return x | y
    left = join({site[idx[a]]}, {site[idx[b]]})
    right = join({site[idx[c]]}, {site[idx[e]]})
    join(left, right)
    return cost
trees = [(("A", "B"), ("C", "D")), (("A", "C"), ("B", "D")), (("A", "D"), ("B", "C"))]
scores = [sum(fitch(t, s) for s in sites) for t in trees]
assert scores == [10, 11, 12]
dfact = lambda n: math.prod(range(2 * n - 5, 0, -2))
assert [dfact(n) for n in (4, 10)] == [3, 2_027_025] and f"{dfact(20):.1e}" == "2.2e+20" and f"{dfact(50):.1e}" == "2.8e+74"
h = 330
im, d = canvas(h)
for i, (t, s) in enumerate(zip(trees, scores)):
    cx, cy = 150 + 300 * i, 140
    (a, b), (c, e) = t
    best = s == min(scores)
    col = blue if best else soft
    lx, rx = cx - 40, cx + 40
    d.line([(lx * SC, cy * SC), (rx * SC, cy * SC)], fill=col, width=4 * SC)
    for (nx, ny, name) in [(lx - 70, cy - 60, a), (lx - 70, cy + 60, b), (rx + 70, cy - 60, c), (rx + 70, cy + 60, e)]:
        d.line([((lx if nx < cx else rx) * SC, cy * SC), (nx * SC, ny * SC)], fill=col, width=4 * SC)
        d.text(((nx + (-16 if nx < cx else 16)) * SC, ny * SC), name, font=fi, fill=ink, anchor="mm")
    d.text((cx * SC, 250 * SC), f"({a}{b})({c}{e}): {s} steps", font=fm, fill=blue if best else ink, anchor="mm")
d.text((W / 2 * SC, 300 * SC), "the three unrooted trees for four species, scored on the eight sites", font=fi, fill=ink, anchor="mm")
save(im, "three-trees.png", h)

# Phylogenetics Closer Look: Jukes-Cantor correction.
jc = lambda p: -0.75 * math.log(1 - 4 * p / 3)
assert round(jc(0.05), 3) == 0.052 and round(jc(0.3), 2) == 0.38
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda p: (L + (R - L) * p / 0.75) * SC
Y = lambda v: (B - (B - T) * v / 2.0) * SC
for p in [0, 0.15, 0.3, 0.45, 0.6, 0.75]:
    d.line([(X(p), T * SC), (X(p), B * SC)], fill=rule, width=SC)
    d.text((X(p), (B + 18) * SC), f"{p:.2f}", font=fm, fill=soft, anchor="mt")
for v in [0, 0.5, 1.0, 1.5, 2.0]:
    d.line([(L * SC, Y(v)), (R * SC, Y(v))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(v)), f"{v:.1f}", font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "fraction of sites that differ, p", "substitutions per site, d")
d.line([(X(0), Y(0)), (X(0.75), Y(0.75))], fill=soft, width=2 * SC)
d.text((X(0.45), Y(0.45) + 12 * SC), "d = p: if every change were visible", font=fs, fill=soft, anchor="lt")
d.line([(X(p / 1000), Y(jc(p / 1000))) for p in range(0, 735) if jc(p / 1000) <= 2.0], fill=blue, width=4 * SC)
for p in (0.05, 0.3):
    dot(d, X(p), Y(jc(p)), amber)
    if p < 0.1:
        d.line([(X(0.04), Y(0.68)), (X(p), Y(jc(p)))], fill=amber, width=SC)
        d.text((X(0.01), Y(0.72)), f"p = {p}: d = {jc(p):.3f}", font=fm, fill=amber, anchor="lb")
    else:
        d.text((X(p) + 10 * SC, Y(jc(p)) - 10 * SC), f"p = {p}: d = {jc(p):.2f}", font=fm, fill=amber, anchor="rb")
d.text((X(0.6), Y(1.85)), "saturates as p nears 3/4", font=fm, fill=blue, anchor="rm")
save(im, "jukes-cantor.png", h)

# Macroevolution Closer Look: the horse trend against a measured guppy rate, in darwins.
horse = math.log(500 / 25) / 55
guppy = 45_000
assert round(horse, 3) == 0.054 and round(guppy / 0.054, -5) == 8e5 and round(math.log(20) / guppy * 1e6) == 67
h = 280
im, d = canvas(h)
X = lambda lg: (330 + 470 * (lg + 2) / 7) * SC
for lg in range(-2, 6):
    d.line([(X(lg), 30 * SC), (X(lg), 170 * SC)], fill=rule, width=SC)
    if lg % 2 == 0:
        d.text((X(lg), 180 * SC), f"{10 ** lg:g}" if lg < 4 else f"{10 ** lg:,}", font=fm, fill=soft, anchor="mt")
for i, (lab, v, colour, text) in enumerate([("horses over 55 million years", horse, blue, "0.054"), ("guppies over 11 years", guppy, amber, "45,000")]):
    y = (65 + 60 * i) * SC
    d.text((310 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(-2), y - 16 * SC, X(math.log10(v)), y + 16 * SC], fill=colour)
    d.text((X(math.log10(v)) + 8 * SC, y), text, font=fm, fill=ink, anchor="lm") if v < 1000 else d.text((X(math.log10(v)) - 8 * SC, y), text, font=fm, fill="white", anchor="rm")
d.text((W / 2 * SC, 238 * SC), "rate of change in darwins (log scale): nearly a million times apart", font=fi, fill=ink, anchor="mm")
save(im, "darwins.png", h)

# Microbial phylogenomics Closer Look: chance of detecting a taxon at abundance f in n reads.
P = lambda f, n: 1 - (1 - f) ** n
assert round(P(0.01, 100), 2) == 0.63 and round(P(0.001, 100), 3) == 0.095 and round(P(1e-4, 1e5), 5) == 0.99995
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda lg: (L + (R - L) * (lg + 6) / 6) * SC
Y = lambda p: (B - (B - T) * p) * SC
for lg in range(-6, 1):
    d.line([(X(lg), T * SC), (X(lg), B * SC)], fill=rule, width=SC)
    d.text((X(lg), (B + 18) * SC), {0: "100%", -1: "10%", -2: "1%", -3: "0.1%", -4: "0.01%", -5: "0.001%", -6: "0.0001%"}[lg], font=fm, fill=soft, anchor="mt")
for p in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(L * SC, Y(p)), (R * SC, Y(p))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(p)), f"{p:.0%}", font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "abundance of the taxon in the sample (log scale)", "chance of seeing it at least once")
for n, colour, lab in [(100, amber, "100 clones (Sanger era)"), (100_000, blue, "100,000 reads (amplicon sequencing)")]:
    d.line([(X(k / 100), Y(P(10 ** (k / 100), n))) for k in range(-600, 1)], fill=colour, width=4 * SC)
for f, n, colour in [(0.001, 100, amber), (0.01, 100, amber), (1e-4, 1e5, blue)]:
    dot(d, X(math.log10(f)), Y(P(f, n)), colour)
d.text((X(-3) - 12 * SC, Y(P(0.001, 100)) - 6 * SC), "0.1%: seen 1 time in 10", font=fm, fill=amber, anchor="rb")
d.text((X(-2) + 12 * SC, Y(P(0.01, 100)) + 4 * SC), "1%: 63%", font=fm, fill=amber, anchor="lt")
d.text((X(-3.85), Y(0.93)), "0.01%: 99.995%", font=fm, fill=blue, anchor="lt")
d.text((X(-1.2), Y(0.4)), "100 clones", font=fm, fill=amber, anchor="lm")
d.text((X(-3.85), Y(0.78)), "100,000 reads", font=fm, fill=blue, anchor="lm")
save(im, "detection.png", h)
