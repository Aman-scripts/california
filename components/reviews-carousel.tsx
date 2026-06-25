"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Stars } from "@/components/stars";
import { reviews } from "@/lib/site-data";

const avatarColors = ["bg-amber-400", "bg-emerald-400", "bg-sky-400", "bg-violet-400"];
const cardEnter = "enter-zoom-up";
const cardHover = "motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1.5";

function cardDelay(index: number) {
  return { animationDelay: `${Math.min(index, 10) * 100}ms` };
}

export function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [carouselVisible, setCarouselVisible] = useState(false);

  const scrollByCard = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCarouselVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-w-0">
      <div
        ref={scrollRef}
        className={`reveal-group ${carouselVisible ? "is-visible" : ""} flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2 [mask-image:linear-gradient(to_right,black_calc(100%-2rem),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {reviews.map((review, index) => {
          const color = avatarColors[index % avatarColors.length];
          return (
            <div
              key={review.name}
              style={cardDelay(index)}
              className={`group relative flex w-[300px] shrink-0 snap-start flex-col gap-3 overflow-hidden rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-xl hover:ring-primary/15 ${cardEnter} ${cardHover}`}
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
                  <img src="/icon.svg" alt="Google" width={14} height={14} className="size-3.5" />
                </span>
              </div>
              <div className="relative flex items-center gap-1.5">
                <Stars size="size-3.5" />
                <BadgeCheck className="size-4 fill-sky-500 text-white" />
              </div>
              <p className="relative text-sm text-muted-foreground">{review.text}</p>
            </div>
          );
        })}
      </div>

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
  );
}
