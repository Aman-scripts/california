import { Plus, Quote, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import { Stars } from "@/components/stars";
import { googleReviewsUrl } from "@/lib/site-data";

const headerEnter = "enter-fade-up";
const cardEnter = "enter-zoom-up";

export function ReviewsSection() {
  return (
    <section className="bg-gradient-to-b from-muted/40 via-background to-background py-20 sm:py-28">
      <Container>
        <Reveal className={`max-w-2xl ${headerEnter}`}>
          <Badge
            variant="outline"
            className="h-auto gap-2 rounded-full bg-card px-4 py-2 text-base font-semibold"
          >
            <Star className="size-4.5 fill-amber-500 text-amber-500" />
            Patient Reviews
          </Badge>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            What Our <span className="text-primary">Patients Are Saying</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Hear from real patients who completed their medical marijuana
            evaluation with us and shared their experience on Google.
          </p>
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-center">
          {/* Summary card */}
          <Reveal
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-card to-amber-50 p-7 shadow-md ring-1 ring-foreground/5 ${cardEnter}`}
          >
            <Quote className="absolute top-3 right-3 size-24 text-primary/15" />
            <p className="relative font-heading text-2xl font-bold tracking-tight uppercase">
              Excellent
            </p>
            <div className="relative mt-2">
              <Stars size="size-6" />
            </div>
            <p className="relative mt-2 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              Based on
              <span className="inline-flex items-center gap-0.5 font-semibold text-foreground">
                450
                <Plus className="size-3.5" />
              </span>
              reviews
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Google"
              width={89}
              height={28}
              className="relative mt-3 h-7 w-auto"
            />
            <Button className="relative mt-5 w-full" asChild>
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Read More on Google
              </a>
            </Button>
          </Reveal>

          {/* Carousel */}
          <ReviewsCarousel />
        </div>
      </Container>
    </section>
  );
}
