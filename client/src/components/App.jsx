import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search.jsx';

const App = () => {
  const [ forecasts, setForecasts ] = useState([]);

  const handleSearch = (zip) => {
    console.info(zip);
    axios.post('/api/forecasts', { zip })
    .then(({ data: { data } }) => setForecasts([...data]))
    .catch((err) => console.warn(err));
  }

  const celsiusToFahrenheit = (celsius) => Math.round(celsius * (9 / 5) + 32);

  return (
    <div>
      <h1>Bad Weather</h1>

      <Search onSearch={handleSearch} />
      {forecasts.map(({city_name, temp}, i) => (
        <div key={String(i)}>
          <h3>{city_name}: {celsiusToFahrenheit(temp)}°F</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
