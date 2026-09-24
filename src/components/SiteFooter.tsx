import Link from "next/link";
import { AtlasMark } from "@/components/AtlasMark";
import { getFields } from "@/lib/content";
import { DOMAINS, shortThreadTitle, threadPath } from "@/lib/domains";

const REPOSITORY = "https://github.com/andifathulms/field-atlas";

/** The atlas's index of plates, and its editorial note. */
export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-ink/80 bg-paper-deep/50">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-12 px-4 pb-10 pt-14 sm:px-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <AtlasMark className="h-7 w-7 text-ink" />
            <span className="text-xl font-semibold tracking-tight">Field Atlas</span>
          </Link>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
            A narrative atlas of how fields of knowledge branched, the turning points that forced each
            branch, and the problems still unmapped.
          </p>
          <Link href="/crossings/" className="stamp ink-link mt-5 inline-block text-ink-soft">
            Crossings between domains →
          </Link>
        </div>

        <nav aria-label="Atlas index" className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {DOMAINS.map((d) => {
            const fields = getFields(d.id);
            const threads = d.threads.filter((t) => fields.some((f) => f.thread === t.id));
            return (
              <div key={d.id} data-domain={d.id}>
                <Link href={`/${d.id}/`} className="stamp text-accent hover:underline">
                  {d.name}
                </Link>
                <ul className="mt-3 space-y-1.5">
                  {threads.map((t) => (
                    <li key={t.id}>
                      <Link
                        href={threadPath(d.id, t.id)}
                        className="text-[0.95rem] text-ink-soft transition-colors duration-200 hover:text-accent"
                      >
                        {shortThreadTitle(t.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid gap-6 border-t border-rule py-8 text-sm leading-relaxed text-ink-faint md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-prose">
            Page prose is AI-drafted with citations attached, then reviewed. Where sources disagree, the
            disagreement is stated rather than settled. Open-problem status is recorded as of writing, not
            tracked live. Corrections are made by editing the content files in the{" "}
            <a href={REPOSITORY} className="ink-link" target="_blank" rel="noreferrer">
              repository
            </a>
            .
          </p>
          <p className="stamp md:text-right">Set in Source Serif 4 &amp; IBM Plex Mono</p>
        </div>
      </div>
    </footer>
  );
}
