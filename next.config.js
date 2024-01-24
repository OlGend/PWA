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
      });
      return withPWA(nextConfig);
    }
    return nextConfig;
  };





  {"short_name":"MAW","dir":"auto","name":"MAW","background_color":"#030654","theme_color":"#030654","display":"standalone","orientation":"any","start_url":"https://betboutique.store","scope":"https://betboutique.store","id":"https://betboutique.store/w71Ukncac2e9ljfS9kMw","prefer_related_applications":false,"related_applications":[],"icons":[{"src":"https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/d4ou8XvMW75jSIw9mGxK%2FvcNSKtOJlOFncKg.png?alt=media&token=4b286e72-79bb-4249-b9e7-f11c0d74d90d","sizes":"512x512","type":"image/png","purpose":"any"},{"src":"https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/d4ou8XvMW75jSIw9mGxK%2FpsrKznbLFCdNjBr.png?alt=media&token=c3854073-5aa5-4501-a902-9f663bd93c1b","sizes":"512x512","type":"image/png","purpose":"maskable"}],
  "protocol_handlers":[
    {"protocol":"web+pwa","url":"https://betboutique.store/?pwaprotocolredirect=%s"},{"protocol":"web+zrbxeckd","url":"https://betboutique.store/?pwaprotocolredirect=%s"}
]}