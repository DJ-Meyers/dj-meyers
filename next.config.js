/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/poke',
        destination: 'https://dj-meyers.github.io/poke/',
      },
      {
        source: '/poke/:path*',
        destination: 'https://dj-meyers.github.io/poke/:path*',
      },
    ];
  },
}

module.exports = nextConfig
