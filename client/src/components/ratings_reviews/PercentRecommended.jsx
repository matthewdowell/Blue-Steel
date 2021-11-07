/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const PercentRecommended = ({ currentRatingsReviewsList }) => {
  return (
    <div className="percentRecommended">
      {
        currentRatingsReviewsList.length > 0
          ? (`${(ratingsReviewsHelpers.getPercentRecommended(currentRatingsReviewsList) * 100).toFixed(0).toString()}% of reviews recommend this product`)
          : 'No reviews available'
      }
      <div>
        <progress
          className="percentRecommendedBar"
          value={ratingsReviewsHelpers.getPercentRecommended(currentRatingsReviewsList)}
        >
        </progress>
      </div>
    </div>
  );
};

export default PercentRecommended;
