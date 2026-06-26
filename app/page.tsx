import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/hero-section";
import { faqs, processSteps, reviews, siteConfig } from "@/lib/site-data";

const ProcessSection = dynamic(() =>
  import("@/components/sections/process-section").then((m) => m.ProcessSection)
);
const GetApprovedSection = dynamic(() =>
  import("@/components/sections/get-approved-section").then((m) => m.GetApprovedSection)
);
const BenefitsSection = dynamic(() =>
  import("@/components/sections/benefits-section").then((m) => m.BenefitsSection)
);
const ConditionsSection = dynamic(() =>
  import("@/components/sections/conditions-section").then((m) => m.ConditionsSection)
);
const PricingSection = dynamic(() =>
  import("@/components/sections/pricing-section").then((m) => m.PricingSection)
);
const TrustStatsSection = dynamic(() =>
  import("@/components/sections/trust-stats-section").then((m) => m.TrustStatsSection)
);
const CitiesSection = dynamic(() =>
  import("@/components/sections/cities-section").then((m) => m.CitiesSection)
);
const ReviewsSection = dynamic(() =>
  import("@/components/sections/reviews-section").then((m) => m.ReviewsSection)
);
const FaqSection = dynamic(() =>
  import("@/components/sections/faq-section").then((m) => m.FaqSection)
);
const CtaSection = dynamic(() =>
  import("@/components/sections/cta-section").then((m) => m.CtaSection)
);

// Mirrors the exact `faqs` data FaqSection renders into its accordion, so
// the schema can never drift from what's actually visible on the page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Mirrors the exact `processSteps` data ProcessSection renders, same
// drift-proofing principle as the FAQ schema above.
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Medical Marijuana Card in California",
  step: processSteps.map((step) => ({
    "@type": "HowToStep",
    position: step.step,
    name: step.title,
    text: step.description,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <ProcessSection />
      <GetApprovedSection />
      <BenefitsSection />
      <ConditionsSection />
      <PricingSection />
      <TrustStatsSection />
      <CitiesSection />
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
