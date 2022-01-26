import React, { useState } from 'react';
import styled from 'styled-components';

const Forecast = ({ city, temp }) => {

  const celsiusToFahrenheit = (celsius) => Math.round(celsius * (9 / 5) + 32);

  const ForecastCard = styled.div`
    width: 100%;
    justify-content: center;
    background-color: blue;
  `

  const CurrentTemperature = styled.div`
    font-size: 10em;
    font-family: 'Averia Sans Libre', cursive;
    align-items: center;
  `

  return (
    <ForecastCard>
      <h3>Current weather in {city}</h3>
      <CurrentTemperature>
        {celsiusToFahrenheit(temp)}°F
      </CurrentTemperature>
    </ForecastCard>
  );
}

export default Forecast;
