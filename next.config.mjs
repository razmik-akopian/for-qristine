/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/for-qristine',
  assetPrefix: '/for-qristine/',
};

export default nextConfig;
