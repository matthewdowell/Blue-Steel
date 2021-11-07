/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const SizeDistribution = ({ size }) => {
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
    sizeDescription = 'No reviews';
  }

  return (
    <div className="sizeBarContainer">
      <span className="characteristic">Size</span>
      <progress
        className="sizeBar"
        value={size ? size.value / 5 : 0}
      >
      </progress>
      {sizeDescription}
    </div>
  );
};

export default SizeDistribution;
