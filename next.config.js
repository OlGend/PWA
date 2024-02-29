// const {
//     PHASE_DEVELOPMENT_SERVER,
//     PHASE_PRODUCTION_BUILD,
//   } = require("next/constants");
  
//   /** @type {import("next").NextConfig} */
//   const nextConfig = {
//     reactStrictMode: true,
//   };
  
//   module.exports = (phase) => {
//     if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
//       const withPWA = require("@ducanh2912/next-pwa").default({
//         dest: "public",
//       });
//       return withPWA(nextConfig);
//     }
//     return nextConfig;
//   };



 
  const withPWA = require("@ducanh2912/next-pwa").default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
      //image: "/static/images/fallback.png",
      document: "/offline", // if you want to fallback to a custom page rather than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
    workboxOptions: {
      disableDevLogs: true,
    },
    // ... other options you like
  });
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // ... other options you like
  };
  
  module.exports = withPWA(nextConfig);