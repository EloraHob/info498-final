/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  assetPrefix: isProd ? '/info498-final' : '',
  basePath: isProd ? '/info498-final' : '',
};