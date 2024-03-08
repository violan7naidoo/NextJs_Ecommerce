
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: ["cdn.sanity.io"],
  },
  // other configuration options...
};

module.exports = nextConfig;
