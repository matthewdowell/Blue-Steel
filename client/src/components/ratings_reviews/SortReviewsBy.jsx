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
  numReviewsDisplayed,
  ratingsToDisplay
}) => {
  // let [sortBy, setSortBy] = useState('relevant');
  let [
    sortedRatingsReviewsList,
    setSortedRatingsReviewsList
  ] = useState([]);

  useEffect(() => {
    setSortedRatingsReviewsList(currentRatingsReviewsList);
  }, [currentRatingsReviewsList]);

  return (
    <div className="sortBy">
      <span
        className="sortByTitle"
        style={{
          fontWeight: 'bold',
          fontSize: '22px'
        }}
      >
        {currentRatingsReviewsList.length}
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
            // TODO: Rerender list of reviews when sortBy is changed
            console.log('Sorting:', currentRatingsReviewsList);
            console.log('Sorting by:', e.value);
            console.log('Sorted:', ratingsReviewsHelpers.sortRatingsReviewsList(currentRatingsReviewsList, e.value));
            setSortedRatingsReviewsList(
              ratingsReviewsHelpers.sortRatingsReviewsList(currentRatingsReviewsList, e.value)
            );
            console.log('sortedRatingsReviewsList:', sortedRatingsReviewsList);
          }}
        >
          <option value="relevant">relevant</option>
          <option value="new">new</option>
          <option value="helpful">helpful</option>
        </select>
      </span>
      <div className="reviewScroll">
        {/* Render list of reviews */}
        {sortedRatingsReviewsList
          .filter((review) => { return ratingsToDisplay.includes(review.rating); })
          .map((tile) => <RatingsReviewsTile tile={tile} />)
          .slice(0, numReviewsDisplayed)}
      </div>
    </div>
  );
};

export default SortReviewsBy;
