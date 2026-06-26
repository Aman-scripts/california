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
      intro={[
        `At ${siteConfig.fullName}, we make sure your medical marijuana card is delivered safely and on time. Once your application is approved, your card will be shipped, and you can expect to receive it within 10–12 business days.`,
        "If your card doesn't arrive, or if it comes damaged or with incorrect details, please contact us immediately. Our team will review your case and give you a solution within 24 hours.",
      ]}
      sections={[
        {
          heading: "Support & Contact",
          body: [
            "Our team is available 24/7 to assist with any shipping questions or concerns.",
            `Email: ${contactInfo.email}`,
            `Phone: ${contactInfo.phone}`,
            "We remain committed to ensuring your Medical Marijuana Card reaches you securely and on time so you can enjoy seamless access to your medication.",
          ],
        },
        {
          heading: "Disclaimer",
          body: [
            `The information on this website is for educational purposes only and should not be taken as medical or legal advice. ${siteConfig.fullName} is not a medical clinic and does not provide direct medical treatment. Our role is to connect California patients with licensed healthcare professionals who are authorized to evaluate qualifying conditions for medical marijuana use under California law.`,
            "Approval is based solely on the evaluating physician's decision, and not every applicant will qualify. Medical marijuana use is governed by California state law and may also be subject to California's local regulations. Patients are responsible for knowing and following all applicable city, state, and federal laws. For personalized guidance, always consult a qualified healthcare provider.",
          ],
        },
      ]}
    />
  );
}
