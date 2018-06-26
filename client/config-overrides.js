const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config, env) {
  config = injectBabelPlugin([
    'emotion',
    {
      sourceMap: true,
      autoLabel: true
    }
  ], config)

  return config
}
