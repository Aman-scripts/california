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
    <nav aria-label="Breadcrumb" className="py-4">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {allItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
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
