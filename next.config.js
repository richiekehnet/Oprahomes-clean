/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // <-- this replaces `next export`
}

module.exports = nextConfig
