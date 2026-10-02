---
id: quantum-chemistry
domain: chemistry
thread: substance
name: Quantum Chemistry
parent_ids:
  - chemical-bonding
era_emerged: 1927 – 1993
core_question: The equation governing every molecule has been known since 1926 and cannot be solved for any of them — so what is computed instead, and how much can be trusted?

summary: |-
  Within a year of Schrödinger's equation, Walter Heitler and Fritz London had applied it to the hydrogen molecule and obtained a bond: two electrons with opposite spins, shared, held together by a term with no classical counterpart. Paul Dirac remarked in 1929 that the underlying laws of all of chemistry were now completely known, and that the difficulty was only that the equations were too complicated to solve. That difficulty turned out to be the whole subject.

  The obstacle is not computational power but dimension. A wavefunction for $N$ electrons lives in $3N$ coordinates, so the cost of representing it grows exponentially with the size of the molecule — Walter Kohn called it the exponential wall, and it stands at a few dozen electrons. Quantum chemistry is therefore a catalogue of approximations with known biases: Hartree–Fock, which gives each electron an average view of the others; correlated methods that repair that at a cost rising as the seventh power of size; and density functional theory, which replaces the $3N$-dimensional wavefunction with the three-dimensional electron density and is exact in principle and approximate in every implementation. The last is now used in the large majority of published calculations, and nobody knows how to improve it systematically.

key_ideas:
  - term: Exchange
    definition: >-
      The term in the energy that arises because electrons are indistinguishable and their wavefunction
      must change sign when two are swapped. It has no classical analogue, and in the hydrogen molecule
      it *is* the bond.
    turning_point_id: heitler-london-h2
  - term: Molecular orbital
    definition: >-
      A one-electron state spread over the whole molecule rather than localised in a bond. The
      alternative to valence-bond pairs, worse at matching chemical intuition and better at spectra,
      excited states and anything involving delocalisation.
    turning_point_id: molecular-orbital-theory
  - term: Self-consistent field
    definition: >-
      Each electron is treated as moving in the average field of all the others; the field depends on
      the orbitals and the orbitals on the field, so the calculation is iterated to consistency. The
      error left behind — electrons avoiding each other in detail — is called correlation.
    turning_point_id: hartree-fock-scf
  - term: Basis set
    definition: >-
      The fixed set of functions from which orbitals are built. Using Gaussians rather than the
      physically correct exponentials makes the integrals tractable, which is why essentially all
      molecular calculation is done with functions of the wrong shape.
    turning_point_id: gaussian-basis-sets
  - term: Orbital symmetry
    definition: >-
      Whether a reaction can proceed smoothly depends on whether the symmetries of the orbitals match
      along the way. The consequences are strict rules about which products form and with what
      stereochemistry, derivable with a pencil.
    turning_point_id: woodward-hoffmann-rules
  - term: Density functional
    definition: >-
      The ground-state energy is determined entirely by the electron density, a function of three
      coordinates however many electrons there are. The theorem is exact; the functional connecting
      density to energy is unknown and is approximated.
    turning_point_id: kohn-sham-dft

turning_points:
  - id: heitler-london-h2
    date: "1927"
    type: MECHANISM-ESTABLISHED
    title: A bond calculated from the equation
    description: >-
      Walter Heitler and Fritz London, working at Zurich a year after Schrödinger's equation appeared,
      construct a wavefunction for two hydrogen atoms brought together and find that the energy has a
      minimum at a separation close to the measured bond length — provided the two electrons have
      opposite spins and the wavefunction is built so that exchanging them changes its sign. The
      binding comes from that exchange term. For the first time a chemical bond had been produced from
      physics rather than postulated.
    contested: false
    sources:
      - citation: "Heitler, W. & London, F. (1927). Wechselwirkung neutraler Atome und homöopolare Bindung nach der Quantenmechanik. Zeitschrift für Physik 44: 455–472."
        url: null
      - citation: "Gavroglu, K. & Simões, A. (2012). Neither Physics nor Chemistry: A History of Quantum Chemistry. MIT Press."
        url: null

  - id: molecular-orbital-theory
    date: 1928 – 1932
    type: THEORY-REPLACED
    title: Orbitals over the whole molecule
    description: >-
      Friedrich Hund, Robert Mulliken and John Lennard-Jones develop the alternative: instead of pairing
      electrons into bonds, combine the atomic orbitals of all the atoms into molecular orbitals
      extending across the molecule, and fill them in order. The approach is less intuitive for a
      chemist and better at everything spectroscopic, and it settles a case the pair picture gets
      plainly wrong — molecular oxygen is paramagnetic, which follows immediately from two unpaired
      electrons in degenerate antibonding orbitals and not at all from $\mathrm{O{=}O}$.
    contested: false
    sources:
      - citation: "Hund, F. (1928). Zur Deutung der Molekelspektren IV. Zeitschrift für Physik 51: 759–795."
        url: null
      - citation: "Mulliken, R. S. (1932). Electronic structures of polyatomic molecules and valence II. Physical Review 41: 49–71."
        url: null

  - id: hartree-fock-scf
    date: 1928 – 1951
    type: TECHNIQUE-INVENTED
    title: The self-consistent field
    description: >-
      Douglas Hartree proposes treating each electron as moving in the averaged field of the rest, and
      iterating until the field and the orbitals agree. Vladimir Fock and John Slater correct it to
      respect the antisymmetry of the wavefunction, which introduces exchange properly. In 1951 Clemens
      Roothaan recasts the whole scheme as matrix equations over a fixed set of basis functions, which
      is the form a computer can be given. What the method omits — the way electrons dodge each other
      instantaneously rather than on average — is defined as correlation and has been the target ever
      since.
    contested: false
    sources:
      - citation: "Hartree, D. R. (1928). The wave mechanics of an atom with a non-Coulomb central field. Proceedings of the Cambridge Philosophical Society 24: 89–110."
        url: null
      - citation: "Fock, V. (1930). Näherungsmethode zur Lösung des quantenmechanischen Mehrkörperproblems. Zeitschrift für Physik 61: 126–148."
        url: null
      - citation: "Roothaan, C. C. J. (1951). New developments in molecular orbital theory. Reviews of Modern Physics 23: 69–89."
        url: null

  - id: gaussian-basis-sets
    date: 1950 – 1970
    type: TECHNIQUE-INVENTED
    title: Functions of the wrong shape, chosen for the integrals
    description: >-
      The orbitals of an atom fall off exponentially, and integrals over products of exponentials
      centred on different atoms are brutal. Frank Boys points out in 1950 that Gaussian functions have
      the wrong shape at the nucleus and at long range but multiply and integrate analytically, so
      several of them can imitate one correct orbital at a fraction of the cost. John Pople built the
      idea into standard basis sets and into the program GAUSSIAN, and introduced the notion of a model
      chemistry: a named combination of method and basis whose errors are characterised, so that
      results from different laboratories are comparable.
    contested: false
    sources:
      - citation: "Boys, S. F. (1950). Electronic wave functions I. Proceedings of the Royal Society A 200: 542–554."
        url: null
      - citation: "Hehre, W. J., Stewart, R. F. & Pople, J. A. (1969). Self-consistent molecular-orbital methods I. Journal of Chemical Physics 51: 2657–2664."
        url: null
      - citation: "Pople, J. A. (1999). Nobel lecture: Quantum chemical models. Reviews of Modern Physics 71: 1267–1274."
        url: null

  - id: kohn-sham-dft
    date: 1964 – 1993
    type: THEORY-REPLACED
    title: Density instead of wavefunction
    description: >-
      Pierre Hohenberg and Walter Kohn prove that the ground-state energy of a system of electrons is
      determined entirely by the electron density — a function of three coordinates, whatever the number
      of electrons. Kohn and Lu Jeu Sham then give a practical route: a fictitious system of
      non-interacting electrons with the same density, whose equations look like Hartree–Fock with one
      extra term containing everything that is not known. The theorem is exact and the term is not, and
      it took until Axel Becke's and others' hybrid functionals around 1993 for the accuracy to become
      good enough that chemists switched en masse.
    contested: false
    sources:
      - citation: "Hohenberg, P. & Kohn, W. (1964). Inhomogeneous electron gas. Physical Review 136: B864–B871."
        url: null
      - citation: "Kohn, W. & Sham, L. J. (1965). Self-consistent equations including exchange and correlation effects. Physical Review 140: A1133–A1138."
        url: null
      - citation: "Becke, A. D. (1993). A new mixing of Hartree–Fock and local density-functional theories. Journal of Chemical Physics 98: 1372–1377."
        url: null

  - id: woodward-hoffmann-rules
    date: 1965
    type: MECHANISM-ESTABLISHED
    title: Rules a chemist can use without a computer
    description: >-
      Robert Woodward and Roald Hoffmann show that whether a ring-closing reaction proceeds, and which
      stereochemistry it gives, is settled by whether the symmetries of the occupied orbitals are
      preserved along the reaction path. The rules predict that a given cyclisation will go one way
      when driven by heat and the opposite way when driven by light, which organic chemists had
      observed and found arbitrary. Kenichi Fukui's frontier-orbital analysis reached similar
      conclusions from the highest occupied and lowest empty orbitals alone.
    contested: false
    sources:
      - citation: "Woodward, R. B. & Hoffmann, R. (1965). Stereochemistry of electrocyclic reactions. Journal of the American Chemical Society 87: 395–397."
        url: null
      - citation: "Woodward, R. B. & Hoffmann, R. (1969). The conservation of orbital symmetry. Angewandte Chemie International Edition 8: 781–853."
        url: null
      - citation: "Fukui, K. (1982). Role of frontier orbitals in chemical reactions. Science 218: 747–754."
        url: null

open_problems:
  - id: exact-functional
    name: Improving density functionals systematically
    status: open
    status_note: Open as of 2026; accuracy has not improved reliably with sophistication since the 2000s.
    description: >-
      Density functional theory is exact in principle and depends on a functional nobody knows. The
      approximations in use are arranged in a hierarchy of increasing ingredients, and the hierarchy is
      not a convergent sequence: a more elaborate functional is not guaranteed to be better, and a 2017
      survey found that functionals fitted in recent decades reproduce energies well while describing
      the electron density itself *worse* than older, simpler ones — right answers from increasingly
      wrong densities.
    why_hard: >-
      There is no variational principle ranking approximate functionals, and no systematic expansion to
      take to higher order, so improvement proceeds by fitting to reference data. Fitting to energies
      can buy accuracy for the training set at the cost of the underlying physics, and the reference
      data themselves come from correlated wavefunction calculations that are only feasible on small
      molecules.
    unlocks: >-
      Most computational chemistry, materials screening and much biomolecular simulation rests on these
      functionals. A systematic route would convert a tool that must be calibrated against experiment
      for each class of problem into one that can be trusted on a new problem.
    sources:
      - citation: "Medvedev, M. G., Bushmarinov, I. S., Sun, J., Perdew, J. P. & Lyssenko, K. A. (2017). Density functional theory is straying from the path toward the exact functional. Science 355: 49–52."
        url: null
      - citation: "Mardirossian, N. & Head-Gordon, M. (2017). Thirty years of density functional theory in computational chemistry. Molecular Physics 115: 2315–2372."
        url: null

applications:
  - area: Drug and materials design
    title: Computing a reaction before running it
    description: >-
      Calculated energies now routinely decide which of several possible mechanisms a reaction follows,
      what the rate-limiting step is, and which catalyst modification is worth making. A barrier
      computed to within 5 kJ/mol predicts a rate to within a factor of about ten at room temperature,
      which is usually enough to rank candidates — so a week of computing substitutes for a year of
      synthesis, provided the chosen functional is one that behaves on the system in question.
    sources:
      - citation: "Houk, K. N. & Liu, F. (2017). Holy grails for computational organic chemistry and biochemistry. Accounts of Chemical Research 50: 539–543."
        url: null
  - area: Condensed matter
    title: The default calculation in materials physics
    description: >-
      Density functional theory is used as heavily for solids as for molecules: band structures, phonon
      spectra, surface energies, defect formation energies and the stability of candidate compounds are
      almost all computed this way. The method's known weaknesses — underestimated band gaps,
      difficulty with strongly correlated electrons — shape which predictions are believed.
    domain: physics
    field_id: solid-state-physics
    sources:
      - citation: "Martin, R. M. (2004). Electronic Structure: Basic Theory and Practical Methods. Cambridge University Press."
        url: null
  - area: Structural biology
    title: Quantum mechanics inside a protein
    description: >-
      An enzyme's active site needs a quantum treatment and the surrounding protein does not, so the
      two are combined: a few dozen atoms described by quantum chemistry, embedded in a classical
      force field for the rest. The approach made it possible to compute the barrier an enzyme actually
      lowers, and the 2013 Nobel Prize in Chemistry recognised it alongside classical simulation.
    domain: biology
    field_id: structural-biology
    sources:
      - citation: "Warshel, A. & Levitt, M. (1976). Theoretical studies of enzymic reactions. Journal of Molecular Biology 103: 227–249."
        url: null
      - citation: "Senn, H. M. & Thiel, W. (2009). QM/MM methods for biomolecular systems. Angewandte Chemie International Edition 48: 1198–1229."
        url: null

further_reading:
  - citation: "Gavroglu, K. & Simões, A. (2012). Neither Physics nor Chemistry: A History of Quantum Chemistry. MIT Press."
    url: null
    note: How a subject that belonged to neither parent discipline established itself.
  - citation: "Kohn, W. (1999). Nobel lecture: Electronic structure of matter — wave functions and density functionals. Reviews of Modern Physics 71: 1253–1266."
    url: null
    note: The exponential-wall argument, stated by the person who went round it.
  - citation: "Jensen, F. (2017). Introduction to Computational Chemistry, 3rd edition. Wiley."
    url: null
    note: The standard text; unusually candid about which methods fail on which problems.
---

## A Bond From First Principles

Schrödinger's equation appeared in 1926. In 1927 {{fig:heitler|Walter Heitler}} and {{fig:fritz-london|Fritz London}} applied it to the simplest molecule there is. Take two hydrogen atoms, each with one electron, and ask what happens as they approach. Build a wavefunction from both arrangements — electron 1 on nucleus A and 2 on B, and the reverse — and because electrons are indistinguishable fermions the combination must change sign when the two are swapped.

That requirement produces a term with no classical counterpart, and the term is attractive. The computed energy has a minimum at a separation close to the measured bond length, and the depth is the right order of magnitude. A chemical bond had been derived rather than asserted, and what it is made of turns out to be a consequence of electrons being identical.

{{fig:paul-dirac|Paul Dirac}} drew the conclusion in 1929, in a sentence that has been quoted at chemists ever since: the underlying physical laws necessary for the mathematical theory of a large part of physics and the whole of chemistry are completely known, and the difficulty is only that exact application of these laws leads to equations much too complicated to be soluble.

Everything in this field follows from how right he was about both halves.

## Two Pictures, Both Approximate

Heitler and London's method — pair the electrons, localise them between the atoms — became the valence-bond approach that {{fig:pauling|Pauling}} developed into [chemical bonding](/chemistry/chemical-bonding/) as chemists learned it. {{fig:hund|Friedrich Hund}}, {{fig:mulliken|Robert Mulliken}} and John Lennard-Jones built the alternative. Combine the atomic orbitals of every atom into orbitals spanning the whole molecule, order them by energy, and fill them two at a time.

The molecular-orbital picture is harder to draw and wins on evidence. The decisive case is oxygen. $\mathrm{O_2}$ is paramagnetic — liquid oxygen sticks to a magnet, a lecture demonstration that works every time — which requires two unpaired electrons. The valence-bond structure $\mathrm{O{=}O}$ has every electron paired and predicts no such thing. Molecular orbital theory puts the last two electrons in a pair of degenerate antibonding orbitals, one each, and gets it immediately. Spectra, excited states, colour and photochemistry all come out of the delocalised picture too.

Neither is correct. They are two approximations that converge to the same answer as each is improved, and the long argument over which is fundamental — conducted sharply enough that resonance theory was denounced as idealist in the Soviet Union in 1951 — was an argument about which approximation to be loyal to.

## A Closer Look: The Exponential Wall, and the Way Round It

Why can an equation known since 1926 not simply be solved? The answer is a counting argument, and it is worth doing because it explains the shape of the entire field.

A wavefunction for $N$ electrons is a function of their positions: $\Psi(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N)$, which is a function of $3N$ variables. Suppose it is stored on a grid with just 10 points along each coordinate — a hopelessly coarse grid, but take it as a lower bound. The number of values to store is

$$
10^{3N}.
$$

For a water molecule, $N = 10$, so $10^{30}$ numbers. For benzene, $\mathrm{C_6H_6}$, there are $6 \times 6 + 6 = 42$ electrons, giving 126 dimensions and

$$
10^{126} \text{ numbers}.
$$

There are about $10^{80}$ atoms in the observable universe. The wavefunction of benzene cannot be written down on any conceivable hardware — not because computers are slow but because the object has too many dimensions. {{fig:kohn|Walter Kohn}} called this the exponential wall and put the practical limit at a few dozen electrons for a full treatment.

So quantum chemistry approximates, and the approximations form a ladder whose rungs trade cost against accuracy:

| Method | Cost scaling | Typical error on a reaction energy |
|---|---|---|
| Hartree–Fock | $N^{4}$ | 50–100 kJ/mol |
| Density functional (hybrid) | $N^{3}$–$N^{4}$ | 10–20 kJ/mol |
| Coupled cluster, CCSD(T) | $N^{7}$ | 4 kJ/mol |
| Full configuration interaction | factorial | exact in a given basis |

"Chemical accuracy" is conventionally 1 kcal/mol, which is 4.2 kJ/mol, and the reason is kinetic: at room temperature an error of 5 kJ/mol in a reaction barrier shifts the predicted rate by a factor of about eight, while an error of 20 kJ/mol shifts it by three thousand. The seventh-power scaling of the one method that reliably reaches that accuracy is brutal — double the size of the molecule and the calculation costs $2^{7} = 128$ times more — so CCSD(T) is used on small molecules to generate reference data for calibrating cheaper methods.

The way round the wall was found by {{fig:hohenberg|Pierre Hohenberg}} and Kohn in 1964, and it is a theorem rather than an approximation. The ground-state energy of a system of electrons is *determined* by the electron density $n(\mathbf{r})$ — a function of three coordinates, regardless of how many electrons there are. Benzene's 126 dimensions collapse to 3. {{fig:kohn|Kohn}} and {{fig:sham|Lu Jeu Sham}} then supplied a usable route: invent a fictitious system of non-interacting electrons with the same density, whose equations resemble Hartree–Fock with one additional term — the exchange-correlation functional — containing everything that is not known exactly.

That last clause is the whole catch. The theorem guarantees the functional exists and says nothing about what it is. Every density functional calculation ever performed has used a guess at it, and the guesses are arranged in a hierarchy of increasing ingredients that is not a convergent series. Hence the open problem above, and the uncomfortable 2017 finding that functionals fitted in recent decades give better energies from *worse* densities — which is what happens when a method is improved by fitting rather than by derivation.

## Rules Worth More Than Numbers

Quantum chemistry's most used result needs no computer at all. {{fig:woodward|Robert Woodward}} and {{fig:hoffmann|Roald Hoffmann}} showed in 1965 that whether a ring-closing reaction can proceed smoothly depends on whether the symmetries of the occupied orbitals are preserved along the path. If a filled orbital would have to become an empty one, there is a barrier; if the symmetries match, there is not.

The payoff is a set of predictions that look arbitrary without the theory. The same molecule cyclises one way when heated and the opposite way when irradiated, because light promotes an electron and changes which orbital is highest occupied — so the stereochemistry of the product inverts. Organic chemists had recorded such reversals as facts about particular compounds. After 1965 they were consequences of counting electrons and checking a symmetry, and {{fig:fukui|Kenichi Fukui}}'s frontier-orbital version reduced the analysis further, to the highest occupied and lowest unoccupied orbitals alone.

This is the pattern by which quantum mechanics actually entered chemistry. Not by computing molecules, which was impossible for decades and remains approximate, but by supplying rules — hybridisation, orbital symmetry, frontier orbitals — that are qualitative conclusions from quantitative reasoning, and that work at the bench. What the reactions themselves do, how fast, and by what route, is the subject of the [reaction thread](/chemistry/#thread-reaction).
