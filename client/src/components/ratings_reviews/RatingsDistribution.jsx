/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React, { useState }from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers';
import Stars from '../stars/Stars.jsx';

const RatingsDistribution = (props) => {
  const { ratings } = props;
  const ratingsArr = [5, 4, 3, 2, 1];
  const [] = useState({});

  function changeBarColor(e, color) {
    e.nativeEvent.target.style.color = color;
  }

  return (
    <div className="ratingDistribution">
      <b>Ratings</b>
      {ratingsArr.map((rating) => (
        <div className="ratingBarContainer" key={rating}>
          <span className="ratingCount">
            <Stars rating={rating} />
          </span>
          <div
            // TODO: Implement click handler for rating bars
            // onMouseEnter={(e) => {  }}
            // onMouseLeave={(e) => {  }}
            // onClick={() => {}}
          >
            <progress
              className="ratingBar"
              value={
                ratingsReviewsHelpers.countReviewsWithRating(ratings, rating)
                / ratingsReviewsHelpers.getNumRatings(ratings)
              }
            >
            </progress>
          </div>
          <div className="ratingCount">
            ({ratingsReviewsHelpers.countReviewsWithRating(ratings, rating)})
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingsDistribution;
