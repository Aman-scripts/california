import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { contactInfo, siteConfig } from "@/lib/site-data";

const SiteFooter = dynamic(() =>
  import("@/components/layout/site-footer").then((m) => m.SiteFooter)
);

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/heroSection.webp",
        width: 1200,
        height: 1200,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: ["/heroSection.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c4a3b",
};

// Describes the business itself for search engines. MedicalBusiness (not
// MedicalClinic) because this is a telehealth referral/evaluation service,
// not a walk-in clinic providing direct treatment — see the disclaimer on
// the shipment-policy-and-disclaimer page.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "7127 W Sunset Blvd #4411",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90046",
    addressCountry: "US",
  },
};

// No internal site-search exists, so this intentionally omits a
// SearchAction/potentialAction rather than claiming a feature that isn't
// real.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.fullName,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        poppins.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
