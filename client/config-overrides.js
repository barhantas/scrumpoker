const rewireCss = require('./rewire-css');

module.exports = function override(config, env) {
  config = rewireCss(config, env);
  return config;
};