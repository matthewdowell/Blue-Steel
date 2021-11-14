/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react/cjs/react.development';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';

const SortReviewsBy = ({
  currentRatingsReviewsList,
  setCurrentRatingsReviewsList,
  numReviewsDisplayed,
  ratingsToDisplay
}) => {
  const [sortedRatingsReviewsList, setSortedRatingsReviewsList] = useState(currentRatingsReviewsList);
  const [sortBy, setSortBy] = useState('relevant');
  const [sortDirection, setSortDirection] = useState('descending');

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
          className="sortByDropdown"
          id="sortBy"
          style={{
            fontWeight: 'bold',
            fontSize: '22px',
            color: 'white',
            background: '#051622'
          }}
          onChange={() => {
            const e = document.getElementById('sortBy');
            setSortBy(e.value);
            const newSorted = ratingsReviewsHelpers.sortRatingsReviewsList(
              currentRatingsReviewsList,
              e.value,
              sortDirection
            );
            setSortedRatingsReviewsList([...newSorted]); // Spread so state change is recognized
          }}
        >
          <option value="relevant">relevant</option>
          <option value="new">new</option>
          <option value="helpful">helpful</option>
          <option value="rating">rating</option>
          <option value="recommended">recommended</option>
          <option value="length">length</option>
        </select>
        <select
          className="sortDirectionDropdown"
          id="sortDirection"
          style={{
            fontWeight: 'bold',
            fontSize: '22px',
            color: 'white',
            background: '#051622'
          }}
          onChange={() => {
            const e = document.getElementById('sortDirection');
            setSortDirection(e.value);
            const newSorted = ratingsReviewsHelpers.sortRatingsReviewsList(
              currentRatingsReviewsList,
              sortBy,
              e.value
            );
            setSortedRatingsReviewsList([...newSorted]); // Spread so state change is recognized
          }}
        >
          <option value="descending">high to low</option>
          <option value="ascending">low to high</option>
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
