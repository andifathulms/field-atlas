"""Draw the Electrochemistry Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/electrochemistry.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue, pale = (164, 84, 29), (44, 59, 128), (238, 230, 214)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 22 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)
W = 900
F, NA, R_GAS = 96485, 6.022e23, 8.314

def canvas(h):
    im = Image.new("RGB", (W * SC, h * SC), "white")
    return im, ImageDraw.Draw(im)

def save(im, name, h):
    im.resize((W, h), Image.LANCZOS).save(f"{outdir}/{name}", optimize=True)
    print(name)

fs = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 15 * SC)

def ion(d, x, y, name, colour):
    """Right-aligned ion name with a raised charge, which the serif's superscript block lacks."""
    base, sign = name[:-1], "+" if name[-1] == "+" else "\u2212"
    sw = d.textlength(sign, font=fs)
    d.text((x - sw - 1 * SC, y), base, font=fi, fill=colour, anchor="rm")
    d.text((x, y - 9 * SC), sign, font=fs, fill=colour, anchor="rm")

def dot(d, x, y, colour, r=7):
    d.ellipse([x - r * SC, y - r * SC, x + r * SC, y + r * SC], fill=colour)

# Electrochemistry Closer Look: the electricity and energy in a tonne of aluminium.
mol_al = 1e6 / 26.98
charge = 3 * mol_al * F
kwh = lambda volts: charge * volts / 3.6e6
assert abs(3 * mol_al / 1.11e5 - 1) < 0.005 and abs(charge / 1.07e10 - 1) < 0.005
assert abs(kwh(4.5) - 13400) < 50 and abs(F / NA / 1.602e-19 - 1) < 0.001
h = 300
im, d = canvas(h)
X = lambda k: (60 + 780 * k / 16000) * SC
for k in range(0, 16001, 4000):
    d.line([(X(k), 60 * SC), (X(k), 200 * SC)], fill=rule, width=SC)
    d.text((X(k), 214 * SC), f"{k:,}", font=fm, fill=soft, anchor="mt")
y0, y1 = 96, 150
d.rectangle([X(13000), (y0 - 18) * SC, X(15000), (y1 + 18) * SC], fill=pale)
d.rectangle([X(0), y0 * SC, X(kwh(1.2)), y1 * SC], fill=blue)
d.rectangle([X(kwh(1.2)), y0 * SC, X(kwh(4.5)), y1 * SC], fill=amber)
d.text((X(kwh(1.2) / 2), (y0 + y1) / 2 * SC), f"1.2 V: {round(kwh(1.2), -2):,.0f}", font=fm, fill="white", anchor="mm")
d.text(((X(kwh(1.2)) + X(kwh(4.5))) / 2, (y0 + y1) / 2 * SC), "3.3 V lost to overpotential and resistance", font=fm, fill="white", anchor="mm")
d.text((X(kwh(4.5)), (y0 - 26) * SC), f"cell at 4.5 V: {round(kwh(4.5), -2):,.0f} kWh", font=fm, fill=ink, anchor="rb")
d.text((X(14000), (y1 + 26) * SC), "real smelters", font=fm, fill=soft, anchor="mt")
d.text((W / 2 * SC, 262 * SC), "electricity per tonne of aluminium, kWh", font=fi, fill=ink, anchor="mm")
save(im, "aluminium-energy.png", h)

# Electrolyte theory Closer Look: Kohlrausch's limiting molar conductivities, S cm2/mol.
ions = [("H+", 349.8), ("OH-", 198.0), ("Cs+", 77.3), ("Br-", 78.1), ("Cl-", 76.3), ("K+", 73.5),
        ("NO₃-", 71.4), ("F-", 55.4), ("Na+", 50.1), ("Li+", 38.7)]
ions.sort(key=lambda t: -t[1])
assert round(349.8 / 50.1, 1) == 7.0
h = 470
im, d = canvas(h)
X = lambda v: (150 + 680 * v / 360) * SC
for v in range(0, 361, 50):
    d.line([(X(v), 20 * SC), (X(v), 410 * SC)], fill=rule, width=SC)
    d.text((X(v), 418 * SC), f"{v}", font=fm, fill=soft, anchor="mt")
for i, (name, v) in enumerate(ions):
    y = (40 + 38 * i) * SC
    colour = amber if name in ("H+", "OH-") else blue
    ion(d, 130 * SC, y, name, ink)
    d.rectangle([X(0), y - 12 * SC, X(v), y + 12 * SC], fill=colour)
    d.text((X(v) + 8 * SC, y), f"{v}", font=fm, fill=colour, anchor="lm")
d.text((X(150), (40 + 38 * 3) * SC), "the proton: 7.0 times sodium", font=fm, fill=amber, anchor="lm")
d.text((X(180), 452 * SC), "limiting molar conductivity in water at 25 °C, S cm²/mol", font=fi, fill=ink, anchor="mm")
save(im, "conductivity.png", h)

# Electrode potentials Closer Look: 59.2 mV per pH unit, and what a millivolt costs.
slope = R_GAS * 298.15 / F * math.log(10)
per_mv = F / (R_GAS * 298.15) * 1e-3
assert round(slope, 4) == 0.0592 and round(14 * slope * 1000, -1) == 830 and round(100 * per_mv, 1) == 3.9
h = 500; L, R, T, B = 110, 860, 40, 420
im, d = canvas(h)
X = lambda ph: (L + (R - L) * ph / 14) * SC
Y = lambda mv: (B - (B - T) * mv / 900) * SC
for mv in range(0, 901, 150):
    d.line([(L * SC, Y(mv)), (R * SC, Y(mv))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(mv)), f"{mv}", font=fm, fill=soft, anchor="rm")
for ph in range(0, 15, 2):
    d.text((X(ph), (B + 18) * SC), f"{ph}", font=fm, fill=soft, anchor="mt")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
d.text((((L + R) / 2) * SC, (B + 52) * SC), "change in pH", font=fi, fill=ink, anchor="mt")
d.text(((L - 12) * SC, (T - 14) * SC), "change in electrode potential, mV", font=fm, fill=soft, anchor="ls")
d.line([(X(0), Y(0)), (X(14), Y(14 * slope * 1000))], fill=blue, width=4 * SC)
d.line([(X(4), Y(4 * slope * 1000)), (X(5), Y(4 * slope * 1000))], fill=ink, width=2 * SC)
d.line([(X(5), Y(4 * slope * 1000)), (X(5), Y(5 * slope * 1000))], fill=ink, width=2 * SC)
d.text((X(5) + 10 * SC, Y(4.3 * slope * 1000)), f"one pH unit = {slope * 1000:.1f} mV", font=fm, fill=ink, anchor="lm")
dot(d, X(14), Y(14 * slope * 1000), amber)
d.text((X(14) - 14 * SC, Y(14 * slope * 1000)), "fourteen units, a factor of 10¹⁴: 830 mV", font=fm, fill=amber, anchor="rm")
d.text((X(13.8), Y(90)), f"so 1 mV of error is {100 * per_mv:.1f}% in concentration", font=fm, fill=soft, anchor="rm")
save(im, "ph-millivolts.png", h)

# Corrosion Closer Look: Pilling-Bedworth ratios.
def pbr(m_ox, rho_ox, m, rho, n):
    return m_ox * rho / (n * m * rho_ox)
metals = [("magnesium", pbr(40.30, 3.58, 24.31, 1.74, 1), "too little to cover: porous"),
          ("aluminium", pbr(101.96, 3.95, 26.98, 2.70, 2), "covers and seals"),
          ("iron", pbr(159.69, 5.24, 55.85, 7.87, 2), "too much: buckles and flakes")]
assert [round(v, 2) for _, v, _ in metals] == [0.81, 1.29, 2.15]
h = 370
im, d = canvas(h)
X = lambda v: (200 + 640 * v / 2.5) * SC
d.rectangle([X(1), 20 * SC, X(2), 290 * SC], fill=pale)
d.text(((X(1) + X(2)) / 2, 30 * SC), "the usual protective range", font=fm, fill=soft, anchor="mt")
for v in [0, 0.5, 1, 1.5, 2, 2.5]:
    d.line([(X(v), 60 * SC), (X(v), 290 * SC)], fill=rule if v != 1 else ink, width=SC if v != 1 else 2 * SC)
    d.text((X(v), 302 * SC), f"{v:g}", font=fm, fill=soft, anchor="mt")
for i, (name, v, note) in enumerate(metals):
    y = (84 + 76 * i) * SC
    colour = blue if name == "aluminium" else amber
    d.text((180 * SC, y), name, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 14 * SC, X(v), y + 14 * SC], fill=colour)
    d.text((X(v) - 8 * SC, y), f"{v:.2f}", font=fm, fill="white", anchor="rm")
    d.text((X(0) + 4 * SC, y + 26 * SC), note, font=fm, fill=colour, anchor="lt")
d.text((W / 2 * SC, 342 * SC), "volume of oxide ÷ volume of metal it replaces", font=fi, fill=ink, anchor="mm")
save(im, "pilling-bedworth.png", h)

# Batteries Closer Look: petrol against a lithium cell, per kilogram.
petrol, cell = 46.0, 250 * 3600 / 1e6
raw, useful = petrol / cell, (petrol * 0.25) / (cell * 0.90)
assert round(cell, 1) == 0.9 and round(raw) == 51 and round(useful) == 14
h = 360
im, d = canvas(h)
X = lambda v: (300 + 480 * v / 46) * SC
for v in range(0, 47, 10):
    d.line([(X(v), 20 * SC), (X(v), 280 * SC)], fill=rule, width=SC)
    d.text((X(v), 290 * SC), f"{v}", font=fm, fill=soft, anchor="mt")
rows = [("petrol, stored", petrol, soft), ("lithium cell, stored", cell, soft),
        ("petrol, at the wheels", petrol * 0.25, amber), ("lithium cell, at the wheels", cell * 0.9, blue)]
for i, (name, v, colour) in enumerate(rows):
    y = (44 + 58 * i + (16 if i > 1 else 0)) * SC
    d.text((282 * SC, y), name, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 14 * SC, max(X(v), X(0) + 3 * SC), y + 14 * SC], fill=colour)
    d.text((max(X(v), X(0) + 3 * SC) + 8 * SC, y), f"{v:g} MJ/kg", font=fm, fill=ink, anchor="lm")
d.text((X(45), (44 + 29) * SC), f"{raw:.0f} times", font=fm, fill=soft, anchor="rm")
d.text((X(45), (44 + 58 * 2 + 16 + 29) * SC), f"{useful:.0f} times", font=fm, fill=amber, anchor="rm")
d.text((W / 2 * SC, 334 * SC), "energy per kilogram, MJ", font=fi, fill=ink, anchor="mm")
save(im, "energy-per-kilogram.png", h)
