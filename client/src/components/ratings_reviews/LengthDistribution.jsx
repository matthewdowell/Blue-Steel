/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const LengthDistribution = ({ length }) => {
  const lengthRating = Math.round(length.value);
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
  }

  return (
    <div className="lengthBarContainer">
      <span className="characteristic">Length</span>
      <progress
        className="lengthBar"
        value={length.value / 5}
      >
      </progress>
      {lengthDescription}
    </div>
  );
};

export default LengthDistribution;
