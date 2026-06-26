import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function CtaSection() {
  return (
    <section className="cv-auto py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Get Your Medical Marijuana Card?
          </h2>
          <p className="max-w-xl text-primary-foreground">
            Book your appointment today and talk to a licensed doctor within
            24-48 hours, with a 100% money-back guarantee.
          </p>
          <Button size="xl" variant="secondary" asChild>
            <a href="/#get-approved">Book My Appointment</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
