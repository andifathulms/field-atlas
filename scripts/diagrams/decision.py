"""Draw the Decision Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/decision.py src/fonts <outdir>

Every value is recomputed here and checked with an assert, so a diagram
cannot silently drift from the prose. Copy each output into the field's
folder under public/images/fields/.
"""
import site, sys, math; sys.path.append(site.getusersitepackages())
from PIL import Image, ImageDraw, ImageFont
fd, outdir = sys.argv[1], sys.argv[2]

SC = 2
ink, soft, rule = (28, 26, 23), (112, 104, 92), (217, 208, 191)
blue, red, green = (44, 59, 128), (168, 55, 42), (79, 110, 60)
def fonts(): return (ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 26*SC), ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 17*SC), ImageFont.truetype(f"{fd}/SourceSerif4-SemiBold.ttf", 30*SC))
fi, fm, fb = fonts()
def canvas(w, h): im = Image.new("RGB", (w*SC, h*SC), "white"); return im, ImageDraw.Draw(im)
def save(im, name): im.resize((im.width//SC, im.height//SC), Image.LANCZOS).save(f"{outdir}/{name}", optimize=True); print(name)

def line_chart(name, xlab, ylab, lines, ylo, yhi, mark, marklab, xt, yt):
    W, H = 900, 520; L, R, T, B = 110, 860, 40, 440
    im, d = canvas(W, H)
    X = lambda x: (L + (R-L)*x)*SC
    Y = lambda y: (B - (B-T)*(y-ylo)/(yhi-ylo))*SC
    for y in yt:
        d.line([(L*SC, Y(y)), (R*SC, Y(y))], fill=rule, width=SC)
        d.text(((L-12)*SC, Y(y)), f"{y:g}", font=fm, fill=soft, anchor="rm")
    for x in xt: d.text((X(x), (B+18)*SC), f"{x:g}", font=fm, fill=soft, anchor="mt")
    d.line([(L*SC, B*SC), (R*SC, B*SC)], fill=ink, width=2*SC); d.line([(L*SC, T*SC), (L*SC, B*SC)], fill=ink, width=2*SC)
    d.text((X(0.5), (B+52)*SC), xlab, font=fi, fill=ink, anchor="mt")
    for f, col, lab, lx in lines:
        pts = [(X(i/200), Y(f(i/200))) for i in range(201)]
        d.line(pts, fill=col, width=4*SC)
        d.text((X(lx), Y(f(lx)) - 22*SC), lab, font=fi, fill=col, anchor="mb")
    mx, my = mark
    d.line([(X(mx), Y(my)), (X(mx), B*SC)], fill=soft, width=2*SC)
    d.ellipse([X(mx)-8*SC, Y(my)-8*SC, X(mx)+8*SC, Y(my)+8*SC], fill=ink)
    bx = d.textbbox((X(mx)+18*SC, Y(my)+40*SC), marklab, font=fm, anchor="lt")
    d.rectangle([bx[0]-6*SC, bx[1]-4*SC, bx[2]+6*SC, bx[3]+4*SC], fill="white")
    d.text((X(mx)+18*SC, Y(my)+40*SC), marklab, font=fm, fill=ink, anchor="lt")
    d.text(((L-12)*SC, (T-14)*SC), ylab, font=fm, fill=soft, anchor="ls")
    save(im, name)

# Penalty kick: kicker's scoring chance against each dive, as p (share of shots left) varies.
p = 4/11; v = 0.90 - 0.30*p
assert abs((0.70 + 0.25*p) - v) < 1e-12
line_chart("penalty-kick.png", "share of shots to the left, p", "chance of scoring",
           [(lambda x: 0.90 - 0.30*x, blue, "keeper dives left", 0.12), (lambda x: 0.70 + 0.25*x, red, "keeper dives right", 0.88)],
           0.6, 1.0, (p, v), f"p = 4/11 ≈ {p:.3f}, score {v:.3f}", [0, 0.25, 0.5, 0.75, 1], [0.6, 0.7, 0.8, 0.9, 1.0])

# Hawk-Dove with V=50, C=100: payoffs to each type as the Hawk share p varies.
V, C = 50, 100
WH = lambda x: x*(V-C)/2 + (1-x)*V; WD = lambda x: (1-x)*V/2
ps = V/C; assert abs(WH(ps) - WD(ps)) < 1e-12 and WH(ps) == 12.5
line_chart("hawk-dove.png", "share of Hawks in the population, p", "payoff",
           [(WH, red, "Hawk", 0.12), (WD, blue, "Dove", 0.93)],
           -30, 55, (ps, WH(ps)), "p* = V/C = 0.5, both earn 12.5", [0, 0.25, 0.5, 0.75, 1], [-25, 0, 25, 50])

# Condorcet: head-to-head results for the 100 ballots.
ballots = [(40, "ACB"), (35, "BCA"), (25, "CBA")]
def beats(x, y): return sum(n for n, r in ballots if r.index(x) < r.index(y))
im, d = canvas(760, 480)
pos = {"A": (120, 380), "B": (640, 380), "C": (380, 130)}
for x, y in [("A","B"), ("A","C"), ("B","C")]:
    w, l = (x, y) if beats(x, y) > beats(y, x) else (y, x)
    (x1, y1), (x2, y2) = pos[w], pos[l]; ang = math.atan2(y2-y1, x2-x1); r = 48
    a = ((x1+r*math.cos(ang))*SC, (y1+r*math.sin(ang))*SC); b = ((x2-r*math.cos(ang))*SC, (y2-r*math.sin(ang))*SC)
    d.line([a, b], fill=blue, width=4*SC); h = 18*SC
    d.polygon([b, (b[0]-h*math.cos(ang-0.4), b[1]-h*math.sin(ang-0.4)), (b[0]-h*math.cos(ang+0.4), b[1]-h*math.sin(ang+0.4))], fill=blue)
    mx, my = (x1+x2)/2, (y1+y2)/2; nx, ny = -math.sin(ang), math.cos(ang)
    off = 62 if (w, l) != ("B", "A") else -30
    d.text(((mx+nx*off)*SC, (my+ny*off)*SC), f"{w} beats {l}, {beats(w,l)}–{beats(l,w)}", font=fm, fill=ink, anchor="mm")
first = {c: sum(n for n, r in ballots if r[0] == c) for c in "ABC"}
for c, (x, y) in pos.items():
    d.ellipse([(x-42)*SC, (y-42)*SC, (x+42)*SC, (y+42)*SC], outline=ink, width=3*SC, fill="white")
    d.text((x*SC, y*SC), c, font=fb, fill=ink, anchor="mm")
    ty = y - 60 if c == "C" else y + 60
    d.text((x*SC, ty*SC), f"{first[c]} first places", font=fm, fill=soft, anchor="mb" if c == "C" else "mt")
save(im, "head-to-head.png")
assert beats("C","A") == 60 and beats("C","B") == 65 and beats("B","A") == 60

# Core vs Shapley value, as the seller's share x_A on 0..100.
orders = ["ABC","ACB","BAC","BCA","CAB","CBA"]
v = {frozenset(): 0, frozenset("A"): 0, frozenset("B"): 0, frozenset("C"): 0, frozenset("AB"): 100, frozenset("AC"): 80, frozenset("BC"): 0, frozenset("ABC"): 100}
phi = {p: 0 for p in "ABC"}
for o in orders:
    s = set()
    for p in o: phi[p] += v[frozenset(s | {p})] - v[frozenset(s)]; s.add(p)
phiA = phi["A"]/6; assert abs(phiA - 380/6) < 1e-12
im, d = canvas(900, 260); L, R, Yl = 60, 840, 140
X = lambda x: (L + (R-L)*x/100)*SC
d.rectangle([X(80), (Yl-22)*SC, X(100), (Yl+22)*SC], fill=(220, 231, 214), outline=green, width=2*SC)
d.text(((X(80)+X(100))/2, (Yl-36)*SC), "core: 80 to 100", font=fm, fill=green, anchor="mb")
d.line([(X(0), Yl*SC), (X(100), Yl*SC)], fill=ink, width=3*SC)
for t in range(0, 101, 20):
    d.line([(X(t), (Yl-8)*SC), (X(t), (Yl+8)*SC)], fill=ink, width=2*SC); d.text((X(t), (Yl+20)*SC), str(t), font=fm, fill=soft, anchor="mt")
d.polygon([(X(phiA), (Yl-6)*SC), (X(phiA)-12*SC, (Yl-34)*SC), (X(phiA)+12*SC, (Yl-34)*SC)], fill=red)
d.text((X(phiA), (Yl-42)*SC), f"Shapley value {phiA:.1f}", font=fm, fill=red, anchor="mb")
d.text((X(50), (Yl+62)*SC), "the seller's share of the 100", font=fi, fill=ink, anchor="mt")
save(im, "core-vs-shapley.png")


# Braess's network from the algorithmic game theory Closer Look.
def braess(out):
    W, H = 1000 * SC, 470 * SC
    im = Image.new("RGB", (W, H), "white"); d = ImageDraw.Draw(im)
    f_node = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 34 * SC)
    f_lab = ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 28 * SC)
    f_head = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 20 * SC)
    ink, accent, road = (28, 26, 23), (44, 59, 128), (168, 55, 42)

    def arrow(p, q, color, width=4, label=None, lab_off=(0, 0)):
        (x1, y1), (x2, y2) = p, q
        ang = math.atan2(y2 - y1, x2 - x1); r = 34 * SC
        a = (x1 + r * math.cos(ang), y1 + r * math.sin(ang)); b = (x2 - r * math.cos(ang), y2 - r * math.sin(ang))
        d.line([a, b], fill=color, width=width * SC)
        h = 16 * SC
        d.polygon([b, (b[0] - h * math.cos(ang - 0.4), b[1] - h * math.sin(ang - 0.4)), (b[0] - h * math.cos(ang + 0.4), b[1] - h * math.sin(ang + 0.4))], fill=color)
        if label:
            mx, my = (x1 + x2) / 2 + lab_off[0] * SC, (y1 + y2) / 2 + lab_off[1] * SC
            d.text((mx, my), label, font=f_lab, fill=color, anchor="mm")

    def node(p, name):
        r = 30 * SC
        d.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], outline=ink, width=3 * SC, fill="white")
        d.text(p, name, font=f_node, fill=ink, anchor="mm")

    def panel(ox, title, extra, times):
        s, t = (ox + 60 * SC, 250 * SC), (ox + 400 * SC, 250 * SC)
        a, b = (ox + 230 * SC, 110 * SC), (ox + 230 * SC, 390 * SC)
        d.text((ox + 230 * SC, 30 * SC), title, font=f_head, fill=ink, anchor="mm")
        arrow(s, a, accent, label="x", lab_off=(-22, -22))
        arrow(a, t, accent, label="1", lab_off=(22, -22))
        arrow(s, b, accent, label="1", lab_off=(-22, 22))
        arrow(b, t, accent, label="x", lab_off=(22, 22))
        if extra:
            arrow(a, b, road, width=5, label="0", lab_off=(22, 0))
        for p, n in [(s, "s"), (t, "t"), (a, "a"), (b, "b")]:
            node(p, n)
        d.text((ox + 230 * SC, 445 * SC), times, font=f_head, fill=ink, anchor="mm")

    panel(20 * SC, "BEFORE", False, "each driver: 0.5 + 1 = 1.5")
    panel(520 * SC, "AFTER THE NEW ROAD", True, "each driver: 1 + 0 + 1 = 2")
    d.line([(500 * SC, 60 * SC), (500 * SC, 420 * SC)], fill=(217, 208, 191), width=2 * SC)
    im.resize((W // SC, H // SC), Image.LANCZOS).save(out, optimize=True)

braess(f"{outdir}/braess-network.png")
print("braess-network.png")
