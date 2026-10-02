import type { Crossing } from "@/lib/content";
import { DOMAINS } from "@/lib/domains";
import { withBase } from "@/lib/paths";
import type { Domain } from "@/lib/types";

const W = 900;
const H = 620;
const R = 46;
/**
 * Four territories at the corners of a quadrilateral. The order round it —
 * mathematics, physics, chemistry, biology — is chosen so that the two pairs
 * left as diagonals are the two that exchange least, and chemistry sits next to
 * both of the domains it crosses with most.
 */
const POS: Record<Domain, [number, number]> = {
  math: [170, 165],
  physics: [730, 165],
  chemistry: [730, 450],
  biology: [170, 450],
};

/**
 * Both directions of a pair bow the same way and are nested, rather than bowing
 * left of travel: with six pairs instead of three, the reverse arcs would
 * otherwise all pass through the middle and their labels would pile up there.
 * `n` is the side they bow towards, `near`/`far` how far the inner and outer of
 * the two arcs are pushed.
 */
const PAIRS: Array<{ a: Domain; b: Domain; n: [number, number]; near: number; far: number }> = [
  { a: "math", b: "physics", n: [0, -1], near: 44, far: 150 },
  { a: "physics", b: "chemistry", n: [1, 0], near: 44, far: 150 },
  { a: "chemistry", b: "biology", n: [0, 1], near: 44, far: 150 },
  { a: "biology", b: "math", n: [-1, 0], near: 44, far: 150 },
  { a: "math", b: "chemistry", n: [0.447, -0.894], near: 70, far: 190 },
  { a: "physics", b: "biology", n: [0.447, 0.894], near: 70, far: 190 },
];
const ARC: Record<string, { n: [number, number]; bow: number }> = Object.fromEntries(
  PAIRS.flatMap(({ a, b, n, near, far }) => [
    [`${a}>${b}`, { n, bow: near }],
    [`${b}>${a}`, { n, bow: far }],
  ]),
);

/** Stroke width grows with the number of crossings, but slowly, so one heavy arc doesn't swamp the rest. */
const arcWidth = (linked: number) => 1.4 + Math.sqrt(linked) * 1.5;

/** Top-row domains carry their labels above the circle, the bottom row below, so arcs never cross them. */
const LABEL_ABOVE: Record<Domain, boolean> = { math: true, physics: true, chemistry: false, biology: false };

interface Arc {
  from: Domain;
  to: Domain;
  linked: number;
  seeds: number;
}

/** Quadratic arc between two domain nodes, bowed to its pair's side by its own amount. */
function arcGeometry(from: Domain, to: Domain) {
  const { n, bow } = ARC[`${from}>${to}`];
  const [nx, ny] = n;
  const [x0, y0] = POS[from];
  const [x1, y1] = POS[to];
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  const [ux, uy] = [dx / len, dy / len];
  const s: [number, number] = [x0 + ux * (R + 8) + nx * 10, y0 + uy * (R + 8) + ny * 10];
  const e: [number, number] = [x1 - ux * (R + 14) + nx * 10, y1 - uy * (R + 14) + ny * 10];
  const c: [number, number] = [(x0 + x1) / 2 + nx * bow, (y0 + y1) / 2 + ny * bow];
  // The label sits just beyond the arc's own apex, so nested arcs never share one.
  const apex: [number, number] = [0.25 * s[0] + 0.5 * c[0] + 0.25 * e[0], 0.25 * s[1] + 0.5 * c[1] + 0.25 * e[1]];
  const mid: [number, number] = [apex[0] + nx * 14, apex[1] + ny * 14];
  return { d: `M${s[0]},${s[1]} Q${c[0]},${c[1]} ${e[0]},${e[1]}`, mid };
}

/**
 * The domains as surveyed territories, with the crossings between them.
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
        const { d, mid } = arcGeometry(a.from, a.to);
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
