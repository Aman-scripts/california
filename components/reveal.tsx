"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealTag = "div" | "h2" | "p" | "span";

/**
 * Wraps a group of `enter-*` animated elements (itself, or its children)
 * and only lets their CSS animations play once this element scrolls into
 * view. One IntersectionObserver per group, not per animated element —
 * any staggering between children is still driven by their own existing
 * `animationDelay` inline styles.
 */
export function Reveal({
  as = "div",
  className = "",
  style,
  children,
}: {
  as?: RevealTag;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const Comp = as;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // No negative bottom margin: shrinking the trigger zone from the
      // bottom creates a dead zone that an element sitting at the very end
      // of the page (e.g. the footer) can never scroll past, leaving it
      // permanently stuck un-revealed once the page is at max scroll.
      { rootMargin: "0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Comp
      ref={ref as any}
      style={style}
      className={`reveal-group ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Comp>
  );
}
