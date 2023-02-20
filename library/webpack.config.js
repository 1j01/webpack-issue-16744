const path = require('path');

module.exports = {
  context: path.join(__dirname, '.'),
  entry: [
    './library-source.js',
  ],
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "library-build.js",
    library: {
      type: 'module',
    },
    hashFunction: 'xxhash64',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.coffee$/,
  //       use: ['coffee-loader'],
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     },
  //   ],
  // },
  optimization: {
    minimize: false,
  },
};
