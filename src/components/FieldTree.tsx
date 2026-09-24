import { linkVertical } from "d3-shape";
import { fieldPath, withBase } from "@/lib/paths";
import { eraLabel, tickLabel, TREE, type TreeLayout } from "@/lib/treeLayout";

const link = linkVertical<{ source: [number, number]; target: [number, number] }, [number, number]>()
  .x((d) => d[0])
  .y((d) => d[1]);

/** Stagger between layers, so the survey draws itself top to bottom. */
const LAYER_DELAY = 420;

/**
 * A dashed line whose ink runs out: each dash is fainter than the last.
 * (A gradient stroke can't be used here, since a perfectly straight line has a
 * zero-size bounding box and objectBoundingBox gradients don't render on it.)
 */
function FadingDashes({ x, y, dx, dy }: { x: number; y: number; dx: number; dy: number }) {
  const count = Math.max(3, Math.round(Math.hypot(dx, dy) / 7));
  return (
    <g stroke="var(--fog)" strokeWidth={1.6} strokeLinecap="round">
      {Array.from({ length: count }, (_, i) => {
        const t = i / count;
        const t2 = (i + 0.35) / count;
        return (
          <line
            key={i}
            x1={x + dx * t}
            y1={y + dy * t}
            x2={x + dx * t2}
            y2={y + dy * t2}
            strokeOpacity={0.95 * (1 - t) ** 1.4}
          />
        );
      })}
    </g>
  );
}

/**
 * The field tree drawn as a hand-surveyed branching map. Each field is a node
 * with its own trail of turning-point waypoints. Branches leave from the end of
 * that trail, and fields with unresolved problems fade into fog.
 */
export function FieldTree({ layout, domain }: { layout: TreeLayout; domain: string }) {
  const { width, height, nodes, edges } = layout;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="block h-auto w-full min-w-[40rem]"
      role="img"
      aria-labelledby="field-tree-title"
    >
      <title id="field-tree-title">
        {`Field tree: ${nodes.map((n) => n.field.name).join(", ")}. Each field links to its page.`}
      </title>
      <defs>
        <radialGradient id="fog-cloud">
          <stop offset="0" stopColor="var(--fog)" stopOpacity="0.22" />
          <stop offset="1" stopColor="var(--fog)" stopOpacity="0" />
        </radialGradient>
        <pattern id="contested-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <rect width="1.5" height="4" fill="var(--contested)" />
        </pattern>
      </defs>

      {/* Branches between fields: drawn first so nodes sit on top. */}
      <g fill="none" stroke="var(--accent)" strokeWidth={1.6} strokeLinecap="round">
        {edges.map((e) => (
          <path
            key={`${e.from}->${e.to}`}
            d={link(e) ?? undefined}
            pathLength={1}
            className="tree-draw"
            style={{ animationDelay: `${e.layer * LAYER_DELAY + 380}ms` }}
          />
        ))}
      </g>

      {nodes.map((n) => {
        const delay = n.layer * LAYER_DELAY;
        const href = withBase(fieldPath(domain, n.field.id));
        return (
          <g key={n.field.id}>
            {/* The field's own trail, from its emergence to where it branches. */}
            <line
              x1={n.x}
              y1={n.y}
              x2={n.x}
              y2={n.trailEnd}
              stroke="var(--accent)"
              strokeWidth={1.6}
              strokeLinecap="round"
              pathLength={1}
              className="tree-draw"
              style={{ animationDelay: `${delay + 80}ms` }}
            />
            {n.fadesOut && (
              <g className="tree-fade" style={{ animationDelay: `${delay + 500}ms` }}>
                <FadingDashes x={n.x} y={n.trailEnd + 8} dx={0} dy={TREE.fogLength - 8} />
                <ellipse cx={n.x} cy={n.trailEnd + TREE.fogLength * 0.6} rx={46} ry={34} fill="url(#fog-cloud)" />
              </g>
            )}

            <a href={href} className="tree-node group">
              <g className="tree-fade" style={{ animationDelay: `${delay}ms` }}>
                <circle cx={n.x} cy={n.y} r={11} fill="var(--paper)" />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={6.5}
                  fill="var(--accent)"
                  className="origin-center transition-transform duration-300 ease-house [transform-box:fill-box] group-hover:scale-125"
                />
                <text
                  x={n.x + 18}
                  y={n.y + 6}
                  className="fill-ink font-serif text-[19px] font-semibold transition-colors duration-200 group-hover:fill-accent"
                >
                  {n.field.name}
                </text>
                <text x={n.x + 18} y={n.y + 26} className="fill-ink-faint font-mono text-[10.5px] tracking-[0.12em]">
                  {eraLabel(n.field)}
                </text>
              </g>
            </a>

            {n.ticks.map(({ tp, y }, j) => (
              <a key={tp.id} href={`${href}#tp-${tp.id}`} className="group">
                <g className="tree-fade" style={{ animationDelay: `${delay + 160 + j * 70}ms` }}>
                  <title>{`${tp.date} · ${tp.type}${tp.contested ? " · contested" : ""}: ${tp.title}`}</title>
                  <line
                    x1={n.x}
                    y1={y}
                    x2={n.x + 9}
                    y2={y}
                    stroke={tp.contested ? "var(--contested)" : "var(--accent)"}
                    strokeWidth={1.6}
                  />
                  {tp.contested && <rect x={n.x - 5} y={y - 3} width={4} height={6} fill="url(#contested-hatch)" />}
                  <text
                    x={n.x + 18}
                    y={y + 3.5}
                    className={`font-mono text-[10.5px] tracking-[0.1em] ${
                      tp.contested ? "fill-contested" : "fill-ink-soft"
                    } group-hover:underline`}
                  >
                    {tickLabel(tp)}
                  </text>
                </g>
              </a>
            ))}

            {n.threadRows.map((link, j) => (
              <a key={`${link.direction}-${link.fieldId}`} href={withBase(fieldPath(domain, link.fieldId))} className="group">
                <g className="tree-fade" style={{ animationDelay: `${delay + 200 + j * 70}ms` }}>
                  <title>{`${link.direction === "from" ? "Branches from" : "Continues into"} ${link.name}, drawn on ${link.threadTitle}`}</title>
                  {/* A hollow ring on the trail: this lineage continues on another map. */}
                  <circle cx={n.x} cy={link.y} r={3.5} fill="var(--paper)" stroke="var(--accent)" strokeWidth={1.4} />
                  <text x={n.x + 18} y={link.y + 3.5} className="font-mono text-[10px] tracking-[0.08em] group-hover:underline">
                    <tspan className="fill-accent">{link.label.split(" · ")[0]}</tspan>
                    <tspan className="fill-ink-faint">{` · ${link.label.split(" · ")[1]}`}</tspan>
                  </text>
                </g>
              </a>
            ))}

            {n.fogRowY !== null && (
              <a href={`${href}#open-problems`} className="group">
                <g className="tree-fade" style={{ animationDelay: `${delay + 200 + n.ticks.length * 70}ms` }}>
                  <ellipse cx={n.x + 90} cy={n.fogRowY} rx={96} ry={16} fill="url(#fog-cloud)" />
                  <FadingDashes x={n.x + 4} y={n.fogRowY} dx={150} dy={0} />
                  <text
                    x={n.x + 18}
                    y={n.fogRowY - 6}
                    className="fill-fog font-serif text-[13px] italic group-hover:underline"
                  >
                    {n.unresolved === 1 ? "1 unresolved problem" : `${n.unresolved} unresolved problems`}
                  </text>
                </g>
              </a>
            )}
          </g>
        );
      })}
    </svg>
  );
}
