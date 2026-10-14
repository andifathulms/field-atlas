"""Draw the Reaction Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/reaction.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose.
"""
import math, site, sys; sys.path.append(site.getusersitepackages())
import numpy as np
from PIL import Image, ImageDraw, ImageFont

fd, outdir = sys.argv[1], sys.argv[2]
SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
amber, blue = (164, 84, 29), (44, 59, 128)
fi = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 24 * SC)
fm = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17 * SC)
fe = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 12 * SC)
R_GAS = 8.314
W, H = 900, 520; L, R, T, B = 110, 860, 40, 440

def canvas():
    im = Image.new("RGB", (W * SC, H * SC), "white")
    return im, ImageDraw.Draw(im)

def power(d, x, y, text, e, colour, anchor):
    """Draw text ending in 10 with a raised exponent; anchor is l or r plus m, t or b."""
    w = d.textlength(text, font=fm) + d.textlength(str(e), font=fe) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x
    d.text((x0, y), text, font=fm, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=fm, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=fm) + 1 * SC, top - 3 * SC), str(e).replace("-", "−"), font=fe, fill=colour, anchor="lt")

def frame(d, X, xt, xlab, ylab, xfmt="{:g}"):
    for x in xt:
        d.text((X(x), (B + 18) * SC), xfmt.format(x), font=fm, fill=soft, anchor="mt")
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 52) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

def dot(d, x, y, colour, r=7):
    d.ellipse([x - r * SC, y - r * SC, x + r * SC, y + r * SC], fill=colour)

def save(im, name):
    im.resize((W, H), Image.LANCZOS).save(f"{outdir}/{name}", optimize=True)
    print(name)

# Chemical thermodynamics Closer Look: ammonia's equilibrium constant against temperature.
dH, dS = -92.2e3, -198.0
K = lambda t: math.exp(-(dH - t * dS) / (R_GAS * t))
assert abs(K(298) / 6.6e5 - 1) < 0.01 and abs(K(700) / 3.5e-4 - 1) < 0.02
assert round(math.log10(K(298) / K(700))) == 9
t_even = dH / dS
im, d = canvas()
X = lambda t: (L + (R - L) * (t - 250) / 550) * SC
Y = lambda lg: (B - (B - T) * (lg + 6) / 14) * SC
for lg in range(-6, 9, 2):
    d.line([(L * SC, Y(lg)), (R * SC, Y(lg))], fill=rule, width=SC)
    power(d, (L - 12) * SC, Y(lg), "10", lg, soft, "rm")
frame(d, X, [300, 400, 500, 600, 700, 800], "temperature, K", "equilibrium constant K for ammonia synthesis")
d.line([(L * SC, Y(0)), (R * SC, Y(0))], fill=soft, width=2 * SC)
d.line([(X(t / 2), Y(math.log10(K(t / 2)))) for t in range(500, 1601) if math.log10(K(t / 2)) <= 8], fill=blue, width=4 * SC)
for t, anc, dx, dy in [(298, "lm", 14, 0), (700, "rt", -14, 14)]:
    x, y = X(t), Y(math.log10(K(t)))
    dot(d, x, y, amber)
    k = K(t); e = math.floor(math.log10(k)); m = k / 10 ** e
    power(d, x + dx * SC, y + dy * SC, f"{t} K: K = {m:.2g} × 10" if t < 500 else f"{t} K: K = {m:.3g} × 10", e, amber, anc)
d.line([(X(t_even), Y(0)), (X(t_even), B * SC)], fill=rule, width=SC)
d.text((X(t_even) + 8 * SC, Y(0) - 10 * SC), f"K = 1 at {t_even:.0f} K", font=fm, fill=soft, anchor="lb")
d.text((X(790), Y(5.5)), "hotter: faster, but less ammonia", font=fm, fill=soft, anchor="rm")
save(im, "ammonia-equilibrium.png")

# Chemical kinetics Closer Look: the ten-degree rule from the Arrhenius equation.
ratio = lambda ea, t: math.exp(ea / R_GAS * (1 / 298 - 1 / t))
assert round(ratio(50e3, 308), 2) == 1.93 and round(ratio(100e3, 308), 1) == 3.7
im, d = canvas()
X = lambda t: (L + (R - L) * (t - 298) / 40) * SC
Y = lambda r: (B - (B - T) * math.log10(r) / 3) * SC
for r in [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]:
    d.line([(L * SC, Y(r)), (R * SC, Y(r))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(r)), f"×{r}", font=fm, fill=soft, anchor="rm")
frame(d, X, [298, 308, 318, 328, 338], "temperature, K", "rate relative to 298 K (log scale)")
for ea, colour, lab in [(50e3, blue, "barrier 50 kJ/mol"), (100e3, amber, "barrier 100 kJ/mol")]:
    d.line([(X(t / 10), Y(ratio(ea, t / 10))) for t in range(2980, 3381)], fill=colour, width=4 * SC)
    x, y = X(308), Y(ratio(ea, 308))
    dot(d, x, y, colour)
    d.text((x + 12 * SC, y + 6 * SC), f"×{ratio(ea, 308):.2f}" if ea < 6e4 else f"×{ratio(ea, 308):.1f}", font=fm, fill=colour, anchor="lt")
    d.text((X(337), Y(ratio(ea, 338)) - 14 * SC), lab, font=fm, fill=colour, anchor="rb")
d.line([(X(308), B * SC), (X(308), Y(ratio(100e3, 308)))], fill=rule, width=SC)
save(im, "ten-degree-rule.png")

# Transition state theory: a collinear potential energy surface for H + H2 (London-Eyring-Polanyi-Sato).
De, beta, re, k_sato = 4.746, 1.942, 0.7414, 0.18  # eV, 1/Å, Å
def leps(r1, r2):
    r3 = r1 + r2
    def QJ(r):
        e = np.exp(-beta * (r - re))
        E1 = De * (e * e - 2 * e)            # singlet Morse
        E3 = De / 2 * (e * e + 2 * e)        # Sato anti-Morse triplet
        return ((1 + k_sato) * E1 + (1 - k_sato) * E3) / 2, ((1 + k_sato) * E1 - (1 - k_sato) * E3) / 2
    (Q1, J1), (Q2, J2), (Q3, J3) = QJ(r1), QJ(r2), QJ(r3)
    return (Q1 + Q2 + Q3 - np.sqrt(((J1 - J2) ** 2 + (J2 - J3) ** 2 + (J3 - J1) ** 2) / 2)) / (1 + k_sato)
lo, hi, n = 0.5, 3.0, 700
g = np.linspace(lo, hi, n)
r1, r2 = np.meshgrid(g, g[::-1])
E = leps(r1, r2)
E0 = leps(np.array(re), np.array(8.0))
sym = np.linspace(0.7, 1.3, 6001)
es = leps(sym, sym); rs = sym[np.argmin(es)]; barrier = (es.min() - E0) * 96.485
assert abs(rs - 0.9) < 0.05 and 20 < barrier < 60, (rs, barrier)
Er = np.clip((E - E0) * 96.485, -460, 300)
levels = np.arange(-440, 300, 40)
band = np.digitize(Er, levels)
edge = np.zeros_like(band, dtype=bool)
edge[:-1, :] |= band[:-1, :] != band[1:, :]
edge[:, :-1] |= band[:, :-1] != band[:, 1:]
shade = 1 - (Er - Er.min()) / (Er.max() - Er.min())
paper = np.array([255, 255, 255], float); deep = np.array([196, 205, 228], float)
rgb = paper * (1 - shade[..., None]) + deep * shade[..., None]
rgb[edge] = np.array(soft)
side = 400
surf = Image.fromarray(rgb.astype(np.uint8)).resize((side * SC, side * SC), Image.LANCZOS)
im = Image.new("RGB", (W * SC, H * SC), "white"); d = ImageDraw.Draw(im)
ox, oy = 110, 40
im.paste(surf, (ox * SC, oy * SC))
P = lambda a, b: ((ox + side * (a - lo) / (hi - lo)) * SC, (oy + side * (hi - b) / (hi - lo)) * SC)
d.rectangle([P(lo, hi), P(hi, lo)], outline=ink, width=2 * SC)
for v in [0.5, 1.0, 1.5, 2.0, 2.5, 3.0]:
    d.text((P(v, lo)[0], (oy + side + 14) * SC), f"{v:g}", font=fm, fill=soft, anchor="mt")
    d.text(((ox - 12) * SC, P(lo, v)[1]), f"{v:g}", font=fm, fill=soft, anchor="rm")
d.text(((ox + side / 2) * SC, (oy + side + 44) * SC), "distance A–B, Å", font=fi, fill=ink, anchor="mt")
d.text(((ox - 12) * SC, (oy - 14) * SC), "distance B–C, Å", font=fm, fill=soft, anchor="ls")
# Minimum-energy path: the valley floor across r1 at each r2 above the saddle, mirrored below it.
path = []
for b in np.linspace(2.9, rs, 120):
    a = np.linspace(0.5, b, 4000); path.append((a[np.argmin(leps(a, np.full_like(a, b)))], b))
path += [(b, a) for a, b in reversed(path)]
d.line([P(a, b) for a, b in path], fill=amber, width=3 * SC)
sx, sy = P(rs, rs); dot(d, sx, sy, amber)
tx = (ox + side + 40) * SC
d.text((tx, P(0, 2.6)[1]), "A–B + C: A and B bonded,", font=fm, fill=ink, anchor="lm")
d.text((tx, P(0, 2.6)[1] + 26 * SC), "C far away (top left)", font=fm, fill=soft, anchor="lm")
d.text((tx, P(0, 1.6)[1]), f"saddle point at {rs:.2f} Å, {rs:.2f} Å", font=fm, fill=amber, anchor="lm")
d.text((tx, P(0, 1.6)[1] + 26 * SC), "the transition state", font=fm, fill=amber, anchor="lm")
d.text((tx, P(0, 0.7)[1]), "A + B–C: B and C bonded,", font=fm, fill=ink, anchor="lm")
d.text((tx, P(0, 0.7)[1] + 26 * SC), "A far away (bottom right)", font=fm, fill=soft, anchor="lm")
d.text((tx, (oy + side + 44) * SC), "contours every 40 kJ/mol", font=fm, fill=soft, anchor="lt")
save(im, "potential-surface.png")

# Transition state theory Closer Look: what a barrier costs, from Eyring's equation.
pref = 1.381e-23 * 298 / 6.626e-34
kE = lambda g: pref * math.exp(-g * 1000 / (R_GAS * 298))
assert round(pref / 1e12, 1) == 6.2 and abs(kE(100) / 1.8e-5 - 1) < 0.05
assert abs(R_GAS * 298 * math.log(10) / 1000 - 5.7) < 0.01
half = lambda g: math.log(2) / kE(g)
assert abs(half(100) / 3600 - 10.5) < 0.2
im, d = canvas()
X = lambda g: (L + (R - L) * (g - 40) / 100) * SC
Y = lambda lg: (B - (B - T) * (lg + 6) / 18) * SC
marks = [(1e-3, "1 ms"), (1, "1 second"), (3600, "1 hour"), (86400 * 365.25, "1 year"), (86400 * 365.25 * 1000, "1000 years")]
for s, lab in marks:
    d.line([(L * SC, Y(math.log10(s))), (R * SC, Y(math.log10(s)))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(math.log10(s))), lab, font=fm, fill=soft, anchor="rm")
frame(d, X, [40, 60, 80, 100, 120, 140], "barrier height ΔG‡, kJ/mol", "half-life at 298 K (log scale)")
d.line([(X(g / 10), Y(math.log10(half(g / 10)))) for g in range(400, 1401)], fill=blue, width=4 * SC)
x, y = X(100), Y(math.log10(half(100)))
dot(d, x, y, amber)
d.text((x + 14 * SC, y + 8 * SC), f"100 kJ/mol: about {half(100) / 3600:.1f} hours", font=fm, fill=amber, anchor="lt")
step = R_GAS * 298 * math.log(10) / 1000
g0 = 70
d.line([(X(g0), Y(math.log10(half(g0)))), (X(g0 + step), Y(math.log10(half(g0))))], fill=ink, width=2 * SC)
d.line([(X(g0 + step), Y(math.log10(half(g0)))), (X(g0 + step), Y(math.log10(half(g0 + step))))], fill=ink, width=2 * SC)
d.text((X(g0 + step) + 10 * SC, Y(math.log10(half(g0)) + 0.5)), f"+{step:.1f} kJ/mol: ten times slower", font=fm, fill=ink, anchor="lm")
save(im, "barrier-cost.png")

# Reaction dynamics Closer Look: the timescales a femtosecond flash must beat.
c_cm = 2.998e10
period = lambda wn: 1e15 / (wn * c_cm)
assert round(period(1000)) == 33 and round(period(2900)) in (11, 12)
E_mol = 50000 / 6.022e23; m = 20 * 1.66e-27
v = math.sqrt(2 * E_mol / m); t_break = 2e-10 / v * 1e15
assert abs(v - 2.2e3) < 50 and abs(t_break - 90) < 3
events = [(period(2900), "C–H stretch: 11.5 fs", blue), (period(1000), "slower vibration: 33 fs", blue),
          (t_break, f"bond breaking: about {round(t_break, -1):.0f} fs", amber), (1000, "NaI oscillation: about 1 ps", blue)]
H2 = 380
im = Image.new("RGB", (W * SC, H2 * SC), "white"); d = ImageDraw.Draw(im)
X = lambda fs: (L + (740 - L) * math.log10(fs) / 4) * SC
base = 300
d.rectangle([X(1), (base - 10) * SC, X(100), (base + 10) * SC], fill=(242, 228, 214))
d.text((X(10), (base + 22) * SC), "pulses below 100 fs, 1987", font=fm, fill=amber, anchor="mt")
d.line([(X(1), base * SC), (X(1e4), base * SC)], fill=ink, width=2 * SC)
for fs, lab in [(1, "1 fs"), (10, "10 fs"), (100, "100 fs"), (1000, "1 ps"), (1e4, "10 ps")]:
    d.line([(X(fs), (base - 8) * SC), (X(fs), (base + 8) * SC)], fill=ink, width=2 * SC)
    d.text((X(fs), (base + 50) * SC), lab, font=fm, fill=soft, anchor="mt")
for i, (fs, lab, colour) in enumerate(events):
    y = 40 + 60 * i
    d.line([(X(fs), y * SC + 14 * SC), (X(fs), base * SC)], fill=rule, width=SC)
    dot(d, X(fs), base * SC, colour)
    d.text((X(fs) - 6 * SC, y * SC), lab, font=fm, fill=colour, anchor="lm")
im.resize((W, H2), Image.LANCZOS).save(f"{outdir}/femtosecond-scale.png", optimize=True)
print("femtosecond-scale.png", round(period(2900), 1), round(period(1000), 1), round(t_break))
