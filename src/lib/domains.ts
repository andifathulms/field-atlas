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
    blurb: "How the study of space split into many geometries, how the study of whole numbers split into theories of its own, how calculus was made rigorous, where mathematics meets its own limits, and what forced each split.",
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
    ],
  },
  {
    id: "physics",
    name: "Physics",
    blurb: "How motion, light and gravity were rebuilt around the speed of light, and what is still dark.",
    threads: [
      {
        id: "relativity",
        title: "The Relativity Thread",
        intro:
          "From Galileo's falling bodies and Maxwell's light to curved spacetime and the expanding universe. Newton's mechanics and Maxwell's electromagnetism both looked finished, yet they disagreed about one number, the speed of light. Settling that disagreement rebuilt space, time and gravity. The map still runs into fog where gravity meets the quantum, and where most of the universe turns out to be dark.",
      },
    ],
  },
  {
    id: "biology",
    name: "Biology",
    blurb: "How evolution and heredity, long at odds, merged, and how reading DNA rewrote both.",
    threads: [
      {
        id: "heredity",
        title: "The Heredity Thread",
        intro:
          "From Darwin's natural selection and Mendel's peas to the genome. For decades the two founding ideas of modern biology seemed incompatible: Darwin needed variation to accumulate, and the heredity of his day blended it away. Mendel's discrete genes rescued natural selection, molecular biology found what genes are made of, and genomics now reads them by the billion. The map runs into fog at life's origin, and in the long stretches of DNA whose purpose no one knows.",
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
