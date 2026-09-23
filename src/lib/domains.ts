import type { Domain } from "./types";

export interface DomainInfo {
  id: Domain;
  name: string;
  /** Short description for the landing page. */
  blurb: string;
}

export const DOMAINS: DomainInfo[] = [
  {
    id: "math",
    name: "Mathematics",
    blurb: "How the study of space split into many geometries, and what each split was forced by.",
  },
  {
    id: "physics",
    name: "Physics",
    blurb: "Not yet surveyed.",
  },
  {
    id: "biology",
    name: "Biology",
    blurb: "Not yet surveyed.",
  },
];

export function getDomain(id: string): DomainInfo | undefined {
  return DOMAINS.find((d) => d.id === id);
}
