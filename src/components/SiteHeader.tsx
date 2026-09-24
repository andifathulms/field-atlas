import Link from "next/link";
import { AtlasMark } from "@/components/AtlasMark";
import { SiteNav } from "@/components/SiteNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DOMAINS } from "@/lib/domains";

export function SiteHeader() {
  const items = [
    ...DOMAINS.map((d) => ({ href: `/${d.id}/`, label: d.name, domain: d.id })),
    { href: "/crossings/", label: "Crossings" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 px-4 sm:flex-nowrap sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5 py-3.5">
          <AtlasMark className="h-7 w-7 text-ink transition-transform duration-500 ease-house group-hover:rotate-[-8deg]" />
          <span className="text-[1.3rem] font-semibold tracking-tight">Field Atlas</span>
          <span className="stamp ml-1 hidden text-ink-faint lg:inline">Survey of how knowledge branched</span>
        </Link>
        <div className="order-3 w-full pb-1.5 sm:order-none sm:ml-auto sm:w-auto sm:pb-0">
          <SiteNav items={items} />
        </div>
        <div className="ml-auto sm:ml-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
