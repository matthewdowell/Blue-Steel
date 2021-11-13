/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const SizeDistribution = ({ size }) => {
  const value = size ? (size.value - 1) / 4 : 0;
  let sizeRating = 0;
  if (size) {
    sizeRating = Math.round(size.value);
  }
  let sizeDescription = '';

  if (sizeRating === 1) {
    sizeDescription = 'A size too small';
  } else if (sizeRating === 2) {
    sizeDescription = 'Half a size too small';
  } else if (sizeRating === 3) {
    sizeDescription = 'Perfect';
  } else if (sizeRating === 4) {
    sizeDescription = 'Half a size too big';
  } else if (sizeRating === 5) {
    sizeDescription = 'A size too wide';
  } else {
    sizeDescription = 'Not available';
  }

  return (
    <div className="sizeBarContainer">
      <span className="characteristic">Size</span>
      <progress
        className="sizeBar"
        value={value}
      >
      </progress>
      <div style={{ color: '#DEB992' }}>
        {sizeDescription === 'Not available'
          ? '(0.0)'
          : `(${((value * (5 - 1) + 1).toFixed(1))})`}
        {' '}
        {sizeDescription}
      </div>
    </div>
  );
};

export default SizeDistribution;
