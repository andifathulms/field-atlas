import { Markdown } from "@/components/Markdown";
import { Sources } from "@/components/Sources";
import Link from "next/link";
import { getField, getTurningPoint } from "@/lib/content";
import { getDomain } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import type { Application, Domain, Field, KeyIdea, Reading } from "@/lib/types";

/** Literal class names so Tailwind keeps them; one per domain accent. */
const DOMAIN_TEXT: Record<Domain, string> = {
  math: "text-math",
  physics: "text-physics",
  biology: "text-biology",
};

/** Plain-language orientation above the chapters. */
export function InBrief({ summary }: { summary: string }) {
  return (
    <section aria-labelledby="brief-heading" className="mb-12">
      <h2 id="brief-heading" className="stamp text-ink-faint">
        In brief
      </h2>
      <div className="mt-3 border-l-2 border-accent pl-5 text-[1.3rem] leading-relaxed text-ink [&_p+p]:mt-3">
        <Markdown>{summary}</Markdown>
      </div>
    </section>
  );
}

/** Short glossary of the ideas a newcomer needs, each tied to where it entered the story. */
export function KeyIdeas({ ideas, field }: { ideas: KeyIdea[]; field: Field }) {
  return (
    <section aria-labelledby="ideas-heading" className="mb-16">
      <h2 id="ideas-heading" className="stamp border-b border-rule pb-3 text-ink-faint">
        Key ideas
      </h2>
      <dl>
        {ideas.map((idea) => {
          const tp = idea.turning_point_id ? getTurningPoint(idea.turning_point_id) : undefined;
          const href = tp
            ? tp.field_id === field.id
              ? `#tp-${tp.id}`
              : `${fieldPath(field.domain, tp.field_id)}#tp-${tp.id}`
            : null;
          return (
            <div key={idea.term} className="grid gap-x-6 gap-y-1 border-b border-rule py-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
              <dt>
                <span className="block font-semibold leading-snug">
                  <Markdown inline>{idea.term}</Markdown>
                </span>
                {tp && href && (
                  <a href={href} className="stamp ink-link mt-1 inline-block text-ink-faint">
                    Enters {tp.date}
                  </a>
                )}
              </dt>
              <dd className="text-[0.98rem] leading-relaxed text-ink-soft">
                <Markdown>{idea.definition}</Markdown>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

/**
 * Where the field's results are put to work. Settled, so drawn in solid ink;
 * uses that land in another domain carry that domain's accent as a seed of
 * the cross-domain view.
 */
export function Applications({ applications }: { applications: Application[] }) {
  return (
    <section id="applications" aria-labelledby="apps-heading" className="mt-20">
      <p className="stamp text-ink-faint">Applications</p>
      <h2 id="apps-heading" className="mt-2 border-b border-ink pb-4 text-3xl font-semibold tracking-tight">
        Where it is used
      </h2>
      <ul>
        {applications.map((a) => {
          const domain = a.domain ? getDomain(a.domain) : undefined;
          return (
            <li
              key={a.title}
              className="grid gap-x-8 gap-y-2 border-b border-rule py-7 sm:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <p className="stamp flex flex-col gap-1 pt-1.5">
                <span className="text-ink-soft">{a.area}</span>
                {domain && a.domain && <CrossDomainTag application={a} domainName={domain.name} />}
              </p>
              <div className="max-w-prose">
                <h3 className="text-xl font-semibold leading-snug">{a.title}</h3>
                <div className="mt-2 leading-relaxed text-ink-soft">
                  <Markdown>{a.description}</Markdown>
                </div>
                <Sources sources={a.sources} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** The ↗ tag on an application that lands in another domain, linked when it names a field there. */
function CrossDomainTag({ application: a, domainName }: { application: Application; domainName: string }) {
  const className = DOMAIN_TEXT[a.domain!];
  const target = a.field_id ? getField(a.field_id) : undefined;
  if (!target) {
    return (
      <span className={className} title={`Links into the ${domainName.toLowerCase()} survey`}>
        ↗ {domainName}
      </span>
    );
  }
  return (
    <Link href={fieldPath(target.domain, target.id)} className={`${className} ink-link`}>
      ↗ {domainName} · {target.name}
    </Link>
  );
}

/**
 * The other side of a cross-domain application: fields in other domains whose
 * results this field draws on. A first, local slice of the cross-domain view.
 */
export function DrawsOn({ links }: { links: Array<{ from: Field; application: Application }> }) {
  return (
    <section aria-labelledby="draws-heading" className="mb-16">
      <h2 id="draws-heading" className="stamp border-b border-rule pb-3 text-ink-faint">
        Draws on other domains
      </h2>
      <ul>
        {links.map(({ from, application }) => {
          const domain = getDomain(from.domain);
          return (
            <li
              key={`${from.id}-${application.title}`}
              className="grid gap-x-6 gap-y-1 border-b border-rule py-4 sm:grid-cols-[10rem_minmax(0,1fr)]"
            >
              <p className="stamp pt-1">
                <span className={DOMAIN_TEXT[from.domain]}>↙ {domain?.name}</span>
              </p>
              <div>
                <Link href={`${fieldPath(from.domain, from.id)}#applications`} className="font-semibold ink-link">
                  {from.name}
                </Link>
                <p className="mt-1 text-[0.98rem] leading-relaxed text-ink-soft">{application.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function FurtherReading({ readings }: { readings: Reading[] }) {
  return (
    <section aria-labelledby="reading-heading" className="mt-20">
      <h2 id="reading-heading" className="stamp border-b border-rule pb-3 text-ink-faint">
        Further reading
      </h2>
      <ol className="max-w-3xl">
        {readings.map((r) => (
          <li key={r.citation} className="border-b border-rule py-4">
            <p className="leading-snug">
              {r.url ? (
                <a href={r.url} className="ink-link" target="_blank" rel="noreferrer">
                  {r.citation}
                </a>
              ) : (
                r.citation
              )}
            </p>
            <p className="mt-1 text-sm italic text-ink-faint">{r.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
