import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactPageContentDummy } from "@/components/sections/contact-page-content-dummy";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team or book your online medical marijuana card appointment with a licensed California physician.",
  alternates: {
    canonical: "/contact-us/",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <ContactPageContentDummy />
    </>
  );
}
