/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
// import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const SortReviewsBy = ({
  currentRatingsReviewsList,
  numReviewsDisplayed,
  ratingsToDisplay
}) => {
  // TODO: Sort reviews list by selected criteria
  let [sortBy, setSortBy] = useState('relevant');
  let [
    sortedRatingsReviewsList,
    setSortedRatingsReviewsList
  ] = useState(currentRatingsReviewsList);

  useEffect(() => {
    setSortedRatingsReviewsList(currentRatingsReviewsList);
  }, [currentRatingsReviewsList]);

  function sortRatingsReviewsList(reviews, sortType) {
    if (sortType === 'relevant') { // review.date AND review.helpfulness
      reviews.sort((a, b) => {});
    } else if (sortType === 'new') { // review.date
      reviews.sort((a, b) => { return a.date - b.date; });
    } else if (sortType === 'helpful') { // review.helpfulness
      reviews.sort((a, b) => { return b.helpfulness - a.helpfulness; });
    }
  }
  // console.log('SortReviewsBy reviews list:', sortedRatingsReviewsList);
  return (
    <div className="sortBy">
      {currentRatingsReviewsList.length}
      {' '}
      reviews, sorted by
      {' '}
      <select className="sortDropdown" id="sortBy" onChange={() => {
        const e = document.getElementById('sortBy');
        setSortBy(e.value);
        console.log('Sorting by: ', sortBy);
        setSortedRatingsReviewsList(sortRatingsReviewsList(currentRatingsReviewsList, sortBy));
      }}
      >
        <option value="relevant">relevant</option>
        <option value="new">new</option>
        <option value="helpful">helpful</option>
      </select>
      {/* Render reviews */}
      {sortedRatingsReviewsList
        .filter((review) => { return ratingsToDisplay.includes(review.rating); })
        .map((tile) => <RatingsReviewsTile tile={tile} />)
        .slice(0, numReviewsDisplayed)
      }
    </div>
  );
};

export default SortReviewsBy;
