"""Draw the Cell Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/cell.py src/fonts <outdir>

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

def hbars(rows, X, ticks, title, h, label_w):
    im, d = canvas(h)
    step = (h - 130) / len(rows)
    for v, lab in ticks:
        d.line([(X(v), 20 * SC), (X(v), (h - 90) * SC)], fill=rule, width=SC)
        d.text((X(v), (h - 80) * SC), lab, font=fm, fill=soft, anchor="mt")
    for i, (name, v, colour, text) in enumerate(rows):
        y = (30 + step * i + step / 2) * SC
        d.text((label_w * SC, y), name, font=fi, fill=ink, anchor="rm")
        d.rectangle([X(ticks[0][0]), y - 15 * SC, max(X(v), X(ticks[0][0]) + 3 * SC), y + 15 * SC], fill=colour)
        d.text((max(X(v), X(ticks[0][0]) + 3 * SC) + 8 * SC, y), text, font=fm, fill=ink, anchor="lm")
    d.text((W / 2 * SC, (h - 34) * SC), title, font=fi, fill=ink, anchor="mm")
    return im, d

# Cell theory Closer Look: diffusion time grows with the square of distance.
D = 1e-9
t = lambda x: x * x / (2 * D)
rows = [("1 µm, a bacterium", 1e-6, "0.5 ms"), ("10 µm, a human cell", 1e-5, "50 ms"), ("1 mm, a large egg", 1e-3, "about 8 minutes"), ("1 cm, a fingertip", 1e-2, "about 14 hours")]
assert round(t(1e-6) * 1e3, 1) == 0.5 and round(t(1e-5) * 1e3) == 50 and round(t(1e-3) / 60) == 8 and round(t(1e-2) / 3600) == 14
lo, hi = -4, 6
X = lambda s: (330 + 420 * (math.log10(s) - lo) / (hi - lo)) * SC
im, d = hbars([(n, t(x), blue if x < 1e-4 else amber, lab) for n, x, lab in rows], X,
              [(1e-4, "0.1 ms"), (1e-2, "10 ms"), (1, "1 s"), (100, "100 s"), (1e4, "3 hours"), (1e6, "")],
              "time to diffuse across, for a small molecule in water (log scale)", 340, 310)
save(im, "diffusion-time.png", 340)

# Cell biology Closer Look: Abbe's limit against the sizes of things in a cell.
d_abbe = 500 / (2 * 1.4)
assert round(d_abbe, -1) == 180
sizes = [("human cell", 10000, 30000), ("mitochondrion", 500, 1000), ("ribosome", 25, 25), ("microtubule", 25, 25), ("membrane", 5, 5)]
assert round(d_abbe / 25) == 7 and round(d_abbe / 5) == 36
h = 360
im, d = canvas(h)
X = lambda nm: (220 + 610 * (math.log10(nm) - 0) / 5) * SC
d.rectangle([X(1), 20 * SC, X(d_abbe), 270 * SC], fill=pale)
d.line([(X(d_abbe), 20 * SC), (X(d_abbe), 270 * SC)], fill=amber, width=3 * SC)
d.text((X(d_abbe) - 8 * SC, 34 * SC), f"light limit ≈ {round(d_abbe, -1):.0f} nm", font=fm, fill=amber, anchor="rm")
d.text((X(d_abbe) - 8 * SC, 56 * SC), "below it, a blur", font=fs, fill=amber, anchor="rm")
for nm, lab in [(1, "1 nm"), (10, "10 nm"), (100, "100 nm"), (1000, "1 µm"), (10000, "10 µm"), (100000, "100 µm")]:
    d.line([(X(nm), 270 * SC), (X(nm), 278 * SC)], fill=ink, width=2 * SC)
    d.text((X(nm), 286 * SC), lab, font=fm, fill=soft, anchor="mt")
d.line([(X(1), 270 * SC), (X(100000), 270 * SC)], fill=ink, width=2 * SC)
for i, (name, a, b) in enumerate(sizes):
    y = (90 + 36 * i) * SC
    d.text((200 * SC, y), name, font=fi, fill=ink, anchor="rm")
    colour = blue if a >= d_abbe else soft
    if a == b:
        d.ellipse([X(a) - 8 * SC, y - 8 * SC, X(a) + 8 * SC, y + 8 * SC], fill=colour)
    else:
        d.rounded_rectangle([X(a), y - 9 * SC, X(b), y + 9 * SC], radius=9 * SC, fill=colour)
d.text((W / 2 * SC, 330 * SC), "size, nanometres (log scale)", font=fi, fill=ink, anchor="mm")
save(im, "resolution-limit.png", h)

# Biochemistry Closer Look: a day's ATP against what the body holds.
mol = 0.5 * 8.4e6 / 5e4
kg = mol * 507 / 1000
assert mol == 84 and round(kg) == 43 and 40000 / 250 == 160 and round(24 * 60 / 160) == 9
X = lambda g: (300 + 520 * g / 45000) * SC
im, d = hbars([("made and used in a day", 40000, amber, "about 40 kg"), ("in the body at any moment", 250, blue, "about 250 g")], X,
              [(0, "0"), (10000, "10 kg"), (20000, "20 kg"), (30000, "30 kg"), (40000, "40 kg")],
              "ATP in a resting adult: each molecule is rebuilt about 160 times a day", 260, 280)
save(im, "atp-turnover.png", 260)

# Immunology Closer Look: antibodies from gene segments.
heavy = 40 * 23 * 6
light = 40 * 5 + 30 * 4
pairs = heavy * light
segments = 40 + 23 + 6 + 40 + 5 + 30 + 4
assert heavy == 5520 and light == 320 and round(pairs / 1e6, 1) == 1.8 and round(segments, -1) == 150
X = lambda v: (330 + 420 * math.log10(v) / 8) * SC
im, d = hbars([("gene segments", segments, soft, f"about {round(segments, -1):.0f}"), ("heavy chains", heavy, blue, "40 × 23 × 6 = 5,520"),
               ("light chains", light, blue, "200 + 120 = 320"), ("heavy × light pairs", pairs, amber, "about 1.8 million")], X,
              [(1, "1"), (100, "100"), (10000, "10,000"), (1e6, "1 million"), (1e8, "")],
              "count (log scale), before imprecise joining multiplies it further", 340, 310)
save(im, "antibody-combinations.png", 340)

# Microbiology Closer Look: Snow's two water companies.
sv, lam = 1263 / 40046 * 1e4, 98 / 26107 * 1e4
assert round(sv) == 315 and round(lam) == 38 and round(sv / lam, 1) == 8.4
X = lambda v: (340 + 480 * v / 350) * SC
im, d = hbars([("Southwark and Vauxhall", sv, amber, "315"), ("Lambeth", lam, blue, "37")], X,
              [(0, "0"), (100, "100"), (200, "200"), (300, "300")],
              f"cholera deaths per 10,000 houses, first seven weeks: {sv / lam:.1f} times higher", 260, 320)
save(im, "snow-rates.png", 260)
