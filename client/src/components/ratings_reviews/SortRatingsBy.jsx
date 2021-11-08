import React from 'react';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const SortRatingsBy = ({ currentRatingsReviewsList, numReviewsDisplayed, ratingsToDisplay }) => {
  return (
    <div className="sortBy">
      {currentRatingsReviewsList.length}
      {' '}
      reviews, sorted by
      {' '}
      <select className="sortDropdown" onChange={ratingsReviewsHelpers.handleSortByChange}>
        <option value="relevant">relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>
    {currentRatingsReviewsList
      .filter((review) => { return ratingsToDisplay.includes(review.rating); })
      .map((tile) => <RatingsReviewsTile tile={tile} />)
      .slice(0, numReviewsDisplayed)
    }
    </div>
  );
};

export default SortRatingsBy;