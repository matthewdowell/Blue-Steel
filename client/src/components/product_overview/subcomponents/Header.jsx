import React from 'react';

const Header = () => (
  <div style={{
    border: 'none',
    backgroundColor: '#DEB992',
    opacity: 0.8,
    background: 'linear-gradient(45deg, rgba(40,62,110,1) 0%, rgba(16,56,110,1) 14%, rgba(17,75,130,1) 49%, rgba(16,56,110,1) 91%, rgba(40,62,110,1) 100%)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 'none',
    marginTop: '0px',
  }}
  >
    <img src="./assets/bluesteel.png" alt="" style={{ maxWidth: '100%', maxHeight: '60%' }} />
  </div>
);

export default Header;
