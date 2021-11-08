import React from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const ComfortDistribution = (props) => {
  const { comfort } = props;
  return (
    <div className="comfortBarContainer">
      Comfort
      <progress
        className="comfortBar"
        value={'comfort Distribution'}
      >
      </progress>
    </div>
  );
};

export default ComfortDistribution;