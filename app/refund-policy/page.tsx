import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { contactInfo, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Refund Policy | Medical Marijuana Card California",
  description: "Our money-back guarantee and refund eligibility for medical marijuana card evaluations.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="January 1, 2026"
      intro={`${siteConfig.fullName} stands behind every evaluation with a money-back guarantee. This policy explains when a refund applies and how to request one.`}
      sections={[
        {
          heading: "1. Money-Back Guarantee",
          body: [
            "If the evaluating physician determines, in their clinical judgment, that you do not qualify for a medical cannabis recommendation, you are entitled to a full refund of your consultation fee.",
          ],
        },
        {
          heading: "2. Non-Refundable Circumstances",
          body: [
            "Fees are not refundable once a recommendation has been issued, once a physical MMIC card has been printed and shipped, or in cases where a patient provides false information during intake.",
          ],
        },
        {
          heading: "3. Missed Appointments",
          body: [
            "If you miss a scheduled consultation without rescheduling at least 24 hours in advance, your appointment fee is non-refundable, though we will make reasonable efforts to help you reschedule.",
          ],
        },
        {
          heading: "4. How to Request a Refund",
          body: [
            `To request a refund, contact our support team at ${contactInfo.email} or ${contactInfo.phone} with your name and appointment date. Approved refunds are processed to the original payment method within 5-10 business days.`,
          ],
        },
      ]}
    />
  );
}
