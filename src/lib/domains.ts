import type { Domain } from "./types";

export interface DomainInfo {
  id: Domain;
  name: string;
  /** Short description for the landing page. */
  blurb: string;
  /** The v1 pilot thread surveyed in this domain, if any. */
  thread?: { title: string; intro: string };
}

export const DOMAINS: DomainInfo[] = [
  {
    id: "math",
    name: "Mathematics",
    blurb: "How the study of space split into many geometries, and what each split was forced by.",
    thread: {
      title: "The Geometry Thread",
      intro:
        "From Euclid's axioms to the shape of three-dimensional space. One awkward postulate split geometry in two. The two halves met again in Riemann's lecture of 1854. What grew from that meeting eventually settled Poincaré's question about the shape of space, and it still runs into fog in dimension four. A second branch runs through the painter's perspective to the geometry of polynomial equations, and on to Fermat's Last Theorem.",
    },
  },
  {
    id: "physics",
    name: "Physics",
    blurb: "How motion, light and gravity were rebuilt around the speed of light, and what is still dark.",
    thread: {
      title: "The Relativity Thread",
      intro:
        "From Galileo's falling bodies and Maxwell's light to curved spacetime and the expanding universe. Newton's mechanics and Maxwell's electromagnetism both looked finished, yet they disagreed about one number, the speed of light. Settling that disagreement rebuilt space, time and gravity. The map still runs into fog where gravity meets the quantum, and where most of the universe turns out to be dark.",
    },
  },
  {
    id: "biology",
    name: "Biology",
    blurb: "How evolution and heredity, long at odds, merged, and how reading DNA rewrote both.",
    thread: {
      title: "The Heredity Thread",
      intro:
        "From Darwin's natural selection and Mendel's peas to the genome. For decades the two founding ideas of modern biology seemed incompatible: Darwin needed variation to accumulate, and the heredity of his day blended it away. Mendel's discrete genes rescued natural selection, molecular biology found what genes are made of, and genomics now reads them by the billion. The map runs into fog at life's origin, and in the long stretches of DNA whose purpose no one knows.",
    },
  },
];

export function getDomain(id: string): DomainInfo | undefined {
  return DOMAINS.find((d) => d.id === id);
}
