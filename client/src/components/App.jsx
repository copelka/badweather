import React, { useState } from 'react';
import Forecasts from './Forecasts.jsx';
import axios from 'axios';
import Search from './Search.jsx';
import styled from 'styled-components';
import './styles.css'
const Container = styled.div`
  margin: 0 auto;
  width: 50%;
`;

const H1 = styled.h1`
  font-family: 'Averia Sans Libre', cursive;
  text-align: center;
`;

const App = () => {
  const [ forecasts, setForecasts ] = useState([]);

  const handleSearch = (zip) => {
    console.info(zip);
    axios.post('/api/forecasts', { zip })
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
