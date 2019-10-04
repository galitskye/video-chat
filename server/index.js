const config = require('../config');

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('./index.html'));

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.listen(config.serverPort, () => console.log(`Example app listening on port ${config.serverPort}!`));