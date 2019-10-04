// const path = require('path');
const aliases = require('./aliases');
const path = process.cwd();

const serverPort = 3000;

const entry = [`${path}/src/index`];

const output = {
    path: `${path}/dist`,
    filename: 'bundle.js'
};

module.exports = {
    serverPort,
    entry,
    output,
    aliases
};