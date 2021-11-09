/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers';

const RatingsDistribution = (props) => {
  const { reviews } = props;
  return (
    <div className="ratingDistribution">
      <div className="ratingBarContainer">
        <span className="ratingCount">5 stars</span>
        <progress
          className="ratingBar"
          value={ratingsReviewsHelpers.countReviewsWithRating(reviews, 5) / reviews.length}
        >
        </progress>
        {ratingsReviewsHelpers.countReviewsWithRating(reviews, 5)}
      </div>
      <div className="ratingBarContainer">
        <span className="ratingCount">4 stars</span>
        <progress
          className="ratingBar"
          value={ratingsReviewsHelpers.countReviewsWithRating(reviews, 4) / reviews.length}
        >
        </progress>
        {ratingsReviewsHelpers.countReviewsWithRating(reviews, 4)}
      </div>
      <div className="ratingBarContainer">
        <span className="ratingCount">3 stars</span>
        <progress
          className="ratingBar"
          value={ratingsReviewsHelpers.countReviewsWithRating(reviews, 3) / reviews.length}
        >
        </progress>
        {ratingsReviewsHelpers.countReviewsWithRating(reviews, 3)}
      </div>
      <div className="ratingBarContainer">
        <span className="ratingCount">2 stars</span>
        <progress
          className="ratingBar"
          value={ratingsReviewsHelpers.countReviewsWithRating(reviews, 2) / reviews.length}
        >
        </progress>
        {ratingsReviewsHelpers.countReviewsWithRating(reviews, 2)}
      </div>
      <div className="ratingBarContainer">
        <span className="ratingCount">1 stars</span>
        <progress
          className="ratingBar"
          value={ratingsReviewsHelpers.countReviewsWithRating(reviews, 1) / reviews.length}
        >
        </progress>
        {ratingsReviewsHelpers.countReviewsWithRating(reviews, 1)}
      </div>
    </div>
  );
};

export default RatingsDistribution;
