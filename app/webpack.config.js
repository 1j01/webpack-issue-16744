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
  },
  optimization: {
    minimize: false,
  },
};
module.exports = config;
