/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ssw',
  assetPrefix: '/ssw',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ssw',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig; 