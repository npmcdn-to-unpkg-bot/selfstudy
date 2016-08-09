const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicpath: '/',
  },
  module: {
    loaders: [{
      test: /\.js?/,
      exclude: /node_module/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
};
