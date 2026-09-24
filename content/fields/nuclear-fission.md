---
id: nuclear-fission
domain: physics
thread: nucleus
name: Nuclear Fission
parent_ids:
  - nuclear-structure
era_emerged: 1934 – 1942
core_question: How can a nucleus be split, and how can splitting one make others split in turn?

summary: |-
  Fission is the splitting of a heavy nucleus, such as uranium, into two lighter ones. It releases about 200 million electronvolts, fifty million times more than burning one atom of carbon. It also releases two or three neutrons, which can split further nuclei. If enough of them do, the process sustains itself: a chain reaction.

  Fission was discovered by chemists who did not at first believe their own results, and explained by a physicist in exile. It went from a puzzling trace of barium in December 1938 to a working reactor in December 1942 and two destroyed cities in August 1945. It now supplies about a tenth of the world's electricity. A natural reactor that ran two billion years ago in Gabon shows that nature found the trick first.

key_ideas:
  - term: Fission
    definition: >-
      The splitting of a heavy nucleus into two fragments of roughly half its size,
      releasing about 200 MeV of energy and a few free neutrons.
    turning_point_id: meitner-frisch-fission
  - term: Slow neutrons
    definition: >-
      Neutrons slowed by collisions with light atoms, such as the hydrogen in water or
      the carbon in graphite, are far more likely to be captured by a nucleus than fast
      ones. A material that slows them is called a moderator.
    turning_point_id: fermi-neutron-bombardment
  - term: Uranium-235
    definition: >-
      The rare isotope of uranium, 0.7% of natural uranium, that splits readily when it
      captures a slow neutron. The common isotope, uranium-238, does not.
    turning_point_id: bohr-wheeler-fission
  - term: Chain reaction and critical mass
    definition: >-
      Each fission releases neutrons that cause more fissions. When on average exactly
      one goes on to cause another, the reaction is steady and the assembly is critical.
      More than one, and it grows.
    turning_point_id: chicago-pile-1
  - term: Natural reactor
    definition: >-
      A uranium ore deposit in which a chain reaction started by itself, possible only
      when uranium-235 made up a larger share of natural uranium than it does today.
    turning_point_id: oklo-natural-reactor

turning_points:
  - id: fermi-neutron-bombardment
    date: "1934"
    type: EXPERIMENT
    title: Fermi bombards the elements with neutrons
    description: >-
      In Rome, Enrico Fermi's group fires neutrons at element after element and makes
      dozens of new radioactive isotopes. In October they find that neutrons slowed by
      paraffin wax or water are far more effective. Bombarding uranium produces
      activities they take to be new elements beyond uranium. Fermi received the 1938
      Nobel prize, partly for these "transuranic" elements, which were mostly the
      products of fission.
    contested: true
    contested_note: >-
      The chemist Ida Noddack wrote in 1934 that the uranium nucleus might have broken
      into several large fragments. Her suggestion was ignored. Historians disagree over
      why: she offered no experiment to back it, her earlier claim to have found element
      43 was widely doubted, and some have argued that she was dismissed as a woman
      outside the physics community.
    sources:
      - citation: "Fermi, E. (1934). Possible production of elements of atomic number higher than 92. Nature 133: 898–899."
        url: null
      - citation: "Noddack, I. (1934). Über das Element 93. Zeitschrift für Angewandte Chemie 47: 653–655."
        url: null

  - id: hahn-strassmann-barium
    date: "1938"
    type: EXPERIMENT
    title: Barium from uranium
    description: >-
      In Berlin, the chemists Otto Hahn and Fritz Strassmann search for the radium they
      think neutron-bombarded uranium produces. Their careful chemistry shows it is
      barium, an element about half as heavy as uranium. Hahn writes to his long-time
      colleague Lise Meitner, who had fled to Sweden that summer. In one English
      translation: "Perhaps you can come up with some sort of fantastic explanation."
    contested: false
    sources:
      - citation: "Hahn, O. & Strassmann, F. (1939). Über den Nachweis und das Verhalten der bei der Bestrahlung des Urans mittels Neutronen entstehenden Erdalkalimetalle. Die Naturwissenschaften 27: 11–15."
        url: null

  - id: meitner-frisch-fission
    date: 1938 – 1939
    type: DISCOVERY
    title: Meitner and Frisch explain fission
    description: >-
      Walking in the snow at Kungälv over Christmas, Lise Meitner and her nephew Otto
      Frisch work out what happened. A uranium nucleus, like a wobbling liquid drop, can
      stretch and split in two. The fragments fly apart with about 200 MeV, which matches
      the mass that goes missing. Frisch borrows the word fission from biology and
      confirms the energetic fragments in the laboratory within weeks.
    contested: true
    contested_note: >-
      The 1944 Nobel prize in chemistry went to Hahn alone. A study of the Nobel archives
      concluded that Meitner's exclusion reflected disciplinary blind spots and the
      circumstances of wartime. Hahn maintained that the discovery was chemical, and
      that Meitner's physics came after it. Many physicists, then and since, regard the
      omission as a serious injustice.
    sources:
      - citation: "Meitner, L. & Frisch, O. R. (1939). Disintegration of uranium by neutrons: a new type of nuclear reaction. Nature 143: 239–240."
        url: null
      - citation: "Crawford, E., Sime, R. L. & Walker, M. (1997). A Nobel tale of postwar injustice. Physics Today 50(9): 26–32."
        url: null

  - id: bohr-wheeler-fission
    date: "1939"
    type: DISCOVERY
    title: Uranium-235 is the one that splits
    description: >-
      Niels Bohr realises that slow neutrons split only the rare isotope uranium-235, not
      the common uranium-238. With John Wheeler he builds a full theory of fission from
      the liquid-drop model. Meanwhile several groups measure that each fission releases
      two or three neutrons. A chain reaction is possible, and in August Einstein signs a
      letter drafted by Leo Szilard warning President Roosevelt of atomic bombs.
    contested: false
    sources:
      - citation: "Bohr, N. & Wheeler, J. A. (1939). The mechanism of nuclear fission. Physical Review 56: 426–450."
        url: null

  - id: chicago-pile-1
    date: "1942"
    type: EXPERIMENT
    title: The first chain reaction
    description: >-
      Under the stands of a sports ground at the University of Chicago, a team led by
      Enrico Fermi, with Leo Szilard among its designers, stacks graphite blocks and
      uranium into a pile. On 2 December 1942 the control rods are slowly withdrawn and
      the neutron count climbs without levelling off. The first human-made chain
      reaction runs for about four and a half minutes at half a watt.
    contested: false
    sources:
      - citation: "Fermi, E. (1952). Experimental production of a divergent chain reaction. American Journal of Physics 20: 536–558."
        url: null

  - id: trinity-hiroshima
    date: "1945"
    type: PARADIGM-SHIFT
    title: The bomb
    description: >-
      The Manhattan Project, directed scientifically by J. Robert Oppenheimer at Los
      Alamos, tests a plutonium bomb in the New Mexico desert on 16 July 1945. A uranium
      bomb destroys Hiroshima on 6 August and a plutonium bomb destroys Nagasaki on 9
      August. Well over a hundred thousand people were dead by the end of the year.
      Physics became a matter of state, and physicists argued for decades over their
      responsibility.
    contested: false
    sources:
      - citation: "Smyth, H. D. (1945). Atomic Energy for Military Purposes. Princeton University Press."
        url: null
      - citation: "Rhodes, R. (1986). The Making of the Atomic Bomb. Simon & Schuster."
        url: null

  - id: oklo-natural-reactor
    date: "1972"
    type: DISCOVERY
    title: A natural reactor at Oklo
    description: >-
      Analysts at a French uranium plant notice that ore from the Oklo mine in Gabon
      contains slightly too little uranium-235. The missing atoms had been fissioned. About
      two billion years ago, when uranium-235 made up over 3% of natural uranium,
      groundwater slowed neutrons enough for chain reactions to start and stop in the
      ore, on and off for hundreds of thousands of years. Paul Kuroda had predicted such
      natural reactors in 1956.
    contested: false
    sources:
      - citation: "Kuroda, P. K. (1956). On the nuclear physical stability of the uranium minerals. Journal of Chemical Physics 25: 781–782."
        url: null
      - citation: "Gauthier-Lafaye, F., Holliger, P. & Blanc, P.-L. (1996). Natural fission reactors in the Franceville basin, Gabon. Geochimica et Cosmochimica Acta 60: 4831–4852."
        url: null

open_problems:
  - id: microscopic-fission-theory
    name: Can fission be calculated from first principles?
    status: open
    status_note: Open as of 2026. Large computer calculations now follow a splitting nucleus, but still rely on fitted forces.
    description: >-
      More than eighty years after its discovery, fission is still described largely by
      models tuned to data. Why uranium usually splits into unequal fragments, one near
      mass 95 and one near 140, what share of energy each fragment receives, and how many
      neutrons it emits, cannot yet be predicted precisely from the forces between
      protons and neutrons.
    why_hard: >-
      A fissioning nucleus is hundreds of particles rearranging collectively while
      exchanging energy with their own motion, a problem between the single-particle
      picture of the shell model and the collective picture of the liquid drop. The
      nuclear force itself is known only approximately.
    unlocks: >-
      Reliable data for reactors and waste management, fission of exotic nuclei in the
      stellar explosions that make heavy elements, and a test of nuclear theory in its
      hardest regime.
    sources:
      - citation: "Schunck, N. & Robledo, L. M. (2016). Microscopic theory of nuclear fission: a review. Reports on Progress in Physics 79: 116301."
        url: null

applications:
  - area: Energy
    title: Nuclear power
    description: >-
      Fission reactors boil water with the heat of fission fragments. About 440 reactors
      supply roughly a tenth of the world's electricity with almost no carbon emissions.
      The accidents at Chernobyl in 1986 and Fukushima in 2011, and the long-lived waste,
      have kept the technology contested.
    sources:
      - citation: "International Atomic Energy Agency. Power Reactor Information System (PRIS)."
        url: https://pris.iaea.org/
  - area: Medicine
    title: Reactor-made isotopes
    description: >-
      Most medical isotopes are made in research reactors. Molybdenum-99, a fission
      product, decays into technetium-99m, the workhorse of nuclear medicine imaging.
      Shortages when a few ageing reactors shut down for repairs, as in 2009 and 2010,
      delayed scans around the world.
    sources: []
  - area: Fundamental constants
    title: Oklo as a test of physics
    description: >-
      The Oklo reactors captured neutrons at rates that depend very sensitively on
      nuclear energy levels, which in turn depend on the strength of electromagnetism. The
      isotopes left behind show that the fine-structure constant has changed by less than
      about one part in ten million over two billion years.
    sources:
      - citation: "Shlyakhter, A. I. (1976). Direct test of the constancy of fundamental nuclear constants. Nature 264: 340."
        url: null

further_reading:
  - citation: "Rhodes, R. (1986). The Making of the Atomic Bomb. Simon & Schuster."
    url: null
    note: The classic history, from the physics of the 1930s to Hiroshima. Pulitzer prize winner.
  - citation: "Sime, R. L. (1996). Lise Meitner: A Life in Physics. University of California Press."
    url: null
    note: The biography that restored Meitner's place in the discovery of fission.
  - citation: "Frisch, O. R. (1979). What Little I Remember. Cambridge University Press."
    url: null
    note: Frisch's memoir, including the walk in the snow that explained fission.
---

## Beyond Uranium

When the neutron was found in 1932, physicists had a projectile that nuclei do not repel. In Rome, {{fig:enrico-fermi|Enrico Fermi}} and his young group fired neutrons at every element they could get, and found that most of them became radioactive. In October 1934 they noticed that neutrons passed through paraffin wax, which is rich in hydrogen, became far more effective. Slowed by collisions, they lingered near nuclei and were captured more easily. Bombarding uranium, the heaviest element, gave activities that Fermi's group took to be new elements beyond it.

The chemist {{fig:ida-noddack|Ida Noddack}} objected in print that the uranium nucleus might instead have broken into several large pieces. Nobody took the idea up. Splitting a nucleus seemed impossible. Every known reaction chipped off at most an alpha particle.

## Barium

In Berlin, the chemist {{fig:otto-hahn|Otto Hahn}} and the physicist {{fig:lise-meitner|Lise Meitner}} had worked together for thirty years. In July 1938 Meitner, Jewish by birth and no longer protected by her Austrian citizenship after the annexation of Austria, fled Germany. Hahn and {{fig:fritz-strassmann|Fritz Strassmann}} continued the uranium work. In December they found that one product, which they took for radium, behaved exactly like barium. It was barium, element 56. Hahn wrote to Meitner asking for "some fantastic explanation".

Over Christmas, in the Swedish village of Kungälv, Meitner and her nephew {{fig:otto-frisch|Otto Frisch}} found one. Bohr's [liquid-drop picture](/physics/nuclear-structure/) of the nucleus suggested that a uranium nucleus, with so many protons repelling each other, is barely held together. A neutron can set it wobbling until it pinches in two. Meitner remembered how to compute the masses, and the missing mass came to about 200 MeV, just the energy the fragments should have. Frisch called the process fission, after the division of cells.

## The Chain Reaction

{{fig:niels-bohr|Niels Bohr}} carried the news to America in January 1939. Within weeks the fission fragments had been seen in several laboratories, and each fission was found to release two or three neutrons. Bohr and {{fig:john-wheeler|John Wheeler}} showed that slow neutrons split only the rare isotope uranium-235. If the released neutrons could split more uranium-235, the reaction could sustain itself. {{fig:leo-szilard|Leo Szilard}}, who had imagined a nuclear chain reaction in 1933, persuaded Einstein to warn President Roosevelt.

On 2 December 1942, under the stands of a sports ground at the University of Chicago, Fermi's team withdrew the last control rod from a pile of graphite and uranium, and the neutron count rose steadily. The chain reaction worked. The Manhattan Project, led at Los Alamos by {{fig:robert-oppenheimer|J. Robert Oppenheimer}}, turned it into weapons. One bomb destroyed Hiroshima on 6 August 1945 and another Nagasaki three days later. After the war, reactors were built to make electricity.

In 1972 French analysts found uranium from the Oklo mine in Gabon depleted in uranium-235. Two billion years earlier, uranium-235 had made up a larger share of natural uranium, and groundwater had moderated natural chain reactions in the ore. {{fig:paul-kuroda|Paul Kuroda}} had predicted exactly this in 1956.

## A Closer Look: Fifty Million Times Coal

**Meitner's estimate.** Just after splitting, two fragments each carrying 46 protons touch. A nucleus of 118 particles has a radius of about $1.2 \times 118^{1/3} \approx 5.9$ femtometres, so their centres are about 11.8 fm apart. The electrical energy pushing them apart is

$$
E = \frac{1.44\ \text{MeV fm} \times 46 \times 46}{11.8\ \text{fm}} \approx 260\ \text{MeV} .
$$

The binding-energy curve gives the same order. Uranium binds each of its 235 particles by about 7.6 MeV, the fragments by about 8.5 MeV, and $235 \times 0.9 \approx 210$ MeV. The measured value is about 200 MeV per fission.

**Compared with burning.** Burning one carbon atom to carbon dioxide releases about 4 eV. One fission releases 200 MeV, fifty million times more. Per kilogram:

| Fuel | Energy per atom | Energy per kilogram |
|---|---|---|
| Carbon, burned | 4.1 eV | $3.3 \times 10^{7}$ J |
| Uranium-235, fissioned | 200 MeV | $8.2 \times 10^{13}$ J |

A kilogram of uranium-235 contains $1000 / 235 \times 6.022 \times 10^{23} \approx 2.56 \times 10^{24}$ atoms. Multiplying by 200 MeV, or $3.2 \times 10^{-11}$ J, gives $8.2 \times 10^{13}$ J, about 2.5 million times the energy of a kilogram of carbon.

**Hiroshima.** The yield of the Hiroshima bomb is estimated at about 15 kilotons of TNT, which is $15 \times 4.18 \times 10^{12} \approx 6.3 \times 10^{13}$ J. Dividing by the energy per kilogram, about 0.76 kg of uranium actually fissioned, of the roughly 64 kg in the bomb. Less than the mass of a bag of sugar destroyed a city.

**Oklo.** Uranium-235 decays faster than uranium-238, with half-lives of 0.70 and 4.47 billion years. Today it is 0.72% of natural uranium. Running both decays back two billion years gives 3.7%, similar to the enriched fuel of a modern water-cooled reactor. That is why natural reactors could run then and cannot now.

## After Fission

Fission gave the twentieth century its most powerful weapon and a low-carbon source of electricity, and both have been fiercely argued over ever since. Reactors also supply the isotopes of nuclear medicine and the neutrons of many physics experiments. The bomb made the next step possible: its heat could ignite the fusion of hydrogen, the subject of [fusion energy](/physics/fusion-energy/). And the splitting itself is still not fully understood. No theory yet predicts, from the forces between protons and neutrons, how a nucleus will break.
