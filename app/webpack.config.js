const path = require('path');

const config = {
  context: path.join(__dirname, '.'),
  entry: [
    './app-source.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app-bundle.js',
    publicPath: '/build/',
    hashFunction: 'xxhash64',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, ""),
    },
  },
  optimization: {
    minimize: false,
  },
};
module.exports = config;
