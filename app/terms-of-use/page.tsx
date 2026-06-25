import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { contactInfo, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Use | Medical Marijuana Card California",
  description: "The terms and conditions governing your use of our website and telehealth services.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="January 1, 2026"
      intro={`These Terms of Use ("Terms") govern your access to and use of ${siteConfig.fullName} (the "Service"). By using the Service, you agree to be bound by these Terms.`}
      sections={[
        {
          heading: "1. Nature of the Service",
          body: [
            `${siteConfig.fullName} is a telehealth platform that connects patients with independent, licensed physicians and nurse practitioners for medical cannabis evaluations in California. We do not sell, distribute, cultivate, or dispense cannabis or any controlled substance. We are not a pharmacy or a dispensary.`,
            "Any recommendation issued by a physician through the Service is provided at that physician's sole clinical discretion and is not guaranteed.",
          ],
        },
        {
          heading: "2. Eligibility",
          body: [
            "You must be a California resident or physically present in California at the time of your consultation, and at least 18 years of age, or have the consent of a parent or legal guardian if you are a minor, to use the Service.",
          ],
        },
        {
          heading: "3. Account & Information Accuracy",
          body: [
            "You agree to provide accurate, current, and complete information during the intake process, including a valid government-issued ID and a truthful account of your medical history. Providing false information may result in denial of service.",
          ],
        },
        {
          heading: "4. Payments & Plans",
          body: [
            "Fees for evaluations and add-on products (such as physical ID cards) are displayed prior to checkout. Fees are charged for the physician consultation and related administrative services, not for the sale of cannabis or a guaranteed outcome.",
          ],
        },
        {
          heading: "5. Limitation of Liability",
          body: [
            `${siteConfig.fullName} is not liable for the clinical decisions made by independent physicians, for changes in state or local cannabis law, or for any indirect, incidental, or consequential damages arising from use of the Service.`,
          ],
        },
        {
          heading: "6. Changes to These Terms",
          body: [
            "We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.",
          ],
        },
        {
          heading: "7. Contact",
          body: [`Questions about these Terms can be sent to ${contactInfo.email}.`],
        },
      ]}
    />
  );
}
