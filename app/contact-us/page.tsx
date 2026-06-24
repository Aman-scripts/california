import type { Metadata } from "next";

import { ContactPageContent } from "@/components/sections/contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us | Medical Marijuana Card California",
  description:
    "Get in touch with our team or book your online medical marijuana card appointment with a licensed California physician.",
};

export default function ContactUsPage() {
  return <ContactPageContent />;
}
