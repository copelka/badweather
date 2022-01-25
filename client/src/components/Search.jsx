import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #f2d13d;
  color: #000112;
  border: 2px solid #f2d13d;
`

const Search = ({ onSearch }) => {
  const [zip, setZip] = useState('');

  const handleChange = (e) => setZip(e.target.value);

  const handleClick = () => onSearch(zip);

  return (
    <div>
      <h4>Enter a Zip Code</h4>
      <input value={zip} onChange={handleChange} />
      <Button
        onClick={handleClick}
        type="button">Get current temperature</Button>
    </div>
  );
}

export default Search;