const express = require('express');
const app = express();
const path = require('path');

const browserPath = path.resolve(__dirname, '../client/dist')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(browserPath));

module.exports = { app };
