import React from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const SizeDistribution = (props) => {
  const { size } = props;
  return (
    <div className="sizeBarContainer">
      Size
      <progress
        className="sizeBar"
        value={'Size Distribution'}
      >
      </progress>
    </div>
  );
};

export default SizeDistribution;