---
id: old-quantum-theory
domain: physics
thread: quantum
name: Old Quantum Theory
parent_ids:
  - statistical-mechanics
  - electromagnetism
era_emerged: 1900 – 1924
core_question: Why does energy come in lumps, and how can light be both a wave and a stream of particles?

summary: |-
  The old quantum theory is the set of rules, part inspired and part improvised, that physicists used between 1900 and 1925 to explain phenomena classical physics could not. Its central idea is that energy is exchanged in discrete packets, quanta, whose size is set by a new constant of nature, Planck's constant $h$.

  It began when statistical mechanics and electromagnetism together predicted, absurdly, that a hot oven should radiate infinite energy. Planck's fix, Einstein's light quanta and Bohr's atom each worked brilliantly for particular problems. None of them made sense together, and the contradictions forced the creation of quantum mechanics in 1925.

key_ideas:
  - term: Quantum of energy
    definition: >-
      Energy of light of frequency $f$ is exchanged only in multiples of $E = hf$, where
      $h \approx 6.63 \times 10^{-34}$ J·s is Planck's constant.
    turning_point_id: planck-blackbody
  - term: Photon
    definition: >-
      A particle of light, carrying energy $hf$. Einstein proposed it in 1905. It was
      widely accepted only after Compton's experiment in 1923.
    turning_point_id: einstein-light-quanta
  - term: Wave–particle duality
    definition: >-
      Light spreads and interferes like a wave, yet delivers its energy in particle-like
      lumps. The old quantum theory had no way to reconcile the two.
    turning_point_id: compton-scattering
  - term: Stationary states
    definition: >-
      In Bohr's model, electrons in atoms occupy only certain allowed orbits with fixed
      energies. Light is emitted when an electron jumps between them.
    turning_point_id: bohr-atom
  - term: Atomic nucleus
    definition: >-
      Almost all of an atom's mass is concentrated in a positive nucleus about 100,000
      times smaller than the atom itself.
    turning_point_id: rutherford-nucleus

turning_points:
  - id: planck-blackbody
    date: "1900"
    type: DISCOVERY
    title: Planck's quantum
    description: >-
      Classical physics predicts that a hot body should radiate unlimited energy at high
      frequencies. Max Planck finds a formula that fits the measured spectrum exactly, and
      to justify it assumes that energy is absorbed and emitted in lumps proportional to
      frequency. He called it "an act of desperation" and thought it a mathematical
      device. It introduced Planck's constant, $h$.
    contested: false
    sources:
      - citation: "Planck, M. (1901). Über das Gesetz der Energieverteilung im Normalspectrum. Annalen der Physik 309(3): 553–563."
        url: null
      - citation: "Kuhn, T. S. (1978). Black-Body Theory and the Quantum Discontinuity, 1894–1912. Oxford University Press."
        url: null

  - id: einstein-light-quanta
    date: "1905"
    type: DISCOVERY
    title: Einstein's light quanta
    description: >-
      Albert Einstein proposes that light itself consists of quanta, and uses the idea to
      predict the photoelectric effect: the energy of electrons knocked out of a metal
      should depend on the light's colour, not its brightness. Almost no one believed it
      for years. His law of the photoelectric effect was the work named when he received
      the 1921 Nobel prize.
    contested: false
    sources:
      - citation: "Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. Annalen der Physik 17: 132–148."
        url: null

  - id: rutherford-nucleus
    date: 1909 – 1911
    type: EXPERIMENT
    title: The atomic nucleus
    description: >-
      Hans Geiger and Ernest Marsden fire alpha particles at thin gold foil, and a few
      bounce almost straight back. Ernest Rutherford said it was as if a 15-inch shell had
      bounced off tissue paper. In 1911 he concludes that an atom's positive charge and
      mass are packed into a tiny nucleus. Classical physics then predicted that orbiting
      electrons would spiral into it within a fraction of a second.
    contested: false
    sources:
      - citation: "Rutherford, E. (1911). The scattering of α and β particles by matter and the structure of the atom. Philosophical Magazine 21: 669–688."
        url: null

  - id: bohr-atom
    date: "1913"
    type: DISCOVERY
    title: Bohr's atom
    description: >-
      Niels Bohr postulates that the electron in hydrogen can occupy only certain orbits
      and radiates only when jumping between them. The rule reproduces the exact colours
      of hydrogen's spectral lines, a pattern known since Balmer's formula of 1885 but
      never explained. The model worked, though it contradicted the physics it was built
      on.
    contested: false
    sources:
      - citation: "Bohr, N. (1913). On the constitution of atoms and molecules. Philosophical Magazine 26: 1–25."
        url: null

  - id: millikan-photoelectric
    date: "1916"
    type: EXPERIMENT
    title: Millikan confirms the photoelectric equation
    description: >-
      Robert Millikan spends ten years trying to show that Einstein's photoelectric
      equation is wrong. His precise measurements confirm it in every detail and give an
      accurate value of Planck's constant. He still doubted the idea of light particles
      behind it.
    contested: false
    sources:
      - citation: "Millikan, R. A. (1916). A direct photoelectric determination of Planck's h. Physical Review 7(3): 355–388."
        url: null

  - id: compton-scattering
    date: "1923"
    type: EXPERIMENT
    title: Compton scattering
    description: >-
      Arthur Compton scatters X-rays off electrons and finds that the X-rays lose energy
      exactly as if they were particles colliding like billiard balls, with momentum
      $h/\lambda$. After this, most physicists accepted that light has a particle
      character.
    contested: false
    sources:
      - citation: "Compton, A. H. (1923). A quantum theory of the scattering of X-rays by light elements. Physical Review 21(5): 483–502."
        url: null

open_problems:
  - id: fine-structure-constant
    name: Why is the fine-structure constant about 1/137?
    status: open
    status_note: Open as of 2026. Its value is measured to better than one part in a billion but not explained.
    description: >-
      Arnold Sommerfeld introduced the fine-structure constant $\alpha$ in 1916 to explain
      small splittings in hydrogen's spectral lines. It measures the strength of the
      electromagnetic force, is a pure number with no units, and equals
      $1/137.035999\ldots$ No theory predicts that value.
    why_hard: >-
      In the Standard Model, $\alpha$ is an input, measured rather than derived, like the
      masses of the particles. Explaining it would need a deeper theory from which the
      constants follow, and no accepted theory does that. Numerological "derivations" have
      a long and unhappy history, including one by Arthur Eddington.
    unlocks: >-
      An explanation of why chemistry, and therefore life, is possible: a few per cent
      change in $\alpha$ would change how stars make carbon and how atoms bond.
    sources:
      - citation: "Feynman, R. P. (1985). QED: The Strange Theory of Light and Matter, ch. 4. Princeton University Press."
        url: null

applications:
  - area: Vision
    title: The eye can count photons
    description: >-
      In 1942 Hecht, Shlaer and Pirenne showed that a dark-adapted human can see a flash of
      only a few photons, and that a single rod cell responds to one photon. Vision is a
      quantum measurement, and its sensitivity is limited by the statistics of photon
      arrival.
    domain: biology
    sources:
      - citation: "Hecht, S., Shlaer, S. & Pirenne, M. H. (1942). Energy, quanta, and vision. Journal of General Physiology 25(6): 819–840."
        url: null
  - area: Energy
    title: The limit on solar cells
    description: >-
      A solar cell turns each photon above a threshold energy into one electron, and wastes
      the excess energy as heat. Shockley and Queisser used this to show that a
      single-junction cell cannot exceed about 33% efficiency, a limit the best silicon
      cells now approach.
    sources:
      - citation: "Shockley, W. & Queisser, H. J. (1961). Detailed balance limit of efficiency of p–n junction solar cells. Journal of Applied Physics 32(3): 510–519."
        url: null

further_reading:
  - citation: "Kumar, M. (2008). Quantum: Einstein, Bohr and the Great Debate About the Nature of Reality. Icon Books."
    url: null
    note: A popular history from Planck to the debates over interpretation.
  - citation: "Kuhn, T. S. (1978). Black-Body Theory and the Quantum Discontinuity, 1894–1912. Oxford University Press."
    url: null
    note: A detailed, influential history of how the quantum was introduced.
  - citation: "Pais, A. (1982). 'Subtle is the Lord…': The Science and the Life of Albert Einstein. Oxford University Press."
    url: null
    note: The scientific biography of Einstein, strong on the light quantum.
---

## An Act of Desperation

Around 1900, [statistical mechanics](/physics/statistical-mechanics/) and [electromagnetism](/physics/electromagnetism/) combined to give a prediction that was obviously wrong. A hot oven's light is a set of electromagnetic waves, and statistical mechanics shares energy equally among all of them. But there are infinitely many possible short waves, so the oven should radiate infinite energy in the ultraviolet. Real ovens glow red, then white, and radiate a finite amount.

In October 1900 {{fig:max-planck|Max Planck}}, a conservative physicist in Berlin, found a formula that matched the measurements exactly. To derive it, which he did in December, he had to assume that the oven's walls exchange energy with light only in lumps of size $hf$, proportional to the frequency $f$. High-frequency lumps are too expensive to be produced often, so the ultraviolet catastrophe disappears. Planck was not in fact aiming at that problem, which Rayleigh and Jeans spelled out only in 1900–1905, but his formula removes it. In 1931 Planck called it an act of desperation. He expected the lumps to be a device that would go away.

## Light Quanta

In 1905 {{fig:einstein|Albert Einstein}} took the lumps literally. Light itself, he proposed, is made of quanta. He predicted how electrons should be knocked out of metal by light: the electrons' energy should depend on the light's colour, not its brightness. Hardly anyone believed it. {{fig:robert-millikan|Robert Millikan}} spent a decade trying to refute it and in 1916 confirmed it precisely. In 1923 {{fig:arthur-compton|Arthur Compton}} bounced X-rays off electrons and found they recoiled like colliding particles. Light was a wave, as a century of interference experiments showed, and also a stream of particles. Nobody knew how to make sense of that.

## The Quantum Atom

Meanwhile the atom had acquired a nucleus. In 1909 {{fig:hans-geiger|Hans Geiger}} and {{fig:ernest-marsden|Ernest Marsden}}, working for {{fig:ernest-rutherford|Ernest Rutherford}} in Manchester, found alpha particles bouncing back from gold foil, and Rutherford concluded in 1911 that atoms have a tiny, heavy nucleus. But by classical physics, an electron orbiting a nucleus should radiate and spiral inwards in a fraction of a second. Atoms should not exist.

In 1913 {{fig:niels-bohr|Niels Bohr}} simply declared that electrons can occupy only certain orbits, where they do not radiate, and emit light only when they jump between them. The energies of hydrogen's orbits come out as $-13.6/n^2$ electronvolts. A jump from orbit 3 to orbit 2 releases $13.6 \times (\tfrac14 - \tfrac19) \approx 1.89$ eV, a photon of wavelength 656 nanometres, exactly hydrogen's red spectral line. Bohr's rules reproduced the whole spectrum, but they were rules without a reason, and for atoms with more than one electron they failed.

## A Closer Look: Colour, Not Brightness

A photon's energy is $E = hf = hc/\lambda$. With $hc \approx 1240$ electronvolt-nanometres, a photon's energy in electronvolts is 1240 divided by its wavelength in nanometres:

| Light | Wavelength | Photon energy |
|---|---|---|
| Red | 700 nm | 1.77 eV |
| Green | 530 nm | 2.34 eV |
| Violet | 400 nm | 3.10 eV |

To free an electron from sodium takes about 2.3 eV, its *work function*. Einstein's equation says the fastest electrons leave with energy

$$
E_{\max} = hf - W .
$$

Shine red light on sodium and no electrons come out at all, however bright the light, because no single red photon carries 2.3 eV, and electrons absorb photons one at a time. Violet light releases electrons with up to $3.10 - 2.3 \approx 0.8$ eV, and making it brighter releases more electrons, but none faster. Green light, at 2.34 eV, just barely frees them.

In the wave picture this makes no sense. A brighter wave carries more energy and should shake electrons loose eventually, whatever its colour. The experimental facts, a sharp colour threshold and electron energies set by colour alone, were exactly what Einstein predicted. Millikan's measurements of $E_{\max}$ against frequency formed a straight line whose slope gave Planck's constant to within about one per cent of today's value.

## Contradictions

By 1924 the old quantum theory was a patchwork: Planck's lumps, Einstein's photons, Bohr's orbits, and rules for when to use each. It could not explain helium, the intensities of spectral lines or how an electron chooses when to jump. In 1924 Louis de Broglie proposed that if waves can act as particles, particles such as electrons should also act as waves. Within two years the patchwork was replaced by [quantum mechanics](/physics/quantum-mechanics/).
