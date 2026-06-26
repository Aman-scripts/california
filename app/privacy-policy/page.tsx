import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
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
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <LegalPage
      title="Privacy Policy"
      updated="24 September 2025"
      intro={[
        `At ${siteConfig.fullName}, protecting your privacy is part of our commitment to patient care. This Privacy Policy explains what information we collect, how we use it, how it may be shared, and the choices you have.`,
        "If you do not agree with this Privacy Policy, please do not use our website or services.",
      ]}
      sections={[
        {
          heading: "Our Commitment",
          body: [
            "Our practices are designed to comply with HIPAA, the California Consumer Privacy Act (CCPA), the California Privacy Rights Act (CPRA), and applicable state and local laws in California.",
          ],
        },
        {
          heading: "Information We Collect",
          lists: [
            {
              intro: "We may collect the following types of data when you use our services:",
              items: [
                "Personal Details: Name, date of birth, email address, phone number, mailing address, California ID, and proof of California residency.",
                "Medical Information: Health records, medical cannabis recommendation details, and history you provide for evaluation purposes.",
                "Account Information: Login credentials and details you provide when creating an account.",
                "Payment Data: Card or bank details are required when purchasing services.",
                "Location Data: IP address, zip code, or GPS-based data to tailor services and promotions.",
                "Derived & Survey Data: Information collected through contests, giveaways, surveys, and publicly available databases.",
              ],
            },
          ],
        },
        {
          heading: "Why We Use Your Information",
          lists: [
            {
              intro: "We use collected data to:",
              items: [
                "Provide, improve, and personalize our services.",
                "Verify patient identity and eligibility.",
                "Maintain accurate records for compliance and legal requirements.",
                "Contact you about your evaluation, services, or promotions.",
                "Generate reports (such as visits, page views, or traffic patterns) to improve website performance.",
              ],
            },
          ],
          body: [
            "We never sell your personal data, and only authorized staff can access it.",
          ],
        },
        {
          heading: "Cookies & Browser Data",
          body: [
            "Our website uses cookies to improve user experience and deliver personalized content. Cookies help us understand how visitors interact with our site.",
            "Accepting cookies allows you to receive customized features.",
            "Declining cookies may limit your experience.",
            "We also use web analytics tools like Google Analytics and Microsoft Clarity to monitor activity and optimize services.",
          ],
        },
        {
          heading: "Children's Privacy",
          body: [
            "We do not collect data from individuals under 18. Minors may use our services only with verified parental or guardian consent, and a primary caregiver must be assigned.",
          ],
        },
        {
          heading: "Data Security & Storage",
          body: [
            "We use industry-standard encryption and security tools to protect your data from unauthorized access, loss, or misuse.",
            "Personal information is only stored for as long as required to provide services or meet legal or business obligations.",
            "We retain data for recordkeeping, legal compliance, and to defend our contractual rights.",
          ],
        },
        {
          heading: "Sharing of Information",
          lists: [
            {
              intro: "We may share your data only in the following cases:",
              items: [
                "We have licensed doctors, staff, or service providers necessary to deliver our services.",
                "With affiliates or partners for website improvements and promotions (only where permitted).",
                "As required by law, regulation, or government request.",
                "During a business transaction, such as a merger, acquisition, or sale of assets.",
                "With your explicit consent or request.",
              ],
            },
          ],
        },
        {
          heading: "Your Rights",
          lists: [
            {
              intro: "As a California resident and in line with the CCPA, you have the right to:",
              items: [
                "Know what personal data we collect.",
                "Request access to or deletion of your personal information (with some legal exceptions).",
                "Know how we share your information and with whom.",
              ],
            },
          ],
          body: [
            "You can submit a valid data request at any time to exercise these rights.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            `For privacy-related questions or requests, reach out to our ${siteConfig.fullName} support team. We respond within 24 hours.`,
            `Email: ${contactInfo.email}`,
            `Phone: ${contactInfo.phone}`,
            `Address: ${contactInfo.address}`,
          ],
        },
        {
          heading: "Policy Updates",
          body: [
            'We may update this Privacy Policy from time to time. Updates will be posted here with a revised "Last Updated" date. When possible, we will also notify you by email or push notification. Continued use of our services indicates your acceptance of the updated policy.',
          ],
        },
      ]}
      />
    </>
  );
}
