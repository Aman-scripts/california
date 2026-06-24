import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/hero-section";

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

export default function Home() {
  return (
    <>
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
