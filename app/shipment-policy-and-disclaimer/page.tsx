import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { contactInfo, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Shipment Policy & Disclaimer | Medical Marijuana Card California",
  description: "Shipping details for physical MMIC ID cards and important disclaimers about our service.",
  alternates: {
    canonical: "/shipment-policy-and-disclaimer",
  },
};

export default function ShipmentPolicyAndDisclaimerPage() {
  return (
    <LegalPage
      title="Shipment Policy & Disclaimer"
      updated="January 1, 2026"
      intro="This page explains how physical Medical Marijuana ID cards are shipped, and sets out important disclaimers about the nature of our service."
      sections={[
        {
          heading: "1. What Gets Shipped",
          body: [
            "Gold and Platinum plans include a physical plastic MMIC ID card. Basic plan patients receive a digital recommendation only and no physical item is shipped.",
          ],
        },
        {
          heading: "2. Shipping Timeline",
          body: [
            "Physical cards are printed and shipped within 2-5 business days of your approved evaluation, via standard USPS mail within California. Delivery typically takes 3-7 business days after shipment.",
          ],
        },
        {
          heading: "3. Discreet Packaging",
          body: [
            "All physical mail is shipped in plain, unmarked packaging with no reference to cannabis or medical marijuana on the exterior, to protect your privacy.",
          ],
        },
        {
          heading: "4. Disclaimer",
          body: [
            `${siteConfig.fullName} does not sell, ship, or distribute cannabis, cannabis products, or any controlled substance of any kind. We are a network of independent, licensed doctors and nurse practitioners who provide telehealth medical evaluations. Any product that ships from us is limited strictly to identification cards and printed recommendation documents.`,
            "Medical cannabis recommendations are subject to California state law, which may change. Patients are responsible for understanding and complying with current state and local regulations regarding possession, cultivation, and use.",
          ],
        },
        {
          heading: "5. Contact",
          body: [`Shipping questions can be directed to ${contactInfo.email} or ${contactInfo.phone}.`],
        },
      ]}
    />
  );
}
