const config = require('../config');
const webpackConfig = require('../webpack.config.js');

const multipart = require('multer')();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const app = express();

const devServerEnabled = true;

if (devServerEnabled) {
    webpackConfig.mode = 'development';
    webpackConfig.entry.app.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 'webpack/hot/only-dev-server');
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(config.distDirectory));

app.get('/', (req, res) => {
    res.sendFile(`${config.distDirectory}/index.html`)
});

app.listen(config.serverPort, () => console.log(`Example app listening on port ${config.serverPort}!`));
