import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FieldTree } from "@/components/FieldTree";
import { Legend } from "@/components/Legend";
import { getFields } from "@/lib/content";
import { DOMAINS, getDomain } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import { layoutTree, readingOrder } from "@/lib/treeLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return DOMAINS.map((d) => ({ domain: d.id }));
}

export function generateMetadata({ params }: { params: { domain: string } }): Metadata {
  const domain = getDomain(params.domain);
  return { title: domain?.name };
}

export default function DomainPage({ params }: { params: { domain: string } }) {
  const domain = getDomain(params.domain);
  if (!domain) notFound();
  const fields = getFields(domain.id);
  const byId = new Map(fields.map((f) => [f.id, f]));

  if (fields.length === 0) {
    return (
      <main data-domain={domain.id} className="mx-auto max-w-6xl px-4 sm:px-8">
        <header className="settle pb-10 pt-16">
          <p className="stamp text-ink-faint">Domain · Unsurveyed</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-fog">{domain.name}</h1>
        </header>
        <section className="fog-field settle flex min-h-[22rem] items-center justify-center border border-dashed border-rule px-6 py-16 text-center">
          <div className="max-w-md">
            <p className="text-xl italic text-ink-faint">No survey has been made here yet.</p>
            <p className="mt-4 text-ink-faint">
              {domain.name} joins the atlas in the width phase, once the format has proven itself on
              mathematics. The data model is already shared, so when this survey happens its turning
              points can connect directly to the ones already charted.
            </p>
            <Link href="/math/" className="stamp ink-link mt-8 inline-block text-ink-soft">
              See the charted domain →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const layout = layoutTree(fields);
  const ordered = readingOrder(layout);

  return (
    <main data-domain={domain.id} className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="settle pb-10 pt-16">
        <p className="stamp text-ink-faint">
          <Link href="/" className="ink-link">
            Atlas
          </Link>{" "}
          / {domain.name}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">{domain.thread?.title ?? domain.name}</h1>
        {domain.thread && <p className="mt-5 max-w-prose text-lg text-ink-soft">{domain.thread.intro}</p>}
      </header>

      <section aria-label="Field tree">
        <p className="stamp mb-2 text-ink-faint sm:hidden">Scroll the map sideways →</p>
        <div className="survey-grid overflow-x-auto border border-rule">
          <div className="mx-auto max-w-[56rem] px-2 py-6 sm:px-6">
            <FieldTree layout={layout} domain={domain.id} />
          </div>
        </div>
        <Legend className="mt-5" />
      </section>

      <section aria-labelledby="index-heading" className="mt-20">
        <h2 id="index-heading" className="stamp border-b border-ink pb-3 text-ink-faint">
          Fields in this survey
        </h2>
        <ol>
          {ordered.map((f) => (
            <li key={f.id} className="border-b border-rule">
              <Link
                href={fieldPath(domain.id, f.id)}
                className="group grid gap-x-8 gap-y-1 py-6 sm:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <span className="stamp pt-2 text-ink-faint">{f.era_emerged}</span>
                <span>
                  <span className="block text-2xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent">
                    {f.name}
                  </span>
                  <span className="mt-1 block max-w-prose italic text-ink-soft">{f.core_question}</span>
                  <span className="stamp mt-3 block text-ink-faint">
                    {f.parent_ids.length === 0
                      ? "Root of the thread"
                      : `Branched from ${f.parent_ids.map((p) => byId.get(p)?.name ?? p).join(" + ")}`}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
