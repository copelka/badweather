import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.375rem;
  margin: 0.5rem 1rem;
  border: 2px solid #fff;
  width: 15rem;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.25rem 0.375rem;
  margin: 0.5rem 1rem;
  background: #f2d13d;
  color: #000112;
  border: 2px solid #f2d13d;
  width: 15rem;
  text-align: center;
`

const Search = ({ onSearch }) => {
  const [zipOrCity, setZipOrCity] = useState('');

  const handleChange = (e) => setZipOrCity(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(zipOrCity)
  };

  return (
    <SearchContainer>
      <h4>Enter a Zip Code or City</h4>
      <Input value={zipOrCity} onChange={handleChange} placeholder='zip code or city'/>
      <Button
        onClick={handleClick}
        type="button">gimme gimme temp
      </Button>
    </SearchContainer>
  );
}

export default Search;