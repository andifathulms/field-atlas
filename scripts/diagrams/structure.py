"""Draw the Molecular Structure Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/structure.py src/fonts <outdir>

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

def power(d, x, y, text, e, colour, anchor):
    es = str(e).replace("-", "−")
    w = d.textlength(text, font=fm) + d.textlength(es, font=fs) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x
    d.text((x0, y), text, font=fm, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=fm, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=fm) + 1 * SC, top - 3 * SC), es, font=fs, fill=colour, anchor="lt")

def hbars(rows, X, ticks, title, h, label_w, tick_power=False):
    im, d = canvas(h)
    step = (h - 130) / len(rows)
    base = ticks[0][0]
    for v, lab in ticks:
        d.line([(X(v), 20 * SC), (X(v), (h - 90) * SC)], fill=rule, width=SC)
        if tick_power:
            power(d, X(v) - 10 * SC, (h - 80) * SC, "10", lab, soft, "lt")
        else:
            d.text((X(v), (h - 80) * SC), lab, font=fm, fill=soft, anchor="mt")
    for i, (name, v, colour, text) in enumerate(rows):
        y = (30 + step * i + step / 2) * SC
        d.text((label_w * SC, y), name, font=fi, fill=ink, anchor="rm")
        d.rectangle([X(base), y - 15 * SC, max(X(v), X(base) + 3 * SC), y + 15 * SC], fill=colour)
        end = max(X(v), X(base) + 3 * SC)
        if end + 8 * SC + d.textlength(text, font=fm) > (W - 8) * SC:
            d.text((end - 8 * SC, y), text, font=fm, fill="white", anchor="rm")
        else:
            d.text((end + 8 * SC, y), text, font=fm, fill=ink, anchor="lm")
    d.text((W / 2 * SC, (h - 34) * SC), title, font=fi, fill=ink, anchor="mm")
    return im, d

# Structural biology Closer Look: distances from the peptidyl transferase centre.
dist = [("covalent bond", 1.5, soft, "1.5 Å"), ("hydrogen bond", 2.8, soft, "2.8 Å"), ("van der Waals contact", 3.5, soft, "3–4 Å"),
        ("nearest protein atom", 18, amber, "18 Å: about five waters")]
assert round(18 / 3.5) == 5   # a water molecule is about 3 to 3.5 Å across
X = lambda a: (330 + 460 * a / 20) * SC
im, d = hbars(dist, X, [(0, "0"), (5, "5 Å"), (10, "10 Å"), (15, "15 Å"), (20, "20 Å")],
              "distance from the active site in the ribosome's large subunit", 320, 310)
save(im, "active-site-distance.png", 320)

# Structure prediction Closer Look: Levinthal's search, against the age of the universe.
confs = 3 ** 100
secs = confs * 1e-13
years = secs / 3.156e7
assert abs(confs / 5.2e47 - 1) < 0.01 and abs(years / 1.6e27 - 1) < 0.05 and round(math.log10(years / 1.4e10)) == 17
lo = -12
X = lambda lg: (330 + 480 * (lg - lo) / (28 - lo)) * SC
rows = [("a real protein folds", -11, blue, "milliseconds to seconds"), ("the age of the universe", math.log10(1.4e10), soft, "1.4 × 10¹⁰ years"),
        ("trying every shape", math.log10(years), amber, "1.6 × 10²⁷ years")]
im, d = hbars(rows, X, [(-10, -10), (0, 0), (10, 10), (20, 20)], "years, as a power of ten", 300, 310, tick_power=True)
save(im, "levinthal.png", 300)

# Membrane biophysics Closer Look: thickness from capacitance, and the field across it.
dthick = 8.854e-12 * 2.2 / 1e-2
field = 0.07 / 4e-9
assert round(dthick * 1e9, 1) == 1.9 and round(field / 1e6, 1) == 17.5 and round(field / 3e6) == 6
assert round(1e7 * 1.6e-19 * 1e12, 1) == 1.6 and round(140e-12 / 0.65e-18 / 1e8, 1) == 2.2
X = lambda v: (330 + 460 * v / 20) * SC
im, d = hbars([("dry air breaks down at", 3, soft, "3 MV/m"), ("across a resting membrane", field / 1e6, amber, "about 18 MV/m, held for life")], X,
              [(0, "0"), (5, "5"), (10, "10"), (15, "15"), (20, "20")], "electric field, megavolts per metre", 260, 310)
save(im, "membrane-field.png", 260)

# Molecular machines Closer Look: the energy budget of one step, in pN nm.
kT = 1.38e-23 * 310 * 1e21
atp = 50000 / 6.022e23 * 1e21
work = 6 * 8.2
assert round(kT, 1) == 4.3 and round(atp) == 83 and round(work) == 49 and round(100 * work / atp) == 59 and round(atp / kT) == 19
assert round(251 / 3) == 84
rows = [("thermal energy, kT", kT, soft, f"{kT:.1f}"), ("kinesin step, 6 pN × 8.2 nm", work, blue, f"{work:.0f}: 59% of an ATP"),
        ("one ATP", atp, amber, f"{atp:.0f}"), ("ATP synthase, per ATP", 251 / 3, blue, "84: all of it")]
X = lambda v: (330 + 440 * v / 100) * SC
im, d = hbars(rows, X, [(0, "0"), (25, "25"), (50, "50"), (75, "75"), (100, "100")], "energy, piconewton-nanometres", 340, 310)
save(im, "motor-energy.png", 340)
