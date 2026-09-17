"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export function BlogTableOfContents({
  items,
}: {
  items: { id: string; text: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      setActiveId(items[0]?.id ?? null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="w-full min-w-0 overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 p-5 text-white sm:px-6 sm:py-7 lg:sticky lg:top-28 lg:px-7"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 text-left lg:hidden"
        aria-expanded={open}
        aria-controls="blog-toc-list"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="font-heading text-xl font-semibold tracking-tight">
          Table of Contents
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-6 shrink-0 text-white transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <h2 className="hidden font-heading text-xl font-semibold tracking-tight sm:text-2xl lg:block">
        Table of Contents
      </h2>
      <div
        className={cn("mt-4 h-px bg-white/25", !open && "hidden lg:block")}
      />
      <ul
        id="blog-toc-list"
        className={cn("mt-5 space-y-4", open ? "block" : "hidden", "lg:block")}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  "mt-2 size-2 shrink-0 rounded-full",
                  isActive ? "bg-emerald-300" : "bg-white/40"
                )}
              />
              <a
                href={`#${item.id}`}
                className={cn(
                  "text-sm leading-snug font-medium transition-colors sm:text-base",
                  isActive
                    ? "text-emerald-300"
                    : "text-white hover:text-emerald-200"
                )}
                onClick={() => {
                  setActiveId(item.id);
                  setOpen(false);
                }}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
