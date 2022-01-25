import React, { useState } from 'react';
import Forecast from './Forecast.jsx'

const Forecasts = ({ forecasts }) => {

  return forecasts.map(({city_name, temp}, i) => (
    <Forecast
      key={String(city_name + i)}
      city={city_name}
      temp={temp}
    />
  ));
}

export default Forecasts;
