import type { Domain } from "./types";

export interface ThreadInfo {
  /** Referenced by each field's `thread` key. */
  id: string;
  title: string;
  intro: string;
}

export interface DomainInfo {
  id: Domain;
  name: string;
  /** Short description for the landing page. */
  blurb: string;
  /** The threads surveyed in this domain, each drawn as its own map. */
  threads: ThreadInfo[];
}

export const DOMAINS: DomainInfo[] = [
  {
    id: "math",
    name: "Mathematics",
    blurb: "How space split into many geometries and whole numbers into theories of their own, how calculus was made rigorous and mathematics met its own limits, and how solving equations became the study of symmetry. How counting puzzles became the mathematics of networks and equations of motion led to chaos, how reasoning from data and calculating by machine became mathematics of their own, and what forced each split.",
    threads: [
      {
        id: "geometry",
        title: "The Geometry Thread",
        intro:
          "From Euclid's axioms to the shape of three-dimensional space. One awkward postulate split geometry in two. The two halves met again in Riemann's lecture of 1854. What grew from that meeting eventually settled Poincaré's question about the shape of space, and it still runs into fog in dimension four. A second branch runs through the painter's perspective to the geometry of polynomial equations, and on to Fermat's Last Theorem.",
      },
      {
        id: "number-theory",
        title: "The Number Theory Thread",
        intro:
          "From Euclid's proof that the primes never end to the arithmetic that secures the internet. The whole numbers look like the simplest objects in mathematics, yet questions a child could ask about them have taken centuries. The effort to prove Fermat's Last Theorem split number theory in two: an analytic branch that counts primes with calculus, and an algebraic branch that builds new number systems when unique factorisation fails. Both rejoined geometry in the proof of Fermat's theorem, and their oldest problems now guard every encrypted connection. The fog here is some of the densest in mathematics: the Riemann hypothesis, the twin primes, abc.",
      },
      {
        id: "analysis",
        title: "The Analysis Thread",
        intro:
          "From Archimedes' curved areas to the laws of chance. Calculus worked brilliantly from the day Newton and Leibniz invented it, but nobody could say what its infinitely small quantities were. Fourier's claim that any function is a sum of waves pushed intuition past breaking point, and repairing the foundations produced rigorous limits, a precise definition of the real numbers, and a theory of measure strong enough to put probability on firm ground. The fog here sits where waves concentrate: problems like Kakeya's needle, and the critical point of random networks.",
      },
      {
        id: "foundations",
        title: "The Foundations Thread",
        intro:
          "From Aristotle's syllogisms to the limits of computation. Around 1900 mathematicians tried to rest all of mathematics on one secure foundation: logic made exact, and sets as the universal building material. The attempt produced paradoxes, a bitter feud, and in 1931 Gödel's proof that no such foundation can ever be complete. Out of that wreckage came the theory of computation, which is the blueprint of every computer, and the deepest open question in computer science. The fog here is P versus NP, and the continuum hypothesis, a question the standard axioms cannot answer at all.",
      },
      {
        id: "algebra",
        title: "The Algebra Thread",
        intro:
          "From Babylonian recipes for finding an unknown to the mathematics of symmetry. For three thousand years algebra meant solving equations, and each advance, from the cubic formula to the proof that the quintic has none, came from a harder question about the roots. Galois answered the last of those questions with symmetry, and symmetry became the subject: groups, rings and fields, studied for their own sake after Emmy Noether, and represented as matrices that turned out to describe atoms and particles. The fog here includes the inverse Galois problem and the Jacobian conjecture.",
      },
      {
        id: "combinatorics",
        title: "The Combinatorics Thread",
        intro:
          "From counting arrangements to the structure of networks. For most of its history combinatorics was a collection of puzzles: how many ways to choose, whether a walk can cross every bridge once, how many colours a map needs. In the twentieth century the puzzles became a subject. Ramsey showed that complete disorder is impossible, Erdős showed that randomness proves what explicit construction cannot, and the need to route, schedule and match at scale turned graphs into the mathematics of computing. The fog here is close to the surface: nobody knows the smallest party of guests guaranteed to contain five mutual friends or five mutual strangers.",
      },
      {
        id: "dynamics",
        title: "The Dynamics Thread",
        intro:
          "From Newton's laws of motion to the limits of prediction. Differential equations promised that the future follows from the present, and for two centuries mathematicians tried to solve them. Most cannot be solved by formula, so Poincaré learned to describe their solutions without solving them, and in doing so found the first hint of chaos. Computers later showed chaos everywhere: deterministic systems whose long-term behaviour is unpredictable in practice, yet obeys laws of its own, from the statistics of ergodic theory to the infinite detail of the Mandelbrot set. The fog here includes Hilbert's sixteenth problem and whether the Mandelbrot set is locally connected.",
      },
      {
        id: "statistics",
        title: "The Statistics Thread",
        intro:
          "From combining the observations of astronomers to machines that learn from examples. Probability predicts data from a known chance mechanism. Statistics runs the argument backwards, from data to the mechanism, and for two centuries it was argued over as much as it was used. Least squares began in a priority dispute, Fisher and Neyman feuded over what a test means, and Bayesian reasoning was nearly banished before computers brought it back. Along the way Shannon measured information itself, Markov and Wiener gave laws to quantities that wander at random, and Vapnik and Valiant asked when a rule learned from examples can be trusted. The fog here is close to daily life: how to make published findings reliable, and why giant neural networks generalise when the theory says they should not.",
      },
      {
        id: "computation",
        title: "The Computation Thread",
        intro:
          "From Newton's method to the training of neural networks. For centuries, numbers were computed by hand, by people who followed rules and made mistakes, and the question was only how to get an answer at all. Electronic computers answered that and raised a harder question: can an answer produced by billions of rounded operations be trusted? Turing and Wilkinson showed how to tell a bad method from a bad problem. Richardson's failed weather forecast became a daily routine once the grid was made to keep up with the physics, games of chance on the ENIAC became Monte Carlo methods, and Cauchy's idea of walking downhill now trains artificial intelligence. The fog here is how fast two matrices can be multiplied, and why gradient descent trains deep networks as well as it does.",
      },
      {
        id: "decision",
        title: "The Decision Thread",
        intro:
          "From a card game solved in a letter of 1713 to an auction with a satisfiability solver inside it. When the best thing to do depends on what someone else does, the reasoning threatens to regress forever, and the escape — choose at random, with calculated probabilities — turns strategy into mathematics. Von Neumann proved that games of pure opposition always have a value; Nash extended existence to every finite game and guaranteed nothing about whether the outcome is good for anyone. Impossibility results then showed that no voting rule is both coherent and honest, and that no division can always be both fair and stable. The same equilibria govern populations that inherit their strategies rather than choosing them, and computers made two old assumptions urgent: what decentralisation costs, and whether an equilibrium can be found at all. The fog here is which equilibrium gets played, how to sell several items at once, why humans cooperate with strangers, and how closely a Nash equilibrium can be approximated in polynomial time.",
      },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    blurb: "How motion, light and gravity were rebuilt around the speed of light, how heat became the statistics of atoms, and how energy turned out to come in lumps. How starlight revealed what stars are made of, how crystals explained metals and magnets, how a fogged photographic plate led to the nucleus, and what is still dark.",
    threads: [
      {
        id: "relativity",
        title: "The Relativity Thread",
        intro:
          "From Galileo's falling bodies and Maxwell's light to curved spacetime and the expanding universe. Newton's mechanics and Maxwell's electromagnetism both looked finished, yet they disagreed about one number, the speed of light. Settling that disagreement rebuilt space, time and gravity. The map still runs into fog where gravity meets the quantum, and where most of the universe turns out to be dark.",
      },
      {
        id: "entropy",
        title: "The Entropy Thread",
        intro:
          "From the steam engine to the statistics of atoms. Engineers trying to get more work out of coal found a law that no machine can break: heat flows downhill, and something they called entropy always grows. Explaining that law from the motion of invisible molecules forced physicists to accept that atoms are real, and to reason with probability instead of certainty. The same statistics then explained why water boils at a sharp temperature and why erasing information costs energy. The fog here is the arrow of time itself, and the physics of systems far from equilibrium, which includes every living thing.",
      },
      {
        id: "quantum",
        title: "The Quantum Thread",
        intro:
          "From a stubborn problem about glowing ovens to the particles of the Standard Model. In 1900 the statistics of heat and the theory of light gave an answer that was plainly wrong, and the only fix was to suppose that energy comes in lumps. Twenty-five years of patched-together rules followed, until a new mechanics replaced certainty with probability. Joined to relativity, it became quantum field theory, the most precisely tested theory in science, and it catalogued the particles from which everything is built. Its strangest feature, entanglement, is now an engineering resource. The fog here is what a measurement really is, why the constants of nature have the values they do, and why the universe is made of matter at all.",
      },
      {
        id: "stars",
        title: "The Stars Thread",
        intro:
          "From dark lines in sunlight to planets around other suns. In 1835 a philosopher declared that the chemistry of the stars could never be known. Within thirty years spectroscopy was reading it from starlight, and the colours of stars became a code for their temperature, composition and motion. Physics then explained what makes stars shine and how they forge the elements, what is left when they die, and how they gather into galaxies around black holes. The fog here is the interior of neutron stars, the Sun's own composition, and whether any of the thousands of known planets carries life.",
      },
      {
        id: "light",
        title: "The Light Thread",
        intro:
          "From the law of refraction, written in Baghdad around 984, to flashes short enough to resolve an electron's orbit. Light was the first thing in nature to be described by an exact rule and the last to be explained: Newton's prisms and Huygens's wavefronts both fitted the evidence, and the standoff lasted a century until two slits produced darkness out of light. Being a wave then imposed a hard limit on what any microscope can see, which bounded biology for 120 years. Counting photons one at a time revealed light that no classical field can imitate, and the laser turned the subject into the instrument with which most of the rest of physics is now measured. The fog here is a single-photon source good enough to build a computer from, a laser made of silicon, and how long an electron takes to tunnel.",
      },
      {
        id: "flow",
        title: "The Flow Thread",
        intro:
          "From a paradox that took 152 years to explain to the fourteen orders of magnitude a liquid's viscosity climbs on its way to being glass. The equations of fluid motion have been believed since 1845 and solved almost never, because the term describing fluid carrying its own momentum couples every scale to every other. D'Alembert proved that a body moving through an ideal fluid feels no drag, which is correct and absurd, and the resolution turned out to live in a layer millimetres thick. Above a critical speed smooth flow stops being available at all, and what replaces it obeys a power law derived from two paragraphs of dimensional reasoning. Rotation and stratification then make a planet's thin fluid envelopes into a subject of their own, and the same continuum thinking applied to solids shows that materials are governed by their defects. The fog here is whether the equations have solutions at all, how to close them for the averages, what clouds do as the planet warms, where the laws of friction come from, and whether a glass is really a phase.",
      },
      {
        id: "matter",
        title: "The Matter Thread",
        intro:
          "From the shapes of crystals to phases defined by topology. For a century the regular faces of crystals hinted at an inner order no one could see, until in 1912 X-rays revealed the rows of atoms directly. Quantum mechanics then explained why electrons race through some of those lattices and are trapped in others, and control of the difference produced the transistor. Cooled far enough, some metals lose all resistance, iron's magnetism turned out to be an electric effect of the exclusion principle, and a strip of electrons in a magnetic field gave a resistance fixed by constants of nature, because its quantum states have a shape that cannot be smoothly undone. The fog here is how the copper oxides superconduct, whether anything can superconduct at room temperature, and whether the exotic particles of topological matter can be tamed for computing.",
      },
      {
        id: "nucleus",
        title: "The Nuclear Thread",
        intro:
          "From a fogged photographic plate to the fuel of the stars. In 1896 Becquerel found that uranium gives off rays with no visible source of energy, and within a decade radioactivity had shown that atoms can change into other elements. Alpha particles revealed a tiny, dense nucleus, and precise weighing showed that it weighs less than its parts. The missing mass is energy on a scale no chemistry can match. Splitting heavy nuclei, discovered in 1938, released it, and within seven years it had run a reactor and destroyed two cities. Joining light nuclei, as the Sun does, has proved far harder to tame. The same steady decay became a clock that gave the Earth its age of 4.55 billion years. The fog here is how long a free neutron lives, where the chart of nuclei ends, and whether fusion will ever light a city.",
      },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    blurb: "How weighing the gases killed phlogiston and gave the elements a list, how that list turned out to have a hidden order that predicted elements nobody had seen, and what a chemical bond is once electrons are allowed to be shared.",
    threads: [
      {
        id: "substance",
        title: "The Substance Thread",
        intro:
          "From a definition of an element that refuses to say what matter is, to an equation that governs every molecule and cannot be solved for any of them. Chemistry became quantitative when it started weighing gases, because only then could anyone tell what was conserved — and metals gaining weight as they burn is not something an escaping substance can explain. Fixed proportions gave atoms something to be, atomic weights gave the elements an order, and the order turned out to predict three elements and their densities before they were isolated. The bond then acquired a content, a pair of electrons shared, and the shape of a molecule became something countable on an envelope. The fog here is which compositions are stable, what counts as a bond at all, whether periodicity survives at the bottom of the table, and how to improve a density functional on purpose rather than by fitting.",
      },
      {
        id: "reaction",
        title: "The Reaction Thread",
        intro:
          "From the wrong criterion for which way a reaction goes to watching a bond break with a flash a hundred femtoseconds long. Heat release looked like the driving force for most of the nineteenth century and is not: ammonium nitrate dissolves while getting cold. The right quantity decides direction and says nothing about speed, so rates had to be studied separately — and because the exponent in Arrhenius's equation does the work, a barrier lowered by a third buys a hundred thousandfold in rate. That is the whole economics of catalysis, and the reason nitrogen can be taken out of the air at all. The fog here is the thermodynamics of anything more concentrated than a dilute solution, networks of thousands of coupled steps, reactions that bypass the saddle point, fixing nitrogen the way a bacterium does, and exact dynamics for a molecule worth reacting.",
      },
      {
        id: "synthesis",
        title: "The Synthesis Thread",
        intro:
          "From two substances with the same formula and nothing else in common to a reaction that ignores everything in a living cell. Isomerism was a crisis, because composition was all chemistry could measure, and the resolution — that carbon bonds to itself, so a molecule is a specific connected structure — let the number of isomers a formula permits be counted and checked. A tetrahedron then explained why two molecules can be mirror images distinguishable by nothing but the light they rotate, which turns out to matter because every receptor is handed too. Building such molecules deliberately became the discipline's demonstration of competence, governed by an arithmetic in which forty steps at ninety per cent each deliver one and a half. The fog here is what aromaticity is, why life uses one hand, how to make a complex molecule in few steps, how to get from a planned route to a working one, and how to choose one carbon-hydrogen bond out of forty.",
      },
      {
        id: "electrochemistry",
        title: "The Electrochemistry Thread",
        intro:
          "From a pile of zinc and silver discs to the arithmetic of why a battery cannot match petrol. A steady current was the first tool that could take apart compounds no reagent would touch, and within two years it had produced six new elements; Faraday then made the relation between charge and chemical change exact, and in doing so measured the charge on the electron sixty years before anyone knew there was one. Ions turned out to be present before the current rather than made by it, a potential turned out to read a concentration at fifty-nine millivolts per decade, and a metal turned out to corrode by acting as its own short-circuited cell. The fog here is what the electrode interface actually looks like, whether a single ion's activity means anything, how to predict an overpotential, how to make the lithium-metal anode safe, and when a pit will start.",
      },
      {
        id: "analysis",
        title: "The Analysis Thread",
        intro:
          "From weighing a precipitate to weighing a protein, and the discovery that the instrument is rarely where the error is. Chemistry's oldest service is to say what is in something and how much, and the discipline that made it reliable was procedural: a fixed scheme of reagents, a reagent of known strength, a certified sample to check against. Then separation made mixtures tractable, with resolving power that can be bought by the metre; exact mass made a formula readable to four decimal places; and a radio receiver turned out to count a molecule's hydrogens and their neighbours, so that a structure which once took a career took an afternoon. The fog here is whether a sample represents anything, samples with more components than the separation has peaks, the great majority of detected masses that cannot be identified, getting a structure from spectra without a chemist, and what the surface of a working catalyst actually is.",
      },
      {
        id: "coordination",
        title: "The Coordination Thread",
        intro:
          "From an orange solid nobody could write a formula for to a cluster of four manganese atoms splitting water in every leaf. A metal turned out to have a second kind of combining capacity — a fixed number of positions in space, fillable by whole neutral molecules — and the geometry was settled by counting, because an octahedron permits two isomers of a given formula where a flat hexagon or a prism permits three, and only two were ever found. The experiment that closed the case produced a handed molecule containing no carbon at all, which took chirality away from organic chemistry. The colours those compounds were named for then turned out to measure how the metal's d orbitals are split, so a spectrum became two numbers and whether a complex is magnetic became an inequality. Fill one position with a carbon and you have a catalytic cycle written as named steps and counted to eighteen; fill it with boron or xenon and the octet rule fails in instructive ways. The fog here is what a dissolved metal salt actually contains, how to compute the gap between two spin states, which species in a working flask is the catalyst, doing with iron what is done with palladium, how far multiple bonding survives down a group, and how a cell gets the right metal to the right site.",
      },
    ],
  },
  {
    id: "biology",
    name: "Biology",
    blurb: "How evolution and heredity, long at odds, merged, and how reading DNA rewrote both. How the cell became the unit of life and disease, how the brain was found to signal with electricity and chemistry, how the study of where species live became the science of ecosystems, and how a single egg builds a body.",
    threads: [
      {
        id: "heredity",
        title: "The Heredity Thread",
        intro:
          "From Darwin's natural selection and Mendel's peas to the genome. For decades the two founding ideas of modern biology seemed incompatible: Darwin needed variation to accumulate, and the heredity of his day blended it away. Mendel's discrete genes rescued natural selection, molecular biology found what genes are made of, and genomics now reads them by the billion. The map runs into fog at life's origin, and in the long stretches of DNA whose purpose no one knows.",
      },
      {
        id: "cell",
        title: "The Cell Thread",
        intro:
          "From cork under a microscope to the machinery inside every living thing. The first microscopes revealed that plants and animals are built of tiny compartments, and that invisible organisms swarm in every drop of water. It took two centuries to see what that meant: every living thing is made of cells, every cell comes from another, and many diseases are caused by microbes. Chemistry then showed that cells run on enzymes and a universal currency of energy, microscopes of electrons and light mapped their inner machinery, and immunology found how the body tells its own cells from invaders. The fog here is how little a cell can be and still live, how cells know their own size, and why some pathogens still defeat every vaccine.",
      },
      {
        id: "disease",
        title: "The Disease Thread",
        intro:
          "From a haberdasher reading London's bills of mortality to a drug designed against one abnormal enzyme. Most of what is known about why people fall ill was inferred from counting, because the experiment that would settle it cannot be run on people — which is why this thread is as much about defences against confounding as about causes. Filtration revealed agents smaller than any cell and with no metabolism of their own; treating infection as an ecological system showed that an epidemic stops while most of the population is still susceptible; and the age at which cancers appear turned out to count the mutations they require. The fog here is which observational findings to believe, how far an epidemic can be forecast, what makes a tumour spread, and how to stay ahead of resistance.",
      },
      {
        id: "structure",
        title: "The Molecular Structure Thread",
        intro:
          "From a diffraction pattern missing half its information to a structure for every sequence ever read. X-rays can locate every atom in a protein, except that a detector records amplitudes and a reconstruction needs phases, and defeating that took twenty years and a mercury atom. The first structure solved, myoglobin in 1958, was irregular and asymmetric, which was the opposite of what everyone expected; the first enzyme solved, seven years later, showed a mechanism readable off the map. The same thinking extended to machines that convert one ATP into an eight-nanometre step, and to a sheet two molecules thick that holds six times the field which breaks down air. Prediction was then solved from the wrong direction entirely -- not from physics but from statistics over the structures and sequences already collected. The fog here is what to do about the third of the proteome with no fixed shape, how motors coordinate their two heads, how lipids are organised in a living membrane, and how to predict the states a protein moves between rather than one of them.",
      },
      {
        id: "brain",
        title: "The Brain Thread",
        intro:
          "From Galvani's twitching frog legs to the wiring diagram of a fly. For centuries the brain was a soft grey mass with no visible parts fine enough to explain a thought. Doctors found that damage to one patch could destroy speech and nothing else, a silver stain showed that the brain is built of separate cells, and physiologists learned that those cells signal with pulses of electricity and pass them on with chemicals released in packets. Recordings from single neurons then found cells that respond to edges and cells that mark a place, and theorists asked whether all of this is computation, a question that gave rise to today's artificial neural networks. The fog here is how a memory is stored, what causes Alzheimer's disease, and why any of this activity is accompanied by experience at all.",
      },
      {
        id: "ecology",
        title: "The Ecology Thread",
        intro:
          "From Humboldt's mountain to the Red List. Humboldt saw that the plants on a tropical mountain are layered like the climates from the equator to the poles, and Wallace traced a line through the islands of Southeast Asia that divides the animals of Asia from those of Australia. Explaining where species live led to counting them: how populations grow, crash and cycle, how competing species share one place, and how energy and nutrients flow through a whole lake or forest. By the 1960s the same science was measuring what people were doing to the living world, and conservation biology was founded as a discipline built for a crisis. The fog here is why the tropics hold so many species, how so many competitors manage to live together, and whether an ecosystem's collapse can be seen coming.",
      },
      {
        id: "phylogeny",
        title: "The Tree of Life Thread",
        intro:
          "From Linnaeus's two-word names to the archaeal branch we turn out to sit on. Classification began as a filing system and became a claim about history: groups within groups is what descent produces, so a classification can be wrong. Fossils gave that history dates and showed that species die out; sequences gave it a clock that runs in organisms with no anatomy in common. The methods that infer a tree from data now carry their own error bars, and the deepest branches are still moving — the fog here is where the universal tree is rooted, which animals branched off first, and why lineages that evolve fast over decades go nowhere over millions of years.",
      },
      {
        id: "development",
        title: "The Development Thread",
        intro:
          "From Aristotle's opened eggs to skin cells turned back into stem cells. For two thousand years the question was whether a body is already present in miniature in the egg or builds itself step by step. Microscopes settled it for gradual building, and experiments on living embryos showed that cells are told what to become by their neighbours, without losing any of their genes. Mutant flies and worms then revealed the genes that do the telling, and the surprise that nearly all animals share them. The same understanding showed how to reset a specialised cell, and grow tissues in a dish. The fog here is how an organ knows when to stop growing, why a salamander can regrow a leg when we cannot, and how evolution makes something genuinely new.",
      },
    ],
  },
];

export function getDomain(id: string): DomainInfo | undefined {
  return DOMAINS.find((d) => d.id === id);
}

export function getThread(domainId: string, threadId: string): ThreadInfo | undefined {
  return getDomain(domainId)?.threads.find((t) => t.id === threadId);
}

/** Anchor for a thread's section on its domain page. */
export function threadPath(domainId: string, threadId: string): string {
  return `/${domainId}/#thread-${threadId}`;
}

/** "The Number Theory Thread" → "Number Theory", for compact lists. */
export function shortThreadTitle(title: string): string {
  return title.replace(/^The\s+/, "").replace(/\s+Thread$/, "");
}
