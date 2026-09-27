/**
 * The shared social card. Every shareable page has one, generated at build
 * time by `/og/…` (see `src/app/og/[...slug]/route.tsx`), so a pasted link
 * arrives carrying the field's own name, thread and question.
 *
 * Drawn in the brand export palette — ink ground, the trifork mark — rather
 * than the site's theme tokens: a card has no light and dark mode to answer
 * to, and the mark is only ever printed in its own three colours.
 */
import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#16130F";
const PAPER = "#EDE7D9";
const VIOLET = "#9098E0";
const TERRACOTTA = "#D98456";
const SAGE = "#8CAA79";

/** Accent per domain, in the fixed brand order: math, physics, biology. */
export const DOMAIN_COLOR: Record<string, string> = {
  math: VIOLET,
  physics: TERRACOTTA,
  biology: SAGE,
};

const FONT_DIR = path.join(process.cwd(), "src", "fonts");
const font = (file: string) => fs.readFileSync(path.join(FONT_DIR, file));

// The site's own faces: Source Serif for the name, IBM Plex Mono for
// anything a reader might verify against a source.
const fonts = [
  { name: "Source Serif 4", data: font("SourceSerif4-SemiBold.ttf"), weight: 600 as const, style: "normal" as const },
  { name: "Source Serif 4", data: font("SourceSerif4-Italic.ttf"), weight: 400 as const, style: "italic" as const },
  { name: "IBM Plex Mono", data: font("IBMPlexMono-Regular.ttf"), weight: 400 as const, style: "normal" as const },
];

/** The trifork mark. */
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M50 10 L50 42" stroke={PAPER} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M50 42 C 38 55, 28 60, 20 82" stroke={VIOLET} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M50 42 L 50 84" stroke={TERRACOTTA} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M50 42 C 62 55, 72 60, 80 82" stroke={SAGE} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="84" r="5" fill={VIOLET} />
      <circle cx="50" cy="86" r="5" fill={TERRACOTTA} />
      <circle cx="80" cy="84" r="5" fill={SAGE} />
    </svg>
  );
}

export interface CardProps {
  /** The stamp line above the title: a domain and thread, or a section kind. */
  eyebrow?: string;
  title: string;
  /** Set in italic under the title — a core question or a one-line blurb. */
  subtitle?: string;
  /** Short facts along the foot, in the mono face. */
  facts?: string[];
  /** Rule and eyebrow colour; paper for the pages that span every domain. */
  accent?: string;
}

/** One short line: long questions are cut at a word rather than mid-word. */
function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Renders the card as a PNG. */
export function ogImage({ eyebrow, title, subtitle, facts = [], accent = PAPER }: CardProps) {
  const titleSize = title.length > 44 ? 64 : title.length > 26 ? 78 : 94;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: INK,
          color: PAPER,
          padding: "62px 72px 56px",
          fontFamily: "Source Serif 4",
        }}
      >
        {/* The three threads, always in brand order, as the card's top rule. */}
        <div style={{ display: "flex", position: "absolute", top: 0, left: 0, right: 0, height: 10 }}>
          <div style={{ display: "flex", flex: 1, backgroundColor: VIOLET }} />
          <div style={{ display: "flex", flex: 1, backgroundColor: TERRACOTTA }} />
          <div style={{ display: "flex", flex: 1, backgroundColor: SAGE }} />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Mark size={44} />
          <div style={{ display: "flex", marginLeft: 18, fontFamily: "IBM Plex Mono", fontSize: 23, letterSpacing: 6, opacity: 0.8 }}>
            FIELD ATLAS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          {eyebrow ? (
            <div style={{ display: "flex", fontFamily: "IBM Plex Mono", fontSize: 24, letterSpacing: 4, color: accent, marginBottom: 22 }}>
              {clamp(eyebrow.toUpperCase(), 58)}
            </div>
          ) : null}
          <div style={{ display: "flex", fontSize: titleSize, lineHeight: 1.06, fontWeight: 600 }}>{title}</div>
          {subtitle ? (
            <div style={{ display: "flex", fontSize: 33, lineHeight: 1.32, fontStyle: "italic", fontWeight: 400, opacity: 0.76, marginTop: 24 }}>
              {clamp(subtitle, 130)}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 2, backgroundColor: accent, opacity: 0.45 }} />
          <div style={{ display: "flex", fontFamily: "IBM Plex Mono", fontSize: 22, letterSpacing: 1, opacity: 0.66, marginTop: 20 }}>
            {facts.length ? facts.join("   ·   ") : "How knowledge branched"}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
