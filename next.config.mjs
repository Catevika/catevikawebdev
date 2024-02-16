/** @type {import('next').NextConfig} */
import localesPlugin from '@react-aria/optimize-locales-plugin';

const nextConfig = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: [ 'en' ],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'catevikawebdev.com',
        defaultLocale: 'en',
        http: true
      } ]
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({ locales: [] }));
    }
    return config;
  }
};

export default nextConfig;
