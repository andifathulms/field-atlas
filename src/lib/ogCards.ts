// Every social card the site publishes, keyed by the slug under /og/.
// One place defines them so the route that renders the PNGs and the pages
// that point at them can never drift apart.
import { getCrossings, getFields, getFigures } from "./content";
import { DOMAINS, getDomain, getThread, shortThreadTitle } from "./domains";
import type { CardProps } from "./og";
import { surveySummary, unresolvedCount } from "./stats";
import { DOMAIN_COLOR } from "./og";

const plural = (n: number, noun: string) => `${n} ${noun}${n === 1 ? "" : "s"}`;

/** Card for the landing page. */
function homeCard(): CardProps {
  const fields = getFields();
  const threads = DOMAINS.reduce((n, d) => n + d.threads.length, 0);
  return {
    title: "Field Atlas",
    subtitle: "How subfields branched, what forced each split, and what is still unmapped.",
    facts: [plural(fields.length, "field"), plural(threads, "thread"), "3 domains"],
  };
}

function domainCard(domainId: string): CardProps | undefined {
  const domain = getDomain(domainId);
  if (!domain) return undefined;
  const fields = getFields(domain.id);
  const survey = surveySummary(fields);
  return {
    eyebrow: "Domain",
    title: domain.name,
    subtitle: domain.blurb.split(/(?<=\.)\s/)[0],
    facts: [
      plural(survey.fields, "field"),
      plural(domain.threads.length, "thread"),
      plural(survey.turningPoints, "turning point"),
    ],
    accent: DOMAIN_COLOR[domain.id],
  };
}

function fieldCard(domainId: string, fieldId: string): CardProps | undefined {
  const fields = getFields();
  const field = fields.find((f) => f.id === fieldId && f.domain === domainId);
  if (!field) return undefined;
  const domain = getDomain(field.domain);
  const thread = getThread(field.domain, field.thread);
  const unresolved = unresolvedCount(field);
  return {
    eyebrow: [domain?.name, thread && shortThreadTitle(thread.title)].filter(Boolean).join(" · "),
    title: field.name,
    subtitle: field.core_question,
    facts: [
      field.era_emerged,
      plural(field.turning_points.length, "turning point"),
      unresolved ? plural(unresolved, "open problem") : "nothing left open",
    ],
    accent: DOMAIN_COLOR[field.domain],
  };
}

/** The pages that stand outside a single domain, so they keep the paper accent. */
function sectionCards(): Record<string, CardProps> {
  const fields = getFields();
  const survey = surveySummary(fields);
  const crossings = getCrossings();
  return {
    crossings: {
      eyebrow: "Cross-domain",
      title: "Crossings",
      subtitle: "Where a result proved in one domain lands in another.",
      facts: [plural(crossings.links.length, "link"), plural(crossings.seeds.length, "seed")],
    },
    people: {
      eyebrow: "Index",
      title: "People",
      subtitle: "Everyone who appears in the atlas, with the turning points they took part in.",
      facts: [plural(getFigures().length, "figure")],
    },
    toolkit: {
      eyebrow: "Influence",
      title: "Toolkit",
      subtitle: "Which fields' ideas travelled furthest: across threads by lineage, across domains by use.",
      facts: [plural(survey.fields, "field"), "ranked by reach"],
    },
    "open-problems": {
      eyebrow: "The fog",
      title: "Open problems",
      subtitle: "Every question the atlas reaches and cannot answer, gathered in one place.",
      facts: [plural(survey.unresolved, "unresolved problem")],
    },
    search: {
      eyebrow: "Index",
      title: "Search",
      subtitle: "Search every field, turning point, open problem and person in the atlas.",
      facts: [plural(survey.fields, "field"), plural(survey.turningPoints, "turning point")],
    },
  };
}

/** Slug (without the .png) for each page that has a card. */
export function cardSlugs(): string[] {
  return [
    "home",
    ...DOMAINS.map((d) => d.id),
    ...getFields().map((f) => `${f.domain}/${f.id}`),
    ...Object.keys(sectionCards()),
  ];
}

/** Resolve a slug back to the card it describes. */
export function cardFor(slug: string): CardProps | undefined {
  if (slug === "home") return homeCard();
  const parts = slug.split("/");
  if (parts.length === 2) return fieldCard(parts[0], parts[1]);
  return domainCard(slug) ?? sectionCards()[slug];
}
