"""Draw the Synthesis Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/synthesis.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue, green = (164, 84, 29), (44, 59, 128), (58, 110, 72)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 24 * SC)
fb = ImageFont.truetype(f"{fd}/SourceSerif4-SemiBold.ttf", 22 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)
fe = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 12 * SC)
W, H = 900, 520; L, R, T, B = 110, 860, 40, 440

def canvas(h=H):
    im = Image.new("RGB", (W * SC, h * SC), "white")
    return im, ImageDraw.Draw(im)

def save(im, name, h=H):
    im.resize((W, h), Image.LANCZOS).save(f"{outdir}/{name}", optimize=True)
    print(name)

def dot(d, x, y, colour, r=7):
    d.ellipse([x - r * SC, y - r * SC, x + r * SC, y + r * SC], fill=colour)

def power(d, x, y, text, e, colour, anchor):
    """Draw text ending in 10 with a raised exponent; anchor is l or r plus m, t or b."""
    w = d.textlength(text, font=fm) + d.textlength(str(e), font=fe) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x
    d.text((x0, y), text, font=fm, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=fm, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=fm) + 1 * SC, top - 3 * SC), str(e).replace("-", "−"), font=fe, fill=colour, anchor="lt")

def frame(d, X, xt, xlab, ylab):
    for x in xt:
        d.text((X(x), (B + 18) * SC), f"{x:g}", font=fm, fill=soft, anchor="mt")
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 52) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

# Organic structure theory Closer Look: Körner's count. The ring's symmetries that keep the two
# substituents in place sort the four free positions into classes; each class is one product.
rot = lambda k: (lambda p: (p - 1 + k) % 6 + 1)
ref = lambda k: (lambda p: (k - p) % 6 + 1)
D6 = [rot(k) for k in range(6)] + [ref(k) for k in range(6)]
def classes(subs):
    keep = [g for g in D6 if {g(p) for p in subs} == set(subs)]
    free = [p for p in range(1, 7) if p not in subs]
    seen, out = set(), []
    for p in free:
        if p not in seen:
            orbit = sorted({g(p) for g in keep}); seen |= set(orbit); out.append(orbit)
    return out
isomers = [("para", (1, 4)), ("ortho", (1, 2)), ("meta", (1, 3))]
counts = {name: len(classes(s)) for name, s in isomers}
assert counts == {"para": 1, "ortho": 2, "meta": 3}
assert classes((1, 2)) == [[3, 6], [4, 5]] and classes((1, 3)) == [[2], [4, 6], [5]]
Hk = 440
im, d = canvas(Hk)
tones = [blue, amber, green]
for i, (name, subs) in enumerate(isomers):
    cx, cy, r = (150 + 300 * i) * SC, 170 * SC, 82 * SC
    pos = {p: (cx + r * math.sin(math.radians(60 * (p - 1))), cy - r * math.cos(math.radians(60 * (p - 1)))) for p in range(1, 7)}
    d.line([pos[p] for p in range(1, 7)] + [pos[1]], fill=ink, width=3 * SC, joint="curve")
    out = lambda p, k: (cx + (r + k * SC) * math.sin(math.radians(60 * (p - 1))), cy - (r + k * SC) * math.cos(math.radians(60 * (p - 1))))
    for p in range(1, 7):
        d.text(out(p, -24), str(p), font=fe, fill=soft, anchor="mm")
    for p in subs:
        d.line([pos[p], out(p, 34)], fill=ink, width=3 * SC)
        d.text(out(p, 50), "X", font=fb, fill=ink, anchor="mm")
    for j, orbit in enumerate(classes(subs)):
        for p in orbit:
            x, y = out(p, 30)
            d.line([pos[p], (x, y)], fill=tones[j], width=2 * SC)
            dot(d, x, y, tones[j], 11)
            d.text((x, y), "abc"[j], font=fe, fill="white", anchor="mm")
    n = counts[name]
    d.text((cx, 352 * SC), name, font=fi, fill=ink, anchor="mm")
    d.text((cx, 386 * SC), f"{n} product" + ("" if n == 1 else "s"), font=fm, fill=ink, anchor="mm")
d.text((W / 2 * SC, 420 * SC), "same letter: the same product, by the ring's symmetry", font=fm, fill=soft, anchor="mm")
save(im, "korner-count.png", Hk)

# Total synthesis Closer Look: overall yield against number of steps.
table = {(10, .95): 60, (20, .95): 36, (40, .95): 13, (10, .90): 35, (20, .90): 12, (40, .90): 1.5,
         (10, .80): 11, (20, .80): 1.2, (40, .80): 0.013}
for (n, p), v in table.items():
    got = 100 * p ** n
    assert abs(got - v) / v < 0.05, (n, p, got)
assert abs(0.9 ** 21 - 0.109) < 0.001
im, d = canvas()
X = lambda n: (L + (R - L) * n / 40) * SC
Y = lambda pc: (B - (B - T) * (math.log10(pc) + 2) / 4) * SC
for pc, lab in [(100, "100%"), (10, "10%"), (1, "1%"), (0.1, "0.1%"), (0.01, "0.01%")]:
    d.line([(L * SC, Y(pc)), (R * SC, Y(pc))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(pc)), lab, font=fm, fill=soft, anchor="rm")
frame(d, X, [0, 10, 20, 30, 40], "steps in the longest linear sequence", "overall yield (log scale)")
for p, colour, at, dy, anc in [(.95, green, 30, -12, "mb"), (.90, blue, 28, 14, "rt"), (.80, amber, 31, -10, "lb")]:
    d.line([(X(n / 10), Y(100 * p ** (n / 10))) for n in range(0, 401) if 100 * p ** (n / 10) >= 0.01], fill=colour, width=4 * SC)
    d.text((X(at), Y(100 * p ** at) + dy * SC), f"{p:.0%} per step", font=fm, fill=colour, anchor=anc)
x1, y1 = X(40), Y(100 * 0.9 ** 40)
x2, y2 = X(21), Y(100 * 0.9 ** 21)
dot(d, x1, y1, blue); dot(d, x2, y2, ink)
tx, ty = X(1), Y(0.025)
d.line([(X(17), ty - 76 * SC), (x2, y2)], fill=ink, width=SC)
d.text((tx, ty - 30 * SC), "two branches of 20, then the join:", font=fm, fill=ink, anchor="lb")
d.text((tx, ty - 4 * SC), f"21 steps deep, {100 * 0.9 ** 21:.0f}% at 90% per step", font=fm, fill=ink, anchor="lb")
d.text((x1 - 4 * SC, y1 + 16 * SC), f"40 in a line: {100 * 0.9 ** 40:.1f}%", font=fm, fill=blue, anchor="rt")
save(im, "linear-yield.png")

# Retrosynthetic analysis Closer Look: the size of the search tree, as a power of ten.
trees = [("retrosynthesis, 10 options, depth 5", 5 * math.log10(10), blue), ("retrosynthesis, 50 options, depth 5", 5 * math.log10(50), blue),
         ("retrosynthesis, 10 options, depth 10", 10 * math.log10(10), blue), ("retrosynthesis, 50 options, depth 10", 10 * math.log10(50), blue),
         ("chess, 35 moves, 80 deep", 80 * math.log10(35), soft), ("Go, 250 moves, 150 deep", 150 * math.log10(250), soft)]
assert round(10 ** trees[1][1] / 1e8) == 3 and round(trees[3][1]) == 17
assert round(trees[4][1]) == 124 and round(trees[5][1]) == 360
Ht = 440
im, d = canvas(Ht)
X = lambda e: (440 + (860 - 440) * e / 360) * SC
for e in [0, 100, 200, 300]:
    d.line([(X(e), 30 * SC), (X(e), 370 * SC)], fill=rule, width=SC)
    power(d, X(e) - 10 * SC, 390 * SC, "10", e, soft, "lt")
for i, (lab, e, colour) in enumerate(trees):
    y = (50 + 56 * i) * SC
    d.text((425 * SC, y), lab, font=fm, fill=colour if colour != soft else ink, anchor="rm")
    d.rectangle([X(0), y - 14 * SC, max(X(e), X(0) + 3 * SC), y + 14 * SC], fill=colour)
    power(d, max(X(e), X(0) + 3 * SC) + 8 * SC, y, "", round(e), colour if colour != soft else ink, "lm") if False else None
    if X(e) + 90 * SC < X(360):
        power(d, X(e) + 8 * SC, y, "10", round(e), colour if colour != soft else ink, "lm")
    else:
        power(d, X(e) - 8 * SC, y, "10", round(e), (255, 255, 255), "rm")
d.text((X(180), 420 * SC), "number of positions in the tree", font=fi, fill=ink, anchor="mm")
save(im, "search-tree.png", Ht)

# Retrosynthetic analysis: Sheldon's E-factors, kilograms of waste per kilogram of product.
sectors = [("bulk chemicals", 1, 1, "around 1"), ("fine chemicals", 5, 50, "5 to 50"), ("pharmaceuticals", 25, 100, "25 to 100")]
He = 300
im, d = canvas(He)
X = lambda v: (330 + (860 - 330) * (math.log10(v) + 1) / 3) * SC
for v in [0.1, 1, 10, 100]:
    d.line([(X(v), 30 * SC), (X(v), 220 * SC)], fill=rule, width=SC)
    d.text((X(v), 236 * SC), f"{v:g}", font=fm, fill=soft, anchor="mt")
for i, (lab, lo, hi, txt) in enumerate(sectors):
    y = (62 + 64 * i) * SC
    d.text((300 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    if lo == hi:
        dot(d, X(lo), y, amber, 10)
    else:
        d.rounded_rectangle([X(lo), y - 12 * SC, X(hi), y + 12 * SC], radius=12 * SC, fill=amber)
    d.text((X(hi) + 16 * SC, y), txt, font=fm, fill=amber, anchor="lm") if hi < 50 else d.text((X(lo) - 16 * SC, y), txt, font=fm, fill=amber, anchor="rm")
d.text((X(3.16), 276 * SC), "kilograms of waste per kilogram of product (log scale)", font=fi, fill=ink, anchor="mm")
save(im, "e-factor.png", He)

# Cross-coupling Closer Look: selectivity between two sites from the difference in barriers.
RT = 2.48
sel = lambda dd: math.exp(dd / RT)
assert abs(RT * math.log(19) - 7.3) < 0.05 and round(RT * math.log(1e6)) == 34
im, d = canvas()
X = lambda dd: (L + (R - L) * dd / 40) * SC
Y = lambda lg: (B - (B - T) * lg / 7) * SC
for lg in range(0, 8):
    d.line([(L * SC, Y(lg)), (R * SC, Y(lg))], fill=rule, width=SC)
    power(d, (L - 12) * SC, Y(lg), "10", lg, soft, "rm")
frame(d, X, [0, 10, 20, 30, 40], "difference in barrier, ΔΔG‡, kJ/mol", "selectivity, preferred site : other site")
d.line([(X(dd / 10), Y(math.log10(sel(dd / 10)))) for dd in range(0, 401) if math.log10(sel(dd / 10)) <= 7], fill=blue, width=4 * SC)
for dd, lab, anc, off in [(RT * math.log(19), "95 : 5 needs 7.3 kJ/mol", "lm", (14, 10)), (RT * math.log(1e6), "an enzyme's 10⁶ : 1 needs 34 kJ/mol", "rm", (-14, -4))]:
    x, y = X(dd), Y(math.log10(sel(dd)))
    dot(d, x, y, amber)
    d.text((x + off[0] * SC, y + off[1] * SC), lab, font=fm, fill=amber, anchor=anc)
d.text((X(39), Y(0.5)), "less than a hydrogen bond buys 95 : 5", font=fm, fill=soft, anchor="rm")
save(im, "selectivity.png")
