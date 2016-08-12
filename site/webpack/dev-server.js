const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const configDev = require('./config.dev');

const app = express();
app.use(express.static('build'));

const compiler = webpack(configDev);

app.use(webpackDevMiddleware(compiler, {
  publicPath: configDev.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.listen(configDev.HOT_PORT, () => {
  console.info(`Development server is listening at port ${configDev.HOT_PORT}.`); // eslint-disable-line
});
