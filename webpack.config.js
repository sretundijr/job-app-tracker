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
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
            },
          },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
