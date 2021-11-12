/* eslint-disable react/prop-types */
import React from 'react';

const Search = ({ inputValue, handleInputChange }) => (
  <div style={{
    display: 'flex', border: '2px solid black', height: '50px', borderRadius: '15px', background: '#DEB992',
  }}
  >
    <input
      style={{
        width: '100%', paddingLeft: '10px', border: '0', outline: 'none', borderRadius: '15px',
      }}
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      value={inputValue}
      onChange={handleInputChange}
    />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '10px',
      color: '#051622',
    }}
    >
      <i className="fas fa-search" />
    </div>
  </div>
);

export default Search;
