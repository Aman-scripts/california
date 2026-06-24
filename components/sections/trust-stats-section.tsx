import { ShieldCheck } from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { trustStats, trustBadges } from "@/lib/site-data";

export function TrustStatsSection() {
  return (
    <section className="cv-auto bg-mesh-trust bg-grid-faint relative py-20 sm:py-28">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-border" />
            <Badge variant="outline" className="rounded-full bg-card px-4 py-1.5">
              Trusted By Patients
            </Badge>
            <span className="h-px w-8 bg-border" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Why Patients in California
            <br />
            Trust Us
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-both rounded-2xl bg-gradient-to-br from-emerald-300/70 via-amber-200/60 to-emerald-300/70 p-px duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-[15px] bg-card p-6">
                <div
                  className="dot-pattern pointer-events-none absolute top-0 right-0 h-24 w-24"
                  aria-hidden="true"
                />
                <AnimatedCounter
                  value={stat.value}
                  className="relative bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text font-heading text-4xl font-bold text-transparent"
                />
                <div className="relative my-4 h-px bg-border" />
                <p className="relative font-heading font-semibold">{stat.label}</p>
                <p className="relative mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5">
          <p className="text-sm text-muted-foreground">
            Backed by the standards that matter most to your care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <Badge
                key={badge}
                variant="outline"
                className="h-auto gap-2 rounded-full border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
              >
                <ShieldCheck className="size-4.5 text-primary" />
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
