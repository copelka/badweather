import React, { useState } from 'react';
import styled from 'styled-components';

const Forecast = ({ city, temp }) => {

  const celsiusToFahrenheit = (celsius) => Math.round(celsius * (9 / 5) + 32);

  const ForecastCard = styled.div`
    margin-top: 50px;
    padding: 10px 25px;
    width: 100%;
    text-align: center;
    background-color: #00032e;
    border: 1px solid #00032e;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 10px 10px 40px #000327,
    -10px -10px 40px #000335;
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
