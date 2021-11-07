/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const comfortDistribution = ({ comfort }) => {
  const comfortRating = Math.round(comfort.value);
  let comfortDescription = '';

  if (comfortRating === 1) {
    comfortDescription = 'Uncomfortable';
  } else if (comfortRating === 2) {
    comfortDescription = 'Slightly uncomfortable';
  } else if (comfortRating === 3) {
    comfortDescription = 'Not bad';
  } else if (comfortRating === 4) {
    comfortDescription = 'Comfortable';
  } else if (comfortRating === 5) {
    comfortDescription = 'Perfect';
  }

  return (
    <div className="comfortBarContainer">
      <span className="characteristic">Comfort</span>
      <progress
        className="comfortBar"
        value={comfort.value / 5}
      >
      </progress>
      {comfortDescription}
    </div>
  );
};

export default comfortDistribution;
