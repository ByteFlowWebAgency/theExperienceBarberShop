/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    async rewrites() {
      return [{ source: "/sitemap.xml", destination: "/api/sitemap" }];
    },
  };
  