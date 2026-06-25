import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { contactInfo, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Medical Marijuana Card California",
  description: "How we collect, use, and protect your personal and medical information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="January 1, 2026"
      intro={`${siteConfig.fullName} respects your privacy. This policy explains what information we collect, how it is used, and the safeguards we apply, including those required under HIPAA and California privacy law.`}
      sections={[
        {
          heading: "1. Information We Collect",
          body: [
            "We collect identifying information (name, date of birth, contact details, government ID), payment information, and health information you share during your intake form and physician consultation.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          body: [
            "Information is used to schedule and facilitate your consultation, verify your identity and eligibility, issue your recommendation or MMIC card, process payment, and provide customer support.",
          ],
        },
        {
          heading: "3. HIPAA Compliance",
          body: [
            "Protected health information shared with our affiliated physicians is encrypted in transit and at rest, and is only accessible to the clinicians and administrative staff directly involved in your care.",
          ],
        },
        {
          heading: "4. Sharing of Information",
          body: [
            "We do not sell your personal information. We may share information with affiliated licensed physicians, payment processors, and the California county health department only when required to issue an official MMIC, or when required by law.",
          ],
        },
        {
          heading: "5. Your Rights",
          body: [
            "California residents may request access to, correction of, or deletion of their personal information, subject to our recordkeeping obligations as a healthcare-adjacent service. Requests can be made using the contact details below.",
          ],
        },
        {
          heading: "6. Data Retention",
          body: [
            "We retain medical and identity records for the period required by California telehealth and recordkeeping regulations, after which records are securely deleted or anonymized.",
          ],
        },
        {
          heading: "7. Contact",
          body: [`Privacy questions or requests can be sent to ${contactInfo.email}.`],
        },
      ]}
    />
  );
}
