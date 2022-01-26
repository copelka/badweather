import React, { useState } from 'react';
import Forecast from './Forecast.jsx'

const Forecasts = ({ forecasts }) => (
  forecasts.map((forecast, i) => {
    // console.log(forecast);
    const {city_name, temp, ts} = forecast;

    return (
      <Forecast
        key={String(city_name + i + ts)}
        city={city_name}
        temp={temp}
      />
    )
  })
);

export default Forecasts;
