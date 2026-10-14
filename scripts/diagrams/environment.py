"""Draw the Environment Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/environment.py src/fonts <outdir>

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

def dot(d, x, y, colour, r=7):
    d.ellipse([x - r * SC, y - r * SC, x + r * SC, y + r * SC], fill=colour)

def power(d, x, y, text, e, colour, anchor, font=fm):
    es = str(e).replace("-", "−")
    w = d.textlength(text, font=font) + d.textlength(es, font=fs) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x - w / 2 if anchor[0] == "m" else x
    d.text((x0, y), text, font=font, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=font, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=font) + 1 * SC, top - 3 * SC), es, font=fs, fill=colour, anchor="lt")

def hbars(rows, lo, hi, ticks, unit, title, h, label_w=300, log=True, fmt=None):
    im, d = canvas(h)
    X = (lambda v: (label_w + 20 + (840 - label_w - 20) * (math.log10(v) - lo) / (hi - lo)) * SC) if log else \
        (lambda v: (label_w + 20 + (840 - label_w - 20) * (v - lo) / (hi - lo)) * SC)
    top, step = 40, (h - 140) / max(len(rows), 1)
    for v, lab in ticks:
        d.line([(X(v), 20 * SC), (X(v), (h - 90) * SC)], fill=rule, width=SC)
        d.text((X(v), (h - 80) * SC), lab, font=fm, fill=soft, anchor="mt")
    for i, (name, v, colour, text) in enumerate(rows):
        y = (top + step * i + step / 2 - 10) * SC
        d.text((label_w * SC, y), name, font=fi, fill=ink, anchor="rm")
        x0 = X(10 ** lo) if log else X(lo)
        if isinstance(v, tuple):
            d.rectangle([X(v[0]), y - 15 * SC, X(v[1]), y + 15 * SC], fill=colour)
            end = X(v[1])
        else:
            d.rectangle([x0, y - 15 * SC, X(v), y + 15 * SC], fill=colour)
            end = X(v)
        d.text((end + 8 * SC, y), text, font=fm, fill=ink, anchor="lm")
    d.text((W / 2 * SC, (h - 34) * SC), title, font=fi, fill=ink, anchor="mm")
    return im, d

# Geochemistry Closer Look: lead in Greenland ice.
ice = [("about 800 BC", 0.001), ("1750", 0.01), ("1965", 0.2)]
assert round(ice[2][1] / ice[1][1]) == 20 and round(ice[2][1] / ice[0][1]) == 200
im, d = hbars([(n, v, amber if n == "1965" else blue, f"~{v:g} µg/kg") for n, v in ice], -3.3, 0,
              [(0.001, "0.001"), (0.01, "0.01"), (0.1, "0.1"), (1, "1")], "", "lead in Greenland ice, micrograms per kilogram (log scale)", 330, 240)
save(im, "ice-lead.png", 330)

# Aquatic chemistry Closer Look: carbon taken up by seawater for a doubling of CO2.
dic, revelle, gas = 2100, 10, 10
buffered = dic / revelle
assert buffered == 210 and buffered / gas == 21
rows = [("as dissolved gas alone", gas, soft, "10 µmol/kg"), ("with the carbonate buffer, R = 10", buffered, blue, "210"),
        ("if the buffer were perfect, R = 1", dic, pale, "2,100")]
im, d = hbars(rows, 0, 2400, [(0, "0"), (500, "500"), (1000, "1,000"), (1500, "1,500"), (2000, "2,000")], "",
              "carbon absorbed per kilogram of surface seawater, µmol, for doubled CO₂", 330, 340, log=False)
save(im, "revelle-uptake.png", 330)

# Atmospheric chemistry Closer Look: lifetimes against hydroxyl.
k = lambda a, e, t: a * math.exp(-e / t)
k_ch4 = k(2.45e-12, 1775, 272)
tau_ch4 = 1 / (k_ch4 * 1e6) / 3.156e7
assert abs(k_ch4 / 3.6e-15 - 1) < 0.02 and round(tau_ch4) == 9
tau_co = 1 / (2.4e-13 * 1e6) / 3.156e7
assert 1.5 < tau_co * 12 < 2.0 and round(2.4e-13 / 3.6e-15, -1) == 70
life = [("carbon monoxide", tau_co, blue, "~2 months"), ("methane", 11, blue, "~11 years"),
        ("CFC-12", 100, amber, "~100 years"), ("SF₆", 3200, amber, "~3,200 yr")]
im, d = hbars(life, -2, 4, [(0.01, "4 days"), (0.1, "5 weeks"), (1, "1 yr"), (10, "10 yr"), (100, "100 yr"), (1000, "1,000 yr"), (10000, "")],
              "", "atmospheric lifetime (log scale): blue, removed by hydroxyl; amber, no hydrogen to remove", 360, 220)
save(im, "lifetimes.png", 360)

# Photochemical smog Closer Look: the photostationary state.
jk = 8e-3 / 1.9e-14
ppb = jk / 2.5e10
assert abs(jk / 4.2e11 - 1) < 0.01 and round(ppb) == 17 and round(5 * ppb) == 84 and round(10 * ppb) == 168
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda r: (L + (R - L) * r / 12) * SC
Y = lambda o: (B - (B - T) * o / 210) * SC
for o in range(0, 211, 30):
    d.line([(L * SC, Y(o)), (R * SC, Y(o))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(o)), f"{o}", font=fm, fill=soft, anchor="rm")
for r in range(0, 13, 2):
    d.text((X(r), (B + 18) * SC), f"{r}", font=fm, fill=soft, anchor="mt")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
d.text((((L + R) / 2) * SC, (B + 50) * SC), "ratio of NO₂ to NO", font=fi, fill=ink, anchor="mt")
d.text(((L - 12) * SC, (T - 14) * SC), "midday ozone, ppb", font=fm, fill=soft, anchor="ls")
d.rectangle([L * SC, Y(210), R * SC, Y(70)], fill=None)
d.line([(L * SC, Y(70)), (R * SC, Y(70))], fill=amber, width=2 * SC)
d.text((X(11.8), Y(70) + 8 * SC), "a typical air-quality limit, about 70 ppb", font=fs, fill=amber, anchor="rt")
d.line([(X(0), Y(0)), (X(12), Y(12 * ppb))], fill=blue, width=4 * SC)
for r in (1, 5, 10):
    dot(d, X(r), Y(r * ppb), blue)
    lab = f"{r} : 1 → {round(r * ppb, -1 if r == 10 else 0):.0f} ppb"
    if r < 10:
        d.text((X(r) + 12 * SC, Y(r * ppb) + 6 * SC), lab, font=fm, fill=ink, anchor="lt")
    else:
        d.text((X(r) - 12 * SC, Y(r * ppb) - 8 * SC), lab, font=fm, fill=ink, anchor="rb")
save(im, "ozone-ratio.png", h)

# Photochemical smog Closer Look: Carter's incremental reactivity.
mir = [("ethane", 0.28), ("propane", 0.49), ("ethanol", 1.53), ("formaldehyde", 9.46), ("m-xylene", 10.6), ("propene", 11.6)]
assert round(11.6 / 0.28) == 41
im, d = hbars([(n, v, amber if v > 5 else blue, f"{v:g}") for n, v in mir], 0, 12, [(0, "0"), (3, "3"), (6, "6"), (9, "9"), (12, "12")], "",
              "grams of ozone formed per gram emitted", 400, 220, log=False)
save(im, "reactivity.png", 400)

# Stratospheric ozone Closer Look: the ozone column.
cols = [("mid-latitudes", 300, blue, "~300 DU"), ("Antarctic October, before 1980", 280, blue, "~280"),
        ("Antarctic October, 1990s–2000s", (90, 120), amber, "90–120")]
assert 300 / 100 == 3   # 100 Dobson units is 1 mm of pure ozone at standard conditions, so 300 DU is 3 mm
im, d = hbars(cols, 0, 330, [(0, "0"), (100, "100"), (200, "200"), (300, "300")], "",
              "ozone column, Dobson units (300 DU is a layer 3 mm thick at the surface)", 320, 330, log=False)
save(im, "ozone-column.png", 320)
