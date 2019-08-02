// const path = require('path');
const aliases = require('./aliases');
const path = process.cwd();

const entry = [`${path}/src/index`];

const output = {
    path: `${path}/dist`,
    filename: 'bundle.js'
};

module.exports = {
    entry,
    output,
    aliases
};