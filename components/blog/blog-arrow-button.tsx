import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function BlogArrowButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex w-fit items-center gap-3 rounded-full bg-primary py-1.5 pr-1.5 pl-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_-14px_rgba(6,78,59,0.75)] transition-all hover:bg-primary/90 hover:shadow-[0_16px_32px_-14px_rgba(6,78,59,0.85)] focus-visible:ring-3 focus-visible:ring-ring/50 sm:text-base",
        className
      )}
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
