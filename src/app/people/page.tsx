import type { Metadata } from "next";
import Link from "next/link";
import { getField, getFigures, getTurningPoint } from "@/lib/content";
import { getDomain } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import { personSortKey, yearOf } from "@/lib/people";
import type { Domain } from "@/lib/types";

export const metadata: Metadata = {
  title: "People",
  description: "Everyone who appears in the atlas, with the turning points they took part in.",
};

/** Literal class names so Tailwind keeps them; one per domain accent. */
const DOMAIN_TEXT: Record<Domain, string> = {
  math: "text-math",
  physics: "text-physics",
  biology: "text-biology",
};

export default function PeoplePage() {
  const people = getFigures()
    .map((figure) => ({
      figure,
      key: personSortKey(figure.name),
      points: figure.turning_point_ids
        .map((id) => getTurningPoint(id)!)
        .map((tp) => ({ tp, field: getField(tp.field_id)! }))
        .sort((a, b) => yearOf(a.tp.date) - yearOf(b.tp.date)),
    }))
    .sort((a, b) => a.key.localeCompare(b.key, "en"));

  const groups = new Map<string, typeof people>();
  for (const p of people) {
    const letter = p.key[0].toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), p]);
  }
  const letters = [...groups.keys()];

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="settle pb-10 pt-12">
        <p className="stamp text-ink-faint">
          <Link href="/" className="ink-link">
            Atlas
          </Link>{" "}
          / People
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.02em] sm:text-7xl">People</h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl">
          The atlas has no biographies. People appear through what they did: each name below is tied to
          the turning points they took part in, across every field and domain. {people.length} people,
          alphabetical by surname.
        </p>
      </header>

      <nav
        aria-label="Jump to letter"
        className="sticky z-30 -mx-4 border-y border-rule bg-paper/90 px-4 backdrop-blur-md sm:-mx-8 sm:px-8"
        style={{ top: "var(--header-h, 0px)" }}
      >
        <ul className="flex flex-wrap gap-x-1">
          {letters.map((l) => (
            <li key={l}>
              <a href={`#letter-${l}`} className="stamp block px-1.5 py-2 text-ink-soft hover:text-ink">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {letters.map((l) => (
        <section key={l} id={`letter-${l}`} aria-label={l} className="scroll-mt-40 pt-10">
          <h2 className="stamp border-b border-ink pb-2 text-ink-faint">{l}</h2>
          <ul>
            {groups.get(l)!.map(({ figure, points }) => (
              <li
                key={figure.id}
                id={figure.id}
                className="grid scroll-mt-40 gap-x-8 gap-y-2 border-b border-rule py-4 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
              >
                <p className="font-semibold leading-snug">{figure.name}</p>
                <ul className="space-y-1.5">
                  {points.map(({ tp, field }) => (
                    <li key={tp.id} className="leading-snug">
                      <span className="stamp mr-2 text-ink-faint">{tp.date}</span>
                      <Link href={`${fieldPath(field.domain, field.id)}#tp-${tp.id}`} className="ink-link">
                        {tp.title}
                      </Link>
                      <span className="text-ink-faint">
                        {" · "}
                        <span className={DOMAIN_TEXT[field.domain]}>{field.name}</span>
                        <span className="hidden sm:inline">, {getDomain(field.domain)?.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
