import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-data";

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
      updated="19 September 2025"
      intro={`Welcome to ${siteConfig.fullName}. By visiting or using our website, you agree to these Terms of Use. Please read them carefully before accessing our services.`}
      sections={[
        {
          heading: "About Us",
          body: [
            `${siteConfig.fullName} connects patients with licensed California physicians who evaluate eligibility for medical marijuana under state law. We are not a dispensary and do not sell marijuana products. All recommendations and approvals are issued only by licensed doctors after a proper evaluation.`,
          ],
        },
        {
          heading: "Eligibility to Use Our Services",
          lists: [
            {
              intro: "To use our services:",
              items: [
                "You must be at least 18 years old.",
                "Patients under 18 must have parental or legal guardian consent, as required by California law.",
                "You must be a California resident and provide valid identification along with proof of California residency.",
              ],
            },
          ],
        },
        {
          heading: "How You Can Use Our Services",
          lists: [
            {
              intro: "When using our website or booking an evaluation, you agree to:",
              items: [
                "Provide accurate and truthful information.",
                "Use the platform only for lawful and intended purposes.",
                "Keep your account details and login credentials secure.",
                "Follow California medical marijuana laws and relevant California regulations.",
              ],
            },
            {
              intro: "You must not:",
              items: [
                "Submit false or misleading medical records.",
                "Engage in fraud, unauthorized payments, or disputes.",
                "Hack, disrupt, or misuse our systems.",
                "Copy, resell, or redistribute website content without written permission.",
              ],
            },
          ],
        },
        {
          heading: "Important Medical Disclaimer",
          lists: [
            {
              intro: "The content on this website is for educational purposes only.",
              items: [
                "It is not a substitute for professional medical advice.",
                "Marijuana remains illegal under federal law; recommendations apply only under California state law.",
                "The effects of medical marijuana vary from patient to patient; outcomes cannot be guaranteed.",
              ],
            },
          ],
        },
        {
          heading: "Payments, Refunds & Cancellations",
          body: [
            "Payments: Fees must be paid before your consultation. We accept most major credit and debit cards.",
            "Refunds: Available if your Medical Marijuana Card is not approved or if the recommendation is not delivered within 24–48 hours. Refunds are not offered after issuance.",
            "Cancellations/Rescheduling: You may cancel or reschedule with at least 24–48 hours' notice. Late cancellations may result in additional fees.",
          ],
        },
        {
          heading: "Ownership of Content",
          body: [
            `All materials on this site, including text, graphics, images, videos, and other content, are owned by ${siteConfig.fullName}. You may not copy, distribute, or modify any content without prior written permission.`,
          ],
        },
        {
          heading: "Liability & Limitations",
          lists: [
            {
              intro: "We are not responsible for:",
              items: [
                "Any indirect, incidental, or unexpected damages resulting from use of our services.",
                "Content, products, or services on third-party websites linked from our site.",
                "The results or the effectiveness of medical marijuana treatments.",
              ],
            },
          ],
          body: [
            "Our maximum liability is limited to the amount you paid for the service in question.",
          ],
        },
        {
          heading: "Your Agreement to Protect Us",
          body: [
            `By using this website, you agree to indemnify and hold harmless ${siteConfig.fullName}, its staff, and affiliated physicians against claims, losses, or expenses arising from misuse of our services or violations of these Terms.`,
          ],
        },
        {
          heading: "Privacy",
          body: [
            <>
              Your use of this site is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="text-foreground underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, store, and protect your personal
              information.
            </>,
          ],
        },
        {
          heading: "Termination or Changes to Services",
          body: [
            "We may suspend or terminate your access if these Terms are violated.",
            "We may update, modify, or discontinue parts of the website at any time.",
            "Certain obligations, such as payments, intellectual property rights, and liability limits, will continue even after termination.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These Terms are governed by California law. Any disputes must be resolved in the courts of California County, California, which serves the city of California.",
          ],
        },
        {
          heading: "Updates to Terms",
          body: [
            "We may update these Terms at any time without prior notice. Updates are effective immediately upon posting. Continued use of our website means you accept the updated Terms.",
          ],
        },
      ]}
    />
  );
}
