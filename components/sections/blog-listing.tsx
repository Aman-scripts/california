import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Video,
} from "lucide-react";

import { BlogFeaturedCard } from "@/components/blog/blog-featured-card";
import { BlogGuideGrid } from "@/components/sections/blog-guide-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { getFeaturedPost } from "@/lib/blog-data";

const enter = "enter-fade-up";

const trustItems = [
  { icon: ShieldCheck, label: "HIPAA Compliant Consultations" },
  { icon: Video, label: "Same-Day Telehealth Evaluation" },
  { icon: CheckCircle2, label: "98% MMIC Approval Rate" },
];

export function BlogListing() {
  const featured = getFeaturedPost();

  return (
    <>
      <section className="bg-mesh-trust bg-grid-faint relative overflow-hidden py-16 sm:py-24">
        <Container className="relative">
          <div className={`mx-auto flex max-w-3xl flex-col items-center text-center ${enter}`}>
            <Badge
              variant="outline"
              className="h-auto rounded-full bg-card px-5 py-2 text-base font-semibold"
            >
              Cannabis Guides
            </Badge>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Your Guide to California
              <br className="hidden sm:block" /> Medical Marijuana
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Expert physician guidance, MMIC compliance notes, qualifying
              health conditions, and cannabis medical insights for California
              patients.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button size="xl" className="rounded-full" asChild>
                <a href="/#get-approved">Get Your CA MMJ Card</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="rounded-full bg-card"
                asChild
              >
                <a href="#latest-guides">Explore Guides</a>
              </Button>
            </div>
          </div>

          <div className={`mt-10 flex flex-wrap items-center justify-center gap-3 ${enter} [animation-delay:200ms]`}>
            {trustItems.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-card/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                <Icon className="size-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <BlogFeaturedCard post={featured} />

      <section
        id="latest-guides"
        className="cv-auto scroll-mt-28 bg-muted/30 py-16 sm:py-20"
      >
        <Container>
          <BlogGuideGrid />
        </Container>
      </section>

      <section className="cv-auto pt-16 pb-4 sm:pt-20 sm:pb-6">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16">
            <Badge className="h-auto rounded-full bg-white/15 px-4 py-1.5 text-primary-foreground hover:bg-white/15">
              Ready to get evaluated?
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Need help with your California MMIC?
            </h2>
            <p className="max-w-xl text-primary-foreground/90">
              Connect with our licensed California physicians online to discuss
              your health needs and get approved for your medical marijuana card
              in 15 minutes.
            </p>
            <Button
              size="xl"
              variant="secondary"
              className="rounded-full"
              asChild
            >
              <a href="/#get-approved">
                Get Digital Consultation
                <ArrowRight />
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
