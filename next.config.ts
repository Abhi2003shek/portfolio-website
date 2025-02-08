import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
