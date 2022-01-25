const axios = require('axios');
const config = require('../config');

const getForecastByZipCode = (zipOrCity) => {

  let prefix = !isNaN(Number(zipOrCity)) ? 'postal_code' : 'city';

  const url = `http://api.weatherbit.io/v2.0/current?${prefix}=${zipOrCity}&key=${config.WEATHERBIT_TOKEN}`;

  return axios.get(url)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
};

module.exports = { getForecastByZipCode };