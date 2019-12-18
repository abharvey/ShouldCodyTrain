const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/', routes);
app.get('/test', (req, res) => res.send('Hello World!'));

module.exports = app;
