/** Key to the map conventions: settled ink, contested hatch, unmapped fog. */
export function Legend({ className = "" }: { className?: string }) {
  return (
    <dl className={`flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft ${className}`}>
      <div className="flex items-center gap-3">
        <dt aria-hidden>
          <svg width="36" height="10" viewBox="0 0 36 10">
            <line x1="2" y1="5" x2="34" y2="5" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </dt>
        <dd>Charted: settled results</dd>
      </div>
      <div className="flex items-center gap-3">
        <dt aria-hidden>
          <svg width="36" height="10" viewBox="0 0 36 10">
            <defs>
              <pattern id="legend-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                <rect width="1.5" height="4" fill="var(--contested)" />
              </pattern>
            </defs>
            <rect x="2" y="2" width="32" height="6" fill="url(#legend-hatch)" />
          </svg>
        </dt>
        <dd>Contested: sources disagree on priority or causation</dd>
      </div>
      <div className="flex items-center gap-3">
        <dt aria-hidden>
          <svg width="36" height="10" viewBox="0 0 36 10">
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1={2 + i * 7}
                y1="5"
                x2={4 + i * 7}
                y2="5"
                stroke="var(--fog)"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeOpacity={1 - i * 0.2}
              />
            ))}
          </svg>
        </dt>
        <dd>Unmapped: open problems</dd>
      </div>
    </dl>
  );
}
