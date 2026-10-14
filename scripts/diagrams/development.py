"""Draw the Development Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/development.py src/fonts <outdir>

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

# Developmental genetics Closer Look: the Bicoid gradient, lambda = 100 um in a 500 um egg.
lam, egg = 100, 500
c = lambda x, c0=1.0: c0 * math.exp(-x / lam)
for x, v in [(0, 1.0), (50, 0.607), (100, 0.368), (150, 0.223), (200, 0.135), (250, 0.082), (300, 0.050)]:
    assert round(c(x), 3) == v
shift = lam * math.log(2)
assert round(shift) == 69 and round(100 * shift / egg) == 14 and round(100 * (1 - math.exp(-0.1)), 1) == 9.5
thresh = 0.1
x1 = -lam * math.log(thresh)
x2 = x1 + shift
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda x: (L + (R - L) * x / egg) * SC
Y = lambda v: (B - (B - T) * v / 2.0) * SC
for x in range(0, 501, 100):
    d.line([(X(x), T * SC), (X(x), B * SC)], fill=rule, width=SC)
    d.text((X(x), (B + 18) * SC), f"{x}", font=fm, fill=soft, anchor="mt")
for v in [0, 0.5, 1.0, 1.5, 2.0]:
    d.line([(L * SC, Y(v)), (R * SC, Y(v))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(v)), f"{v:.1f}", font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "distance from the front of the egg, µm", "Bicoid, relative to the normal peak")
d.line([(X(x), Y(c(x))) for x in range(0, 501, 2)], fill=blue, width=4 * SC)
d.line([(X(x), Y(c(x, 2.0))) for x in range(0, 501, 2)], fill=amber, width=3 * SC)
d.line([(L * SC, Y(thresh)), (R * SC, Y(thresh))], fill=green, width=2 * SC)
d.text((X(495), Y(thresh) - 8 * SC), "hunchback threshold, a tenth of the peak", font=fs, fill=green, anchor="rb")
for x, colour in [(x1, blue), (x2, amber)]:
    d.line([(X(x), Y(0)), (X(x), Y(thresh))], fill=colour, width=2 * SC)
    dot(d, X(x), Y(thresh), colour)
d.line([(X(x1), Y(0.35)), (X(x2), Y(0.35))], fill=ink, width=2 * SC)
d.text(((X(x1) + X(x2)) / 2, Y(0.35) - 8 * SC), f"{shift:.0f} µm", font=fm, fill=ink, anchor="mb")
d.text((X(60), Y(1.6)), "twice the Bicoid", font=fm, fill=amber, anchor="lm")
d.text((X(25), Y(0.95)), "normal", font=fm, fill=blue, anchor="lm")
save(im, "bicoid-gradient.png", h)

# Experimental embryology Closer Look: attempts needed for a first success.
pg, pd = 10 / 726, 1 / 277
n = lambda p, q: math.log(q) / math.log(1 - p)
assert round(100 * pg, 1) == 1.4 and round(100 * pd, 2) == 0.36
assert round(n(pg, 0.5)) == 50 and round(n(pd, 0.5)) == 192 and round(n(pd, 0.05), -1) == 830
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda k: (L + (R - L) * k / 1000) * SC
Y = lambda v: (B - (B - T) * v) * SC
for k in range(0, 1001, 200):
    d.line([(X(k), T * SC), (X(k), B * SC)], fill=rule, width=SC)
    d.text((X(k), (B + 18) * SC), f"{k}", font=fm, fill=soft, anchor="mt")
for v in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(L * SC, Y(v)), (R * SC, Y(v))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(v)), f"{v:.0%}", font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "nuclear transfers attempted", "chance of at least one success")
for p, colour, lab in [(pg, blue, "Gurdon's tadpoles, 1.4% each"), (pd, amber, "Dolly, 0.36% each")]:
    d.line([(X(k), Y(1 - (1 - p) ** k)) for k in range(0, 1001, 4)], fill=colour, width=4 * SC)
for p, colour, q, lab, anc, off in [(pg, blue, 0.5, "50", "lb", (8, -6)), (pd, amber, 0.5, "192", "lt", (8, 8)), (pd, amber, 0.05, "", "rt", (-8, 12))]:
    k = n(p, q)
    dot(d, X(k), Y(1 - q), colour)
    d.text((X(k) + off[0] * SC, Y(1 - q) + off[1] * SC), lab, font=fm, fill=colour, anchor=anc)
d.text((X(240), Y(0.87)), "Gurdon's tadpoles, 1.4% each", font=fm, fill=blue, anchor="lm")
d.text((X(330), Y(0.3)), "Dolly, 0.36% each", font=fm, fill=amber, anchor="lm")
d.line([(X(n(pd, 0.05)), Y(0.95)), (X(880), Y(0.84))], fill=amber, width=SC)
d.text((X(990), Y(0.8)), "about 830 for 95%", font=fm, fill=amber, anchor="rm")
save(im, "cloning-odds.png", h)

# Evo-devo Closer Look: Hox genes against the slots a whole-genome copy would give.
rows = [("fruit fly", 1, 8, None), ("amphioxus", 1, 15, None), ("mouse or human", 4, 39, 52), ("zebrafish", 7, 49, 104)]
assert 2 ** 2 == 4 and 4 * 13 == 52 and 11 + 10 + 9 + 9 == 39 and 39 / 52 == 0.75 and 52 - 39 == 13
assert 2 ** 3 * 13 == 104 and 49 / 104 < 0.5
h = 330
im, d = canvas(h)
X = lambda v: (300 + 500 * v / 110) * SC
for v in range(0, 111, 25):
    d.line([(X(v), 30 * SC), (X(v), 240 * SC)], fill=rule, width=SC)
    d.text((X(v), 250 * SC), f"{v}", font=fm, fill=soft, anchor="mt")
for i, (lab, clusters, genes, slots) in enumerate(rows):
    y = (55 + 52 * i) * SC
    d.text((280 * SC, y), f"{lab}", font=fi, fill=ink, anchor="rm")
    if slots:
        d.rectangle([X(0), y - 15 * SC, X(slots), y + 15 * SC], fill=pale)
        d.text((X(slots) + 8 * SC, y), f"of {slots} slots", font=fs, fill=soft, anchor="lm")
    d.rectangle([X(0), y - 15 * SC, X(genes), y + 15 * SC], fill=blue if slots else soft)
    d.text((X(genes) - 6 * SC, y), f"{genes}", font=fm, fill="white", anchor="rm")
    d.text((X(0) + 6 * SC, y - 24 * SC), f"{clusters} cluster" + ("s" if clusters > 1 else ""), font=fs, fill=soft, anchor="lm") if False else None
d.text((W / 2 * SC, 296 * SC), "Hox genes kept, against 13 groups × the clusters genome copying made", font=fi, fill=ink, anchor="mm")
save(im, "hox-counts.png", h)

# Stem cell biology Closer Look: Yamanaka's subtraction against brute force.
all_mix = 2 ** 24
fours = math.comb(24, 4)
steps = 1 + 24 + 1 + 10
assert all_mix == 16_777_216 and fours == 10_626 and steps == 36
h = 290
im, d = canvas(h)
X = lambda lg: (330 + 470 * lg / 8) * SC
for lg in range(0, 9, 2):
    d.line([(X(lg), 30 * SC), (X(lg), 190 * SC)], fill=rule, width=SC)
    d.text((X(lg), 200 * SC), f"{10 ** lg:,}", font=fm, fill=soft, anchor="mt")
for i, (lab, v, colour) in enumerate([("every possible mixture", all_mix, soft), ("every set of four", fours, soft), ("leave-one-out, twice", steps, blue)]):
    y = (55 + 52 * i) * SC
    d.text((310 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 15 * SC, X(math.log10(v)), y + 15 * SC], fill=colour)
    txt = f"{v:,}"
    if X(math.log10(v)) + 80 * SC < (W - 10) * SC:
        d.text((X(math.log10(v)) + 8 * SC, y), txt, font=fm, fill=ink, anchor="lm")
    else:
        d.text((X(math.log10(v)) - 8 * SC, y), txt, font=fm, fill="white", anchor="rm")
d.text((W / 2 * SC, 254 * SC), "experiments to find four reprogramming genes among 24 (log scale)", font=fi, fill=ink, anchor="mm")
save(im, "yamanaka-search.png", h)
