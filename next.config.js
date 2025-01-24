/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/Franchise",
        destination: "/franchise",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
