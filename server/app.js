const express = require('express');
const app = express();
const path = require('path');
const { Forecasts } = require('./api/forecasts');

const browserPath = path.resolve(__dirname, '../client/dist')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(browserPath));

app.use('/api/forecasts', Forecasts);

module.exports = { app };
