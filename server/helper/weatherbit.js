const axios = require('axios');
const { WEATHERBIT_TOKEN } = require('../config');

const getForecastByZipCode = (zipOrCity) => {

  let prefix = !isNaN(Number(zipOrCity)) ? 'postal_code' : 'city';

  return axios.get(`http://api.weatherbit.io/v2.0/current?${prefix}=${zipOrCity}&key=${WEATHERBIT_TOKEN}`)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
};

module.exports = { getForecastByZipCode };