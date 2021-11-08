/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const PercentRecommended = ({ currentRatingsReviewsList }) => {
  return (
    <div>
      {/* <b>User Recommendation</b> */}
      <div className="percentRecommendedBarContainer">
        <div className="likedIcon">
          Liked
        </div>
        <div>
          <progress
            className="percentRecommendedBar"
            value={ratingsReviewsHelpers.getPercentRecommended(currentRatingsReviewsList)}
          >
          </progress>
        </div>
        <div>
          {(ratingsReviewsHelpers.getPercentRecommended(currentRatingsReviewsList) * 100).toFixed(0)}
          {'%'}
        </div>
      </div>
    </div>
  );
};

export default PercentRecommended;
