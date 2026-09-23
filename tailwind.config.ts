import type { Config } from "tailwindcss";

// Colors resolve to CSS variables defined in globals.css so a domain can
// swap its accent (`data-domain`) without restyling components.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-deep": "var(--paper-deep)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        contested: "var(--contested)",
        fog: "var(--fog)",
        math: "var(--math)",
        physics: "var(--physics)",
        biology: "var(--biology)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
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
