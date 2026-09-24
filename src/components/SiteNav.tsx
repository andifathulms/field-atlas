"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  domain?: string;
}

/** Domain links, with the section being read underlined in its own accent. */
export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname() ?? "/";
  return (
    <nav aria-label="Sections" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <li key={item.href} data-domain={item.domain} className={item.domain ? "" : "ml-1 border-l border-rule pl-1 sm:ml-2 sm:pl-2"}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`stamp relative block whitespace-nowrap px-2 py-2 sm:px-2.5 transition-colors duration-200 ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                } after:absolute after:inset-x-2 sm:after:inset-x-2.5 after:bottom-0.5 after:h-[1.5px] after:origin-left after:bg-accent after:transition-transform after:duration-300 after:ease-house ${
                  active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
