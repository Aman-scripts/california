"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cities } from "@/lib/site-data";

const INITIAL_COUNT = 24;

export function CitiesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleCities = showAll ? cities : cities.slice(0, INITIAL_COUNT);

  return (
    <section className="cv-auto bg-emerald-900 py-20 text-white sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Medical Marijuana Services Available Across California
          </h2>
          <p className="mt-4 text-emerald-100/80">
            We provide licensed medical marijuana evaluations and support to
            patients throughout California safely and conveniently.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {visibleCities.map((city) => (
            <Badge
              key={city}
              variant="outline"
              className="h-auto border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-white"
            >
              {city}
            </Badge>
          ))}
        </div>

        {cities.length > INITIAL_COUNT && (
          <div className="mt-8 text-center">
            <Button
              size="xl"
              className="bg-white text-emerald-950 hover:bg-white/90"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? "Show Less" : "Load More"}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
