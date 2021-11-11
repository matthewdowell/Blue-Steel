/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const SortReviewsBy = ({
  currentRatingsReviewsList,
  setCurrentRatingsReviewsList,
  numReviewsDisplayed,
  ratingsToDisplay
}) => {
  const [sortedRatingsReviewsList, setSortedRatingsReviewsList] = useState(currentRatingsReviewsList);

  useEffect(() => {
    setSortedRatingsReviewsList(currentRatingsReviewsList);
  }, [currentRatingsReviewsList, sortedRatingsReviewsList, ratingsToDisplay]);

  return (
    <div className="sortBy">
      <span
        className="sortByTitle"
        style={{
          fontWeight: 'bold',
          fontSize: '22px'
        }}
      >
        {sortedRatingsReviewsList.length}
        {' '}
        reviews, sorted by
        {' '}
        <select
          className="sortDropdown"
          id="sortBy"
          style={{
            fontWeight: 'bold',
            fontSize: '22px'
          }}
          onChange={() => {
            const e = document.getElementById('sortBy');
            const newSorted = ratingsReviewsHelpers.sortRatingsReviewsList(
              currentRatingsReviewsList,
              e.value
            );
            setSortedRatingsReviewsList([...newSorted]); // Spread so state change is recognized
          }}
        >
          <option value="relevant">relevant</option>
          <option value="new">new</option>
          <option value="helpful">helpful</option>
          <option value="rating">rating</option>
          <option value="recommended">recommended</option>
          <option value="length">review length</option>
        </select>
      </span>
      <div className="reviewScroll">
        {/* Render list of reviews */}
        {sortedRatingsReviewsList
          .filter((review) => {
            return ratingsToDisplay.includes(review.rating);
          })
          .map((tile) => <RatingsReviewsTile tile={tile} key={tile.review_id} />)
          .slice(0, numReviewsDisplayed)}
      </div>
    </div>
  );
};

export default SortReviewsBy;
