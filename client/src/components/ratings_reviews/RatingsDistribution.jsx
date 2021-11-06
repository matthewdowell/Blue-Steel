/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React, { useState }from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers';

const RatingsDistribution = (props) => {
  const { ratings } = props;
  const ratingsArr = [5, 4, 3, 2, 1];
  const [] = useState({});

  function changeBarColor(e, color) {
    e.nativeEvent.target.style.color = color;
  }

  return (
    <div className="ratingDistribution">
      {ratingsArr.map((rating) => {
        return (
        <div className="ratingBarContainer">
          <span className="ratingCount">{rating} stars</span>
          <progress
            className="ratingBar"
            value={
              ratingsReviewsHelpers.countReviewsWithRating(ratings, rating)
              / ratingsReviewsHelpers.getNumRatings(ratings)
            }
            // TODO: Implement click handler for rating bars
            onMouseEnter={(e) => {  }}
            onMouseLeave={(e) => {  }}
            onClick={() => {}}
          >
          </progress>
          <div className="ratingCount">
            {/* {ratingsReviewsHelpers.countReviewsWithRating(reviews, rating)} */}
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default RatingsDistribution;
