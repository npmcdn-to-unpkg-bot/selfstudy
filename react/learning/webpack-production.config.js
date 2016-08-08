// Strip Loader removes unwanted statements from the production code
const WebpackStripLoader = require('strip-loader');
const devConfig = require('./webpack.config');

const stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  // Asking strip loader to remove any console.log statements from our build
  loader: WebpackStripLoader.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
