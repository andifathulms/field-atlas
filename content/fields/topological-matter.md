---
id: topological-matter
domain: physics
thread: matter
name: Topological Matter
parent_ids:
  - solid-state-physics
  - phase-transitions
era_emerged: 1980 – 2007
core_question: Can the shape of electrons' quantum states, rather than the arrangement of their atoms, define a phase of matter?

summary: |-
  In 1980 Klaus von Klitzing found that the resistance of a thin layer of electrons in a strong magnetic field comes in steps, and that each step has a value fixed by two constants of nature to better than a part in a million, whatever the material, its impurities or its shape. So exact a number from so messy a sample demanded an explanation. It came in 1982 from topology, the branch of mathematics concerned with properties that do not change under smooth deformation, such as the number of holes in a doughnut.

  The steps count a topological invariant of the electrons' quantum states, an integer that cannot change without closing the energy gap. From that idea grew a new classification of matter. It predicted, and experiments found, topological insulators, which are insulating inside but conduct on their surfaces. Graphene, a single sheet of carbon atoms, joined the story in 2004. The hunt for exotic particles in such materials has produced some of the field's biggest hopes, and some of its retractions.

key_ideas:
  - term: Quantum Hall effect
    definition: >-
      In a thin layer of electrons at low temperature and high magnetic field, the Hall
      resistance, the voltage across the current divided by the current, is locked to
      $h/(\nu e^2)$, where $\nu$ is a whole number.
    turning_point_id: topomat-quantum-hall
  - term: Topological invariant
    definition: >-
      A whole number computed from the quantum states of all the electrons in a band, which
      stays fixed under any smooth change. For the quantum Hall effect it is called the
      Chern number, and it equals $\nu$.
    turning_point_id: topomat-tknn
  - term: Fractional charge
    definition: >-
      In the fractional quantum Hall effect, the electrons act collectively so that the
      basic excitations carry a fraction of an electron's charge, such as one third.
    turning_point_id: topomat-fractional-hall
  - term: Edge state
    definition: >-
      At the boundary of a topological material, where the invariant must change to the
      value of empty space, conducting states must exist. They carry current along the edge
      and are protected from being scattered backwards.
    turning_point_id: topomat-insulators
  - term: Dirac electrons
    definition: >-
      In graphene the electrons behave as if they had no mass, obeying an equation like the
      one Dirac wrote for relativistic particles, at a speed about 1/300 of the speed of
      light.
    turning_point_id: topomat-graphene

turning_points:
  - id: topomat-quantum-hall
    date: "1980"
    type: EXPERIMENT
    title: The quantum Hall effect
    description: >-
      Working at the high magnetic field laboratory in Grenoble, Klaus von Klitzing measures
      the Hall resistance of electrons trapped at the surface of a silicon transistor. It
      forms flat plateaus at values equal to $h/e^2$ divided by a whole number, to high
      precision, whatever the sample. He received the 1985 Nobel prize.
    contested: false
    sources:
      - citation: "von Klitzing, K., Dorda, G. & Pepper, M. (1980). New method for high-accuracy determination of the fine-structure constant based on quantized Hall resistance. Physical Review Letters 45(6): 494–497."
        url: null

  - id: topomat-tknn
    date: 1981 – 1982
    type: DISCOVERY
    title: The Hall steps are topological
    description: >-
      Robert Laughlin argues in 1981 that the steps follow from the gauge symmetry of
      electromagnetism. In 1982 David Thouless, Mahito Kohmoto, Peter Nightingale and Marcel
      den Nijs show that the Hall conductance of a filled band is a topological invariant of
      its quantum states. Mathematicians soon recognised it as a Chern number, familiar
      from the topology of curved spaces. Thouless shared the 2016 Nobel prize.
    contested: false
    sources:
      - citation: "Thouless, D. J., Kohmoto, M., Nightingale, M. P. & den Nijs, M. (1982). Quantized Hall conductance in a two-dimensional periodic potential. Physical Review Letters 49(6): 405–408."
        url: null
      - citation: "Laughlin, R. B. (1981). Quantized Hall conductivity in two dimensions. Physical Review B 23(10): 5632–5633."
        url: null

  - id: topomat-fractional-hall
    date: 1982 – 1983
    type: DISCOVERY
    title: Fractional charge
    description: >-
      Daniel Tsui and Horst Störmer, in very clean samples grown by Arthur Gossard at Bell
      Labs, find a Hall plateau at one third of the first step, which single electrons
      cannot explain. Robert Laughlin explains it in 1983 as a new quantum liquid, whose
      excitations carry a third of an electron's charge. Tsui, Störmer and Laughlin shared
      the 1998 Nobel prize.
    contested: false
    sources:
      - citation: "Tsui, D. C., Störmer, H. L. & Gossard, A. C. (1982). Two-dimensional magnetotransport in the extreme quantum limit. Physical Review Letters 48(22): 1559–1562."
        url: null
      - citation: "Laughlin, R. B. (1983). Anomalous quantum Hall effect: an incompressible quantum fluid with fractionally charged excitations. Physical Review Letters 50(18): 1395–1398."
        url: null

  - id: topomat-haldane-model
    date: "1988"
    type: DISCOVERY
    title: A quantum Hall effect without a magnetic field
    description: >-
      Duncan Haldane invents a model of electrons hopping on a honeycomb lattice that shows
      a quantized Hall effect with no overall magnetic field. It showed that the topology
      belongs to the band structure itself, not to the magnet. The model was regarded as a
      curiosity for fifteen years, then became the template for topological insulators.
      Haldane shared the 2016 Nobel prize.
    contested: false
    sources:
      - citation: "Haldane, F. D. M. (1988). Model for a quantum Hall effect without Landau levels: condensed-matter realization of the \"parity anomaly\". Physical Review Letters 61(18): 2015–2018."
        url: null

  - id: topomat-graphene
    date: 2004 – 2005
    type: EXPERIMENT
    title: Graphene
    description: >-
      Andre Geim and Konstantin Novoselov in Manchester peel single layers of carbon atoms
      from graphite with adhesive tape and measure their electrical properties. In 2005
      their group and Philip Kim's at Columbia show that graphene's electrons behave as
      massless Dirac particles, with an unusual quantum Hall effect. Geim and Novoselov
      received the 2010 Nobel prize.
    contested: true
    contested_note: >-
      Walt de Heer and others criticised the Nobel committee's scientific background for
      understating earlier work, including de Heer's own graphene grown on silicon carbide
      and older observations of very thin graphite. The dispute is about the history and
      its weighting, not about the Manchester measurements.
    sources:
      - citation: "Novoselov, K. S., Geim, A. K. et al. (2004). Electric field effect in atomically thin carbon films. Science 306(5696): 666–669."
        url: null
      - citation: "Novoselov, K. S. et al. (2005). Two-dimensional gas of massless Dirac fermions in graphene. Nature 438: 197–200."
        url: null

  - id: topomat-insulators
    date: 2005 – 2007
    type: PARADIGM-SHIFT
    title: Topological insulators
    description: >-
      Charles Kane and Eugene Mele show that electron spin can play the role of the magnetic
      field, giving a new invariant and a quantum spin Hall effect. Andrei Bernevig, Taylor
      Hughes and Shou-Cheng Zhang predict it in thin layers of mercury telluride, and in
      2007 Laurens Molenkamp's group in Würzburg observes the conducting edges. Three
      dimensional versions were found in bismuth compounds in 2008.
    contested: false
    sources:
      - citation: "Kane, C. L. & Mele, E. J. (2005). Z2 topological order and the quantum spin Hall effect. Physical Review Letters 95(14): 146802."
        url: null
      - citation: "Bernevig, B. A., Hughes, T. L. & Zhang, S.-C. (2006). Quantum spin Hall effect and topological phase transition in HgTe quantum wells. Science 314(5806): 1757–1761."
        url: null
      - citation: "König, M. et al. (2007). Quantum spin Hall insulator state in HgTe quantum wells. Science 318(5851): 766–770."
        url: null

  - id: topomat-majorana-claims
    date: 2012 – 2021
    type: EXPERIMENT
    title: The Majorana chase
    description: >-
      Theory predicts that the ends of certain superconducting nanowires should host
      Majorana modes, halves of an electron that could store quantum information safe from
      noise. A Delft group reports signs of them in 2012. A 2018 paper in Nature claiming a
      decisive quantized signal is retracted in 2021, after the full data were found to
      undermine it, and other claims are withdrawn or corrected. The search continues.
    contested: true
    contested_note: >-
      Whether any experiment has yet shown Majorana modes, as opposed to ordinary states
      that mimic their signatures, is disputed. Critics argue that selective reporting of
      data played a part in the retracted claims. Supporters point to steady improvements in
      materials and measurement.
    sources:
      - citation: "Mourik, V. et al. (2012). Signatures of Majorana fermions in hybrid superconductor-semiconductor nanowire devices. Science 336(6084): 1003–1007."
        url: null
      - citation: "Zhang, H. et al. (2018). Quantized Majorana conductance. Nature 556: 74–79. Retracted 2021."
        url: null

open_problems:
  - id: topomat-non-abelian-anyons
    name: Non-Abelian anyons and topological quantum computing
    status: open
    status_note: Open as of writing; simpler, Abelian anyons have been observed, but the non-Abelian kind needed for computing has not been shown beyond doubt.
    description: >-
      In two dimensions, particles need not be ordinary bosons or fermions. Some predicted
      excitations, called non-Abelian anyons, remember the order in which they have been
      moved around each other. Information stored in that braiding would be immune to most
      noise. Do such particles exist in any real material, and can they be controlled?
    why_hard: >-
      The candidates, such as the fractional quantum Hall state at filling 5/2 and Majorana
      modes in nanowires, need extremely clean samples at millikelvin temperatures, and their
      signatures can be imitated by ordinary effects. A convincing test means braiding them
      and seeing the predicted change of state.
    unlocks: >-
      A quantum computer whose qubits are protected by topology rather than by constant
      error correction, and a new kind of particle statistics seen in nature.
    sources:
      - citation: "Nayak, C., Simon, S. H., Stern, A., Freedman, M. & Das Sarma, S. (2008). Non-Abelian anyons and topological quantum computation. Reviews of Modern Physics 80(3): 1083–1159."
        url: null

applications:
  - area: Metrology
    title: The ohm from the quantum Hall effect
    description: >-
      Since 1990 national laboratories have realised the ohm with quantum Hall devices, which
      agree with each other to parts in a billion. When the SI units were redefined in 2019,
      Planck's constant and the electron's charge were fixed exactly, which made $h/e^2$ an
      exact number of ohms. Every calibrated resistance meter is traced to it.
    sources:
      - citation: "BIPM (2019). The International System of Units (SI), 9th edition. Bureau International des Poids et Mesures."
        url: null
  - area: Topology
    title: A periodic table of topological matter
    description: >-
      In 2009 Alexei Kitaev classified all possible topological insulators and
      superconductors, using K-theory and Bott periodicity from algebraic topology. The
      result is a table in which the possible invariants repeat as the dimension changes.
      Questions raised by the physics, such as how symmetry and interactions change the
      classification, have become active research in topology itself.
    domain: math
    field_id: algebraic-topology
    sources:
      - citation: "Kitaev, A. (2009). Periodic table for topological insulators and superconductors. AIP Conference Proceedings 1134: 22–30."
        url: null
      - citation: "Freed, D. S. & Moore, G. W. (2013). Twisted equivariant matter. Annales Henri Poincaré 14(8): 1927–2023."
        url: null

further_reading:
  - citation: "von Klitzing, K. (1986). The quantized Hall effect. Reviews of Modern Physics 58(3): 519–531."
    url: null
    note: The discoverer's Nobel lecture, with the story of the night of the discovery.
  - citation: "Hasan, M. Z. & Kane, C. L. (2010). Colloquium: Topological insulators. Reviews of Modern Physics 82(4): 3045–3067."
    url: null
    note: The standard review of topological insulators, readable by physics graduates.
  - citation: "Geim, A. K. & Novoselov, K. S. (2007). The rise of graphene. Nature Materials 6: 183–191."
    url: null
    note: An early overview of graphene by its discoverers.
---

## An Exact Number from a Dirty Sample

The Hall effect has been known since 1879. Pass a current along a strip in a magnetic field, and the field pushes the charges sideways, building up a voltage across the strip. The ratio of that voltage to the current, the Hall resistance, normally rises smoothly with the field. On the night of 4–5 February 1980, at the high magnetic field laboratory in Grenoble, {{fig:klaus-von-klitzing|Klaus von Klitzing}} measured it for electrons confined to a thin layer at the surface of a silicon transistor, cooled to near absolute zero. The Hall resistance rose in flat steps, and the steps sat at $h/e^2$ divided by a whole number, where $h$ is Planck's constant and $e$ the electron's charge.

That was astonishing. The sample was a commercial device full of impurities and irregular edges, and yet it produced a combination of fundamental constants to better than a part in a million. Something had to make the answer immune to all the details.

## Topology Enters

The explanation came in stages. In 1981 {{fig:robert-laughlin|Robert Laughlin}} gave an argument that the steps must be exact. In 1982 {{fig:david-thouless|David Thouless}} and three colleagues showed what the whole number is. It counts how the electrons' quantum states twist as one moves through the band, in the same way that the number of holes counts the shape of a surface in [algebraic topology](/math/algebraic-topology/). A smooth change cannot alter a whole number, so impurities and irregular shapes cannot either. Thouless had already brought topology into physics a decade earlier, in the vortex transitions of [phase transitions](/physics/phase-transitions/).

Cleaner samples brought another surprise. In 1982 {{fig:daniel-tsui|Daniel Tsui}} and {{fig:horst-stormer|Horst Störmer}}, using layers grown by Arthur Gossard, found a plateau at one third of the first step. No picture of independent electrons allows it. Laughlin explained it in 1983. At that field the electrons condense into a new quantum liquid, and its excitations carry exactly one third of an electron's charge. The charge of an electron, it seemed, is not the smallest charge that can move through a solid.

In 1988 {{fig:duncan-haldane|Duncan Haldane}} showed that a quantum Hall effect needs no magnetic field. Electrons hopping on a honeycomb lattice with the right pattern of internal fields would do it. The model looked artificial and was put aside.

## Topological Insulators and Graphene

A real honeycomb of atoms arrived in 2004. {{fig:andre-geim|Andre Geim}} and {{fig:konstantin-novoselov|Konstantin Novoselov}} in Manchester pulled single sheets of carbon atoms from graphite with adhesive tape and measured their conduction. The electrons in graphene behave like massless particles obeying the relativistic equation of Dirac, and their quantum Hall steps are shifted by a half from those of ordinary electrons, a sign of the Dirac equation at work.

Graphene's honeycomb prompted {{fig:charles-kane|Charles Kane}} and {{fig:eugene-mele|Eugene Mele}} to ask in 2005 whether the coupling between an electron's spin and its motion could replace Haldane's fields. It could, giving a new invariant that takes only two values. Graphene's version is too weak to see, so {{fig:shoucheng-zhang|Shou-Cheng Zhang}} and his students predicted where to look instead, in thin wells of mercury telluride. In 2007 {{fig:laurens-molenkamp|Laurens Molenkamp}}'s group found the predicted conducting edges on otherwise insulating samples. A *topological insulator* is insulating inside, but its surface must conduct, because the invariant has to change at the boundary with empty space.

The search then turned to particles. Combining topological materials with superconductors should give Majorana modes, halves of an electron that could store quantum information protected by topology. Signs were reported from 2012 onwards, but a much-publicised 2018 claim was retracted in 2021, and the question is still open.

## A Closer Look: The Ohm Made Exact

The quantum Hall steps sit at $R = R_K/\nu$, where $\nu$ is a whole number and $R_K$ is the von Klitzing constant. Since 2019 the SI units fix $h = 6.62607015 \times 10^{-34}$ J s and $e = 1.602176634 \times 10^{-19}$ C exactly, so

$$
R_K = \frac{h}{e^2} = 25{,}812.807\,45\ldots \ \Omega .
$$

| Filling $\nu$ | Hall resistance $R_K/\nu$ (Ω) |
|---|---|
| 1 | 25,812.807 |
| 2 | 12,906.404 |
| 3 | 8,604.269 |
| 4 | 6,453.202 |
| 1/3 (fractional) | 77,438.422 |

Which step appears depends on how many electrons there are per unit of magnetic flux. The flux quantum is $h/e = 4.136 \times 10^{-15}$ weber, and the filling is $\nu = n h / (eB)$ for $n$ electrons per square metre in a field $B$. A typical layer with $n = 3 \times 10^{15}$ m⁻² reaches $\nu = 1$ at $B = 12.4$ T and $\nu = 2$ near 6.2 T.

Von Klitzing's original paper was titled as a way to measure the fine-structure constant $\alpha$, the number that sets the strength of electromagnetism. With the magnetic constant fixed, as it then was, at $\mu_0 = 4\pi \times 10^{-7}$ N/A²,

$$
\alpha = \frac{\mu_0 c}{2 R_K}, \qquad \frac{1}{\alpha} = 137.036 .
$$

For resistance standards, laboratories adopted in 1990 a conventional value $R_{K\text{-}90} = 25{,}812.807$ Ω exactly. The 2019 value is larger by about 18 parts in a billion, so every resistance standard in the world shifted by that amount on 20 May 2019. That such a correction mattered at all is a measure of how exact the steps are: devices of gallium arsenide and of graphene give the same value to about a part in ten billion.

## A New Kind of Order

Before 1980, phases of matter were classified by their symmetry, as in Landau's theory. Topological matter showed that two phases can have identical symmetry and still differ, in an integer that no local measurement can see. The idea now runs through condensed matter physics, from spin liquids in [magnetism](/physics/magnetism/) to topological [superconductivity](/physics/superconductivity/), and back into mathematics, where physicists' classifications have posed new problems. The biggest prize, a quantum computer protected by topology, is still out of reach.
