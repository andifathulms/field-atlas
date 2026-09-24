---
id: electromagnetism
domain: physics
thread: relativity
name: Electromagnetism
parent_ids: []
era_emerged: 1820 – 1865
core_question: How are electricity, magnetism and light connected?

summary: |-
  Electromagnetism is the physics of electric charges, currents and magnets, and of the light and radio waves they produce. Over the nineteenth century, three phenomena that looked unrelated (static sparks, compass needles and light) turned out to be one thing: an electromagnetic field filling space, whose ripples travel at the speed of light.

  It powers the modern world, from generators to Wi-Fi. It also set the stage for relativity. Maxwell's equations fix a single speed of light, and nothing in Newton's mechanics could accommodate that.

key_ideas:
  - term: Field
    definition: >-
      Faraday's idea that charges and magnets fill the space around them with something
      real, lines of force, that acts on other charges. Forces are no longer mysterious
      actions at a distance.
    turning_point_id: faraday-induction
  - term: Electromagnetic induction
    definition: >-
      A changing magnetic field produces an electric current. Every generator,
      transformer and induction hob works this way.
    turning_point_id: faraday-induction
  - term: Maxwell's equations
    definition: >-
      Four equations that describe how charges and currents create electric and magnetic
      fields, and how changing fields create each other. All classical electromagnetism
      follows from them.
    turning_point_id: maxwell-equations
  - term: The speed of light
    definition: >-
      Maxwell's equations predict waves travelling at $c = 1/\sqrt{\mu_0 \varepsilon_0}$,
      a speed fixed by two constants measured with coils and capacitors. It matched the
      measured speed of light, so light is an electromagnetic wave.
    turning_point_id: maxwell-equations
  - term: The ether
    definition: >-
      The medium that light waves were assumed to travel through, as sound travels
      through air. Measurements of the Earth's motion through it kept coming out zero.
    turning_point_id: michelson-morley

turning_points:
  - id: oersted-deflection
    date: "1820"
    type: DISCOVERY
    title: An electric current deflects a compass needle
    description: >-
      Hans Christian Ørsted notices that a wire carrying current turns a nearby compass
      needle. Electricity and magnetism, studied separately for centuries, are connected.
      Within months André-Marie Ampère had worked out the forces between currents.
    contested: false
    sources:
      - citation: "Ørsted, H. C. (1820). Experimenta circa effectum conflictus electrici in acum magneticam. Copenhagen."
        url: null

  - id: faraday-induction
    date: "1831"
    type: DISCOVERY
    title: Faraday discovers electromagnetic induction
    description: >-
      Michael Faraday finds that switching a current on or off in one coil briefly drives
      a current in another, and that moving a magnet through a coil does the same.
      Changing magnetism makes electricity. To picture it he develops lines of force,
      the first field concept in physics.
    contested: true
    contested_note: >-
      Joseph Henry in the United States observed induction independently at about the
      same time, possibly earlier, but published later (1832). Faraday is credited with
      first publication and the more complete investigation. The unit of inductance, the
      henry, honours the American's claim.
    sources:
      - citation: "Faraday, M. (1832). Experimental researches in electricity. Philosophical Transactions of the Royal Society of London 122: 125–162."
        url: null

  - id: maxwell-equations
    date: 1861 – 1865
    type: PARADIGM-SHIFT
    title: Maxwell unifies electricity, magnetism and light
    description: >-
      James Clerk Maxwell casts Faraday's field ideas into equations and adds one new
      term. The equations then predict self-sustaining electromagnetic waves travelling
      at a speed that matches the measured speed of light. Maxwell concludes that light
      is an electromagnetic disturbance: optics becomes a branch of electromagnetism.
    contested: false
    sources:
      - citation: "Maxwell, J. C. (1865). A dynamical theory of the electromagnetic field. Philosophical Transactions of the Royal Society of London 155: 459–512."
        url: null

  - id: hertz-radio-waves
    date: 1886 – 1888
    type: EXPERIMENT
    title: Hertz produces and detects electromagnetic waves
    description: >-
      Heinrich Hertz generates waves with an electric spark and detects them across his
      laboratory. He measures their wavelength and shows that they reflect, refract and
      polarise like light. Maxwell's prediction is confirmed, and radio is a few years
      away.
    contested: false
    sources:
      - citation: "Hertz, H. (1893). Electric Waves: Being Researches on the Propagation of Electric Action with Finite Velocity through Space. Trans. D. E. Jones. Macmillan."
        url: null

  - id: michelson-morley
    date: "1887"
    type: EXPERIMENT
    title: The ether wind is not there
    description: >-
      Albert Michelson and Edward Morley split a beam of light, send the halves along
      perpendicular arms and recombine them. They expect a shift as the Earth moves
      through the ether and find almost none. Light's speed does not seem to depend on
      the direction of the Earth's motion. FitzGerald and Lorentz proposed that moving
      objects contract to hide the effect.
    contested: false
    sources:
      - citation: "Michelson, A. A. & Morley, E. W. (1887). On the relative motion of the Earth and the luminiferous ether. American Journal of Science 34: 333–345."
        url: null

open_problems:
  - id: magnetic-monopoles
    name: Magnetic monopoles
    status: conjectured
    status_note: No confirmed detection as of writing.
    description: >-
      Every magnet ever found has both a north and a south pole. Cut one in half and you
      get two smaller magnets. Paul Dirac showed in 1931 that isolated magnetic charges,
      monopoles, are allowed by quantum theory. If even one exists, electric charge must
      come in whole-number units, as it does.
    why_hard: >-
      Grand unified theories predict monopoles, but so heavy that they could only have
      formed in the early universe and would now be extremely rare. Searches in cosmic
      rays, old rocks and particle colliders have found none (a single 1982 candidate
      event was never repeated).
    unlocks: >-
      A detection would explain why electric charge is quantised and would be direct
      evidence for physics at energies far beyond any collider.
    sources:
      - citation: "Dirac, P. A. M. (1931). Quantised singularities in the electromagnetic field. Proceedings of the Royal Society A 133: 60–72."
        url: null

applications:
  - area: Electric power
    title: Generators, transformers and the grid
    description: >-
      Almost all electricity is made by spinning coils in magnetic fields, and it is
      moved across continents by transformers that change its voltage. Both are
      Faraday's induction. The alternating-current grid is electromagnetism at the scale
      of civilisation.
    sources: []
  - area: Communications
    title: Radio, Wi-Fi and every wireless signal
    description: >-
      Little more than a decade after Hertz's experiments, Guglielmo Marconi was sending radio
      signals across the Atlantic (1901). Every wireless technology since, from
      broadcasting to mobile phones, GPS and Wi-Fi, uses Maxwell's waves.
    sources: []
  - area: Medical imaging
    title: Magnetic resonance imaging
    description: >-
      MRI scanners place the body in a strong magnetic field and use radio pulses to
      make hydrogen nuclei signal their positions. Gradient fields encode where each
      signal came from, a technique introduced by Paul Lauterbur in 1973.
    domain: biology
    sources:
      - citation: "Lauterbur, P. C. (1973). Image formation by induced local interactions: examples employing nuclear magnetic resonance. Nature 242: 190–191."
        url: null
  - area: Structural biology
    title: X-ray crystallography reveals the molecules of life
    description: >-
      X-rays are electromagnetic waves short enough to diffract off the rows of atoms in a
      crystal. In 1913 William Lawrence Bragg showed how to read the atomic arrangement
      from the diffraction pattern. The same method revealed the double helix of DNA and
      the shapes of thousands of proteins.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Bragg, W. L. (1913). The diffraction of short electromagnetic waves by a crystal. Proceedings of the Cambridge Philosophical Society 17: 43–57."
        url: null

further_reading:
  - citation: "Forbes, N. & Mahon, B. (2014). Faraday, Maxwell, and the Electromagnetic Field. Prometheus Books."
    url: null
    note: A readable history of the two men and the idea of the field, for general readers.
  - citation: "Griffiths, D. J. (2017). Introduction to Electrodynamics (4th ed.). Cambridge University Press."
    url: null
    note: The standard undergraduate textbook, famously clear.
  - citation: "Feynman, R. P., Leighton, R. B. & Sands, M. (1964). The Feynman Lectures on Physics, Vol. II. Addison-Wesley."
    url: https://www.feynmanlectures.caltech.edu/
    note: Electromagnetism from the field outward. Free online.
---

## Two Forces, One Needle

For most of history, electricity and magnetism were separate curiosities. Magnets pointed north, amber rubbed with fur attracted straw, and lightning was a mystery until Franklin tied it to sparks. By 1785 Coulomb had shown that electric charges attract and repel with an inverse-square law, just like Newton's gravity, and it was natural to think of electricity as another force acting at a distance.

In 1820 {{fig:oersted|Hans Christian Ørsted}} noticed a compass needle twitch beside a wire carrying current. An electric current makes magnetism. Within months Ampère in Paris had measured the forces between currents, and the two subjects began to merge.

## Faraday's Lines

{{fig:faraday|Michael Faraday}}, a bookbinder's apprentice turned experimenter with almost no mathematics, asked the reverse question: can magnetism make electricity? In 1831 he found that it can, but only when something *changes*. Switching a current on in one coil, or moving a magnet through another, drives a brief current. {{fig:henry|Joseph Henry}} in Albany found the same effect independently.

To think about it, Faraday imagined space around magnets and charges filled with lines of force, visible in the patterns iron filings make. Most physicists treated the lines as a picture. Faraday insisted they were real, and that the space between objects is where the physics happens. The *field* was the most consequential idea of the century.

## Maxwell's Light

{{fig:maxwell|James Clerk Maxwell}} turned Faraday's pictures into mathematics. In modern notation, his equations say:

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}, \quad
\nabla \cdot \mathbf{B} = 0, \quad
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad
\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}.
$$

The last term was Maxwell's own addition. With it, a changing electric field makes a magnetic field and a changing magnetic field makes an electric one, so the fields can sustain each other as a wave travelling through empty space. Its speed is $1/\sqrt{\mu_0\varepsilon_0}$, calculated from laboratory measurements of coils and capacitors, and it came out equal to the measured speed of light. "We can scarcely avoid the inference," Maxwell wrote, "that light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena."

## A Closer Look: The Speed of Light From Coils and Capacitors

Maxwell's equations contain two constants that can be measured on a laboratory bench, with no light involved. The *permeability* $\mu_0$ sets how strongly a current produces a magnetic field, and so the force between two wires carrying current. The *permittivity* $\varepsilon_0$ sets how strongly charges push on each other, and so how much charge a capacitor holds. In modern units:

$$
\mu_0 = 4\pi \times 10^{-7} \text{ N/A}^2 , \qquad \varepsilon_0 = 8.854 \times 10^{-12} \text{ F/m} .
$$

The equations predict waves of electric and magnetic field travelling at

$$
v = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = \frac{1}{\sqrt{4\pi \times 10^{-7} \times 8.854 \times 10^{-12}}} \approx 2.998 \times 10^8 \text{ m/s} .
$$

That is the speed of light. In 1856 Wilhelm Weber and Rudolf Kohlrausch had measured the corresponding ratio of electrical units, by discharging a capacitor through a galvanometer, and found about $3.1 \times 10^8$ m/s. Hippolyte Fizeau had measured the speed of light in 1849 with a spinning toothed wheel and a mirror about 8.6 km away, and got about $3.1 \times 10^8$ m/s as well. Maxwell saw that the agreement could not be a coincidence.

Nothing in the experiments on currents and charges involved light, optics or astronomy. Yet the speed of light fell out of them. Light is an electromagnetic wave, and so, Maxwell predicted, there should be others at every wavelength. Hertz found radio waves twenty years later.

The calculation also carries the puzzle that led to relativity. The formula gives one speed, with no mention of who is measuring it or how fast they are moving. Since 1983 the metre has been defined by fixing the speed of light at exactly 299,792,458 m/s.

## Waves and the Missing Ether

In 1887–88 {{fig:hertz|Heinrich Hertz}} made Maxwell's waves with a spark gap and detected them across his lab. Radio was born, and the theory seemed complete.

But the equations contained a puzzle. They give *one* speed for light, $c$. Relative to what? The natural answer was a medium, the luminiferous ether, at rest in absolute space, with light moving at $c$ relative to it. The Earth moves through the ether at about 30 km/s around the Sun, so light should travel slightly faster in some directions than others. {{fig:michelson|Albert Michelson}} and {{fig:morley|Edward Morley}} built an interferometer sensitive enough to detect the difference. It found almost nothing.

FitzGerald and {{fig:lorentz|Hendrik Lorentz}} proposed that objects moving through the ether shrink along their direction of motion by exactly enough to hide it. The fix worked but explained nothing. The deeper answer, that there is no ether and that $c$ is the same for everyone, needed a new idea of time. That idea is [special relativity](/physics/special-relativity/), born at the seam between this field and [classical mechanics](/physics/classical-mechanics/).
