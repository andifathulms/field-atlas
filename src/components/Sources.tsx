import type { Source } from "@/lib/types";

/** Collapsible citation list, shared by turning points, open problems and applications. */
export function Sources({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <details className="group mt-3">
      <summary className="stamp cursor-pointer list-none text-ink-faint transition-colors hover:text-ink">
        <span className="inline-block transition-transform duration-200 group-open:rotate-90">›</span> Sources (
        {sources.length})
      </summary>
      <ul className="mt-2 space-y-1.5 border-l border-rule pl-3 text-sm leading-snug text-ink-soft">
        {sources.map((s) => (
          <li key={s.citation}>
            {s.url ? (
              <a href={s.url} className="ink-link" target="_blank" rel="noreferrer">
                {s.citation}
              </a>
            ) : (
              s.citation
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
