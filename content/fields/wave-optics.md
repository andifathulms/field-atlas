---
id: wave-optics
domain: physics
thread: light
name: Wave Optics
parent_ids:
  - classical-optics
  - electromagnetism
era_emerged: 1801 – 1893
core_question: If light is a wave, what is its wavelength, what is waving, and what limits does being a wave impose on what can be seen?

summary: |-
  In 1801 Thomas Young sent light through two narrow openings and found bands of dark where two beams overlapped. Darkness produced by adding light is something a stream of particles cannot do, and Young used the spacing of the bands to measure the wavelength of red light to within a few per cent of the modern value — in a quantity, inches, that gives the answer as about one thirty-seven-thousandth of one.

  It took twenty years and a hostile prize competition for the wave theory to win. Augustin Fresnel's mathematics predicted a bright spot in the middle of a circular shadow, which the judge Poisson produced as a reductio and Arago then observed. Fresnel also showed that light must be a *transverse* wave, which made the supposed medium carrying it increasingly absurd and set up the problem Maxwell solved by removing the medium's job: light is an electromagnetic wave. The practical legacy is a hard limit. Because light diffracts, no lens can resolve detail much finer than half a wavelength, and that number — about 200 nanometres for visible light — bounded what biology could see for 120 years.

key_ideas:
  - term: Interference
    definition: >-
      Two waves arriving at the same place add. Where crests coincide the result is brighter than
      either; where a crest meets a trough they cancel. The dark bands between bright fringes are
      the signature no particle theory can imitate.
    turning_point_id: young-interference
  - term: Fringe spacing
    definition: >-
      For two slits a distance $d$ apart and a screen a distance $L$ away, bright fringes are
      spaced $\Delta x = \lambda L / d$. Measuring $\Delta x$, $d$ and $L$ gives the wavelength,
      which is how a quantity smaller than a thousandth of a millimetre was measured with a card
      and a candle.
    turning_point_id: young-interference
  - term: Diffraction
    definition: >-
      Light spreads when it passes an edge or an aperture, by an angle of roughly $\lambda / a$
      for an opening of width $a$. It is why shadows have fringed edges and why a small aperture
      makes a blurrier image, not a sharper one.
    turning_point_id: fresnel-poisson-spot
  - term: Transverse polarisation
    definition: >-
      The oscillation is perpendicular to the direction of travel, and it has an orientation. Two
      beams polarised at right angles cannot interfere, which is how the transverse character was
      established.
    turning_point_id: transverse-light
  - term: Numerical aperture and the resolution limit
    definition: >-
      A lens collecting light over a half-angle $\alpha$ in a medium of index $n$ has numerical
      aperture $\mathrm{NA} = n \sin\alpha$, and cannot separate two points closer than about
      $\lambda / 2\,\mathrm{NA}$. The limit is set by the wave, not by the quality of the glass.
    turning_point_id: abbe-diffraction-limit
  - term: Coherence length
    definition: >-
      The distance over which a wave keeps a predictable phase. Interference fringes are only
      visible when the two paths differ by less than this, so a source's spectral purity sets how
      long an interferometer can be.
    turning_point_id: michelson-wavelength-metre

turning_points:
  - id: young-interference
    date: 1801 – 1803
    type: EXPERIMENT
    title: Young's fringes
    description: >-
      Thomas Young, a physician with interests in everything, splits a beam of sunlight with a thin
      card or a pair of narrow slits and finds that the two resulting beams, where they overlap,
      produce evenly spaced bright and dark bands. Adding light to light to get darkness is
      interference, and from the band spacing he computes wavelengths: about 0.0000266 inch for
      the extreme red and 0.0000167 for the violet. His papers were savaged in the *Edinburgh
      Review* for contradicting Newton, and largely ignored in Britain for fifteen years.
    contested: false
    sources:
      - citation: "Young, T. (1802). The Bakerian Lecture: On the theory of light and colours. Philosophical Transactions of the Royal Society 92: 12–48."
        url: null
      - citation: "Young, T. (1804). Experiments and calculations relative to physical optics. Philosophical Transactions of the Royal Society 94: 1–16."
        url: null

  - id: fresnel-poisson-spot
    date: 1818 – 1819
    type: EXPERIMENT
    title: The bright spot in the middle of a shadow
    description: >-
      The French Academy sets diffraction as its 1819 prize subject, expecting a corpuscular
      treatment. Augustin Fresnel submits a wave theory in which light from every part of a
      wavefront is summed with its phase. Siméon Poisson, on the jury, works out a consequence —
      behind a circular disc there should be a *bright* point at the exact centre of the shadow —
      and offers it as proof the theory is absurd. François Arago performs the experiment. The spot
      is there. Fresnel wins the prize.
    contested: false
    sources:
      - citation: "Fresnel, A. (1819). Mémoire sur la diffraction de la lumière. Mémoires de l'Académie des Sciences 5: 339–475."
        url: null
      - citation: "Buchwald, J. Z. (1989). The Rise of the Wave Theory of Light. University of Chicago Press."
        url: null

  - id: transverse-light
    date: 1817 – 1821
    type: DISCOVERY
    title: Light waves are transverse
    description: >-
      Fresnel and Arago find that two beams polarised at right angles never interfere, whatever
      the path difference. Young suggests the explanation in 1817 and Fresnel develops it in 1821:
      the oscillation is perpendicular to the direction of travel, so perpendicular polarisations
      have nothing in common to add. The conclusion was unwelcome, because a transverse wave needs
      a medium with shear rigidity, and the ether now had to be a solid that planets pass through
      unimpeded.
    contested: false
    sources:
      - citation: "Fresnel, A. (1821). Note sur le calcul des teintes que la polarisation développe dans les lames cristallisées. Annales de Chimie et de Physique 17: 102–112."
        url: null
      - citation: "Whittaker, E. T. (1951). A History of the Theories of Aether and Electricity, volume 1. Nelson."
        url: null

  - id: fizeau-foucault-light-speed
    date: 1849 – 1862
    type: EXPERIMENT
    title: The speed of light measured on Earth
    description: >-
      Hippolyte Fizeau sends a beam 8 km to a mirror and back through a toothed wheel spinning fast
      enough that the returning light is blocked by the next tooth, obtaining about 315,000 km/s.
      Léon Foucault's rotating-mirror method gives 298,000 km/s by 1862, within 0.6% of the modern
      value. In 1850 Foucault also settles the seventeenth-century dispute directly: light is
      slower in water than in air, as the wave theory demanded and Newton's followers denied.
    contested: false
    sources:
      - citation: "Fizeau, H. (1849). Sur une expérience relative à la vitesse de propagation de la lumière. Comptes Rendus 29: 90–92."
        url: null
      - citation: "Foucault, L. (1862). Détermination expérimentale de la vitesse de la lumière. Comptes Rendus 55: 501–503."
        url: null

  - id: abbe-diffraction-limit
    date: 1873
    type: DISCOVERY
    title: Abbe's limit on the microscope
    description: >-
      Ernst Abbe, working for the Zeiss workshop in Jena, derives why microscopes stop improving.
      Image formation is diffraction by the specimen followed by recombination in the lens, so an
      objective can only reconstruct detail whose diffracted orders it actually collects. The
      smallest resolvable separation is about $\lambda / 2\,\mathrm{NA}$ — roughly 200 nm for
      visible light and the best oil-immersion lens. Better grinding cannot help; only shorter
      wavelengths or higher index can. Microscope design became calculation rather than craft.
    contested: false
    sources:
      - citation: "Abbe, E. (1873). Beiträge zur Theorie des Mikroskops und der mikroskopischen Wahrnehmung. Archiv für Mikroskopische Anatomie 9: 413–468."
        url: null
      - citation: "Volkmann, H. (1966). Ernst Abbe and his work. Applied Optics 5(11): 1720–1731."
        url: null

  - id: michelson-wavelength-metre
    date: 1892 – 1893
    type: EXPERIMENT
    title: The metre measured in wavelengths
    description: >-
      Albert Michelson compares the international prototype metre against the red line of cadmium
      using an interferometer, counting 1,553,163.5 wavelengths. A unit of length is thereby tied
      to a property of an atom rather than to a metal bar in a vault, an idea the SI eventually
      adopted. The same instrument, counting fringes, became the standard tool for measuring
      displacement, flatness and refractive index, and the ancestor of the interferometers that
      detect gravitational waves.
    contested: false
    sources:
      - citation: "Michelson, A. A. & Benoît, J.-R. (1895). Détermination expérimentale de la valeur du mètre en longueurs d'ondes lumineuses. Travaux et Mémoires du BIPM 11: 1–85."
        url: null
      - citation: "Hall, J. L. (2000). Optical frequency measurement: 40 years of technology revolutions. IEEE Journal of Selected Topics in Quantum Electronics 6(6): 1136–1144."
        url: null

open_problems:
  - id: anderson-localisation-of-light
    name: Whether light localises in three dimensions
    status: open
    status_note: Open as of 2026; the clearest experimental claims were later attributed to fluorescence rather than localisation.
    description: >-
      In a sufficiently disordered medium, a wave is predicted to stop diffusing and become
      trapped in a finite region — Anderson localisation. It has been demonstrated for light in one
      and two dimensions and for matter waves and microwaves in three. For light in three
      dimensions it has not been convincingly shown, and theoretical arguments suggest the vector
      nature of light may prevent it for point scatterers.
    why_hard: >-
      Strong localisation needs scattering so strong that the mean free path approaches the
      wavelength, which in practice means dense high-index powders that also absorb and fluoresce.
      Absorption mimics the signature of localisation in transmission measurements, and
      disentangling them has defeated several claimed demonstrations.
    unlocks: >-
      Whether a random medium can trap light as a cavity does, which would supply disordered
      lasers and sensors; and a cleaner understanding of transport in strongly scattering media
      generally.
    sources:
      - citation: "Skipetrov, S. E. & Page, J. H. (2016). Red light for Anderson localization. New Journal of Physics 18: 021001."
        url: null
      - citation: "Sperling, T. et al. (2016). Can 3D light localization be reached in 'white paint'? New Journal of Physics 18: 013039."
        url: null

applications:
  - area: Microscopy
    title: The limit that bounded cell biology
    description: >-
      Abbe's formula says what a light microscope can and cannot show. At 200 nm, a mitochondrion
      is resolvable and a ribosome, a virus or the gap at a synapse is not. That boundary defined
      the agenda of cell biology for over a century: structures below it had to be inferred,
      stained into visibility, or examined by electron microscopy on dead material, until
      fluorescence techniques in the 1990s found ways around the limit without breaking it.
    domain: biology
    field_id: cell-biology
    sources:
      - citation: "Abbe, E. (1873). Beiträge zur Theorie des Mikroskops. Archiv für Mikroskopische Anatomie 9: 413–468."
        url: null
      - citation: "Lichtman, J. W. & Conchello, J.-A. (2005). Fluorescence microscopy. Nature Methods 2: 910–919."
        url: null
  - area: Metrology
    title: Measuring by counting fringes
    description: >-
      An interferometer converts a displacement into a count of light and dark cycles, each worth
      half a wavelength. That makes nanometre measurement routine: machine-tool positioning,
      optical flats, semiconductor wafer alignment, and the kilometre-scale instruments that
      measure a gravitational wave as a path difference a thousandth the width of a proton.
    sources:
      - citation: "Hariharan, P. (2007). Basics of Interferometry, 2nd edition. Academic Press."
        url: null
  - area: Coatings
    title: Thin films that cancel reflections
    description: >-
      A quarter-wavelength layer of the right index makes the reflection from its top surface
      cancel the reflection from its bottom one. Stacks of such layers give lenses that transmit
      99.9%, mirrors that reflect 99.999%, and the colour filters in every camera and display. The
      design problem is interference arithmetic, done over dozens of layers.
    sources:
      - citation: "Macleod, H. A. (2010). Thin-Film Optical Filters, 4th edition. CRC Press."
        url: null

further_reading:
  - citation: "Buchwald, J. Z. (1989). The Rise of the Wave Theory of Light. University of Chicago Press."
    url: null
    note: How the wave theory won, including how much of the fight was about mathematics rather than evidence.
  - citation: "Born, M. & Wolf, E. (1999). Principles of Optics, 7th edition. Cambridge University Press."
    url: null
    note: The authoritative treatment of classical wave optics; dense but complete.
  - citation: "Robinson, A. (2006). The Last Man Who Knew Everything. Pi Press."
    url: null
    note: A biography of Young, who also worked on Egyptian hieroglyphs and insurance mathematics.
---

## Darkness Made of Light

{{fig:thomas-young|Thomas Young}} was a physician who read Greek at six and later did decisive work on hieroglyphs, elasticity and insurance. In 1801 he addressed the Royal Society on a thought that would have struck most of his audience as perverse: if light is a wave, then two beams should sometimes cancel.

The demonstration is simple to describe and was delicate to perform with sunlight and a pinhole. Send light through two narrow openings close together and let the two emerging beams overlap on a screen. They do not merely brighten each other. They produce a regular series of bright and dark bands. Where the two paths differ by a whole number of wavelengths the crests coincide and the light is doubled; where they differ by half a wavelength, crest meets trough and the screen is dark. There is no way to arrange two streams of particles so that adding one to the other produces nothing.

Young's reward was a review in the *Edinburgh Review* so contemptuous that he published a pamphlet in reply, of which one copy is said to have sold. Contradicting Newton in Britain in 1803 was a professional error.

## The Spot That Should Not Be There

The decisive episode happened in France, and it is the best-known example in physics of a prediction intended as a refutation. The Academy of Sciences set diffraction as the subject of its 1819 prize, expecting the particle theory to be vindicated. {{fig:fresnel|Augustin Fresnel}}, a road engineer, submitted a wave theory in which the field at any point is obtained by adding contributions from every element of the wavefront, each with its own phase — an integral, in modern terms.

{{fig:poisson|Siméon Poisson}}, on the jury and a convinced Newtonian, examined Fresnel's integrals and extracted an absurdity: behind an opaque circular disc, at the exact centre of the shadow, all the contributions from the rim arrive in phase, so there must be a *bright spot*. {{fig:arago|François Arago}} set up the experiment. The spot was there, and it is there in every undergraduate laboratory now. Fresnel won.

Fresnel and Arago then found something less convenient. Two beams polarised at right angles produce no fringes at all, at any path difference. Young supplied the interpretation and Fresnel made it quantitative: light's oscillation is perpendicular to its travel, and perpendicular polarisations have no common component to add. This was a problem, because a transverse wave requires a medium that resists shear — a solid — and the planets move through it without resistance. The ether grew steadily more preposterous until {{fig:maxwell|Maxwell}}'s equations showed in 1865 that the oscillating quantities are the electric and magnetic fields themselves, which is the subject of [electromagnetism](/physics/electromagnetism/).

## A Closer Look: Measuring a Wavelength with a Card, and the Limit It Sets

The fringe geometry is the whole of Young's measurement. With slits separated by $d$, a screen at distance $L \gg d$, and wavelength $\lambda$, the $m$th bright fringe sits where the path difference is $m\lambda$, which puts it at $x_m = m \lambda L / d$. So the spacing between neighbouring fringes is

$$
\Delta x = \frac{\lambda L}{d}.
$$

Everything on the right except $\lambda$ is measurable with a ruler. Take a modern demonstration: $d = 0.25$ mm, $L = 1$ m, and fringes measured 2.4 mm apart. Then

$$
\lambda = \frac{\Delta x \, d}{L} = \frac{(2.4 \times 10^{-3})(2.5 \times 10^{-4})}{1} = 6.0 \times 10^{-7} \text{ m} = 600 \text{ nm}.
$$

Young's own numbers, in his units, were 0.0000266 inch for the extreme red and 0.0000167 inch for the violet. Converting at 25.4 mm to the inch:

$$
0.0000266 \text{ in} \times 25.4 = 6.76 \times 10^{-4} \text{ mm} = 676 \text{ nm}, \qquad
0.0000167 \text{ in} \to 424 \text{ nm}.
$$

The accepted range for visible light is about 400 to 700 nm. In 1803, with sunlight, a slit and a screen, he was within a few per cent at both ends of the spectrum — and he had measured a length ten thousand times smaller than anything he could see, by counting something he could.

The same wave behaviour that makes this measurement possible imposes a ceiling. {{fig:abbe|Ernst Abbe}} showed in 1873 that a microscope forms an image by collecting the light a specimen diffracts, so it can only reconstruct detail whose diffracted orders fall inside the objective's cone. The smallest resolvable separation is about

$$
d_{\min} \approx \frac{\lambda}{2\,\mathrm{NA}},
$$

where $\mathrm{NA} = n\sin\alpha$ is the numerical aperture. The best oil-immersion objectives reach $\mathrm{NA} \approx 1.4$, so at $\lambda = 550$ nm,

$$
d_{\min} \approx \frac{550}{2 \times 1.4} = 196 \text{ nm}.
$$

Two hundred nanometres is a hard line drawn across biology. A mitochondrion, at 0.5 to 1 µm, is resolvable; a ribosome at 25 nm, a virus at 100 nm, the 20-nm gap at a synapse are not, and no improvement in glass or grinding changes that. Everything below the line had to be inferred, or stained, or killed and examined with electrons — a constraint that shaped [cell biology](/biology/cell-biology/) until fluorescence tricks found a way round it in the 1990s.

The same formula pointed the other way gives the telescope version, the Rayleigh criterion $\theta \approx 1.22\lambda/D$. For the Hubble Space Telescope's 2.4-m mirror at 550 nm,

$$
\theta = \frac{1.22 \times 550 \times 10^{-9}}{2.4} = 2.8 \times 10^{-7} \text{ rad} = 0.058 \text{ arcsec}.
$$

Which is why large telescopes are large: resolution is bought by aperture, and nothing else.

## What the Limit Was For

By 1893 the wave theory was complete enough to be used as a ruler. {{fig:michelson|Albert Michelson}} compared the prototype metre with the red line of cadmium and found it to be 1,553,163.5 wavelengths long, tying a unit of length to a property of an atom instead of a bar of platinum-iridium. The idea became the SI definition, first through krypton and now through the fixed speed of light, and the instrument became the standard way to measure small distances: count fringes, each worth half a wavelength.

Classical wave optics was, by then, apparently finished. It had a complete theory of propagation, a quantitative limit on imaging, and an instrument that measured length to a fraction of a wavelength. What it did not have was any account of how light is emitted or absorbed, and that is where it broke. A blackbody's spectrum, the photoelectric effect and the sharp lines of atoms all involve light arriving in lumps, and the wave description says nothing about them — the opening of [old quantum theory](/physics/old-quantum-theory/). Re-describing the interference of this chapter in terms of individual quanta, and asking what it means for one photon to interfere with itself, is the business of [quantum optics](/physics/quantum-optics/).
