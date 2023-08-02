/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Update here your access credential
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
}

module.exports = nextConfig
