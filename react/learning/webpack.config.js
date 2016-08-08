module.exports = {
  entry: ['./app.js', './global.js'],
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  modules: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
