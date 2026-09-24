import type { Metadata } from "next";
import Link from "next/link";
import { Markdown } from "@/components/Markdown";
import { getFields } from "@/lib/content";
import { DOMAINS, shortThreadTitle } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import { OPEN_PROBLEM_STATUS_LABEL, type OpenProblemStatus } from "@/lib/types";

export const metadata: Metadata = {
  title: "Open problems",
  description: "Every unresolved or recently resolved problem at the edge of the atlas, in one place.",
};

const STATUS_ORDER: OpenProblemStatus[] = ["open", "conjectured", "recently_resolved"];

export default function OpenProblemsPage() {
  const all = getFields().flatMap((f) => f.open_problems.map((p) => ({ problem: p, field: f })));
  const counts = STATUS_ORDER.map((s) => [s, all.filter((x) => x.problem.status === s).length] as const);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="settle pb-12 pt-12">
        <p className="stamp text-ink-faint">
          <Link href="/" className="ink-link">
            Atlas
          </Link>{" "}
          / Open problems
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.02em] sm:text-7xl">
          Where the map <span className="italic text-ink-soft">runs out</span>
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl">
          Every field page ends in fog: the problems nobody has solved. Here they are together, by domain
          and thread. Statuses are recorded as of 2026 and say so, because the edge of the map moves.
        </p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-rule pt-6">
          {counts.map(([s, n]) => (
            <div key={s} className="flex flex-col-reverse">
              <dt className="stamp mt-1 text-ink-faint">{OPEN_PROBLEM_STATUS_LABEL[s]}</dt>
              <dd className="text-3xl font-semibold tracking-tight">{n}</dd>
            </div>
          ))}
        </dl>
      </header>

      {DOMAINS.map((d) => (
        <section key={d.id} data-domain={d.id} aria-labelledby={`op-${d.id}`} className="mt-12">
          <h2 id={`op-${d.id}`} className="border-b border-ink pb-3 text-3xl font-semibold tracking-tight text-accent">
            {d.name}
          </h2>
          {d.threads.map((t) => {
            const items = all.filter((x) => x.field.domain === d.id && x.field.thread === t.id);
            if (!items.length) return null;
            return (
              <div key={t.id} className="mt-8">
                <h3 className="stamp text-ink-faint">{shortThreadTitle(t.title)}</h3>
                <ul>
                  {items.map(({ problem, field }) => (
                    <li
                      key={problem.id}
                      className="grid gap-x-8 gap-y-1 border-b border-dashed border-rule py-5 sm:grid-cols-[minmax(0,1fr)_14rem]"
                    >
                      <div>
                        <Link
                          href={`${fieldPath(field.domain, field.id)}#op-${problem.id}`}
                          className={`ink-link text-lg font-semibold ${problem.status === "recently_resolved" ? "" : "text-ink-soft"}`}
                        >
                          <Markdown inline>{problem.name}</Markdown>
                        </Link>
                        {problem.status_note && <p className="mt-1 text-sm italic text-ink-faint">{problem.status_note}</p>}
                      </div>
                      <p className="stamp sm:text-right">
                        <span className={problem.status === "recently_resolved" ? "text-accent" : "text-fog"}>
                          {OPEN_PROBLEM_STATUS_LABEL[problem.status]}
                        </span>
                        <span className="block text-ink-faint">{field.name}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>
      ))}
    </main>
  );
}
