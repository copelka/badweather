import React, { useState } from 'react';
import styled from 'styled-components';

const Forecast = ({ city, temp }) => {

  const celsiusToFahrenheit = (celsius) => Math.round(celsius * (9 / 5) + 32);

  const ForecastCard = styled.div`
    width: 250px;
    display: flex;
    justify-content: center;
    flex-flow: column;
  `

  const CurrentTemperature = styled.div`
    font-size: 3em;
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
