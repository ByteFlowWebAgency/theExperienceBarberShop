import fs from "fs";
import path from "path";

const domain = "https://www.theexpshop.com";

const pages = [
  "/",
  "/franchise",
  "/gallery"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${domain}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);

console.log("✅ Sitemap generated successfully!");
