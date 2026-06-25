import { Lock, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: "15-30 min", label: "Avg. Wait" },
  { value: "Same Day", label: "Approval" },
  { value: "100%", label: "Online" },
];

const itemEnter = "enter-fade-up";

function staggerDelay(index: number) {
  return { animationDelay: `${50 + index * 120}ms` };
}

export function GetApprovedSection() {
  return (
    <section
      id="get-approved"
      className="bg-mesh-trust relative overflow-hidden py-20 sm:py-28"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-4">
          <div className={itemEnter} style={staggerDelay(0)}>
            <Badge
              variant="outline"
              className="h-auto gap-2.5 rounded-full bg-card px-5 py-3 text-base font-semibold"
            >
              <Sparkles className="size-5 text-primary" />
              Same-Day Telehealth
            </Badge>
          </div>

          <h2
            className={`font-heading text-3xl font-semibold tracking-tight sm:text-4xl ${itemEnter}`}
            style={staggerDelay(1)}
          >
            Fast MMJ Approval in Less Than 30 Minutes
          </h2>

          <p className={`max-w-md text-muted-foreground ${itemEnter}`} style={staggerDelay(2)}>
            Most patients complete the process easily and receive their
            doctor&rsquo;s approval within 15 to 30 minutes. It&rsquo;s a
            quick and stress-free experience designed to fit right into
            your day.
          </p>

          <p className={`max-w-md text-muted-foreground ${itemEnter}`} style={staggerDelay(3)}>
            Once approved, you&rsquo;ll instantly get access to your
            digital recommendation, so you can start visiting dispensaries
            without delay. Our friendly team and licensed doctors make
            sure every step feels smooth, secure, and completely
            confidential.
          </p>

          <div className={`mt-2 grid grid-cols-3 gap-3 ${itemEnter}`} style={staggerDelay(4)}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-card px-3 py-2.5 text-center shadow-sm ring-1 ring-primary/5"
              >
                <p className="font-heading text-base font-bold text-primary sm:text-lg">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`flex items-center gap-2 text-sm font-medium text-foreground ${itemEnter}`}
            style={staggerDelay(5)}
          >
            <Lock className="size-4.5 shrink-0 text-primary" />
            Your information is encrypted &amp; HIPAA-compliant
          </div>
        </Reveal>

        <Reveal className="enter-zoom-up">
          <Card className="relative overflow-hidden p-2 shadow-xl ring-1 ring-primary/10">
            <div className="dot-pattern pointer-events-none absolute top-0 right-0 h-24 w-24" aria-hidden="true" />
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400" />
            <CardContent className="relative py-5">
              <p className="font-heading text-sm font-semibold tracking-wide text-primary uppercase">
                Get Approved Today
              </p>
              <p className="mt-1.5 text-2xl font-bold sm:text-3xl">
                Plans starting at <span className="text-primary">$55</span> only
              </p>

              <LeadCaptureForm />
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
