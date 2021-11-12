/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const LengthDistribution = ({ length }) => {
  const value = length ? (length.value - 1) / 4 : 0;
  let lengthRating = 0;
  if (length) {
    lengthRating = Math.round(length.value);
  }
  let lengthDescription = '';

  if (lengthRating === 1) {
    lengthDescription = 'Runs short';
  } else if (lengthRating === 2) {
    lengthDescription = 'Runs slightly short';
  } else if (lengthRating === 3) {
    lengthDescription = 'Perfect';
  } else if (lengthRating === 4) {
    lengthDescription = 'Runs slightly long';
  } else if (lengthRating === 5) {
    lengthDescription = 'Runs long';
  } else {
    lengthDescription = 'Not available';
  }

  return (
    <div className="lengthBarContainer">
      <span className="characteristic">Length</span>
      <progress
        className="lengthBar"
        value={length ? (length.value - 1) / 4 : 0}
      >
      </progress>
      {lengthDescription === 'Not available'
        ? '(0.0)'
        : `(${((value * (5 - 1) + 1).toFixed(1))})`}
      {' '}
      {lengthDescription}
    </div>
  );
};

export default LengthDistribution;
