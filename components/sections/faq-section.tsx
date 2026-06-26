import Link from "next/link";
import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section id="faq" className="cv-auto bg-gradient-to-b from-emerald-50 via-background to-amber-50/60 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-1 w-8 rounded-full bg-primary" />
              <span className="text-base font-semibold tracking-wide text-primary uppercase">
                FAQ
              </span>
            </div>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Everything about getting your California medical marijuana
              card online &mdash; pricing, timing, privacy, and what happens
              after approval.
            </p>

            <div className="mt-8 rounded-2xl bg-card p-6 shadow-md">
              <p className="font-heading text-lg font-bold">
                Got more questions?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team answers every day &mdash; by phone or email.
              </p>
              <Button className="mt-4 rounded-full" asChild>
                <Link href="/contact-us/">Talk to Us</Link>
              </Button>
            </div>
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="not-last:border-b-0 rounded-2xl bg-card px-6 shadow-md"
              >
                <AccordionTrigger className="font-heading font-bold hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <span className="pr-4 text-left">{faq.question}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45">
                    <Plus className="size-4" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
