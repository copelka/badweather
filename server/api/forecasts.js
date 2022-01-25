// deconstruct router out of express
const { Router } = require('express');
const Forecasts = Router();
const { getForecastByZipCode } = require('../helper/weatherbit');
const { findForecast, deleteForecast } = require('../db');

Forecasts.get('/', (req, res) => {
  findForecast()
    .then((forecast) => res.status(200).send(forecast))
    .catch((err) => console.warn(err));
});

Forecasts.post('/', (req, res) => {
  const { zip } = req.body;
  getForecastByZipCode(zip)
    .then((forecast) => res.status(200).send(forecast))
    .catch((err) => console.warn(err));
});

Forecasts.delete('/:id', (req, res) => {
  const { id } = req.params;
  return deleteForecast(id)
    .then(data => res.json(data).status(202))
    .catch(err => console.warn(err))
})

module.exports = { Forecasts };
