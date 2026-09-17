import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogListing } from "@/components/sections/blog-listing";
import { absoluteUrl, blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cannabis Guides & Medical Insights",
  description:
    "California medical marijuana guides covering MMIC rules, qualifying conditions, patient rights, health benefits, and how to get approved online.",
  keywords: [
    "Is Marijuana Legal in California 2026",
    "California medical marijuana",
    "MMIC",
    "medical marijuana card California",
  ],
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Cannabis Guides & Medical Insights",
    description:
      "California medical marijuana guides covering MMIC rules, qualifying conditions, patient rights, health benefits, and how to get approved online.",
    url: "/blog/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "California medical marijuana guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Guides & Medical Insights",
    description:
      "California medical marijuana guides covering MMIC rules, qualifying conditions, patient rights, health benefits, and how to get approved online.",
    images: ["/og-image.jpg"],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "California Medical Marijuana Guides",
  description:
    "Physician-informed guides on California MMIC rules, qualifying conditions, and patient rights.",
  url: `${siteConfig.url}/blog/`,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: siteConfig.fullName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/mmca-logo.svg"),
    },
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    image: absoluteUrl(post.image ?? "/og-image.jpg"),
    url: `${siteConfig.url}/blog/${post.slug}/`,
  })),
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "California Medical Marijuana Guides",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteConfig.url}/blog/${post.slug}/`,
    name: post.title,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <BlogListing />
    </>
  );
}
