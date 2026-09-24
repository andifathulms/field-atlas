import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Applications, DrawsOn, FurtherReading, InBrief, KeyIdeas } from "@/components/FieldSections";
import { Markdown } from "@/components/Markdown";
import { Sources } from "@/components/Sources";
import { getField, getFields, getFigure, getFiguresForTurningPoint, getIncomingLinks } from "@/lib/content";
import { getDomain, getThread, threadPath } from "@/lib/domains";
import { figureAnchor, resolveFigureMentions } from "@/lib/mentions";
import { fieldPath } from "@/lib/paths";
import {
  OPEN_PROBLEM_STATUS_LABEL,
  type Field,
  type OpenProblem,
  type TurningPoint,
} from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return getFields().map((f) => ({ domain: f.domain, field: f.id }));
}

type Params = { params: { domain: string; field: string } };

export function generateMetadata({ params }: Params): Metadata {
  const field = getField(params.field);
  return { title: field?.name, description: field?.core_question };
}

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function Waypoint({ tp }: { tp: TurningPoint }) {
  const figures = getFiguresForTurningPoint(tp.id);
  return (
    <li id={`tp-${tp.id}`} className="waypoint relative -ml-px border-l border-accent/40 pb-9 pl-6 last:pb-0">
      <span
        aria-hidden
        className={`absolute -left-[5px] top-[0.3rem] h-[9px] w-[9px] rounded-full ${
          tp.contested ? "bg-contested" : "bg-accent"
        }`}
      />
      <p className="stamp flex flex-wrap gap-x-3 gap-y-1">
        <span className="text-ink">{tp.date}</span>
        <span className="text-accent">{tp.type}</span>
        {tp.contested && <span className="hatch-contested text-contested">Contested</span>}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug">{tp.title}</h3>
      <div className="mt-2 text-[0.96rem] leading-relaxed text-ink-soft">
        <Markdown>{tp.description}</Markdown>
      </div>
      {tp.contested && tp.contested_note && (
        <div className="mt-3 border-l-2 border-contested/70 pl-3 text-sm leading-relaxed text-ink-soft">
          <p className="stamp mb-1 text-contested">What is disputed</p>
          <Markdown>{tp.contested_note}</Markdown>
        </div>
      )}
      {figures.length > 0 && (
        <p className="mt-3 text-sm italic text-ink-faint">{figures.map((f) => f.name).join(", ")}</p>
      )}
      <Sources sources={tp.sources} />
    </li>
  );
}

function Problem({ problem }: { problem: OpenProblem }) {
  const resolved = problem.status === "recently_resolved";
  return (
    <article
      id={`op-${problem.id}`}
      className={`waypoint py-8 ${resolved ? "text-ink-soft" : "text-ink-faint"} border-t border-dashed border-rule first:border-t-0`}
    >
      <p className="stamp flex flex-wrap gap-x-3">
        <span className={resolved ? "text-accent" : "text-fog"}>{OPEN_PROBLEM_STATUS_LABEL[problem.status]}</span>
      </p>
      <h3 className={`mt-2 text-2xl font-semibold tracking-tight ${resolved ? "text-ink" : "text-ink-soft"}`}>
        <Markdown inline>{problem.name}</Markdown>
      </h3>
      {problem.status_note && <p className="mt-1 text-sm italic">{problem.status_note}</p>}
      <div className="mt-4 max-w-prose leading-relaxed">
        <Markdown>{problem.description}</Markdown>
      </div>
      <dl className="mt-5 grid max-w-prose gap-5 sm:grid-cols-2 sm:gap-8">
        <div>
          <dt className="stamp mb-1 text-ink-faint">Why it is hard</dt>
          <dd className="text-[0.96rem] leading-relaxed">
            <Markdown>{problem.why_hard}</Markdown>
          </dd>
        </div>
        <div>
          <dt className="stamp mb-1 text-ink-faint">What resolving it unlocks</dt>
          <dd className="text-[0.96rem] leading-relaxed">
            <Markdown>{problem.unlocks}</Markdown>
          </dd>
        </div>
      </dl>
      <Sources sources={problem.sources} />
    </article>
  );
}

function FieldLinks({ ids, fields }: { ids: string[]; fields: Map<string, Field> }) {
  return (
    <>
      {ids.map((id, i) => {
        const f = fields.get(id)!;
        return (
          <span key={id}>
            {i > 0 && <span className="text-ink-faint"> + </span>}
            <Link href={fieldPath(f.domain, f.id)} className="ink-link">
              {f.name}
            </Link>
          </span>
        );
      })}
    </>
  );
}

export default function FieldPage({ params }: Params) {
  const field = getField(params.field);
  const domain = getDomain(params.domain);
  if (!field || !domain || field.domain !== domain.id) notFound();

  const allFields = new Map(getFields(field.domain).map((f) => [f.id, f]));
  const incoming = getIncomingLinks(field.id);
  const thread = getThread(field.domain, field.thread);
  const threadFields = [...allFields.values()].filter((f) => f.thread === field.thread);
  const threadRoots = threadFields.filter((f) => !f.parent_ids.some((p) => threadFields.some((t) => t.id === p))).length;
  // In order of each person's first turning point in this field's history.
  const tpOrder = (figId: string) =>
    Math.min(...getFigure(figId)!.turning_point_ids.map((t) => field.turning_points.findIndex((tp) => tp.id === t)).filter((i) => i >= 0));
  const figures = [...field.figure_ids].sort((a, b) => tpOrder(a) - tpOrder(b)).map((id) => getFigure(id)!);
  const problems = [...field.open_problems].sort(
    (a, b) => Number(a.status === "recently_resolved") - Number(b.status === "recently_resolved"),
  );

  return (
    <main data-domain={field.domain} className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="settle border-b border-rule pb-10 pt-14">
        <p className="stamp text-ink-faint">
          <Link href="/" className="ink-link">
            Atlas
          </Link>{" "}
          /{" "}
          <Link href={`/${domain.id}/`} className="ink-link">
            {domain.name}
          </Link>{" "}
          /{" "}
          <Link href={threadPath(domain.id, field.thread)} className="ink-link">
            {thread?.title}
          </Link>
        </p>
        <p className="stamp mt-8 text-accent">Field · Emerged {field.era_emerged}</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {field.name}
        </h1>
        <p className="mt-5 max-w-2xl text-xl italic leading-snug text-ink-soft sm:text-2xl">{field.core_question}</p>

        <dl className="mt-10 grid gap-x-10 gap-y-4 text-[0.98rem] sm:grid-cols-3">
          <div>
            <dt className="stamp mb-1 text-ink-faint">Branched from</dt>
            <dd>
              {field.parent_ids.length ? (
                <FieldLinks ids={field.parent_ids} fields={allFields} />
              ) : (
                <span className="italic text-ink-faint">
                  {threadRoots > 1 ? "One of the thread's roots" : "Root of the thread"}
                </span>
              )}
            </dd>
          </div>
          <div>
            <dt className="stamp mb-1 text-ink-faint">Branched into</dt>
            <dd>
              {field.successor_ids.length ? (
                <FieldLinks ids={field.successor_ids} fields={allFields} />
              ) : (
                <span className="italic text-fog">Not yet surveyed past here</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="stamp mb-1 text-ink-faint">Figures</dt>
            <dd className="leading-relaxed">
              {figures.map((fig, i) => (
                <span key={fig.id}>
                  {i > 0 && ", "}
                  <a href={figureAnchor(fig.id, field)} className="figure-link">
                    {fig.name}
                  </a>
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <div className="mt-14 lg:grid lg:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] lg:gap-20">
        <div>
          {field.summary && <InBrief summary={field.summary} />}
          {field.key_ideas.length > 0 && <KeyIdeas ideas={field.key_ideas} field={field} />}
          {incoming.length > 0 && <DrawsOn links={incoming} />}
          <article className="prose-atlas">
            {field.chapters.map((c, i) => (
              <section key={c.title} className="mb-14">
                <p className="stamp text-ink-faint">Chapter {ROMAN[i] ?? i + 1}</p>
                <h2 className="mb-5 mt-2 text-3xl font-semibold leading-tight tracking-tight">{c.title}</h2>
                <Markdown>{resolveFigureMentions(c.body, field)}</Markdown>
              </section>
            ))}
          </article>
        </div>

        <aside aria-labelledby="tp-heading" className="mt-6 border-t border-ink pt-4 lg:mt-0 lg:border-t-0 lg:pt-0">
          <h2 id="tp-heading" className="stamp mb-8 text-ink-faint">
            Turning points
          </h2>
          <ol className="ml-1">
            {field.turning_points.map((tp) => (
              <Waypoint key={tp.id} tp={tp} />
            ))}
          </ol>
        </aside>
      </div>

      {field.applications.length > 0 && <Applications applications={field.applications} />}

      <section id="open-problems" aria-labelledby="op-heading" className="mt-20">
        <div className="border border-dashed border-fog/60 px-5 py-8 sm:px-10">
          <p className="stamp text-fog">Open problems</p>
          <h2 id="op-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink-soft">
            Where the map runs out
          </h2>
          {problems.length === 0 ? (
            <p className="mt-5 max-w-prose italic text-ink-faint">
              No open problems are recorded here. This field&apos;s unanswered questions moved into its
              successors
              {field.successor_ids.length > 0 && (
                <>
                  : <FieldLinks ids={field.successor_ids} fields={allFields} />
                </>
              )}
              .
            </p>
          ) : (
            <div className="mt-4">
              {problems.map((p) => (
                <Problem key={p.id} problem={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {field.further_reading.length > 0 && <FurtherReading readings={field.further_reading} />}

      <nav aria-label="Continue the survey" className="mt-16 flex flex-wrap justify-between gap-6 border-t border-rule pt-6">
        <Link href={threadPath(domain.id, field.thread)} className="stamp ink-link text-ink-soft">
          ← Back to the {thread?.title ?? "field tree"}
        </Link>
        {field.successor_ids.length > 0 && (
          <p className="stamp text-ink-soft">
            Continue to{" "}
            {field.successor_ids.map((id, i) => (
              <span key={id}>
                {i > 0 && " · "}
                <Link href={fieldPath(field.domain, id)} className="ink-link text-accent">
                  {allFields.get(id)!.name} →
                </Link>
              </span>
            ))}
          </p>
        )}
      </nav>
    </main>
  );
}
