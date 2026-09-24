import type { Metadata } from "next";
import Link from "next/link";
import { SearchBox, type SearchItem } from "@/components/SearchBox";
import { getField, getFields, getFigures } from "@/lib/content";
import { getDomain, getThread, shortThreadTitle } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Search",
  description: "Search every field, turning point, open problem and person in the atlas.",
};

/** Plain text for matching: drop Markdown and maths markup, collapse whitespace. */
function plain(s: string): string {
  return s
    .replace(/\{\{fig:[a-z0-9-]+\|([^}]+)\}\}/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[$*_`\\{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const f of getFields()) {
    const domain = getDomain(f.domain)!.name;
    const thread = shortThreadTitle(getThread(f.domain, f.thread)?.title ?? "");
    const href = fieldPath(f.domain, f.id);
    items.push({
      kind: "Field",
      domain: f.domain,
      title: f.name,
      meta: `${domain} · ${thread}`,
      href,
      text: plain(`${f.core_question} ${f.summary ?? ""}`),
    });
    for (const tp of f.turning_points) {
      items.push({
        kind: "Turning point",
        domain: f.domain,
        title: tp.title,
        meta: `${tp.date} · ${f.name}`,
        href: `${href}#tp-${tp.id}`,
        text: plain(tp.description),
      });
    }
    for (const op of f.open_problems) {
      items.push({
        kind: "Open problem",
        domain: f.domain,
        title: op.name,
        meta: f.name,
        href: `${href}#op-${op.id}`,
        text: plain(op.description),
      });
    }
    for (const idea of f.key_ideas ?? []) {
      items.push({
        kind: "Key idea",
        domain: f.domain,
        title: idea.term,
        meta: f.name,
        href,
        text: plain(idea.definition),
      });
    }
  }
  for (const fig of getFigures()) {
    const fields = [...new Set(fig.field_ids.map((id) => getField(id)!.name))];
    items.push({
      kind: "Person",
      domain: getField(fig.field_ids[0])!.domain,
      title: fig.name,
      meta: fields.join(", "),
      href: `/people/#${fig.id}`,
      text: "",
    });
  }
  return items;
}

export default function SearchPage() {
  const items = buildIndex();
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="settle pb-8 pt-12">
        <p className="stamp text-ink-faint">
          <Link href="/" className="ink-link">
            Atlas
          </Link>{" "}
          / Search
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.02em] sm:text-7xl">Search</h1>
      </header>
      <SearchBox items={items} />
    </main>
  );
}
