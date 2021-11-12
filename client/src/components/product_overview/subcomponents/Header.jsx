import React from 'react';

const Header = () => (
  <div style={{
    border: 'none',
    backgroundColor: '#DEB992',
    opacity: 0.8,
    backgroundImage: 'repeating-radial-gradient( circle at 0 0, transparent 0, #DEB992 10px ), repeating-linear-gradient( #1BA09855, #1BA098 )',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 'none',
    marginTop: '0px',
  }}
  >
    <h1 style={{ color: '#051622', fontStyle: 'italic', letterSpacing: '.5em' }}>Blue Steel Designs</h1>
    <div style={{ color: '#051622', fontSize: '1.25em' }}>Search</div>
  </div>
);

export default Header;
