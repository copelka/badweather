import React, { useState } from 'react';
import Forecasts from './Forecasts.jsx';
import axios from 'axios';
import Search from './Search.jsx';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  width: 100%;
`;

const H1 = styled.h1`
  font-family: 'Averia Sans Libre', cursive;
  text-align: center;
  font-size: 3em;
`;

const App = () => {
  const [ forecasts, setForecasts ] = useState([]);

  const handleSearch = (zipOrCity) => {
    axios.post('/api/forecasts', { zipOrCity })
      .then(({ data: { data } }) => setForecasts([...data]))
      .catch((err) => console.warn(err));
  }

  return (
    <Container>
      <H1>bad weather</H1>
      <Search onSearch={handleSearch} />
      <Forecasts forecasts={forecasts} />
    </Container>
  );
}

export default App;
