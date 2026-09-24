/**
 * The frontispiece: a general survey in miniature. One trunk forks into the
 * three domains, each branch charted with waypoints and running out into fog
 * where the survey stops. A faint arc marks a crossing between two of them.
 * Decorative: the real maps live on the domain pages.
 */

const W = 440;
const H = 440;

type Branch = { d: string; stroke: string; delay: number };

const BRANCHES: Branch[] = [
  { d: "M220 60 V118", stroke: "var(--ink)", delay: 0 },
  // Mathematics, to the left, forking again.
  { d: "M220 118 C220 170 108 150 108 214 V282", stroke: "var(--math)", delay: 350 },
  { d: "M108 282 C108 322 70 318 70 360", stroke: "var(--math)", delay: 900 },
  // Physics, straight down, forking again.
  { d: "M220 118 V290", stroke: "var(--physics)", delay: 420 },
  { d: "M220 290 C220 330 184 322 184 362", stroke: "var(--physics)", delay: 1000 },
  // Biology, to the right.
  { d: "M220 118 C220 170 332 150 332 214 V300", stroke: "var(--biology)", delay: 490 },
];

/** Waypoint ticks: [x, y, colour, contested]. */
const TICKS: Array<[number, number, string, boolean?]> = [
  [220, 82, "var(--ink)"],
  [220, 100, "var(--ink)"],
  [108, 232, "var(--math)"],
  [108, 250, "var(--math)", true],
  [108, 266, "var(--math)"],
  [220, 218, "var(--physics)"],
  [220, 238, "var(--physics)", true],
  [220, 256, "var(--physics)"],
  [220, 274, "var(--physics)"],
  [332, 236, "var(--biology)"],
  [332, 258, "var(--biology)"],
  [332, 278, "var(--biology)"],
];

const NODES: Array<[number, number, string]> = [
  [220, 60, "var(--ink)"],
  [108, 214, "var(--math)"],
  [220, 196, "var(--physics)"],
  [332, 214, "var(--biology)"],
  [70, 360, "var(--math)"],
  [184, 362, "var(--physics)"],
];

/** Where each charted line gives out: a trail of dashes, each fainter than the last. */
const FADES: Array<[number, number, number]> = [
  [108, 282, 1],
  [70, 360, 0],
  [220, 290, 1],
  [184, 362, 0],
  [332, 300, 0],
];

function Fade({ x, y, bend, delay }: { x: number; y: number; bend: number; delay: number }) {
  const count = 7;
  return (
    <g className="tree-fade" style={{ animationDelay: `${delay}ms` }}>
      <ellipse cx={x + bend * 18} cy={y + 44} rx={34} ry={24} fill="url(#plate-fog)" />
      {Array.from({ length: count }, (_, i) => {
        const t = i / count;
        const t2 = (i + 0.4) / count;
        return (
          <line
            key={i}
            x1={x + bend * 36 * t}
            y1={y + 8 + 58 * t}
            x2={x + bend * 36 * t2}
            y2={y + 8 + 58 * t2}
            stroke="var(--fog)"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeOpacity={0.95 * (1 - t) ** 1.3}
          />
        );
      })}
    </g>
  );
}

export function SurveyPlate({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" aria-hidden>
        <defs>
          <radialGradient id="plate-fog">
            <stop offset="0" stopColor="var(--fog)" stopOpacity="0.3" />
            <stop offset="1" stopColor="var(--fog)" stopOpacity="0" />
          </radialGradient>
          <pattern id="plate-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <rect width="1.5" height="4" fill="var(--contested)" />
          </pattern>
        </defs>

        {/* The sheet: neat line, graticule and edge ticks. */}
        <rect x="10.5" y="10.5" width={W - 21} height={H - 21} fill="none" stroke="var(--ink)" strokeOpacity="0.35" />
        <rect x="16.5" y="16.5" width={W - 33} height={H - 33} fill="none" stroke="var(--ink)" strokeOpacity="0.14" />
        <g stroke="var(--accent)" strokeOpacity="0.07">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`v${i}`} x1={17 + (i + 1) * 45} y1={17} x2={17 + (i + 1) * 45} y2={H - 17} />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`h${i}`} x1={17} y1={17 + (i + 1) * 45} x2={W - 17} y2={17 + (i + 1) * 45} />
          ))}
        </g>
        <g stroke="var(--ink)" strokeOpacity="0.35">
          {Array.from({ length: 9 }, (_, i) => (
            <g key={i}>
              <line x1={17 + (i + 1) * 45} y1={10.5} x2={17 + (i + 1) * 45} y2={16.5} />
              <line x1={10.5} y1={17 + (i + 1) * 45} x2={16.5} y2={17 + (i + 1) * 45} />
            </g>
          ))}
        </g>

        {/* North arrow. */}
        <g transform="translate(392 52)" className="tree-fade" style={{ animationDelay: "200ms" }}>
          <path d="M0 -16 L5 6 L0 2 L-5 6 Z" fill="var(--ink)" fillOpacity="0.7" />
          <text y="20" textAnchor="middle" className="fill-ink-faint font-mono text-[9px] tracking-[0.1em]">
            N
          </text>
        </g>

        {/* A crossing: one domain's result landing in another. */}
        <path
          d="M116 208 C150 170 196 180 212 192"
          fill="none"
          stroke="var(--ink-faint)"
          strokeWidth={1}
          strokeDasharray="2 4"
          className="tree-fade"
          style={{ animationDelay: "1500ms" }}
        />

        <g fill="none" strokeWidth={1.8} strokeLinecap="round">
          {BRANCHES.map((b) => (
            <path key={b.d} d={b.d} stroke={b.stroke} pathLength={1} className="tree-draw" style={{ animationDelay: `${b.delay}ms` }} />
          ))}
        </g>

        {TICKS.map(([x, y, c, contested], i) => (
          <g key={i} className="tree-fade" style={{ animationDelay: `${600 + i * 60}ms` }}>
            <line x1={x} y1={y} x2={x + 8} y2={y} stroke={contested ? "var(--contested)" : c} strokeWidth={1.5} />
            {contested && <rect x={x - 6} y={y - 3} width={4.5} height={6} fill="url(#plate-hatch)" />}
          </g>
        ))}

        {FADES.map(([x, y, bend], i) => (
          <Fade key={i} x={x} y={y} bend={bend} delay={1300 + i * 120} />
        ))}

        {NODES.map(([x, y, c], i) => (
          <g key={i} className="tree-fade" style={{ animationDelay: `${i === 0 ? 0 : 500 + i * 110}ms` }}>
            <circle cx={x} cy={y} r={9} fill="var(--paper)" />
            <circle cx={x} cy={y} r={5.5} fill={c} />
          </g>
        ))}

        <g className="font-mono text-[9.5px] tracking-[0.12em]">
          <text x={236} y={64} className="fill-ink-soft tree-fade">
            ORIGIN
          </text>
          <text x={122} y={218} fill="var(--math)" className="tree-fade" style={{ animationDelay: "700ms" }}>
            MATHEMATICS
          </text>
          <text x={234} y={200} fill="var(--physics)" className="tree-fade" style={{ animationDelay: "750ms" }}>
            PHYSICS
          </text>
          <text x={346} y={218} fill="var(--biology)" className="tree-fade" style={{ animationDelay: "800ms" }}>
            BIOLOGY
          </text>
          <text x={W - 32} y={H - 28} textAnchor="end" className="fill-fog italic tree-fade" style={{ animationDelay: "1700ms" }}>
            UNSURVEYED
          </text>
        </g>
      </svg>
      <figcaption className="stamp mt-3 flex justify-between text-ink-faint">
        <span>Plate I</span>
        <span>General survey, not to scale</span>
      </figcaption>
    </figure>
  );
}
