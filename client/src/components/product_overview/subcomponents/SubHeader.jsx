import React from 'react';

const SubHeader = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <p style={{ fontStyle: 'italic', color: '#DEB992' }}>
      SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT
      <strong>OFFER</strong>
      {' '}
      --
      <span style={{ textDecoration: 'underline' }}>NEW PRODUCT HIGHLIGHT</span>
    </p>
  </div>
);

export default SubHeader;
