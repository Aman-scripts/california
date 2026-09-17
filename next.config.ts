import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
  },
  // Normalizes to /path/ everywhere; Next.js auto-redirects /path -> /path/.
  // Static file URLs (sitemap.xml, robots.txt, anything with an extension)
  // are exempt per the docs, so those are unaffected.
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/blog/is-marijuana-legal-in-california-2026",
        destination: "/blog/is-marijuana-legal-in-california/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
