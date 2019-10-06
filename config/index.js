const path = require('path');
const aliases = require('./aliases');

const rootDirectory = path.join(__dirname, '..');

const distDirectory = path.join(rootDirectory, 'dist');

const serverPort = 3000;

const entry = {
    app: [path.join(rootDirectory, 'src/index')]
};

const output = {
    path: distDirectory,
    publicPath: '/js/',
    filename: '[name].js'
};

module.exports = {
    rootDirectory,
    distDirectory,
    serverPort,
    entry,
    output,
    aliases
};