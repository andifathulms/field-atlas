"use client";

import { useEffect, useRef, useState } from "react";

interface ThreadLink {
  id: string;
  label: string;
}

/**
 * The strip of threads that stays under the header on a long domain page,
 * marking the thread in view so the reader always knows which map they're on.
 */
export function ThreadNav({ threads }: { threads: ThreadLink[] }) {
  const [active, setActive] = useState<string | null>(null);
  const strip = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = threads
      .map((t) => document.getElementById(`thread-${t.id}`))
      .filter((el): el is HTMLElement => el !== null);
    // A thread is "in view" once its top passes the upper third of the screen.
    const update = () => {
      const line = window.innerHeight * 0.33;
      let current: string | null = null;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id.replace("thread-", "");
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [threads]);

  // Keep the active thread visible inside the strip without moving the page.
  useEffect(() => {
    const list = strip.current;
    const item = active ? list?.querySelector<HTMLElement>(`[data-thread="${active}"]`) : null;
    if (!list || !item) return;
    const left = item.offsetLeft - list.clientWidth / 2 + item.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Threads"
      className="sticky z-30 -mx-4 border-b border-rule bg-paper/85 px-4 backdrop-blur-md sm:mx-0 sm:px-0"
      style={{ top: "var(--header-h, 0px)" }}
    >
      <ul ref={strip} className="flex items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <li className="stamp mr-2 hidden shrink-0 text-ink-faint md:block">Threads</li>
        {threads.map((t, i) => {
          const on = t.id === active;
          return (
            <li key={t.id} data-thread={t.id} className="shrink-0">
              <a
                href={`#thread-${t.id}`}
                aria-current={on ? "location" : undefined}
                className={`block whitespace-nowrap px-2.5 py-2 text-[0.95rem] transition-colors duration-200 ${
                  on ? "text-accent" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span className={`stamp mr-1.5 ${on ? "text-accent" : "text-ink-faint"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={on ? "font-semibold" : ""}>{t.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
