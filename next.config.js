const { withPayload } = require('@payloadcms/next/withPayload');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Remove this for Payload CMS
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['localhost'], // Add your domain here
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withPayload(nextConfig);