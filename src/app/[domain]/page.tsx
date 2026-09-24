import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FieldTree } from "@/components/FieldTree";
import { Legend } from "@/components/Legend";
import { getFields } from "@/lib/content";
import { DOMAINS, getDomain, getThread, type ThreadInfo } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import { layoutTree, readingOrder } from "@/lib/treeLayout";
import type { Field } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return DOMAINS.map((d) => ({ domain: d.id }));
}

export function generateMetadata({ params }: { params: { domain: string } }): Metadata {
  const domain = getDomain(params.domain);
  return { title: domain?.name };
}

/** One thread: its map and the index of its fields. */
function ThreadSection({
  thread,
  fields,
  domainFields,
  headingLevel,
}: {
  thread: ThreadInfo;
  fields: Field[];
  domainFields: Map<string, Field>;
  headingLevel: "h1" | "h2";
}) {
  const inThread = new Set(fields.map((f) => f.id));
  const roots = fields.filter((f) => !f.parent_ids.some((p) => inThread.has(p)));
  const rootLabel = roots.length > 1 ? "One of the thread's roots" : "Root of the thread";
  const layout = layoutTree(fields);
  const ordered = readingOrder(layout);
  const Heading = headingLevel;

  const lineage = (f: Field) => {
    if (f.parent_ids.length === 0) return rootLabel;
    const names = f.parent_ids.map((p) => {
      const parent = domainFields.get(p);
      if (!parent) return p;
      return parent.thread === f.thread ? parent.name : `${parent.name} (${getThread(parent.domain, parent.thread)?.title})`;
    });
    return `Branched from ${names.join(" + ")}`;
  };

  return (
    <section id={`thread-${thread.id}`} aria-labelledby={`thread-${thread.id}-heading`} className="scroll-mt-6">
      <header className="settle pb-10">
        <Heading id={`thread-${thread.id}-heading`} className="text-5xl font-semibold tracking-tight">
          {thread.title}
        </Heading>
        <p className="mt-5 max-w-prose text-lg text-ink-soft">{thread.intro}</p>
      </header>

      <div aria-label={`${thread.title} field tree`}>
        <p className="stamp mb-2 text-ink-faint sm:hidden">Scroll the map sideways →</p>
        <div className="survey-grid overflow-x-auto border border-rule">
          <div className="mx-auto px-2 py-6 sm:px-6" style={{ maxWidth: layout.width + 48 }}>
            <FieldTree layout={layout} domain={fields[0].domain} />
          </div>
        </div>
        <Legend className="mt-5" />
      </div>

      <div className="mt-16">
        <h3 className="stamp border-b border-ink pb-3 text-ink-faint">Fields in this thread</h3>
        <ol>
          {ordered.map((f) => (
            <li key={f.id} className="border-b border-rule">
              <Link
                href={fieldPath(f.domain, f.id)}
                className="group grid gap-x-8 gap-y-1 py-6 sm:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <span className="stamp pt-2 text-ink-faint">{f.era_emerged}</span>
                <span>
                  <span className="block text-2xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent">
                    {f.name}
                  </span>
                  <span className="mt-1 block max-w-prose italic text-ink-soft">{f.core_question}</span>
                  <span className="stamp mt-3 block text-ink-faint">{lineage(f)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function DomainPage({ params }: { params: { domain: string } }) {
  const domain = getDomain(params.domain);
  if (!domain) notFound();
  const fields = getFields(domain.id);
  const domainFields = new Map(fields.map((f) => [f.id, f]));
  const threads = domain.threads
    .map((thread) => ({ thread, fields: fields.filter((f) => f.thread === thread.id) }))
    .filter((t) => t.fields.length > 0);

  if (threads.length === 0) {
    return (
      <main data-domain={domain.id} className="mx-auto max-w-6xl px-4 sm:px-8">
        <header className="settle pb-10 pt-16">
          <p className="stamp text-ink-faint">Domain · Unsurveyed</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-fog">{domain.name}</h1>
        </header>
        <section className="fog-field settle flex min-h-[22rem] items-center justify-center border border-dashed border-rule px-6 py-16 text-center">
          <p className="max-w-md text-xl italic text-ink-faint">No survey has been made here yet.</p>
        </section>
      </main>
    );
  }

  const single = threads.length === 1;

  return (
    <main data-domain={domain.id} className="mx-auto max-w-6xl px-4 sm:px-8">
      <p className="stamp pt-16 text-ink-faint">
        <Link href="/" className="ink-link">
          Atlas
        </Link>{" "}
        / {domain.name}
      </p>

      {!single && (
        <header className="settle pb-6 pt-4">
          <h1 className="text-6xl font-semibold tracking-tight">{domain.name}</h1>
          <nav aria-label="Threads" className="mt-8">
            <p className="stamp mb-3 text-ink-faint">{threads.length} threads surveyed</p>
            <ol className="border-t border-ink">
              {threads.map(({ thread, fields: tf }, i) => (
                <li key={thread.id} className="border-b border-rule">
                  <a
                    href={`#thread-${thread.id}`}
                    className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-4"
                  >
                    <span className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      <span className="stamp mr-4 align-middle text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                      {thread.title}
                    </span>
                    <span className="stamp text-ink-faint">{tf.length} fields ↓</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </header>
      )}

      <div className={single ? "mt-4" : "mt-16"}>
        {threads.map(({ thread, fields: tf }, i) => (
          <div key={thread.id} className={i > 0 ? "mt-28 border-t border-rule pt-16" : ""}>
            <ThreadSection
              thread={thread}
              fields={tf}
              domainFields={domainFields}
              headingLevel={single ? "h1" : "h2"}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
