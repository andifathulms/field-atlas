import { Markdown } from "@/components/Markdown";

export interface ContentsEntry {
  href: string;
  label: string;
  /** Chapter numeral, or null for the page's other sections. */
  numeral: string | null;
}

/** The page's own table of contents: chapters first, then the ledger sections. */
export function FieldContents({ entries }: { entries: ContentsEntry[] }) {
  const chapters = entries.filter((e) => e.numeral);
  const sections = entries.filter((e) => !e.numeral);
  return (
    <nav aria-labelledby="contents-heading" className="mb-14">
      <h2 id="contents-heading" className="stamp border-b border-rule pb-3 text-ink-faint">
        Contents
      </h2>
      <ol>
        {chapters.map((e) => (
          <li key={e.href}>
            <a
              href={e.href}
              className="group grid grid-cols-[2.75rem_minmax(0,1fr)] items-baseline border-b border-rule/70 py-2.5 transition-colors duration-200 hover:text-accent"
            >
              <span className="stamp text-accent">{e.numeral}</span>
              <span className="leading-snug">
                <Markdown inline>{e.label}</Markdown>
              </span>
            </a>
          </li>
        ))}
      </ol>
      <p className="stamp mt-3 flex flex-wrap gap-x-5 gap-y-2 text-ink-faint">
        {sections.map((e) => (
          <a key={e.href} href={e.href} className="ink-link">
            {e.label}
          </a>
        ))}
      </p>
    </nav>
  );
}
