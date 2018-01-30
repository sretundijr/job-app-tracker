const path = require('path');
const express = require('express');

const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 8080;
const app = express();

let webpack = require('webpack');
let webpackConfig = require('../webpack.config');
let compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// Serving the files on the dist folder
app.use(express.static(DIST_DIR));

// Send index.html when the user access the web
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT);
