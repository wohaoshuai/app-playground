/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    domains: ['picsum.photos', 'stable-diffusion-art.com'],
  },
};

module.exports = withMDX(nextConfig);
