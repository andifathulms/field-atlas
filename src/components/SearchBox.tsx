"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Domain } from "@/lib/types";

export interface SearchItem {
  kind: "Field" | "Turning point" | "Open problem" | "Key idea" | "Person";
  domain: Domain;
  title: string;
  meta: string;
  href: string;
  /** Extra text that can match, but counts for less than the title. */
  text: string;
}

const LIMIT = 60;
const KIND_WEIGHT: Record<SearchItem["kind"], number> = {
  Field: 6,
  Person: 4,
  "Open problem": 3,
  "Turning point": 2,
  "Key idea": 1,
};

/** Literal class names so Tailwind keeps them; one per domain accent. */
const DOMAIN_TEXT: Record<Domain, string> = {
  math: "text-math",
  physics: "text-physics",
  biology: "text-biology",
};

/** Lower-case and strip accents, so "godel" finds "Gödel". */
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

interface Prepared extends SearchItem {
  titleKey: string;
  textKey: string;
}

function score(item: Prepared, terms: string[]): number {
  let total = 0;
  for (const term of terms) {
    const inTitle = item.titleKey.indexOf(term);
    if (inTitle >= 0) {
      total += 10 + (inTitle === 0 ? 6 : 0) + (item.titleKey === term ? 10 : 0);
    } else if (item.textKey.includes(term)) {
      total += 2;
    } else {
      return 0;
    }
  }
  return total + KIND_WEIGHT[item.kind];
}

/** Client-side search over an index built at export time. Reads and writes `?q=` so results can be shared. */
export function SearchBox({ items }: { items: SearchItem[] }) {
  const prepared = useMemo<Prepared[]>(
    () => items.map((i) => ({ ...i, titleKey: fold(i.title), textKey: fold(`${i.meta} ${i.text}`) })),
    [items],
  );
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
    input.current?.focus();
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }, [query]);

  const terms = fold(query).split(/\s+/).filter((t) => t.length > 1);
  const results = terms.length
    ? prepared
        .map((item) => ({ item, s: score(item, terms) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s || a.item.title.localeCompare(b.item.title))
    : [];

  return (
    <div>
      <label htmlFor="atlas-search" className="stamp text-ink-faint">
        Fields, turning points, open problems, key ideas and people
      </label>
      <input
        ref={input}
        id="atlas-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Try Noether, entropy, 1905, or Riemann hypothesis"
        autoComplete="off"
        spellCheck={false}
        className="mt-3 w-full border-b-2 border-ink bg-transparent pb-3 text-2xl outline-none placeholder:text-fog focus:border-accent sm:text-3xl"
      />
      {terms.length > 0 && (
        <p className="stamp mt-6 text-ink-faint" aria-live="polite">
          {results.length === 0
            ? "Nothing charted matches"
            : `${results.length} result${results.length === 1 ? "" : "s"}${results.length > LIMIT ? `, showing the first ${LIMIT}` : ""}`}
        </p>
      )}
      <ul className="mt-4">
        {results.slice(0, LIMIT).map(({ item }) => (
          <li key={`${item.kind}-${item.href}-${item.title}`} className="border-b border-rule">
            <Link
              href={item.href}
              className="group -mx-3 grid gap-x-6 gap-y-1 px-3 py-4 transition-colors duration-200 hover:bg-paper-deep/60 sm:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <span className={`stamp ${DOMAIN_TEXT[item.domain]}`}>{item.kind}</span>
              <span>
                <span className="font-semibold group-hover:underline">{item.title}</span>
                <span className="mt-0.5 block text-sm text-ink-soft">{item.meta}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
