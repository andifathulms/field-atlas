import type { Config } from "tailwindcss";

/** Lets opacity modifiers like `border-accent/40` work on CSS-variable colors. */
const withAlpha = (v: string) => `color-mix(in srgb, var(${v}) calc(<alpha-value> * 100%), transparent)`;

// Colors resolve to CSS variables defined in globals.css so a domain can
// swap its accent (`data-domain`) without restyling components.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: withAlpha("--paper"),
        "paper-deep": withAlpha("--paper-deep"),
        ink: withAlpha("--ink"),
        "ink-soft": withAlpha("--ink-soft"),
        "ink-faint": withAlpha("--ink-faint"),
        rule: withAlpha("--rule"),
        accent: withAlpha("--accent"),
        contested: withAlpha("--contested"),
        fog: withAlpha("--fog"),
        math: withAlpha("--math"),
        physics: withAlpha("--physics"),
        biology: withAlpha("--biology"),
      },
      fontFamily: {
        serif: [withAlpha("--font-serif"), "Georgia", "serif"],
        mono: [withAlpha("--font-mono"), "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "40rem",
      },
      transitionTimingFunction: {
        house: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        house: "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
