/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        JWT_SECRET: 'secret',
      }
}

module.exports = nextConfig
