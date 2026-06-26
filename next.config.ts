import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
  },
  // Normalizes to /path/ everywhere; Next.js auto-redirects /path -> /path/.
  // Static file URLs (sitemap.xml, robots.txt, anything with an extension)
  // are exempt per the docs, so those are unaffected.
  trailingSlash: true,
};

export default nextConfig;
