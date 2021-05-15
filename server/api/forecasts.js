// deconstruct router out of express
const { Router } = require('express');
const Forecasts = Router();
const { getForecastByZipCode } = require('../helper/weatherbit');
const { findForecast } = require('../db');

Forecasts.get('/', (req, res) => {
  findForecast()
    .then((forecast) => res.status(200).send(forecast))
    .catch((err) => console.warn(err));
});

Forecasts.post('/', (req, res) => {
  const { zip } = req.body;
  console.info('ZIP ------', zip);
  getForecastByZipCode(zip)
    .then((forecast) => res.status(200).send(forecast))
    .catch((err) => console.warn(err));
});

module.exports = { Forecasts };
