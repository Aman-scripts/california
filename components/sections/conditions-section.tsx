import Link from "next/link";
import {
  Activity,
  Bandage,
  BicepsFlexed,
  Bone,
  Brain,
  Dna,
  Eye,
  Frown,
  Info,
  Scale,
  ShieldAlert,
  Sparkles,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { qualifyingConditions } from "@/lib/site-data";

const conditionIcons = [
  Bone,
  Dna,
  Zap,
  Eye,
  ShieldAlert,
  Brain,
  Activity,
  Frown,
  BicepsFlexed,
  Scale,
  UtensilsCrossed,
  Bandage,
];

const colorStyles = [
  { bg: "bg-amber-100", text: "text-amber-600", ring: "hover:ring-amber-300/60" },
  { bg: "bg-emerald-100", text: "text-emerald-600", ring: "hover:ring-emerald-300/60" },
  { bg: "bg-sky-100", text: "text-sky-600", ring: "hover:ring-sky-300/60" },
  { bg: "bg-violet-100", text: "text-violet-600", ring: "hover:ring-violet-300/60" },
];

const itemEnter = "enter-fade-up";
const cardEnter = "enter-zoom-up";
const cardHover =
  "motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.04]";

function itemDelay(index: number) {
  return { animationDelay: `${50 + index * 120}ms` };
}

function cardDelay(index: number) {
  return { animationDelay: `${Math.min(index, 10) * 60}ms` };
}

export function ConditionsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: copy + CTA */}
          <Reveal as="div">
            <div className={itemEnter} style={itemDelay(0)}>
              <Badge
                variant="outline"
                className="h-auto gap-2 rounded-full bg-card px-4 py-2 text-base font-semibold"
              >
                <Sparkles className="size-4.5 text-primary" />
                {qualifyingConditions.length}+ Qualifying Conditions
              </Badge>
            </div>

            <h2
              className={`mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl ${itemEnter}`}
              style={itemDelay(1)}
            >
              Qualifying Medical Conditions for MMJ in California
            </h2>
            <p className={`mt-4 max-w-md text-muted-foreground ${itemEnter}`} style={itemDelay(2)}>
              Under California law, a patient may qualify for medical
              cannabis if a licensed MMJ doctor determines its use is
              appropriate for a diagnosed condition.
            </p>

            <div
              className={`relative mt-8 flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 via-accent to-amber-50 p-6 text-center shadow-sm sm:p-8 ${itemEnter}`}
              style={itemDelay(3)}
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-card text-primary shadow-sm">
                <Info className="size-5" />
              </span>
              <p className="text-sm text-accent-foreground">
                If your condition isn&rsquo;t listed among the official
                qualifying ones, our licensed 420 doctors will carefully
                review your medical history to determine if medical
                cannabis is suitable for you.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact-us/#book-appointment">Check If You Qualify</Link>
              </Button>
            </div>
          </Reveal>

          {/* Right: conditions grid */}
          <Reveal as="div" className="bg-grid-faint grid grid-cols-2 gap-4 rounded-3xl bg-muted/40 p-4 sm:grid-cols-3 sm:p-6">
            {qualifyingConditions.map((condition, index) => {
              const Icon = conditionIcons[index % conditionIcons.length];
              const style = colorStyles[index % colorStyles.length];
              return (
                <div
                  key={condition.name}
                  style={cardDelay(index)}
                  className={`group flex flex-col items-center gap-3 rounded-2xl bg-card p-5 text-center shadow-sm ring-1 ring-foreground/5 transition-shadow hover:shadow-lg ${style.ring} ${cardEnter} ${cardHover}`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${style.bg} ${style.text}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{condition.name}</span>
                </div>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
