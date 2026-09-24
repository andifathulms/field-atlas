---
id: quantum-field-theory
domain: physics
thread: quantum
name: Quantum Field Theory
parent_ids:
  - quantum-mechanics
  - special-relativity
era_emerged: 1927 – 1954
core_question: How can quantum mechanics be made consistent with relativity, when particles can be created and destroyed?

summary: |-
  Quantum field theory joins quantum mechanics and special relativity. Its basic objects are not particles but fields filling all of space, one for each kind of particle. Particles are the fields' quantised ripples: an electron is a ripple in the electron field, a photon a ripple in the electromagnetic field. Because $E = mc^2$ lets energy turn into mass, particles can be created and destroyed, and a fixed number of particles is not a good description.

  The first version, quantum electrodynamics (QED), predicted antimatter and then ran into infinite answers. Renormalisation, worked out between 1947 and 1949, tamed the infinities and made QED the most precisely tested theory in science. Yang and Mills's generalisation of 1954 became the framework of the Standard Model of particle physics. A mathematically rigorous version of the theory is still lacking.

key_ideas:
  - term: Quantum field
    definition: >-
      A field defined everywhere in space whose excitations come in discrete lumps,
      which are particles. All electrons are identical because they are ripples of one
      field.
    turning_point_id: dirac-equation
  - term: Antimatter
    definition: >-
      Every particle has an antiparticle with opposite charge. Dirac's equation required
      them. When a particle meets its antiparticle, both can annihilate into energy.
    turning_point_id: positron-discovery
  - term: Renormalisation
    definition: >-
      Calculations in QED gave infinite answers. Renormalisation absorbs the infinities
      into the measured mass and charge, leaving finite, accurate predictions.
    turning_point_id: qed-renormalization
  - term: Feynman diagrams
    definition: >-
      Pictures of particles meeting, exchanging and splitting that stand for terms in a
      calculation. They made QED computable and are now used throughout physics.
    turning_point_id: qed-renormalization
  - term: Gauge theory
    definition: >-
      A field theory built on a symmetry that can be applied differently at each point in
      space. Electromagnetism is the simplest example; Yang and Mills found the general
      form, which describes all the forces except gravity.
    turning_point_id: yang-mills

turning_points:
  - id: dirac-equation
    date: "1928"
    type: DISCOVERY
    title: The Dirac equation
    description: >-
      Paul Dirac finds a relativistic wave equation for the electron. It explains the
      electron's spin and magnetic moment without extra assumptions. It also has solutions
      with negative energy, which Dirac interpreted by 1931 as a new particle with the
      electron's mass and the opposite charge, antimatter.
    contested: false
    sources:
      - citation: "Dirac, P. A. M. (1928). The quantum theory of the electron. Proceedings of the Royal Society A 117(778): 610–624."
        url: null
      - citation: "Farmelo, G. (2009). The Strangest Man: The Hidden Life of Paul Dirac. Faber & Faber."
        url: null

  - id: positron-discovery
    date: "1932"
    type: EXPERIMENT
    title: The positron
    description: >-
      Carl Anderson, photographing cosmic-ray tracks in a cloud chamber in a magnetic
      field at Caltech, sees a particle with the electron's mass that curves the wrong way.
      It is the antielectron, the positron, that Dirac's theory required. It was the first
      antimatter observed.
    contested: false
    sources:
      - citation: "Anderson, C. D. (1933). The positive electron. Physical Review 43(6): 491–494."
        url: null

  - id: lamb-shift
    date: "1947"
    type: EXPERIMENT
    title: The Lamb shift
    description: >-
      Willis Lamb and Robert Retherford, using microwave techniques developed for radar,
      find that two energy levels of hydrogen that Dirac's theory says are equal differ
      slightly. The measurement, presented at the Shelter Island conference, showed that
      the electron's interaction with the quantum electromagnetic field has real effects.
      Hans Bethe estimated the shift on the train home.
    contested: false
    sources:
      - citation: "Lamb, W. E. & Retherford, R. C. (1947). Fine structure of the hydrogen atom by a microwave method. Physical Review 72(3): 241–243."
        url: null

  - id: qed-renormalization
    date: 1947 – 1949
    type: PARADIGM-SHIFT
    title: Renormalised quantum electrodynamics
    description: >-
      Sin-Itiro Tomonaga in Tokyo, and Julian Schwinger and Richard Feynman in the United
      States, independently find ways to remove the infinities from QED and compute finite
      corrections that match the Lamb shift and the electron's magnetic moment. Freeman
      Dyson proves in 1949 that the three approaches are equivalent. Tomonaga, Schwinger
      and Feynman shared the 1965 Nobel prize.
    contested: false
    sources:
      - citation: "Dyson, F. J. (1949). The radiation theories of Tomonaga, Schwinger, and Feynman. Physical Review 75(3): 486–502."
        url: null
      - citation: "Schweber, S. S. (1994). QED and the Men Who Made It: Dyson, Feynman, Schwinger, and Tomonaga. Princeton University Press."
        url: null

  - id: yang-mills
    date: "1954"
    type: DISCOVERY
    title: Yang–Mills theory
    description: >-
      Chen-Ning Yang and Robert Mills generalise the symmetry of electromagnetism to
      symmetries in which the order of operations matters. Their theory predicted massless
      force carriers that did not seem to exist, and it was set aside. Two decades later,
      with the Higgs mechanism and asymptotic freedom, it became the basis of the
      Standard Model.
    contested: false
    sources:
      - citation: "Yang, C. N. & Mills, R. L. (1954). Conservation of isotopic spin and isotopic gauge invariance. Physical Review 96(1): 191–195."
        url: null

open_problems:
  - id: yang-mills-mass-gap
    name: Yang–Mills existence and mass gap
    status: open
    status_note: Open as of writing; one of the Clay Mathematics Institute's Millennium Prize Problems.
    description: >-
      Prove that quantum Yang–Mills theory exists as a mathematically well-defined theory
      in four spacetime dimensions, and that its lightest particle has positive mass, the
      "mass gap". Physicists believe both, because the strong force behaves this way and
      computer simulations agree.
    why_hard: >-
      The calculational methods of physics treat quantum fields as expansions around free
      particles, which do not converge and cannot describe the mass gap. Constructing an
      interacting quantum field theory rigorously has been achieved only in fewer
      dimensions than four.
    unlocks: >-
      A mathematical foundation for the Standard Model, and an explanation of why quarks
      are confined inside protons and neutrons.
    sources:
      - citation: "Jaffe, A. & Witten, E. (2006). Quantum Yang–Mills theory. In J. Carlson, A. Jaffe & A. Wiles (eds.), The Millennium Prize Problems, 129–152. Clay Mathematics Institute / AMS."
        url: null

applications:
  - area: Medicine
    title: PET scans use antimatter
    description: >-
      In positron emission tomography, a tracer emits positrons that annihilate with
      electrons in the body, producing pairs of gamma rays flying in opposite directions.
      Detecting the pairs maps metabolic activity in the brain and locates tumours.
    sources:
      - citation: "Phelps, M. E. (2000). Positron emission tomography provides molecular imaging of biological processes. Proceedings of the National Academy of Sciences 97(16): 9226–9233."
        url: null
  - area: Mathematics
    title: Knot invariants from quantum fields
    description: >-
      Edward Witten showed in 1989 that the Jones polynomial, a knot invariant found in
      1984, arises naturally from a quantum field theory in three dimensions. Physics
      intuition from quantum field theory has since produced conjectures and new
      invariants throughout geometry and topology.
    domain: math
    field_id: geometric-topology
    sources:
      - citation: "Witten, E. (1989). Quantum field theory and the Jones polynomial. Communications in Mathematical Physics 121(3): 351–399."
        url: null

further_reading:
  - citation: "Feynman, R. P. (1985). QED: The Strange Theory of Light and Matter. Princeton University Press."
    url: null
    note: Four lectures for general audiences, explaining QED with arrows instead of equations.
  - citation: "Schweber, S. S. (1994). QED and the Men Who Made It. Princeton University Press."
    url: null
    note: The detailed history of renormalisation.
  - citation: "Lancaster, T. & Blundell, S. J. (2014). Quantum Field Theory for the Gifted Amateur. Oxford University Press."
    url: null
    note: An unusually accessible textbook.
---

## Dirac's Equation

[Quantum mechanics](/physics/quantum-mechanics/) described electrons moving slowly. For fast electrons it had to be combined with [special relativity](/physics/special-relativity/). In 1928 {{fig:paul-dirac|Paul Dirac}}, a famously silent Cambridge physicist, found an equation that did so. It explained the electron's spin, which had been added to the theory by hand, and predicted its magnetic strength. It also had solutions with negative energy, which seemed nonsensical. By 1931 Dirac had concluded that they described a new particle: the same mass as the electron, opposite charge.

In 1932 {{fig:carl-anderson|Carl Anderson}}, photographing cosmic rays at Caltech, saw exactly that particle, the positron. Particles could now be created and destroyed, a photon turning into an electron and a positron, the pair annihilating back into light. A theory with a fixed number of particles could not describe this. What was needed was a theory of fields, whose quantised ripples are particles.

## The Infinities

Quantum electrodynamics, the quantum field theory of electrons and light, was built in the late 1920s and at once went wrong. The electron constantly emits and reabsorbs virtual photons, and adding up their effects gave infinity for almost any correction beyond the simplest approximation. Through the 1930s many physicists concluded that the theory was fundamentally flawed.

After the war, experiments forced the issue. In 1947 {{fig:willis-lamb|Willis Lamb}} and {{fig:robert-retherford|Robert Retherford}}, using radar-era microwave techniques, found a tiny shift in hydrogen's energy levels that Dirac's theory said should not exist. The effect was real, and it came from the corrections that gave infinities. {{fig:hans-bethe|Hans Bethe}} estimated it on the train home from the conference where it was announced, by subtracting one infinity from another.

## Renormalisation

Between 1947 and 1949, {{fig:julian-schwinger|Julian Schwinger}}, {{fig:richard-feynman|Richard Feynman}} and, independently in war-ravaged Tokyo, {{fig:sin-itiro-tomonaga|Sin-Itiro Tomonaga}} found systematic ways to do it. The infinities could all be absorbed into the electron's measured mass and charge, leaving finite corrections that could be calculated to any accuracy. Feynman's diagrams made the calculations visual and fast. {{fig:freeman-dyson|Freeman Dyson}} showed that the three methods were the same theory. Many physicists, Dirac among them, regarded renormalisation as sweeping infinities under the rug. [Phase transitions](/physics/phase-transitions/) later showed what it really means: physics at one scale is insensitive to the details at much smaller scales.

In 1954 {{fig:chen-ning-yang|Chen-Ning Yang}} and {{fig:robert-mills|Robert Mills}} generalised the symmetry behind electromagnetism. Their theory seemed to predict massless particles no one had seen, and it was set aside for years. It later became the framework of [particle physics](/physics/particle-physics/).

## A Closer Look: The Electron's Magnet

An electron is a tiny magnet. Its strength is measured by the *g-factor*. Dirac's equation predicts $g = 2$ exactly. Quantum field theory says the electron's cloud of virtual photons changes that slightly. The deviation, $a_e = (g - 2)/2$, is called the anomalous magnetic moment.

In 1948 Schwinger calculated the first correction. It depends only on the fine-structure constant $\alpha \approx 1/137.036$:

$$
a_e \approx \frac{\alpha}{2\pi} = \frac{1}{2\pi \times 137.036} \approx 0.0011614 .
$$

The measured value, as of 2023, is

$$
a_e = 0.00115965218059 \pm 0.00000000000013 .
$$

Schwinger's single term is already right to about 0.15%. Physicists have since computed further terms, with more and more virtual particles, up to diagrams with five loops, more than 12,000 of them. With those included, theory and experiment agree to about one part in a trillion in $g$. The comparison is limited mainly by how precisely $\alpha$ itself is known. In fact, the most precise determinations of $\alpha$ use this very calculation.

It is often called the most accurate prediction in science. Schwinger had the formula $\alpha/2\pi$ engraved on his tombstone.

## A Framework for Everything but Gravity

After Yang–Mills theory was shown in 1971 to be renormalisable, quantum field theory became the language of all particle physics, and much of condensed-matter physics too. It has one glaring gap: nobody has constructed a realistic interacting quantum field theory in four dimensions with full mathematical rigour, and the Clay Institute offers a million dollars for the first step. Gravity has resisted it entirely. [General relativity](/physics/general-relativity/) cannot be renormalised in the same way, and a quantum theory of gravity is the deepest open problem in physics.
