---
id: quantum-mechanics
domain: physics
thread: quantum
name: Quantum Mechanics
parent_ids:
  - old-quantum-theory
era_emerged: 1924 – 1932
core_question: What are the laws of motion for atoms and electrons, and what do they say about reality?

summary: |-
  Quantum mechanics is the theory of how matter and light behave at the scale of atoms. A particle is described by a wave function that spreads through space, evolves smoothly according to Schrödinger's equation, and gives only the probabilities of what a measurement will find. Quantities like energy come in discrete levels, particles can be in superpositions of several states at once, and some pairs of quantities, such as position and momentum, cannot both be sharp.

  It was created in a rush between 1925 and 1927, mostly by physicists in their twenties, and replaced the patchwork of the old quantum theory with a single consistent framework. It explains the periodic table, chemical bonds, the solidity of matter, the behaviour of semiconductors and the light of the stars. It has never failed an experimental test. What it says about reality is still argued over.

key_ideas:
  - term: Matter waves
    definition: >-
      Every particle has a wavelength $\lambda = h/p$, where $p$ is its momentum. For
      electrons it is about the size of an atom, which is why atoms behave quantum
      mechanically.
    turning_point_id: de-broglie-waves
  - term: Wave function and Schrödinger's equation
    definition: >-
      A particle's state is a wave function, $\psi$, whose evolution is governed by
      Schrödinger's equation. Its allowed standing-wave patterns give the discrete energy
      levels of atoms.
    turning_point_id: schrodinger-equation
  - term: Born rule
    definition: >-
      The probability of finding a particle at a place is $|\psi|^2$ there. Quantum
      mechanics predicts probabilities, not individual outcomes.
    turning_point_id: born-rule
  - term: Uncertainty principle
    definition: >-
      Position and momentum cannot both be precisely defined: $\Delta x \, \Delta p \ge
      \hbar/2$. It is a property of waves, not a limitation of instruments.
    turning_point_id: uncertainty-principle
  - term: Superposition
    definition: >-
      A quantum system can be in a combination of states, such as passing through two
      slits at once. Measurement yields one outcome, with probabilities set by the
      combination.
    turning_point_id: born-rule

turning_points:
  - id: de-broglie-waves
    date: "1924"
    type: DISCOVERY
    title: De Broglie's matter waves
    description: >-
      In his doctoral thesis, Louis de Broglie proposes that if light waves behave as
      particles, then particles such as electrons should behave as waves, with wavelength
      $h/p$. His examiners were unsure what to make of it and sent it to Einstein, who
      endorsed it. Bohr's allowed orbits became those that fit a whole number of
      wavelengths.
    contested: false
    sources:
      - citation: "de Broglie, L. (1925). Recherches sur la théorie des quanta. Annales de Physique (10) 3: 22–128."
        url: null

  - id: matrix-mechanics
    date: "1925"
    type: PARADIGM-SHIFT
    title: Heisenberg's matrix mechanics
    description: >-
      Recovering from hay fever on the island of Heligoland, Werner Heisenberg, aged
      twenty-three, builds a mechanics using only observable quantities, the frequencies
      and intensities of spectral lines. Max Born recognises its strange multiplication,
      where $pq \ne qp$, as matrix multiplication, and with Pascual Jordan makes it a
      complete theory. It was the first consistent quantum mechanics.
    contested: false
    sources:
      - citation: "Heisenberg, W. (1925). Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen. Zeitschrift für Physik 33: 879–893."
        url: null
      - citation: "Born, M., Heisenberg, W. & Jordan, P. (1926). Zur Quantenmechanik II. Zeitschrift für Physik 35: 557–615."
        url: null

  - id: schrodinger-equation
    date: "1926"
    type: DISCOVERY
    title: Schrödinger's wave equation
    description: >-
      Over the Christmas holiday of 1925 in Arosa, Erwin Schrödinger finds a wave equation
      for de Broglie's matter waves. Its standing-wave solutions for hydrogen give exactly
      Bohr's energy levels, now without arbitrary rules. He soon proves that his wave
      mechanics and Heisenberg's matrices give the same predictions. Physicists found his
      version far easier to use.
    contested: false
    sources:
      - citation: "Schrödinger, E. (1926). Quantisierung als Eigenwertproblem (Erste Mitteilung). Annalen der Physik 79: 361–376."
        url: null

  - id: born-rule
    date: "1926"
    type: PARADIGM-SHIFT
    title: Probability at the foundation
    description: >-
      Analysing collisions with Schrödinger's equation, Max Born proposes, in a footnote,
      that the wave function gives the *probability* of finding the particle. Physics
      became fundamentally statistical: the theory predicts only the odds of each outcome.
      Einstein objected, in a letter to Born, that God does not play dice.
    contested: true
    contested_note: >-
      The rule itself is universally used and confirmed. What it means is not agreed. In the
      Copenhagen view, probabilities are basic and measurement is a primitive notion. In
      pilot-wave theory, particles have definite positions and the probabilities reflect
      ignorance. In the many-worlds view, every outcome occurs, and the rule must be
      derived rather than assumed. These interpretations make nearly identical
      predictions, and physicists remain divided among them.
    sources:
      - citation: "Born, M. (1926). Zur Quantenmechanik der Stoßvorgänge. Zeitschrift für Physik 37: 863–867."
        url: null

  - id: uncertainty-principle
    date: "1927"
    type: DISCOVERY
    title: The uncertainty principle
    description: >-
      Werner Heisenberg shows that the more precisely a particle's position is defined,
      the less precisely its momentum can be, and argues through thought experiments that
      no measurement can get around this. Classical determinism, knowing a particle's
      exact position and velocity, is ruled out in principle.
    contested: false
    sources:
      - citation: "Heisenberg, W. (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik. Zeitschrift für Physik 43: 172–198."
        url: null

  - id: electron-diffraction
    date: "1927"
    type: EXPERIMENT
    title: Electrons diffract like waves
    description: >-
      At Bell Labs, Clinton Davisson and Lester Germer scatter electrons from a nickel
      crystal that had been accidentally recrystallised after an air leak, and find sharp
      diffraction peaks at the angles de Broglie's wavelength predicts. George Paget
      Thomson finds the same with thin films in Aberdeen. His father J. J. Thomson had
      shown the electron to be a particle thirty years earlier.
    contested: false
    sources:
      - citation: "Davisson, C. & Germer, L. H. (1927). Diffraction of electrons by a crystal of nickel. Physical Review 30(6): 705–740."
        url: null
      - citation: "Thomson, G. P. & Reid, A. (1927). Diffraction of cathode rays by a thin film. Nature 119: 890."
        url: null

open_problems:
  - id: measurement-problem
    name: The measurement problem
    status: open
    status_note: Open as of 2026. Several interpretations are consistent with all experiments.
    description: >-
      Schrödinger's equation is deterministic and lets superpositions evolve smoothly.
      Yet every measurement gives one definite outcome. What counts as a measurement, and
      what happens to the other possibilities? Schrödinger's cat, both alive and dead
      until observed, was his way of pointing out how strange the standard answer is.
    why_hard: >-
      Decoherence explains why superpositions of large objects become unobservable in
      practice, but not why one outcome occurs. The rival interpretations (Copenhagen,
      many worlds, pilot waves, objective collapse) agree on almost every experiment, so
      data have little to choose between them. Only collapse theories make different
      predictions, and experiments are testing them.
    unlocks: >-
      A consistent account of what quantum mechanics describes, which may matter for
      quantum gravity and for applying the theory to the universe as a whole, where there
      is no outside observer.
    sources:
      - citation: "Bell, J. S. (1990). Against 'measurement'. Physics World 3(8): 33–40."
        url: null
      - citation: "Maudlin, T. (1995). Three measurement problems. Topoi 14(1): 7–15."
        url: null

applications:
  - area: Structural biology
    title: Chemical bonds and the shape of proteins
    description: >-
      Quantum mechanics explains why atoms bond and at what angles. Linus Pauling used the
      quantum theory of the chemical bond to predict the alpha helix of proteins in 1951,
      before it was seen, and chemists and biologists now compute molecular shapes and
      reactions from Schrödinger's equation.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Pauling, L., Corey, R. B. & Branson, H. R. (1951). The structure of proteins: two hydrogen-bonded helical configurations of the polypeptide chain. Proceedings of the National Academy of Sciences 37(4): 205–211."
        url: null
  - area: Electronics
    title: Semiconductors and the transistor
    description: >-
      Felix Bloch showed in 1928 how electron waves move through a crystal lattice, and
      band theory followed. It explains why some materials conduct and others insulate,
      and it made possible the transistor, the integrated circuit and every computer chip.
    sources:
      - citation: "Bloch, F. (1929). Über die Quantenmechanik der Elektronen in Kristallgittern. Zeitschrift für Physik 52: 555–600."
        url: null
  - area: Technology
    title: Lasers
    description: >-
      A laser works by stimulated emission, in which one photon triggers an excited atom
      to emit an identical one. Theodore Maiman built the first in 1960. Lasers now read
      barcodes, carry internet traffic in optical fibres and cut steel.
    sources:
      - citation: "Maiman, T. H. (1960). Stimulated optical radiation in ruby. Nature 187: 493–494."
        url: null

further_reading:
  - citation: "Feynman, R. P., Leighton, R. B. & Sands, M. (1965). The Feynman Lectures on Physics, Vol. III. Addison-Wesley."
    url: https://www.feynmanlectures.caltech.edu/III_toc.html
    note: Quantum mechanics from the two-slit experiment up. Free online.
  - citation: "Kumar, M. (2008). Quantum: Einstein, Bohr and the Great Debate About the Nature of Reality. Icon Books."
    url: null
    note: A popular history of the founders and their arguments.
  - citation: "Griffiths, D. J. & Schroeter, D. F. (2018). Introduction to Quantum Mechanics (3rd ed.). Cambridge University Press."
    url: null
    note: The standard undergraduate textbook.
---

## Particles as Waves

The [old quantum theory](/physics/old-quantum-theory/) had shown that light waves behave like particles. In 1924 {{fig:louis-de-broglie|Louis de Broglie}}, a French aristocrat who had turned from history to physics, proposed the reverse: every particle has a wavelength, $\lambda = h/p$. Bohr's allowed orbits became the ones where a whole number of electron waves fits around the circle. De Broglie's examiners did not know what to make of his thesis and sent it to Einstein, who said it lifted a corner of the great veil.

## Two Mechanics

The new theory arrived twice in a year. In June 1925 {{fig:werner-heisenberg|Werner Heisenberg}}, aged twenty-three, went to the treeless island of Heligoland to recover from hay fever. There he built a mechanics in which only observable quantities appear, arranged in arrays with a strange rule of multiplication. {{fig:max-born|Max Born}} recognised the arrays as matrices, which do not commute, and with {{fig:pascual-jordan|Pascual Jordan}} completed the theory.

Over the Christmas holiday of 1925, {{fig:erwin-schrodinger|Erwin Schrödinger}} found a wave equation for de Broglie's waves. Its solutions for hydrogen gave Bohr's energy levels with no ad hoc rules, as the natural vibration patterns of a wave confined around a nucleus. Schrödinger soon showed that his mechanics and Heisenberg's were mathematically equivalent. Most physicists preferred waves, which they could picture.

## Probability and Uncertainty

What was the wave? Schrödinger hoped it was a real spread-out electron. In 1926 Born proposed, in a footnote, that its squared size gives the *probability* of finding the particle. Physics would predict only the odds of each outcome. In 1927 Heisenberg showed that position and momentum cannot both be sharp. Einstein never accepted that this was the final word, and his debates with {{fig:niels-bohr|Niels Bohr}} at the Solvay conferences became famous. The same year, {{fig:clinton-davisson|Clinton Davisson}} and {{fig:lester-germer|Lester Germer}} at Bell Labs, and {{fig:george-paget-thomson|George Paget Thomson}} in Aberdeen, saw electrons diffract exactly as waves should.

## A Closer Look: Why You Don't Diffract

De Broglie's formula $\lambda = h/p$ tells when wave behaviour matters: when the wavelength is comparable to the size of whatever the particle meets. Planck's constant is $h = 6.63 \times 10^{-34}$ J·s.

**An electron.** In Davisson and Germer's experiment, electrons were accelerated through 54 volts, giving them kinetic energy $E = 54$ eV. Their momentum is $p = \sqrt{2mE}$, so

$$
\lambda = \frac{h}{\sqrt{2 m E}} = \frac{6.63 \times 10^{-34}}{\sqrt{2 \times 9.11 \times 10^{-31} \times 54 \times 1.60 \times 10^{-19}}} \approx 1.67 \times 10^{-10} \text{ m} ,
$$

0.167 nanometres. The spacing between rows of atoms in nickel is about 0.2 nanometres, so the crystal acts as a diffraction grating, and the electrons emerge in sharp beams at angles set by their wavelength. That is what Davisson and Germer saw.

**A baseball.** A 145-gram baseball thrown at 40 m/s has momentum $0.145 \times 40 = 5.8$ kg·m/s, so

$$
\lambda = \frac{6.63 \times 10^{-34}}{5.8} \approx 1.1 \times 10^{-34} \text{ m} .
$$

That is less than a ten-billion-billionth of the width of a proton. No slit or grating could ever reveal it. Quantum mechanics applies to baseballs too, but its effects are hidden far below anything measurable.

The same formula explains electron microscopes. Electrons accelerated through 100,000 volts have wavelengths of a few thousandths of a nanometre, far shorter than visible light at 400–700 nanometres, which is why electron microscopes can resolve individual atoms and the structures of proteins.

## Success and Unease

Quantum mechanics explained the periodic table, chemical bonding, the conduction of metals and semiconductors, radioactivity and the nuclear fusion that powers the Sun. {{fig:von-neumann|John von Neumann}} gave it a rigorous mathematical form in 1932. It has never failed an experimental test. Yet its founders disagreed about what it describes, and the measurement problem, how one definite outcome emerges from a superposition, is still open. Combining it with special relativity led to [quantum field theory](/physics/quantum-field-theory/). Einstein's deepest objection, to entanglement, became the starting point of [quantum information](/physics/quantum-information/).
