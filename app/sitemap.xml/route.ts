import { siteConfig } from "@/lib/site-data";

const routes = [
  "/",
  "/contact-us/",
  "/privacy-policy/",
  "/refund-policy/",
  "/terms-of-use/",
  "/shipment-policy-and-disclaimer/",
];

export async function GET() {
  const lastmod = new Date().toISOString();

  const urlEntries = routes
    .map(
      (route) => `  <url>
    <loc>${siteConfig.url}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "/" ? "1" : "0.5"}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: new Headers({ "content-type": "application/xml" }),
  });
}
