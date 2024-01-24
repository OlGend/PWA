const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require("next/constants");
  
  /** @type {import("next").NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
  };
  
  module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
      const withPWA = require("@ducanh2912/next-pwa").default({
        dest: "public",
        fallbacks: {
          // Failed page requests fallback to this.
          document: "/~offline",
          // This is for /_next/.../.json files.
          data: "/fallback.json",
          // This is for images.
          image: "/fallback.webp",
          // This is for audio files.
          audio: "/fallback.mp3",
          // This is for video files.
          video: "/fallback.mp4",
          // This is for fonts.
          font: "/fallback-font.woff2",
        },
        customWorkerSrc: "service-worker",
        customWorkerDest: "somewhere-else", // defaults to `dest`
        customWorkerPrefix: "not/a-worker",
        extendDefaultRuntimeCaching: true,
        workboxOptions: {
          runtimeCaching: [
            // Your runtimeCaching array
          ],
        },
      });
      return withPWA(nextConfig);
    }
    return nextConfig;
  };



 
  