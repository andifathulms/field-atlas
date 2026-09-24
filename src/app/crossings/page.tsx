import type { Metadata } from "next";
import Link from "next/link";
import { CrossingsDiagram } from "@/components/CrossingsDiagram";
import { getCrossings, getFields, type Crossing } from "@/lib/content";
import { DOMAINS, getDomain } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import type { Domain } from "@/lib/types";

export const metadata: Metadata = {
  title: "Crossings",
  description: "Where results from one domain of knowledge land in another: mathematics, physics and biology.",
};

/** Literal class names so Tailwind keeps them; one per domain accent. */
const DOMAIN_TEXT: Record<Domain, string> = {
  math: "text-math",
  physics: "text-physics",
  biology: "text-biology",
};

function groupByDirection(crossings: Crossing[]) {
  const groups = new Map<string, { from: Domain; to: Domain; items: Crossing[] }>();
  for (const c of crossings) {
    const to = c.application.domain!;
    const key = `${c.from.domain}>${to}`;
    const g = groups.get(key) ?? { from: c.from.domain, to, items: [] };
    g.items.push(c);
    groups.set(key, g);
  }
  const order = (d: Domain) => DOMAINS.findIndex((x) => x.id === d);
  return [...groups.values()].sort((a, b) => order(a.from) - order(b.from) || order(a.to) - order(b.to));
}

export default function CrossingsPage() {
  const { links, seeds } = getCrossings();
  const fieldCounts = Object.fromEntries(DOMAINS.map((d) => [d.id, getFields(d.id).length])) as Record<Domain, number>;

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="settle pb-10 pt-16">
        <p className="stamp text-ink-faint">
          <Link href="/" className="ink-link">
            Atlas
          </Link>{" "}
          / Across domains
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">Crossings</h1>
        <p className="mt-5 max-w-prose text-lg text-ink-soft">
          Each domain in the atlas is surveyed on its own, but ideas do not stay put. A crossing is a use
          written on one field&apos;s page that lands in another domain: geometry becoming gravity, physics
          revealing the double helix. Solid lines land in a field this atlas has surveyed. Dashed lines reach
          ground not yet mapped.
        </p>
      </header>

      <section aria-label="Crossings diagram" className="survey-grid border border-rule px-2 py-8 sm:px-8">
        <CrossingsDiagram links={links} seeds={seeds} fieldCounts={fieldCounts} />
      </section>

      <section aria-labelledby="linked-heading" className="mt-20">
        <h2 id="linked-heading" className="stamp border-b border-ink pb-3 text-ink-faint">
          Linked crossings · {links.length}
        </h2>
        {groupByDirection(links).map((g) => (
          <div key={`${g.from}-${g.to}`} className="mt-10">
            <h3 className="stamp mb-2">
              <span className={DOMAIN_TEXT[g.from]}>{getDomain(g.from)?.name}</span>
              <span className="text-ink-faint"> → </span>
              <span className={DOMAIN_TEXT[g.to]}>{getDomain(g.to)?.name}</span>
            </h3>
            <ul>
              {g.items.map(({ from, application, to }) => (
                <li
                  key={`${from.id}-${application.title}`}
                  className="grid gap-x-8 gap-y-2 border-b border-rule py-5 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]"
                >
                  <p className="leading-snug">
                    <Link href={`${fieldPath(from.domain, from.id)}#applications`} className="ink-link font-semibold">
                      {from.name}
                    </Link>
                    <span className="text-ink-faint"> → </span>
                    <Link href={fieldPath(to!.domain, to!.id)} className="ink-link font-semibold">
                      {to!.name}
                    </Link>
                  </p>
                  <div className="max-w-prose">
                    <p className="font-semibold leading-snug">{application.title}</p>
                    <p className="mt-1 text-[0.98rem] leading-relaxed text-ink-soft">{application.area}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section aria-labelledby="seeds-heading" className="mt-20">
        <div className="border border-dashed border-fog/60 px-5 py-8 sm:px-10">
          <p className="stamp text-fog">Unmapped · {seeds.length}</p>
          <h2 id="seeds-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink-soft">
            Reaching past the survey
          </h2>
          <p className="mt-3 max-w-prose text-ink-faint">
            Uses that land in another domain, but in a part of it this atlas has not surveyed yet: medicine,
            crystallography, statistics. Each is a place a future field would connect.
          </p>
          <ul className="mt-6">
            {seeds.map(({ from, application }) => (
              <li
                key={`${from.id}-${application.title}`}
                className="grid gap-x-8 gap-y-1 border-t border-dashed border-rule py-4 text-ink-faint sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]"
              >
                <p className="leading-snug">
                  <Link href={`${fieldPath(from.domain, from.id)}#applications`} className="ink-link text-ink-soft">
                    {from.name}
                  </Link>
                  <span className="stamp ml-2 text-fog">↗ {getDomain(application.domain!)?.name}</span>
                </p>
                <p className="leading-snug">{application.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
