import type { Crossing } from "@/lib/content";
import { DOMAINS } from "@/lib/domains";
import { withBase } from "@/lib/paths";
import type { Domain } from "@/lib/types";

const W = 720;
const H = 470;
const R = 46;
const POS: Record<Domain, [number, number]> = {
  math: [150, 150],
  physics: [570, 150],
  biology: [360, 360],
};
/** Extra push off the arc for labels that would otherwise meet in the middle of the triangle. */
const LABEL_NUDGE: Partial<Record<string, number>> = { "physics>math": 24 };

/** Stroke width grows with the number of crossings, but slowly, so one heavy arc doesn't swamp the rest. */
const arcWidth = (linked: number) => 1.4 + Math.sqrt(linked) * 1.5;

/** Top-row domains carry their labels above the circle, the bottom one below, so arcs never cross them. */
const LABEL_ABOVE: Record<Domain, boolean> = { math: true, physics: true, biology: false };

interface Arc {
  from: Domain;
  to: Domain;
  linked: number;
  seeds: number;
}

/** Quadratic arc between two domain nodes, bowed to the left of travel so opposite directions separate. */
function arcGeometry(from: Domain, to: Domain, bow: number) {
  const nudge = LABEL_NUDGE[`${from}>${to}`] ?? 0;
  const [x0, y0] = POS[from];
  const [x1, y1] = POS[to];
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  const [ux, uy] = [dx / len, dy / len];
  const [px, py] = [uy, -ux];
  const s: [number, number] = [x0 + ux * (R + 8) + px * 10, y0 + uy * (R + 8) + py * 10];
  const e: [number, number] = [x1 - ux * (R + 14) + px * 10, y1 - uy * (R + 14) + py * 10];
  const c: [number, number] = [(x0 + x1) / 2 + px * bow, (y0 + y1) / 2 + py * bow];
  // The label sits just off the arc's midpoint, on its outer (bowed) side.
  const mid: [number, number] = [
    0.25 * s[0] + 0.5 * c[0] + 0.25 * e[0] + px * (44 + nudge),
    0.25 * s[1] + 0.5 * c[1] + 0.25 * e[1] + py * (34 + nudge),
  ];
  return { d: `M${s[0]},${s[1]} Q${c[0]},${c[1]} ${e[0]},${e[1]}`, mid };
}

/**
 * The three domains as surveyed territories, with the crossings between them.
 * Solid arcs land in a surveyed field; dashed, fading arcs reach a domain the
 * survey hasn't mapped at that point yet.
 */
export function CrossingsDiagram({
  links,
  seeds,
  fieldCounts,
}: {
  links: Crossing[];
  seeds: Crossing[];
  fieldCounts: Record<Domain, number>;
}) {
  const arcs = new Map<string, Arc>();
  const bump = (c: Crossing, kind: "linked" | "seeds") => {
    const from = c.from.domain;
    const to = c.application.domain!;
    const key = `${from}>${to}`;
    const arc = arcs.get(key) ?? { from, to, linked: 0, seeds: 0 };
    arc[kind] += 1;
    arcs.set(key, arc);
  };
  links.forEach((c) => bump(c, "linked"));
  seeds.forEach((c) => bump(c, "seeds"));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-2xl" role="img" aria-labelledby="crossings-diagram-title">
      <title id="crossings-diagram-title">
        {`Crossings between domains: ${[...arcs.values()]
          .map((a) => `${a.from} to ${a.to}, ${a.linked} linked and ${a.seeds} unmapped`)
          .join("; ")}.`}
      </title>
      <defs>
        {DOMAINS.map((d) => (
          <marker
            key={d.id}
            id={`arrow-${d.id}`}
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerUnits="userSpaceOnUse"
            markerWidth="15"
            markerHeight="15"
            orient="auto-start-reverse"
          >
            <path d="M0,1 L9,5 L0,9 z" fill={`var(--${d.id})`} />
          </marker>
        ))}
      </defs>

      {[...arcs.values()].map((a) => {
        const { d, mid } = arcGeometry(a.from, a.to, 46);
        const colour = `var(--${a.from})`;
        return (
          <g key={`${a.from}-${a.to}`}>
            {a.linked > 0 ? (
              <path
                d={d}
                fill="none"
                stroke={colour}
                strokeWidth={arcWidth(a.linked)}
                strokeLinecap="round"
                markerEnd={`url(#arrow-${a.from})`}
                pathLength={1}
                className="tree-draw"
                style={{ animationDelay: "300ms" }}
              />
            ) : (
              <path
                d={d}
                fill="none"
                stroke="var(--fog)"
                strokeWidth={1.6}
                strokeDasharray="2 6"
                strokeLinecap="round"
                className="tree-fade"
                style={{ animationDelay: "700ms" }}
              />
            )}
            <text
              x={mid[0]}
              y={mid[1] - (a.linked && a.seeds ? 7 : 0)}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-mono text-[11px] tracking-[0.1em]"
              paintOrder="stroke"
              stroke="var(--paper)"
              strokeWidth={5}
            >
              {a.linked > 0 && <tspan className="fill-ink-soft">{`${a.linked} LINKED`}</tspan>}
              {a.seeds > 0 && (
                <tspan x={mid[0]} dy={a.linked ? 15 : 0} className="fill-fog">
                  {`${a.seeds} UNMAPPED`}
                </tspan>
              )}
            </text>
          </g>
        );
      })}

      {DOMAINS.map((d) => {
        const [x, y] = POS[d.id];
        return (
          <a key={d.id} href={withBase(`/${d.id}/`)} className="group">
            <g className="tree-fade">
              <circle cx={x} cy={y} r={R} fill="var(--paper)" stroke={`var(--${d.id})`} strokeWidth={2} />
              <circle
                cx={x}
                cy={y}
                r={R - 6}
                fill="none"
                stroke={`var(--${d.id})`}
                strokeWidth={0.8}
                strokeDasharray="1 4"
              />
              <text x={x} y={y + 2} textAnchor="middle" dominantBaseline="middle" className="fill-ink font-serif text-[26px] font-semibold">
                {fieldCounts[d.id]}
              </text>
              <text
                x={x}
                y={LABEL_ABOVE[d.id] ? y - R - 30 : y + R + 26}
                textAnchor="middle"
                className="font-serif text-[19px] font-semibold transition-colors group-hover:underline"
                fill={`var(--${d.id})`}
              >
                {d.name}
              </text>
              <text
                x={x}
                y={LABEL_ABOVE[d.id] ? y - R - 13 : y + R + 43}
                textAnchor="middle"
                className="fill-ink-faint font-mono text-[10px] tracking-[0.12em]"
              >
                FIELDS SURVEYED
              </text>
            </g>
          </a>
        );
      })}
    </svg>
  );
}
