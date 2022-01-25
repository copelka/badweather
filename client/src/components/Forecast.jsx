import React, { useState } from 'react';

const Forecast = ({ city, temp }) => {

  const celsiusToFahrenheit = (celsius) => Math.round(celsius * (9 / 5) + 32);

  return (
      <h3>{city}: {celsiusToFahrenheit(temp)}°F</h3>
  );
}

export default Forecast;
