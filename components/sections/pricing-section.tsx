import { Check, ChevronRight, Flag, ShieldCheck, Star, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/lib/site-data";

const planIcons = [Zap, Flag, Star];

export function PricingSection() {
  return (
    <section id="pricing" className="cv-auto bg-muted/30 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 h-auto gap-2 rounded-full px-4 py-2 text-base font-semibold"
          >
            Pricing &amp; Plans
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            We offer transparent and fair pricing for a medical marijuana
            card with no hidden or unexpected costs.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 sm:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const Icon = planIcons[index];
            return (
              <Card
                key={plan.name}
                className={cn(
                  "enter-fade-up pt-0 text-base",
                  plan.highlighted && "ring-2 ring-primary lg:scale-105"
                )}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {plan.highlighted && (
                  <div className="flex items-center justify-center gap-1.5 rounded-t-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground">
                    Our Recommendation
                  </div>
                )}
                <CardHeader className="pt-8">
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-xl border",
                      plan.highlighted
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-muted text-foreground"
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <p className="pt-4 font-heading text-xl font-semibold">
                    {plan.name} Plan
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="flex items-center gap-2.5 pt-3">
                    <span
                      className={cn(
                        "font-heading text-4xl font-bold",
                        plan.highlighted && "animate-price-pulse text-primary"
                      )}
                    >
                      {plan.price}
                    </span>
                    <Badge>{plan.priceBadge}</Badge>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4.5 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-col items-stretch gap-2.5 pb-8">
                  <Button
                    size="lg"
                    className="w-full"
                    variant={plan.highlighted ? "default" : "secondary"}
                    asChild
                  >
                    <a href="/#get-approved">
                      Get Started
                      <ChevronRight />
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    One-time fee. No recurring charges.
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 rounded-3xl bg-gradient-to-br from-amber-100 via-amber-50 to-card px-8 py-8 text-center shadow-sm ring-1 ring-amber-900/10 sm:flex-row sm:text-left">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-card text-amber-600 shadow-sm">
            <ShieldCheck className="size-6" />
          </span>
          <div>
            <p className="font-heading font-semibold text-amber-900">
              Money-Back Guarantee
            </p>
            <p className="mt-1 text-sm text-amber-800/80">
              Attend your evaluation with confidence, knowing we stand
              behind it with our money-back guarantee.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
