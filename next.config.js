/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH?.replace(/\/$/, '') ?? ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
