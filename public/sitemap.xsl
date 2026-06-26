<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap</title>
        <style>
          body {
            font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
            color: #1a1a1a;
            margin: 2rem auto;
            max-width: 900px;
            padding: 0 1rem;
          }
          h1 { font-size: 1.5rem; }
          .info {
            background: #eef6f0;
            border: 1px solid #cfe8d8;
            border-radius: 8px;
            padding: 1rem 1.25rem;
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
          }
          th, td {
            text-align: left;
            padding: 0.6rem 0.75rem;
            border-bottom: 1px solid #e5e5e5;
          }
          th {
            background: #f5f5f5;
            font-weight: 600;
          }
          tr:hover td { background: #fafafa; }
          a { color: #0c4a3b; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <div class="info">
          This XML sitemap is generated for search engines following the
          <a href="https://www.sitemaps.org/" target="_blank">sitemap.org protocol</a>.
          It lists every page on this site along with when it was last updated.
        </div>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc" />
                  </a>
                </td>
                <td><xsl:value-of select="sitemap:lastmod" /></td>
                <td><xsl:value-of select="sitemap:changefreq" /></td>
                <td><xsl:value-of select="sitemap:priority" /></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
