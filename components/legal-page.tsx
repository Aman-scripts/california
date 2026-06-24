import { Container } from "@/components/layout/container";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {updated}
        </p>
        <p className="mt-6 text-muted-foreground">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-xl font-semibold">
                {section.heading}
              </h2>
              <div className="mt-2 space-y-3 text-muted-foreground">
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
