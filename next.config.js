/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://luuqad.com/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
