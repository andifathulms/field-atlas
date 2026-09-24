import { getField, getFields } from "@/lib/content";
import { DOMAINS, shortThreadTitle, threadPath } from "@/lib/domains";
import { withBase } from "@/lib/paths";
import type { Domain } from "@/lib/types";

const W = 1060;
const H = 820;
const CX = W / 2;
const CY = H / 2;
const R = 250;
/** Angular gap left between domains, in thread-slots. */
const GAP = 1.2;

interface Node {
  key: string;
  domain: Domain;
  label: string;
  href: string;
  angle: number;
  fields: number;
}

interface Link {
  from: string;
  to: string;
  kind: "lineage" | "crossing";
  count: number;
}

const threadKey = (domain: string, thread: string) => `${domain}/${thread}`;

/** Every thread on one circle, grouped by domain, with the lineage and crossings between threads. */
function buildAtlas() {
  const slots = DOMAINS.reduce((n, d) => n + d.threads.length, 0) + GAP * DOMAINS.length;
  const step = (2 * Math.PI) / slots;
  const nodes: Node[] = [];
  let pos = GAP / 2;
  for (const d of DOMAINS) {
    for (const t of d.threads) {
      nodes.push({
        key: threadKey(d.id, t.id),
        domain: d.id,
        label: shortThreadTitle(t.title),
        href: threadPath(d.id, t.id),
        // Start at the top and go clockwise.
        angle: -Math.PI / 2 + (pos + 0.5) * step,
        fields: getFields(d.id).filter((f) => f.thread === t.id).length,
      });
      pos += 1;
    }
    pos += GAP;
  }

  const counts = new Map<string, Link>();
  const bump = (from: string, to: string, kind: Link["kind"]) => {
    if (from === to) return;
    const k = `${kind}:${from}>${to}`;
    const link = counts.get(k) ?? { from, to, kind, count: 0 };
    link.count += 1;
    counts.set(k, link);
  };
  for (const f of getFields()) {
    for (const p of f.parent_ids) {
      const parent = getField(p)!;
      bump(threadKey(parent.domain, parent.thread), threadKey(f.domain, f.thread), "lineage");
    }
    for (const a of f.applications ?? []) {
      if (!a.field_id || !a.domain || a.domain === f.domain) continue;
      const target = getField(a.field_id)!;
      bump(threadKey(f.domain, f.thread), threadKey(target.domain, target.thread), "crossing");
    }
  }
  return { nodes, links: [...counts.values()] };
}

const point = (angle: number, r: number) => [CX + r * Math.cos(angle), CY + r * Math.sin(angle)] as const;

/** A curve between two points on the circle, pulled towards the centre so chords don't pass through labels. */
function chord(a: number, b: number) {
  const [x0, y0] = point(a, R - 8);
  const [x1, y1] = point(b, R - 8);
  // Neighbours bend gently; opposite threads pass close to the centre.
  const pull = 0.15 + 0.55 * Math.abs(Math.sin((b - a) / 2));
  const mx = (x0 + x1) / 2;
  const my = (y0 + y1) / 2;
  const cx = mx + (CX - mx) * pull * 1.6;
  const cy = my + (CY - my) * pull * 1.6;
  return `M${x0.toFixed(1)},${y0.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
}

const DOMAIN_VAR: Record<Domain, string> = {
  math: "var(--math)",
  physics: "var(--physics)",
  biology: "var(--biology)",
};

export function ThreadAtlas() {
  const { nodes, links } = buildAtlas();
  const byKey = new Map(nodes.map((n) => [n.key, n]));
  const lineage = links.filter((l) => l.kind === "lineage");
  const crossings = links.filter((l) => l.kind === "crossing");

  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto block h-auto w-full max-w-4xl"
        role="img"
        aria-label={`All ${nodes.length} threads of the atlas on one circle, with ${lineage.length} lineage links and ${crossings.length} crossing links between them`}
      >
        {/* Domain arcs. */}
        {DOMAINS.map((d) => {
          const own = nodes.filter((n) => n.domain === d.id);
          const a0 = own[0].angle - 0.09;
          const a1 = own[own.length - 1].angle + 0.09;
          const [x0, y0] = point(a0, R + 14);
          const [x1, y1] = point(a1, R + 14);
          const large = a1 - a0 > Math.PI ? 1 : 0;
          const mid = (a0 + a1) / 2;
          const [lx, ly] = point(mid, R + 175);
          return (
            <g key={d.id}>
              <path
                d={`M${x0},${y0} A${R + 14},${R + 14} 0 ${large} 1 ${x1},${y1}`}
                fill="none"
                stroke={DOMAIN_VAR[d.id]}
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                className="stamp"
                fill={DOMAIN_VAR[d.id]}
                style={{ fontSize: 13, letterSpacing: "0.14em" }}
              >
                {d.name.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Crossings first, underneath, dashed in the colour of the domain they leave. */}
        {crossings.map((l) => {
          const a = byKey.get(l.from)!;
          const b = byKey.get(l.to)!;
          return (
            <path
              key={`c-${l.from}-${l.to}`}
              d={chord(a.angle, b.angle)}
              fill="none"
              stroke={DOMAIN_VAR[a.domain]}
              strokeOpacity={0.55}
              strokeWidth={0.8 + Math.sqrt(l.count) * 0.9}
              strokeDasharray="3 4"
            >
              <title>{`${a.label} → ${b.label}: ${l.count} crossing${l.count === 1 ? "" : "s"}`}</title>
            </path>
          );
        })}
        {lineage.map((l) => {
          const a = byKey.get(l.from)!;
          const b = byKey.get(l.to)!;
          return (
            <path
              key={`l-${l.from}-${l.to}`}
              d={chord(a.angle, b.angle)}
              fill="none"
              stroke="var(--ink-soft)"
              strokeOpacity={0.7}
              strokeWidth={0.9 + Math.sqrt(l.count) * 1.1}
            >
              <title>{`${a.label} → ${b.label}: ${l.count} field${l.count === 1 ? "" : "s"} descend across threads`}</title>
            </path>
          );
        })}

        {/* Thread nodes and labels. */}
        {nodes.map((n) => {
          const [x, y] = point(n.angle, R);
          const [lx, ly] = point(n.angle, R + 30);
          const right = Math.cos(n.angle) >= 0;
          const deg = (n.angle * 180) / Math.PI;
          const rotate = right ? deg : deg + 180;
          return (
            <a key={n.key} href={withBase(n.href)} className="group">
              <circle cx={x} cy={y} r={3 + Math.sqrt(n.fields) * 1.6} fill={DOMAIN_VAR[n.domain]} />
              <text
                x={lx}
                y={ly}
                transform={`rotate(${rotate.toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)})`}
                textAnchor={right ? "start" : "end"}
                dominantBaseline="middle"
                className="fill-ink transition-colors group-hover:fill-[var(--accent)]"
                style={{ fontSize: 17 }}
              >
                {n.label}
              </text>
              <title>{`${n.label}: ${n.fields} fields`}</title>
            </a>
          );
        })}
      </svg>
      <figcaption className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-ink-soft">
        <span className="inline-flex items-center gap-2">
          <svg width="28" height="8" aria-hidden>
            <line x1="0" y1="4" x2="28" y2="4" stroke="var(--ink-soft)" strokeWidth="2" />
          </svg>
          Lineage: a field whose parent sits in another thread
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="28" height="8" aria-hidden>
            <line x1="0" y1="4" x2="28" y2="4" stroke="var(--fog)" strokeWidth="2" strokeDasharray="3 4" />
          </svg>
          Crossing: a result used in another domain
        </span>
        <span>Dot size: number of fields. Line width: number of links.</span>
      </figcaption>
    </figure>
  );
}
