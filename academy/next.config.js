/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-gfm'),
      require('remark-validate-links'),
    ],
    rehypePlugins: [
      require('rehype-slug'),
      require('rehype-highlight'),
      [require('rehype-toc'), { headings: ['h2', 'h3'] }],
    ],
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Deployment configuration
  basePath: '/academy',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '/academy',

  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, must-revalidate',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for legacy URLs
  async redirects() {
    return [
      {
        source: '/docs/:path*',
        destination: '/academy/docs/:path*',
        permanent: true,
      },
      {
        source: '/modules/:path*',
        destination: '/academy/modules/:path*',
        permanent: true,
      },
    ];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_NAME: 'UKG WFM Academy',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'Production-grade learning for UKG workforce management systems',
  },

  // Experimental features
  experimental: {
    esmExternals: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.runtimeChunk = 'single';
    }
    return config;
  },
};

module.exports = withMDX(nextConfig);
