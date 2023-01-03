const withTM = require('next-transpile-modules')(['ui']);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});
const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  compiler: {
    reactRemoveProperties: true,
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error'],
          }
        : false,
    emotion: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.build.json',
  },
  // i18n,
  async redirects() {
    return [{ source: '/', destination: '/games', permanent: false }];
  },
};

module.exports = withTM(withMDX(nextConfig));
