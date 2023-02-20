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
    filename: "library-bundle.esm.js",
    library: {
      type: 'module',
    },
  },
  optimization: {
    minimize: false,
  },
};
