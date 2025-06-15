const { withPayload } = require('@payloadcms/next/withPayload');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // output: 'export', // Remove this for Payload CMS
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['localhost'], // Add your domain here
  },
  
};

module.exports = withPayload(nextConfig);