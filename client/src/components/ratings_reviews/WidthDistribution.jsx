/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const WidthDistribution = ({ width }) => {
  const widthRating = Math.round(width.value);
  let widthDescription = '';

  if (widthRating === 1) {
    widthDescription = 'Too narrow';
  } else if (widthRating === 2) {
    widthDescription = 'Slightly narrow';
  } else if (widthRating === 3) {
    widthDescription = 'Perfect';
  } else if (widthRating === 4) {
    widthDescription = 'Slightly wide';
  } else if (widthRating === 5) {
    widthDescription = 'Too wide';
  }

  return (
    <div className="widthBarContainer">
      <span className="characteristic">Width</span>
      <progress
        className="widthBar"
        value={width.value / 5}
      >
      </progress>
      {widthDescription}
    </div>
  );
};

export default WidthDistribution;
