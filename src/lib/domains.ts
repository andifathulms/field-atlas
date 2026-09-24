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
    blurb: "How the study of space split into many geometries, how the study of whole numbers split into theories of its own, how calculus was made rigorous, where mathematics meets its own limits, how solving equations became the study of symmetry, how counting puzzles became the mathematics of networks, how equations of motion led to chaos, and what forced each split.",
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
    ],
  },
  {
    id: "physics",
    name: "Physics",
    blurb: "How motion, light and gravity were rebuilt around the speed of light, how the laws of heat became the statistics of atoms, how energy turned out to come in lumps, how starlight revealed what stars are made of, and what is still dark.",
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
    ],
  },
  {
    id: "biology",
    name: "Biology",
    blurb: "How evolution and heredity, long at odds, merged, how reading DNA rewrote both, how the brain was found to be built of cells that signal with electricity and chemistry, and how the cell became the unit of life, health and disease.",
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
        id: "brain",
        title: "The Brain Thread",
        intro:
          "From Galvani's twitching frog legs to the wiring diagram of a fly. For centuries the brain was a soft grey mass with no visible parts fine enough to explain a thought. Doctors found that damage to one patch could destroy speech and nothing else, a silver stain showed that the brain is built of separate cells, and physiologists learned that those cells signal with pulses of electricity and pass them on with chemicals released in packets. Recordings from single neurons then found cells that respond to edges and cells that mark a place, and theorists asked whether all of this is computation, a question that gave rise to today's artificial neural networks. The fog here is how a memory is stored, what causes Alzheimer's disease, and why any of this activity is accompanied by experience at all.",
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
