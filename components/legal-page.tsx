import type { ReactNode } from "react";

import Link from "next/link";

import { Container } from "@/components/layout/container";

export type LegalList = {
  intro?: string;
  items: string[];
};

export type LegalSubsection = {
  heading: string;
  body?: ReactNode[];
  lists?: LegalList[];
};

export type LegalSection = {
  heading: string;
  body?: ReactNode[];
  lists?: LegalList[];
  subsections?: LegalSubsection[];
};

type LegalPageProps = {
  title: string;
  updated?: string;
  intro: string | string[];
  sections: LegalSection[];
};

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  const introParagraphs = Array.isArray(intro) ? intro : [intro];

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        {updated ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {updated}
          </p>
        ) : null}
        {introParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={index === 0 ? "mt-6 text-muted-foreground" : "mt-3 text-muted-foreground"}
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-xl font-semibold">
                {section.heading}
              </h2>
              <div className="mt-2 space-y-3 text-muted-foreground">
                {section.lists?.map((list, listIndex) => (
                  <div key={listIndex} className="space-y-2">
                    {list.intro ? <p>{list.intro}</p> : null}
                    <ul className="list-disc space-y-1 pl-5">
                      {list.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {section.body?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.subsections?.map((subsection) => (
                  <div key={subsection.heading} className="space-y-3">
                    <h3 className="font-heading text-lg font-medium text-foreground">
                      {subsection.heading}
                    </h3>
                    {subsection.lists?.map((list, listIndex) => (
                      <div key={listIndex} className="space-y-2">
                        {list.intro ? <p>{list.intro}</p> : null}
                        <ul className="list-disc space-y-1 pl-5">
                          {list.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {subsection.body?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
