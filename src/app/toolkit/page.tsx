import type { Metadata } from "next";
import Link from "next/link";
import { getDomain, getThread, shortThreadTitle } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import { rankedReach } from "@/lib/reach";
import type { Domain } from "@/lib/types";

export const metadata: Metadata = {
  title: "Toolkit",
  description: "Which fields' ideas travelled furthest: across threads by lineage, and across domains by use.",
};

/** Literal class names so Tailwind keeps them; one per domain accent. */
const DOMAIN_TEXT: Record<Domain, string> = {
  math: "text-math",
  physics: "text-physics",
  biology: "text-biology",
};
const DOMAIN_BG: Record<Domain, string> = {
  math: "bg-math",
  physics: "bg-physics",
  biology: "bg-biology",
};

export default function ToolkitPage() {
  const ranked = rankedReach().filter((r) => r.threads.size > 0);
  const maxThreads = Math.max(...ranked.map((r) => r.threads.size));

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="settle pb-12 pt-12">
        <p className="stamp text-ink-faint">
          <Link href="/" className="ink-link">
            Atlas
          </Link>{" "}
          / Toolkit
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.02em] sm:text-7xl">Toolkit</h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl">
          Some fields become tools for everyone else. This page ranks fields by how far their ideas
          travelled in the atlas: directly into other threads, where a new field grew from them, and into
          other domains, where their results were put to use. The count of fields downstream includes
          indirect descendants too. It is a rough proxy for influence, built only from the lineage and
          crossings recorded on each field&apos;s page, and it undercounts anything the atlas has not yet
          surveyed.
        </p>
      </header>

      <ol>
        {ranked.map(({ field, offshoots, downstream, crossings, threads, domains }, i) => (
          <li
            key={field.id}
            className="grid gap-x-8 gap-y-3 border-t border-rule py-6 sm:grid-cols-[2.5rem_minmax(0,17rem)_minmax(0,1fr)]"
          >
            <span className="stamp pt-1 text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <Link href={fieldPath(field.domain, field.id)} className="ink-link text-xl font-semibold">
                {field.name}
              </Link>
              <p className="stamp mt-1">
                <span className={DOMAIN_TEXT[field.domain]}>{getDomain(field.domain)?.name}</span>
                <span className="text-ink-faint">
                  {" · "}
                  {shortThreadTitle(getThread(field.domain, field.thread)?.title ?? "")}
                </span>
              </p>
              <div className="mt-3 flex items-center gap-3" aria-hidden>
                <span className="h-1.5 flex-1 bg-rule">
                  <span
                    className={`block h-full ${DOMAIN_BG[field.domain]}`}
                    style={{ width: `${(threads.size / maxThreads) * 100}%` }}
                  />
                </span>
              </div>
              <p className="stamp mt-2 text-ink-soft">
                {threads.size} other thread{threads.size === 1 ? "" : "s"} reached directly
                {domains.size > 0 && ` · ${domains.size} other domain${domains.size === 1 ? "" : "s"}`} · {downstream} field
                {downstream === 1 ? "" : "s"} downstream
              </p>
            </div>
            <div className="text-[0.95rem] leading-relaxed text-ink-soft">
              {offshoots.length > 0 && (
                <p>
                  <span className="stamp mr-2 text-ink-faint">Grew into</span>
                  {offshoots.map((d, j, all) => (
                      <span key={d.id}>
                        <Link href={fieldPath(d.domain, d.id)} className={`ink-link ${DOMAIN_TEXT[d.domain]}`}>
                          {d.name}
                        </Link>
                        {j < all.length - 1 ? ", " : ""}
                      </span>
                    ))}
                </p>
              )}
              {crossings.length > 0 && (
                <p className="mt-2">
                  <span className="stamp mr-2 text-ink-faint">Used in</span>
                  {crossings.map((d, j) => (
                    <span key={d.id}>
                      <Link href={fieldPath(d.domain, d.id)} className={`ink-link ${DOMAIN_TEXT[d.domain]}`}>
                        {d.name}
                      </Link>
                      {j < crossings.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
