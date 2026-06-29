import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-data";

export type Crumb = {
  label: string;
  href?: string;
};

/**
 * Visible breadcrumb trail plus a matching BreadcrumbList JSON-LD script,
 * built from the same `items` prop so the two can never drift apart.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${siteConfig.url}${item.href === "/" ? "" : item.href}` }
        : {}),
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-emerald-900/10 bg-emerald-50/60"
    >
      <Container>
        <ol className="flex flex-wrap items-center gap-2 py-4 text-base font-medium text-emerald-900/70">
          {allItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-emerald-900/40"
                />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 transition-colors hover:text-emerald-700"
                >
                  {index === 0 && <Home aria-hidden="true" className="size-4" />}
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-emerald-950">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </nav>
  );
}
