/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ssw',
  assetPrefix: '/ssw',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ssw-two.vercel.app',
      },
    ],
  },
  // Removed i18n object
};

export default nextConfig; 