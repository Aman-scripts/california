import { Plus, X } from "lucide-react";
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
          <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline sm:text-lg [&_[data-slot=accordion-trigger-icon]]:hidden">
            <span className="pr-4 text-left">{item.question}</span>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45">
              <Plus className="size-4" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <BlogRichText text={item.answer} links={item.links} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}