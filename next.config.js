/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "fr"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "fr",
    localeDetection: false,
  },
  ignoreBuildErrors: true,
};

module.exports = nextConfig;

// module.exports = {
//   i18n: {
//     locales: ["en", "fr"],
//     defaultLocale: "en",
//   },
// };
