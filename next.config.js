/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
