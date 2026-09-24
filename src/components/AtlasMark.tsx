/**
 * The atlas mark: a trunk that forks twice. Two branches are charted in ink;
 * the third runs out into dashes, the map's edge in miniature.
 */
export function AtlasMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden fill="none" strokeLinecap="round">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" />
      <path d="M14 5v8M14 13c0 3-5.5 3.5-5.5 8M14 13c0 2 0 4 0 8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 13c0 3 5.5 3.5 5.5 8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.2 2.6" strokeOpacity="0.55" />
      <circle cx="14" cy="5" r="2.1" fill="currentColor" />
      <circle cx="8.5" cy="21.5" r="1.6" fill="currentColor" />
      <circle cx="14" cy="21.5" r="1.6" fill="currentColor" />
    </svg>
  );
}
