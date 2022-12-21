const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {

    config.plugins = [
      postcss({ modules: true }),
      ...config.plugins,
    ];
    return config;
  },
};
