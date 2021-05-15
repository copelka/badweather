import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [zip, setZip] = useState('');

  const handleChange = (e) => setZip(e.target.value);

  const handleClick = () => onSearch(zip);

  return (
    <div>
      <h4>Enter a Zip Code</h4>
      <input value={zip} onChange={handleChange} />
      <button onClick={handleClick} type="button">Get current temperature</button>
    </div>
  );
}

export default Search;