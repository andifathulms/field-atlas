"""Draw the Substance Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/substance.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import site, sys; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue = (164, 84, 29), (44, 59, 128)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 22 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)
fs = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 15 * SC)

def rich(d, x, y, text, colour):
    """Left-aligned text, vertically centred on y; "^+" and "^-" set a raised charge,
    which the serif's superscript block lacks."""
    for i, part in enumerate(text.split("^")):
        if i:
            sign = "+" if part[0] == "+" else "\u2212"
            d.text((x, y - 8 * SC), sign, font=fs, fill=colour, anchor="lm")
            x += d.textlength(sign, font=fs) + 1 * SC
            part = part[1:]
        d.text((x, y), part, font=fi, fill=colour, anchor="lm")
        x += d.textlength(part, font=fi)

num = lambda e: f"{e:+d}".replace("-", "\u2212") if e else "0"

def arrow(d, x, y0, y1, colour, width=3):
    d.line([(x, y0), (x, y1)], fill=colour, width=width * SC)
    s = 9 * SC if y1 > y0 else -9 * SC
    d.polygon([(x, y1), (x - 6 * SC, y1 - s), (x + 6 * SC, y1 - s)], fill=colour)

# Chemical bonding Closer Look: the Born-Haber cycle for sodium chloride, kJ/mol.
steps = [("sublimation", +108), ("ionisation", +496), ("½ Cl₂ dissociation", +121), ("electron attachment", -349)]
formation = -411
measurable = sum(e for _, e in steps)
lattice = formation - measurable
assert measurable == 376 and lattice == -787
levels = [("Na(s) + ½Cl₂(g)", 0)]
for _, e in steps:
    levels.append((None, levels[-1][1] + e))
names = ["Na(s) + ½Cl₂(g)", "Na(g) + ½Cl₂(g)", "Na^+(g) + e^- + ½Cl₂(g)", "Na^+(g) + e^- + Cl(g)", "Na^+(g) + Cl^-(g)"]
levels = [(n, e) for n, (_, e) in zip(names, levels)] + [("NaCl(s)", formation)]
assert [e for _, e in levels] == [0, 108, 604, 725, 376, -411]
W, H = 900, 620; T, B = 50, 560
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
Y = lambda e: (T + (B - T) * (760 - e) / (760 + 450)) * SC
bars = [(60, 300), (150, 390), (240, 480), (330, 570), (420, 660), (60, 300)]
for (name, e), (x0, x1) in zip(levels, bars):
    d.line([(x0 * SC, Y(e)), (x1 * SC, Y(e))], fill=ink, width=3 * SC)
    rich(d, (x1 + 10) * SC, Y(e), f"{name}   {num(e)}", ink)
for i, (label, e) in enumerate(steps):
    x = (bars[i + 1][0] + 30) * SC
    arrow(d, x, Y(levels[i][1]), Y(levels[i + 1][1]), blue)
    d.text((x - 10 * SC, (Y(levels[i][1]) + Y(levels[i + 1][1])) / 2), num(e), font=fm, fill=blue, anchor="rm")
xl = 640 * SC
arrow(d, xl, Y(levels[4][1]), Y(formation), amber, 4)
d.line([(300 * SC, Y(formation)), (xl, Y(formation))], fill=rule, width=SC)
d.text((xl - 12 * SC, Y(-150)), "lattice energy", font=fm, fill=amber, anchor="rm")
d.text((xl - 12 * SC, Y(-150) + 26 * SC), f"{num(lattice)} kJ/mol", font=fm, fill=amber, anchor="rm")
arrow(d, 90 * SC, Y(0), Y(formation), soft, 2)
d.text((100 * SC, Y(-200)), f"heat of formation {num(formation)}", font=fm, fill=soft, anchor="lm")
d.text((20 * SC, 18 * SC), "energy relative to the elements, kJ/mol, drawn to scale", font=fm, fill=soft, anchor="lt")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/born-haber.png", optimize=True)
print("born-haber.png", [e for _, e in levels], lattice)

# Quantum chemistry Closer Look: a wavefunction on a 10-point grid needs 10^(3N) numbers.
def axes(d, X, Y, L, R, T, B, xt, yt, xlab, ylab):
    for y in yt:
        d.line([(L * SC, Y(y)), (R * SC, Y(y))], fill=rule, width=SC)
        d.text(((L - 12) * SC, Y(y)), f"{y:g}", font=fm, fill=soft, anchor="rm")
    for x in xt:
        d.text((X(x), (B + 18) * SC), f"{x:g}", font=fm, fill=soft, anchor="mt")
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 52) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

digits = lambda n: 3 * n
benzene = 6 * 6 + 6
universe = 80
assert digits(10) == 30 and benzene == 42 and digits(benzene) == 126
cross = next(n for n in range(1, 50) if digits(n) > universe)
assert cross == 27
fe = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 12 * SC)

def power(d, x, y, text, e, colour, anchor):
    """Draw text ending in 10 with a raised exponent; anchor is l or r plus m, t or b."""
    w = d.textlength(text, font=fm) + d.textlength(str(e), font=fe) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x
    d.text((x0, y), text, font=fm, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=fm, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=fm) + 1 * SC, top - 3 * SC), str(e), font=fe, fill=colour, anchor="lt")

W, H = 900, 520; L, R, T, B = 110, 860, 40, 440
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
X = lambda n: (L + (R - L) * n / 45) * SC
Y = lambda p: (B - (B - T) * p / 140) * SC
axes(d, X, Y, L, R, T, B, [0, 10, 20, 30, 40], [], "number of electrons, N", "numbers needed on a 10-point grid")
for p in range(0, 141, 20):
    d.line([(L * SC, Y(p)), (R * SC, Y(p))], fill=rule, width=SC)
    power(d, (L - 12) * SC, Y(p), "10", p, soft, "rm")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(X(0), Y(universe)), (X(45), Y(universe))], fill=amber, width=2 * SC)
power(d, X(1), Y(universe) - 8 * SC, "atoms in the observable universe ≈ 10", universe, amber, "lb")
d.line([(X(0), Y(0)), (X(45), Y(digits(45)))], fill=blue, width=4 * SC)
for name, n, off, anc in [("water", 10, (14, 8), "lt"), ("benzene", benzene, (-14, -8), "rb")]:
    d.ellipse([X(n) - 7 * SC, Y(digits(n)) - 7 * SC, X(n) + 7 * SC, Y(digits(n)) + 7 * SC], fill=blue)
    power(d, X(n) + off[0] * SC, Y(digits(n)) + off[1] * SC, f"{name}, N = {n}: 10", digits(n), blue, anc)
d.line([(X(cross), Y(0)), (X(cross), Y(digits(cross)))], fill=rule, width=SC)
d.text((X(cross) + 8 * SC, Y(10)), f"N = {cross}: past the atoms", font=fm, fill=soft, anchor="lm")
im.resize((W, H), Image.LANCZOS).save(f"{outdir}/exponential-wall.png", optimize=True)
print("exponential-wall.png", digits(10), digits(benzene), cross)
