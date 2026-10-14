"""Draw the Disease Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/disease.py src/fonts <outdir>

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

def power(d, x, y, text, e, colour, anchor):
    es = str(e).replace("-", "−")
    w = d.textlength(text, font=fm) + d.textlength(es, font=fs) + 1 * SC
    x0 = x - w if anchor[0] == "r" else x
    d.text((x0, y), text, font=fm, fill=colour, anchor="l" + anchor[1])
    top = d.textbbox((x0, y), text, font=fm, anchor="l" + anchor[1])[1]
    d.text((x0 + d.textlength(text, font=fm) + 1 * SC, top - 3 * SC), es, font=fs, fill=colour, anchor="lt")

def axes(d, L, R, T, B, xlab, ylab):
    d.line([(L * SC, B * SC), (R * SC, B * SC)], fill=ink, width=2 * SC)
    d.line([(L * SC, T * SC), (L * SC, B * SC)], fill=ink, width=2 * SC)
    d.text((((L + R) / 2) * SC, (B + 50) * SC), xlab, font=fi, fill=ink, anchor="mt")
    d.text(((L - 12) * SC, (T - 14) * SC), ylab, font=fm, fill=soft, anchor="ls")

# Epidemiology Closer Look: Doll and Hill's 1950 table and its odds ratio.
cases, controls = (647, 2), (622, 27)
odds = cases[0] * controls[1] / (cases[1] * controls[0])
assert sum(cases) == 649 and sum(controls) == 649 and round(odds, 1) == 14.0
assert round(100 * cases[1] / 649, 1) == 0.3 and round(100 * controls[1] / 649, 1) == 4.2
h = 330
im, d = canvas(h)
X = lambda n: (300 + 520 * n / 649) * SC
for i, (lab, (sm, ns)) in enumerate([("lung-cancer patients", cases), ("hospital controls", controls)]):
    y = (70 + 90 * i) * SC
    d.text((280 * SC, y), lab, font=fi, fill=ink, anchor="rm")
    d.rectangle([X(0), y - 20 * SC, X(sm), y + 20 * SC], fill=soft)
    d.rectangle([X(sm), y - 20 * SC, X(sm + ns), y + 20 * SC], fill=amber)
    d.text((X(sm / 2), y), f"{sm} smokers", font=fm, fill="white", anchor="mm")
    d.text((X(sm + ns) - 6 * SC, y - 32 * SC), f"{ns} non-smokers ({100 * ns / 649:.1f}%)", font=fm, fill=amber, anchor="rm")
d.text((W / 2 * SC, 250 * SC), f"odds ratio = (647 × 27) / (2 × 622) = {odds:.1f}", font=fm, fill=ink, anchor="mm")
d.text((W / 2 * SC, 294 * SC), "649 men in each group, by smoking history", font=fi, fill=ink, anchor="mm")
save(im, "doll-hill.png", h)

# Infectious disease dynamics Closer Look: an SIR epidemic with R0 = 2.5.
def final_size(r0):
    z = 0.5
    for _ in range(200):
        z = 1 - math.exp(-r0 * z)
    return z
fs_table = {1.5: 0.58, 2.5: 0.89, 5: 0.993}
for r0, z in fs_table.items():
    assert abs(final_size(r0) - z) < 0.006, (r0, final_size(r0))
assert final_size(15) > 0.9999
r0, gamma = 2.5, 1 / 7
beta = r0 * gamma
S, I, Rr, dt = 1 - 1e-5, 1e-5, 0.0, 0.05
traj = []
for k in range(int(220 / dt)):
    if k % 20 == 0:
        traj.append((k * dt, S, I, Rr))
    dS = -beta * S * I; dI = beta * S * I - gamma * I
    S, I, Rr = S + dS * dt, I + dI * dt, Rr + gamma * I * dt
peak = max(traj, key=lambda p: p[2])
assert abs(peak[1] - 1 / r0) < 0.01 and abs(1 - traj[-1][1] - final_size(r0)) < 0.01
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda t: (L + (R - L) * t / 220) * SC
Y = lambda f: (B - (B - T) * f) * SC
for f in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(L * SC, Y(f)), (R * SC, Y(f))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(f)), f"{f:.0%}", font=fm, fill=soft, anchor="rm")
for t in range(0, 221, 40):
    d.text((X(t), (B + 18) * SC), f"{t}", font=fm, fill=soft, anchor="mt")
axes(d, L, R, T, B, "days, for R₀ = 2.5 and a week's infectiousness", "share of the population")
d.line([(L * SC, Y(1 - 1 / r0)), (R * SC, Y(1 - 1 / r0))], fill=amber, width=2 * SC)
d.text((X(218), Y(1 - 1 / r0) - 8 * SC), "herd-immunity threshold, 60%", font=fs, fill=amber, anchor="rb")
for idx, colour, lab in [(1, blue, "susceptible"), (2, amber, "infectious"), (3, green, "recovered")]:
    d.line([(X(p[0]), Y(p[idx])) for p in traj], fill=colour, width=4 * SC)
d.line([(X(peak[0]), Y(0)), (X(peak[0]), Y(1))], fill=rule, width=SC)
d.text((X(peak[0]) + 8 * SC, Y(0.97)), "peak: susceptibles fall to 1/R₀", font=fs, fill=soft, anchor="lm")
d.text((X(218), Y(final_size(r0)) + 10 * SC), f"recovered at the end: {final_size(r0):.0%}", font=fm, fill=green, anchor="rt")
d.text((X(218), Y(1 - final_size(r0)) - 10 * SC), "susceptible, never infected", font=fm, fill=blue, anchor="rb")
d.text((X(peak[0] - 8), Y(0.26)), "infectious", font=fm, fill=amber, anchor="rm")
save(im, "sir-epidemic.png", h)

h = 330
im, d = canvas(h)
X = lambda v: (220 + 600 * v) * SC
for v in [0, 0.25, 0.5, 0.75, 1.0]:
    d.line([(X(v), 30 * SC), (X(v), 240 * SC)], fill=rule, width=SC)
    d.text((X(v), 250 * SC), f"{v:.0%}", font=fm, fill=soft, anchor="mt")
for i, r in enumerate([1.5, 2.5, 5, 15]):
    y = (50 + 52 * i) * SC
    d.text((200 * SC, y), f"R₀ = {r:g}" + (", measles" if r == 15 else ""), font=fi, fill=ink, anchor="rm")
    z, hth = final_size(r), 1 - 1 / r
    d.rectangle([X(0), y - 14 * SC, X(z), y + 14 * SC], fill=pale)
    d.rectangle([X(0), y - 14 * SC, X(hth), y + 14 * SC], fill=blue)
    d.text((X(hth) - 6 * SC, y), f"{hth:.0%}", font=fm, fill="white", anchor="rm")
    d.text((X(z) + 6 * SC, y), f"{z:.1%}" if r < 15 else ">99.99%", font=fm, fill=ink, anchor="lm")
d.text((W / 2 * SC, 300 * SC), "blue: immunity that stops growth; to the end of the bar: infected if it runs", font=fi, fill=ink, anchor="mm")
save(im, "final-size.png", h)

# Virology Closer Look: Beijerinck's serial passage, if the agent were a toxin.
start = 1e-3 / 5e4 * 6.022e23            # molecules per mL at 1 mg/mL of a 50 kDa toxin
after = lambda n: start / 1e3 ** n
assert round(after(5)) == 12
h = 440; L, R, T, B = 130, 860, 40, 360
im, d = canvas(h)
X = lambda n: (L + (R - L) * n / 5) * SC
Y = lambda lg: (B - (B - T) * lg / 17) * SC
for lg in range(0, 18, 4):
    d.line([(L * SC, Y(lg)), (R * SC, Y(lg))], fill=rule, width=SC)
    power(d, (L - 12) * SC, Y(lg), "10", lg, soft, "rm")
for n in range(6):
    d.text((X(n), (B + 18) * SC), f"{n}", font=fm, fill=soft, anchor="mt")
axes(d, L, R, T, B, "passages through fresh plants, each a thousandfold dilution", "toxin molecules per millilitre")
d.line([(X(n), Y(math.log10(after(n)))) for n in range(6)], fill=amber, width=4 * SC)
for n in range(6):
    dot(d, X(n), Y(math.log10(after(n))), amber)
d.text((X(5) - 14 * SC, Y(math.log10(after(5))) - 10 * SC), f"about {after(5):.0f} molecules: no disease", font=fm, fill=amber, anchor="rb")
d.line([(X(0), Y(16)), (X(5), Y(16))], fill=blue, width=4 * SC)
d.text((X(5), Y(16) - 10 * SC), "what Beijerinck saw: just as infectious", font=fm, fill=blue, anchor="rb")
save(im, "serial-passage.png", h)

# Pharmacology Closer Look: resistant HIV virions already made each day.
virions, mu = 1e10, 3e-5
per_day = [virions * mu ** k for k in (1, 2, 3)]
assert round(per_day[0]) == 3e5 and round(per_day[1]) == 9 and abs(per_day[2] / 2.7e-4 - 1) < 0.01
assert round(1 / per_day[2], -2) == 3700 and round(1 / per_day[2] / 365) == 10
h = 300
im, d = canvas(h)
X = lambda lg: (300 + 440 * (lg + 4) / 10) * SC
for lg in range(-4, 7, 2):
    d.line([(X(lg), 30 * SC), (X(lg), 210 * SC)], fill=rule, width=SC)
    power(d, X(lg) - 10 * SC, 222 * SC, "10", lg, soft, "lt")
d.line([(X(0), 30 * SC), (X(0), 210 * SC)], fill=ink, width=2 * SC)
labs = ["300,000 a day", "9 a day", "one every 10 years"]
for i, v in enumerate(per_day):
    y = (60 + 56 * i) * SC
    d.text((280 * SC, y), ["one drug", "two drugs", "three drugs"][i], font=fi, fill=ink, anchor="rm")
    d.rectangle([X(-4), y - 15 * SC, X(math.log10(v)), y + 15 * SC], fill=amber if v >= 1 else blue)
    d.text((X(math.log10(v)) + 8 * SC, y), labs[i], font=fm, fill=ink, anchor="lm")
d.text((W / 2 * SC, 272 * SC), "resistant virions made per day before treatment (log scale)", font=fi, fill=ink, anchor="mm")
save(im, "hiv-resistance.png", h)

# Cancer biology Closer Look: incidence rising as the fifth power of age.
k = 6
inc = lambda age: (age / 40) ** (k - 1)
assert inc(80) / inc(40) == 32
h = 480; L, R, T, B = 110, 860, 40, 400
im, d = canvas(h)
X = lambda a: (L + (R - L) * (math.log10(a) - math.log10(20)) / (math.log10(90) - math.log10(20))) * SC
Y = lambda v: (B - (B - T) * (math.log10(v) + 3) / 5) * SC
for a in [20, 30, 40, 50, 60, 70, 80, 90]:
    d.line([(X(a), T * SC), (X(a), B * SC)], fill=rule, width=SC)
    d.text((X(a), (B + 18) * SC), f"{a}", font=fm, fill=soft, anchor="mt")
for v, lab in [(0.001, "1/1000"), (0.01, "1/100"), (0.1, "1/10"), (1, "1"), (10, "10"), (100, "100")]:
    d.line([(L * SC, Y(v)), (R * SC, Y(v))], fill=rule, width=SC)
    d.text(((L - 12) * SC, Y(v)), lab, font=fm, fill=soft, anchor="rm")
axes(d, L, R, T, B, "age, years (log scale)", "incidence relative to age 40 (log scale)")
d.line([(X(a), Y(inc(a))) for a in range(20, 91)], fill=blue, width=4 * SC)
for a in (40, 80):
    dot(d, X(a), Y(inc(a)), amber)
d.text((X(80) - 12 * SC, Y(32) - 6 * SC), "80: 32 times the rate at 40", font=fm, fill=amber, anchor="rb")
d.text((X(40) + 12 * SC, Y(1) + 6 * SC), "40", font=fm, fill=amber, anchor="lt")
d.text((X(22), Y(30)), "slope 5 on log–log axes:", font=fm, fill=ink, anchor="lm")
d.text((X(22), Y(30) + 26 * SC), "about six required events", font=fm, fill=ink, anchor="lm")
save(im, "age-incidence.png", h)
