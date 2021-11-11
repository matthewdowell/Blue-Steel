import React, { useState } from 'react';

const Search = ({ inputValue, handleInputChange }) => {

  return (
    <div style={{display: 'flex', border: '2px solid black', height: '50px', borderRadius: '15px'}}>
      <input 
        style={{width: '100%', paddingLeft: '10px', border: '0', outline: 'none', borderRadius: '15px'}}
        placeholder={'HAVE A QUESTION? SEARCH FOR ANSWERS...'}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px'}}>
        <i className="fas fa-search"></i>
      </div>
    </div>
  )
}
export default Search;