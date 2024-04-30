const withSvg = (nextConfig = {}, svgrOptions={}, nextComposePlugins = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (Object.keys(svgrOptions).length > 0) {
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: svgrOptions
            }
          ]

        })
      } else {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};

module.exports = withSvg;
