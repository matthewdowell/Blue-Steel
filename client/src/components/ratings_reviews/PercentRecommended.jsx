/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { getPercentRecommended } from './ratingsReviewsHelpers.js';

const PercentRecommended = ({ currentRatingsReviewsList }) => {
  const percentRecommended = getPercentRecommended(currentRatingsReviewsList);
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
            value={percentRecommended}
          >
          </progress>
        </div>
        <div style={{ color: '#DEB992' }}>
          {/* {(getPercentRecommended(currentRatingsReviewsList) * 100).toFixed(0)} */}
          {(percentRecommended * 100).toFixed(0)}
          {'%'}
        </div>
      </div>
    </div>
  );
};

export default PercentRecommended;
