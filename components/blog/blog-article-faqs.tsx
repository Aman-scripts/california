import { BlogRichText } from "@/components/blog/blog-rich-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { BlogFaq } from "@/lib/blog-data";

export function BlogArticleFaqs({ items }: { items: BlogFaq[] }) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`faq-${index}`}
          className="rounded-2xl border-0 bg-card px-4 shadow-sm ring-1 ring-primary/10"
        >
          <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <BlogRichText text={item.answer} links={item.links} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
