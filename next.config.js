// const { i18n } = require('./next-i18next.config')
const withCss = require("@zeit/next-css");

module.exports = withCss({
  cssModules: true
});
module.exports = {
  // i18n,
  trailingSlash: true,
  eslint: { 
    ignoreDuringBuilds: true, 
  },
  images:
  {unoptimized : true
  },
}