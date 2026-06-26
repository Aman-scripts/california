import type { CSSProperties, ReactNode } from "react";

type RevealTag = "div" | "h2" | "p" | "span";

/**
 * Wraps a group of `enter-*` animated elements (itself, or its children).
 * Renders server-side with the animation already armed (`is-visible`), so
 * the CSS keyframes play once on initial paint instead of being gated
 * behind a client-side IntersectionObserver. Trades the scroll-triggered
 * reveal for zero client JS / hydration cost per section.
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

  return (
    <Comp style={style} className={`reveal-group is-visible ${className}`}>
      {children}
    </Comp>
  );
}
