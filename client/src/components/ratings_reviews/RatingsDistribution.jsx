/* eslint-disable import/extensions */
/* eslint-disable no-lonely-if */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers';
// import Stars from '../shared/Stars.jsx';
import Stars from '../stars/Stars.jsx';

const RatingsDistribution = ({ ratings, ratingsToDisplay, setRatingsToDisplay }) => {
  const unclickedBars = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  };
  // const { ratings, ratingsToDisplay, setRatingsToDisplay } = props;
  const ratingsArr = [5, 4, 3, 2, 1];
  const [anyRatingBarClicked, setAnyRatingBarClicked] = useState(false);
  const [ratingBarsClicked, setRatingBarsClicked] = useState(unclickedBars);

  function handleRatingBarClick(rating) {
    if (!anyRatingBarClicked) { // First time clicking any bar
      setAnyRatingBarClicked(true);
      setRatingBarsClicked({ ...ratingBarsClicked, [rating]: true });
      setRatingsToDisplay([rating]);
    } else {
      if (ratingBarsClicked[rating]) { // If rating was already clicked
        setRatingBarsClicked({ ...ratingBarsClicked, [rating]: false }); // Toggle rating's click status
        // Remove from ratingsToDisplay
        const ratingIndex = ratingsToDisplay.indexOf(rating);
        let newRatingsToDisplay = ratingsToDisplay;
        newRatingsToDisplay.splice(ratingIndex, 1);
        setRatingsToDisplay([...newRatingsToDisplay]);
      } else { // If rating was already unclicked
        setRatingBarsClicked({ ...ratingBarsClicked, [rating]: true }); // Toggle rating's click status
        // Add to ratingsToDisplay
        let newRatingsToDisplay = ratingsToDisplay;
        newRatingsToDisplay.push(rating);
        newRatingsToDisplay = newRatingsToDisplay.sort();
        setRatingsToDisplay([...newRatingsToDisplay]);
      }
    }
    // If no bars are clicked
    if (ratingsToDisplay.length === 0) {
      setAnyRatingBarClicked(false);
      setRatingsToDisplay(ratingsArr);
    }
  }

  return (
    <div className="ratingDistribution">
      <b>Rating Breakdown</b>
      {ratingsArr.map((rating) => (
        <div className="ratingBarContainer" key={rating}>
          <span className="ratingCount">
            <Stars rating={rating} />
          </span>
          <div>
            <progress
              className="ratingBar"
              value={
                ratingsReviewsHelpers.countReviewsWithRating(ratings, rating)
                / ratingsReviewsHelpers.getNumRatings(ratings)
              }
              onClick={() => {
                handleRatingBarClick(rating);
              }}
            >
            </progress>
          </div>
          {ratingBarsClicked[rating]
            ? (<div className="ratingCountClicked">
              (
              {ratingsReviewsHelpers.countReviewsWithRating(ratings, rating)}
              )
              </div>)
            : (<div className="ratingCount">
              (
              {ratingsReviewsHelpers.countReviewsWithRating(ratings, rating)}
              )
              </div>)
          }
        </div>
      ))}
      <div>
        <button
          className="resetFiltersButton"
          onClick={() => {
            setAnyRatingBarClicked(false);
            setRatingBarsClicked(unclickedBars);
            setRatingsToDisplay(ratingsArr);
          }}>Remove Review Filters
        </button>
        <span style={{
          color: 'blue',
          fontWeight: 'bold'
        }}
        >
          {anyRatingBarClicked
            ? `Reviews filtered: ${ratingsToDisplay}`
            : null}
        </span>
      </div>
    </div>
  );
};

export default RatingsDistribution;
