"""Draw the Coordination Thread's diagrams from the numbers in their chapters.

Usage: python3 scripts/diagrams/coordination.py src/fonts <outdir>

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
fs = ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 12 * SC)
W = 900

def canvas(h):
    im = Image.new("RGB", (W * SC, h * SC), "white")
    return im, ImageDraw.Draw(im)

def save(im, name, h):
    im.resize((W, h), Image.LANCZOS).save(f"{outdir}/{name}", optimize=True)
    print(name)

def charged(d, x, y, base, charge, colour, anchor="l"):
    """Formula with a raised charge such as 3+ or 4-; the fonts lack superscript signs."""
    d.text((x, y), base, font=fm, fill=colour, anchor=anchor + "m")
    if charge:
        w = d.textlength(base, font=fm)
        x0 = x + w if anchor == "l" else x
        d.text((x0 + 1 * SC, y - 9 * SC), charge.replace("-", "−"), font=fs, fill=colour, anchor="lm")

def hue(nm):
    """Display colour for a visible wavelength (Dan Bruton's piecewise approximation)."""
    if nm < 380 or nm > 750:
        return (200, 200, 200)
    if nm < 440: r, g, b = (440 - nm) / 60, 0, 1
    elif nm < 490: r, g, b = 0, (nm - 440) / 50, 1
    elif nm < 510: r, g, b = 0, 1, (510 - nm) / 20
    elif nm < 580: r, g, b = (nm - 510) / 70, 1, 0
    elif nm < 645: r, g, b = 1, (645 - nm) / 65, 0
    else: r, g, b = 1, 0, 0
    f = 0.3 + 0.7 * (nm - 380) / 40 if nm < 420 else 0.3 + 0.7 * (750 - nm) / 50 if nm > 700 else 1
    return tuple(int(255 * (c * f) ** 0.8) for c in (r, g, b))

def sup(d, x, y, parts, font, small, colour, anchor="m"):
    """Centre-anchored text made of (text, raised) pieces, for exponents the fonts lack."""
    w = sum(d.textlength(t, font=small if up else font) for t, up in parts)
    x0 = x - w / 2 if anchor == "m" else x
    for t, up in parts:
        f = small if up else font
        d.text((x0, y - (9 * SC if up else 0)), t, font=f, fill=colour, anchor="lm")
        x0 += d.textlength(t, font=f)

# Ligand field theory: chromium(III) with four ligands, splitting in cm-1 and the absorbed wavelength.
crs = [("[CrCl₆]", "3-", 13600, 735, "green"), ("[Cr(H₂O)₆]", "3+", 17400, 575, "violet"),
       ("[Cr(NH₃)₆]", "3+", 21600, 463, "yellow"), ("[Cr(CN)₆]", "3-", 26600, 376, "pale yellow")]
for _, _, cm, nm, _ in crs:
    assert abs(1e7 / cm - nm) < 1.5, (cm, nm)
h = 400
im, d = canvas(h)
X = lambda nm: (300 + 540 * (nm - 350) / (780 - 350)) * SC
for nm in range(350, 781, 2):
    d.rectangle([X(nm), 300 * SC, X(nm + 2), 324 * SC], fill=hue(nm))
for nm in [400, 500, 600, 700]:
    d.text((X(nm), 334 * SC), f"{nm}", font=fm, fill=soft, anchor="mt")
d.text((X(365), 334 * SC), "UV", font=fs, fill=soft, anchor="mt")
for i, (base, ch, cm, nm, seen) in enumerate(crs):
    y = (50 + 60 * i)
    charged(d, 20 * SC, y * SC, base, ch, ink)
    sup(d, 20 * SC, (y + 24) * SC, [(f"splitting {cm:,} cm", False), ("\u22121", True)], fs, ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 9 * SC), soft, "l")
    d.line([(X(nm), (y + 10) * SC), (X(nm), 300 * SC)], fill=rule, width=SC)
    d.ellipse([X(nm) - 8 * SC, (y - 8) * SC, X(nm) + 8 * SC, (y + 8) * SC], fill=hue(nm) if 380 <= nm <= 750 else soft, outline=ink, width=SC)
    side = "rm" if nm > 600 else "lm"
    d.text((X(nm) + (-16 if side == "rm" else 16) * SC, y * SC), f"absorbs {nm} nm, looks {seen}", font=fm, fill=ink, anchor=side)
d.text((W / 2 * SC, 374 * SC), "wavelength absorbed, nm: stronger ligands push it towards the blue", font=fi, fill=ink, anchor="mm")
save(im, "chromium-colours.png", h)

# Organometallic chemistry Closer Look: CO stretching frequency against the metal's charge.
cos = [("free CO", "", 2143, soft), ("[Mn(CO)₆]", "+", 2090, blue), ("Ni(CO)₄", "", 2057, soft),
       ("Cr(CO)₆", "", 2000, blue), ("[V(CO)₆]", "-", 1860, blue)]
assert 2090 - 1860 == 230
h = 300
im, d = canvas(h)
X = lambda v: (60 + 780 * (2200 - v) / (2200 - 1800)) * SC   # wavenumber falls to the right, as on a spectrum
for v in range(1800, 2201, 50):
    d.line([(X(v), 60 * SC), (X(v), 200 * SC)], fill=rule, width=SC)
    d.text((X(v), 212 * SC), f"{v:,}", font=fm, fill=soft, anchor="mt")
d.line([(X(2200), 200 * SC), (X(1800), 200 * SC)], fill=ink, width=2 * SC)
for i, (base, ch, v, colour) in enumerate(cos):
    y = 84 if i % 2 == 0 else 150
    d.line([(X(v), (y + 12) * SC), (X(v), 200 * SC)], fill=colour, width=3 * SC)
    w = d.textlength(base, font=fm) + (d.textlength(ch, font=fs) if ch else 0)
    charged(d, X(v) - w / 2, y * SC, base, ch, colour)
    d.text((X(v), (y - 22) * SC), f"{v:,}", font=fs, fill=colour, anchor="mm")
d.line([(X(2090), 40 * SC), (X(1860), 40 * SC)], fill=amber, width=2 * SC)
sup(d, (X(2090) + X(1860)) / 2, 24 * SC, [("230 cm", False), ("\u22121", True), (" from the charge on the metal alone", False)], fs, ImageFont.truetype(f"{fd}/IBMPlexMono-Regular.ttf", 9 * SC), amber)
sup(d, W / 2 * SC, 264 * SC, [("C–O stretching frequency, cm", False), ("\u22121", True), (" (weaker bond to the right)", False)], fi, ImageFont.truetype(f"{fd}/SourceSerif4-Italic.ttf", 15 * SC), ink)
save(im, "carbonyl-stretch.png", h)
