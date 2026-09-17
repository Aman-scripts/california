import Link from "next/link";

export type BlogTextLink = {
  label: string;
  href: string;
};

export function BlogRichText({
  text,
  links,
}: {
  text: string;
  links?: BlogTextLink[];
}) {
  if (!links?.length) return text;

  const pattern = new RegExp(
    `(${links
      .map((link) => link.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`
  );
  const hrefByLabel = new Map(links.map((link) => [link.label, link.href]));

  return (
    <>
      {text.split(pattern).map((part, index) => {
        const href = hrefByLabel.get(part);
        if (!href) return part;

        return (
          <Link
            key={`${part}-${index}`}
            href={href}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {part}
          </Link>
        );
      })}
    </>
  );
}
