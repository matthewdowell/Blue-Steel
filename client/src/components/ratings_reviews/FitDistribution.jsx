/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const FitDistribution = ({ fit }) => {
  let fitRating = 0;
  if (fit) {
    fitRating = Math.round(fit.value);
  }
  let fitDescription = '';

  if (fitRating === 1) {
    fitDescription = 'Runs tight';
  } else if (fitRating === 2) {
    fitDescription = 'Runs slightly tight';
  } else if (fitRating === 3) {
    fitDescription = 'Perfect';
  } else if (fitRating === 4) {
    fitDescription = 'Runs slightly loose';
  } else if (fitRating === 5) {
    fitDescription = 'Runs loose';
  } else {
    fitDescription = 'No reviews';
  }

  return (
    <div className="fitBarContainer">
      <span className="characteristic">Fit</span>
      <progress
        className="fitBar"
        value={fit ? (fit.value - 1) / 4 : 0}
      >
      </progress>
      {fitDescription}
    </div>
  );
};

export default FitDistribution;
