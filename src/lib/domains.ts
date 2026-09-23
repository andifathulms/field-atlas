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
        "From Euclid's axioms to the shape of three-dimensional space. One awkward postulate split geometry in two. The two halves met again in Riemann's lecture of 1854. What grew from that meeting eventually settled Poincaré's question about the shape of space, and it still runs into fog in dimension four.",
    },
  },
  {
    id: "physics",
    name: "Physics",
    blurb: "Not yet surveyed. Instrument amber is reserved for it.",
  },
  {
    id: "biology",
    name: "Biology",
    blurb: "Not yet surveyed. Moss green is reserved for it.",
  },
];

export function getDomain(id: string): DomainInfo | undefined {
  return DOMAINS.find((d) => d.id === id);
}
