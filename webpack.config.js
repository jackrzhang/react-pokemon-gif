/* eslint-disable global-require */
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'build/');
const SRC_DIR = path.join(__dirname, 'lib/');

const config = {
  entry: [
    `${SRC_DIR}react-pokemon-gif.js`
  ],
  output: {
    path: BUILD_DIR,
    filename: 'react-pokemon-gif.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        include: SRC_DIR,
        loaders: ['babel']
      }
    ]
  },
  devtool: 'source-map'
};

module.exports = config;
