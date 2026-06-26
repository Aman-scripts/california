import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/contact-us/",
    "/privacy-policy/",
    "/refund-policy/",
    "/terms-of-use/",
    "/shipment-policy-and-disclaimer/",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "yearly",
    priority: route === "/" ? 1 : 0.5,
  }));
}
