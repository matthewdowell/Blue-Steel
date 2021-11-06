import React from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const PercentRecommended = ({ currentRatingsReviewsList }) => {
  return (
    <div className="percentRecommended">
    {
      currentRatingsReviewsList.length > 0
      ? (ratingsReviewsHelpers.getPercentRecommended(currentRatingsReviewsList).toString() +
      '% of reviews recommend this product')
      : 'No reviews available'
    }
  </div>
  );
}

export default PercentRecommended;