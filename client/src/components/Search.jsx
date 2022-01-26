import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.25rem;
  margin: 0.5rem 1rem;
  background: #f2d13d;
  color: #000112;
  border: 2px solid #f2d13d;
`

const Search = ({ onSearch }) => {
  const [zipOrCity, setZipOrCity] = useState('');

  const handleChange = (e) => setZipOrCity(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(zipOrCity)
  };

  return (
    <div>
      <h4>Enter a Zip Code</h4>
      <input value={zipOrCity} onChange={handleChange} />
      <Button
        onClick={handleClick}
        type="button">Get current temperature
      </Button>
    </div>
  );
}

export default Search;