import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const domain = "https://www.theexpshop.com";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, "../app/(marketing)");
const servicesFile = path.join(__dirname, "../app/lib/services.ts");

// Discover static routes by walking the (marketing) route group, so the
// sitemap stays in sync with the actual pages instead of a hardcoded list.
// Route-group folders like "(marketing)" contribute no URL segment, and
// dynamic segments ("[slug]") are skipped here and expanded from data below.
function discoverStaticRoutes(dir, base = "") {
  const routes = [];
  if (fs.existsSync(path.join(dir, "page.tsx"))) routes.push(base || "/");

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("[")) continue;
    const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
    routes.push(...discoverStaticRoutes(path.join(dir, entry.name), base + segment));
  }
  return routes;
}

// Expand the dynamic /services/[slug] route from the service catalog.
const servicesSrc = fs.readFileSync(servicesFile, "utf8");
const serviceRoutes = [...servicesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (m) => `/services/${m[1]}`
);

const routes = [...new Set([...discoverStaticRoutes(appDir), ...serviceRoutes])].sort(
  (a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b))
);

const priorityFor = (route) =>
  route === "/" ? "1.0" : route.startsWith("/services/") ? "0.7" : "0.8";

const lastmod = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);

console.log(`✅ Sitemap generated with ${routes.length} URLs`);
