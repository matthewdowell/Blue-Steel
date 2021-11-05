import React, { useState } from 'react';

const Search = () => {

  const[inputValue, setInputValue] = useState('')

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div style={{display: 'flex', border: '2px solid black', height: '50px'}}>
      <input 
        style={{width: '100%', paddingLeft: '10px', border: '0', outline: 'none',}}
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