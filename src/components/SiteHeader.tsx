import Link from "next/link";
import { DOMAINS } from "@/lib/domains";

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-4 py-5 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="text-xl font-semibold tracking-tight">Field Atlas</span>
          <span className="stamp hidden text-ink-faint sm:inline">Survey of how knowledge branched</span>
        </Link>
        <nav aria-label="Domains" className="flex gap-5">
          {DOMAINS.map((d) => (
            <Link
              key={d.id}
              href={`/${d.id}/`}
              className="stamp text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {d.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
