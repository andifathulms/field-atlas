"""Draw the Brain Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/brain.py src/fonts <outdir>

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

# Neuroanatomy Closer Look: where the neurons are, against where the mass is.
neurons = {"cerebral cortex": 16.3, "cerebellum": 69.0, "rest of the brain": 0.69}
total = sum(neurons.values())
assert round(total, 1) == 86.0 or round(total, 1) == 86.1
assert [round(100 * v / 86.1, 1) for v in neurons.values()] == [18.9, 80.1, 0.8]
assert round(1.5e14 / 1.63e10, -2) == 9200 and abs(20 / 8.61e10 / 2.3e-10 - 1) < 0.02
mass = {"cerebral cortex": 0.8, "cerebellum": 0.1, "rest of the brain": 0.1}   # "about four fifths", "about a tenth"
h = 330
im, d = canvas(h)
X = lambda f: (300 + 520 * f) * SC
for f in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(X(f), 20 * SC), (X(f), 250 * SC)], fill=rule, width=SC)
    d.text((X(f), 260 * SC), f"{f:.0%}", font=fm, fill=soft, anchor="mt")
for i, name in enumerate(neurons):
    y = 50 + 76 * i
    d.text((280 * SC, (y + 10) * SC), name, font=fi, fill=ink, anchor="rm")
    m, n = mass[name], neurons[name] / 86.1
    d.rectangle([X(0), (y - 8) * SC, X(m), (y + 8) * SC], fill=soft)
    d.text((X(m) + 6 * SC, y * SC), f"mass ~{m:.0%}", font=fs, fill=soft, anchor="lm")
    d.rectangle([X(0), (y + 12) * SC, X(n), (y + 28) * SC], fill=blue)
    d.text((X(n) + 6 * SC, (y + 20) * SC), f"neurons {neurons[name]:g} billion ({n:.0%})", font=fs, fill=blue, anchor="lm")
d.text((W / 2 * SC, 300 * SC), "share of the brain's mass (grey) and of its 86 billion neurons (blue)", font=fi, fill=ink, anchor="mm")
save(im, "neuron-counts.png", h)

# Electrophysiology Closer Look: Nernst and Goldman voltages for the squid axon.
f = 25.1
eK, eNa = f * math.log(20 / 400), f * math.log(440 / 50)
rest = f * math.log((20 + 0.04 * 440 + 0.45 * 52) / (400 + 0.04 * 50 + 0.45 * 560))
peak = f * math.log((20 + 20 * 440 + 0.45 * 52) / (400 + 20 * 50 + 0.45 * 560))
assert [round(v) for v in (eK, eNa, rest, peak)] == [-75, 55, -60, 42]
h = 290
im, d = canvas(h)
X = lambda mv: (80 + 740 * (mv + 100) / 180) * SC
d.rectangle([X(-100), 128 * SC, X(80), 136 * SC], fill=pale)
for mv in range(-100, 81, 20):
    d.line([(X(mv), 120 * SC), (X(mv), 144 * SC)], fill=ink if mv == 0 else rule, width=2 * SC if mv == 0 else SC)
    d.text((X(mv), 152 * SC), f"{mv:+d}" if mv else "0", font=fm, fill=soft, anchor="mt")
marks = [(eK, "potassium only", blue, "up"), (rest, "at rest", ink, "down"), (peak, "peak of an impulse", amber, "down"), (eNa, "sodium only", amber, "up")]
for v, lab, colour, side in marks:
    dot(d, X(v), 132 * SC, colour, 9)
    y = 82 if side == "up" else 192
    d.line([(X(v), (y + (14 if side == "up" else -14)) * SC), (X(v), 132 * SC)], fill=rule, width=SC)
    d.text((X(v), y * SC), f"{lab}: {v:+.0f} mV", font=fm, fill=colour, anchor="mm")
d.text((W / 2 * SC, 252 * SC), "membrane voltage, inside relative to outside, mV", font=fi, fill=ink, anchor="mm")
save(im, "membrane-voltages.png", h)

# Synaptic transmission Closer Look: Katz's Poisson counts of packets.
m, n = 0.92 / 0.40, 400
assert round(m, 1) == 2.3
expected = [n * math.exp(-m) * m ** k / math.factorial(k) for k in range(7)]
expected.append(n - sum(expected))
assert [round(v, 1) for v in expected] == [40.1, 92.2, 106.1, 81.3, 46.8, 21.5, 8.2, 3.7]
h = 490; L, R, T, B = 110, 860, 40, 380
im, d = canvas(h)
X = lambda k: (L + (R - L) * (k + 0.5) / 8) * SC
Y = lambda v: (B - (B - T) * v / 120) * SC
for v in range(0, 121, 20):
    d.line([(L * SC, Y(v)), (R * SC, Y(v))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(v)), f"{v}", font=fm, fill=soft, anchor="rm")
for k, v in enumerate(expected):
    w = (R - L) / 8 * 0.7 / 2
    d.rectangle([X(k) - w * SC, Y(v), X(k) + w * SC, Y(0)], fill=amber if k == 0 else blue)
    d.text((X(k), Y(v) - 6 * SC), f"{v:.1f}", font=fs, fill=ink, anchor="mb")
    d.text((X(k), (B + 14) * SC), f"{0.4 * k:.1f}" + ("+" if k == 7 else ""), font=fm, fill=soft, anchor="mt")
    d.text((X(k), (B + 36) * SC), f"{k}" + (" or more" if k == 7 else ""), font=fs, fill=soft, anchor="mt")
d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
d.text(((L - 12) * SC, (T - 14) * SC), "impulses out of 400", font=fm, fill=soft, anchor="ls")
d.text((W / 2 * SC, (B + 64) * SC), "response size, mV, and packets released (m = 2.3)", font=fi, fill=ink, anchor="mt")
save(im, "quantal-release.png", h)

# Computational neuroscience Closer Look: two layers of threshold units compute XOR.
unit = lambda inputs, weights, theta: int(sum(i * w for i, w in zip(inputs, weights)) >= theta)
OR = lambda a, b: unit((a, b), (1, 1), 1)
AND = lambda a, b: unit((a, b), (1, 1), 2)
XOR = lambda a, b: unit((OR(a, b), AND(a, b)), (1, -2), 1)
assert [XOR(a, b) for a, b in [(0, 0), (0, 1), (1, 0), (1, 1)]] == [0, 1, 1, 0]
h = 380
im, d = canvas(h)
pos = {"x1": (110, 110), "x2": (110, 260), "OR": (400, 110), "AND": (400, 260), "out": (690, 185)}
def node(name, label, sub, colour):
    x, y = pos[name]
    d.ellipse([(x - 56) * SC, (y - 56) * SC, (x + 56) * SC, (y + 56) * SC], fill=(255, 255, 255), outline=colour, width=3 * SC)
    d.text((x * SC, (y - 8) * SC), label, font=fi, fill=colour, anchor="mm")
    if sub:
        d.text((x * SC, (y + 20) * SC), sub, font=fs, fill=soft, anchor="mm")
def edge(a, b, w, colour=soft, t=0.5, dy=-12):
    (x0, y0), (x1, y1) = pos[a], pos[b]
    ang = math.atan2(y1 - y0, x1 - x0)
    s = ((x0 + 56 * math.cos(ang)) * SC, (y0 + 56 * math.sin(ang)) * SC)
    e = ((x1 - 56 * math.cos(ang)) * SC, (y1 - 56 * math.sin(ang)) * SC)
    d.line([s, e], fill=colour, width=2 * SC)
    d.polygon([e, (e[0] - 12 * SC * math.cos(ang) + 6 * SC * math.sin(ang), e[1] - 12 * SC * math.sin(ang) - 6 * SC * math.cos(ang)),
               (e[0] - 12 * SC * math.cos(ang) - 6 * SC * math.sin(ang), e[1] - 12 * SC * math.sin(ang) + 6 * SC * math.cos(ang))], fill=colour)
    mx, my = x0 + (x1 - x0) * t, y0 + (y1 - y0) * t
    d.text((mx * SC, (my + dy) * SC), w, font=fm, fill=colour, anchor="mm")
for a in ("x1", "x2"):
    for b in ("OR", "AND"):
        edge(a, b, "+1", t=0.3 if a == "x1" else 0.7, dy=-12 if (a, b) != ("x2", "OR") else 12)
edge("OR", "out", "+1", blue, dy=-16)
edge("AND", "out", "−2", amber, dy=18)
node("x1", "x₁", "", ink); node("x2", "x₂", "", ink)
node("OR", "OR", "fires at ≥ 1", blue); node("AND", "AND", "fires at ≥ 2", amber); node("out", "XOR", "fires at ≥ 1", ink)
tx = 770
d.text((tx * SC, 90 * SC), "x₁ x₂ → out", font=fm, fill=soft, anchor="lm")
for i, (a, b) in enumerate([(0, 0), (0, 1), (1, 0), (1, 1)]):
    d.text((tx * SC, (120 + 28 * i) * SC), f"{a}  {b}  →  {XOR(a, b)}", font=fm, fill=ink, anchor="lm")
d.text((W / 2 * SC, 350 * SC), "the hidden layer's OR and AND feed one more threshold unit", font=fi, fill=ink, anchor="mm")
save(im, "xor-network.png", h)

# Systems neuroscience Closer Look: what a voxel averages over.
density = 1.63e10 / 5e5
assert round(density, -2) == 32600
voxels = [(1, int(round(density, -3))), (2, int(round(8 * density, -4))), (3, int(round(27 * density, -4)))]
assert [v for _, v in voxels] == [33000, 260000, 880000]
assert round(1.5e14 / 5e5 * 27 / 1e9) == 8 and 5 / 0.001 == 5000
h = 300
im, d = canvas(h)
X = lambda v: (260 + 520 * v / 1e6) * SC
for v in range(0, 1_000_001, 250_000):
    d.line([(X(v), 30 * SC), (X(v), 210 * SC)], fill=rule, width=SC)
    d.text((X(v), 220 * SC), f"{v:,}", font=fm, fill=soft, anchor="mt")
for i, (side, v) in enumerate(voxels):
    y = (60 + 58 * i) * SC
    d.text((240 * SC, y), f"{side} mm voxel", font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 16 * SC, max(X(v), X(0) + 3 * SC), y + 16 * SC], fill=blue if side < 3 else amber)
    d.text((max(X(v), X(0) + 3 * SC) + 8 * SC, y), f"about {v:,} neurons", font=fm, fill=ink, anchor="lm") if v < 600000 else \
        d.text((X(v) - 8 * SC, y), f"about {v:,} neurons, 8 billion synapses", font=fm, fill="white", anchor="rm")
d.text((W / 2 * SC, 268 * SC), "cortical neurons inside one fMRI voxel", font=fi, fill=ink, anchor="mm")
save(im, "voxel-neurons.png", h)
