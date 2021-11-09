const nextTranslate = require("next-translate");
const withAntdLess = require("next-plugin-antd-less");
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  // pwa: {
  //   dest: "public",
  //   runtimeCaching,
  // },
  webpack5: false,
  i18n: {
    localeDetection: false,
  },
  lessVarsFilePath: "./public/static/antd-custom.less",
  cssLoaderOptions: {
    esModule: false,
    sourceMap: false,
    modules: {
      mode: "local",
    },
  },

  target: process.env.NEXT_TARGET || "serverless",
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextTranslate(withAntdLess(nextConfig));
