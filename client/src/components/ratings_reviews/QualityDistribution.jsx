/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const QualityDistribution = ({ quality }) => {
  let qualityRating = 0;
  if (quality) {
    qualityRating = Math.round(quality.value);
  }
  let qualityDescription = '';

  if (qualityRating === 1) {
    qualityDescription = 'Poor';
  } else if (qualityRating === 2) {
    qualityDescription = 'Below average';
  } else if (qualityRating === 3) {
    qualityDescription = 'What I expected';
  } else if (qualityRating === 4) {
    qualityDescription = 'Pretty great';
  } else if (qualityRating === 5) {
    qualityDescription = 'Perfect';
  } else {
    qualityDescription = 'Not available';
  }

  return (
    <div className="qualityBarContainer">
      <span className="characteristic">Quality</span>
      <progress
        className="qualityBar"
        value={quality ? (quality.value - 1) / 4 : 0}
      >
      </progress>
      {qualityDescription}
    </div>
  );
};

export default QualityDistribution;
