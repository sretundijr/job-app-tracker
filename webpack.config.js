const path = require('path');

const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, 'dist');
const CLIENT_DIR = path.join(__dirname, 'src');

module.exports = {
  context: CLIENT_DIR,

  entry: [
    'webpack-hot-middleware/client',
    './main',
  ],

  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
