"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Plus, Quote, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { googleReviewsUrl, reviews } from "@/lib/site-data";

const EASE = [0.22, 1, 0.36, 1] as const;
const avatarColors = ["bg-amber-400", "bg-emerald-400", "bg-sky-400", "bg-violet-400"];

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} fill-current`} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="cv-auto bg-gradient-to-b from-muted/40 via-background to-background py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
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
        </motion.div>

        <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-center">
          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-card to-amber-50 p-7 shadow-md ring-1 ring-foreground/5"
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
            <img src="/logo.svg" alt="Google" className="relative mt-3 h-7 w-auto" />
            <Button className="relative mt-5 w-full" asChild>
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Read More on Google
              </a>
            </Button>
          </motion.div>

          {/* Carousel */}
          <div className="relative min-w-0">
            <motion.div
              ref={scrollRef}
              className="flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2 [mask-image:linear-gradient(to_right,black_calc(100%-2rem),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={gridVariants}
            >
              {reviews.map((review, index) => {
                const color = avatarColors[index % avatarColors.length];
                return (
                  <motion.div
                    key={review.name}
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="group relative flex w-[300px] shrink-0 snap-start flex-col gap-3 overflow-hidden rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-xl hover:ring-primary/15"
                  >
                    <Quote className="absolute top-2 right-2 size-16 text-foreground/15 transition-transform duration-300 group-hover:scale-110" />
                    <div className="relative flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ring-2 ring-card ${color}`}
                        >
                          {review.name.charAt(0)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
                        </div>
                      </div>
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-foreground/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icon.svg" alt="Google" className="size-3.5" />
                      </span>
                    </div>
                    <div className="relative flex items-center gap-1.5">
                      <Stars size="size-3.5" />
                      <BadgeCheck className="size-4 fill-sky-500 text-white" />
                    </div>
                    <p className="relative text-sm text-muted-foreground">{review.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-5 flex justify-end gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-sm"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous reviews"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-sm"
                onClick={() => scrollByCard(1)}
                aria-label="Next reviews"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
