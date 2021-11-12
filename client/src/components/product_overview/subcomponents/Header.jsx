import React from 'react';

const Header = () => (
  <div style={{
    border: 'none', background: 'gray', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
  }}
  >
    <h1 style={{ color: 'white', fontStyle: 'italic', textDecoration: 'underline' }}>Logo</h1>
    <div style={{ color: 'white' }}>____________ Search</div>
  </div>
);

export default Header;
