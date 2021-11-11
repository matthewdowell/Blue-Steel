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
import Stars from '../stars/Stars.jsx';
import { blue } from '@material-ui/core/colors';
import { BlockRounded } from '@material-ui/icons';

const RatingsDistribution = (props) => {
  const unclickedBars = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  };
  const { ratings, ratingsToDisplay, setRatingsToDisplay } = props;
  const ratingsArr = [5, 4, 3, 2, 1];
  const [anyRatingBarClicked, setAnyRatingBarClicked] = useState(false);
  const [ratingBarsClicked, setRatingBarsClicked] = useState(unclickedBars);

  async function handleRatingBarClick(rating) {
    if (!anyRatingBarClicked) { // First time clicking a bar
      console.log('FIRST TIME CLICKING A BAR');
      setAnyRatingBarClicked(true);
      setRatingBarsClicked({
        ...ratingBarsClicked,
        [rating]: true
      });
      setRatingsToDisplay([rating]);
      console.log('SHOULD ONLY HAVE ONE RATING', ratingsToDisplay);
    } else { // Not the first time clicking a bar
      console.log('NOT FIRST TIME CLICKING A BAR');
      if (ratingBarsClicked[rating]) { // If rating was already clicked
        setRatingBarsClicked({ // Unclick it
          ...ratingBarsClicked,
          [rating]: false
        });
        // Remove rating from ratingsToDisplay
        const ratingIndex = ratingsToDisplay.indexOf(rating);
        let newRatingsToDisplay = ratingsToDisplay;
        newRatingsToDisplay.splice(ratingIndex, 1);
        await setRatingsToDisplay(newRatingsToDisplay);
      } else { // If rating was already unclicked
        setRatingBarsClicked({ // Click it
          ...ratingBarsClicked,
          [rating]: true
        });
        // Add rating to ratingsToDisplay
        let newRatingsToDisplay = ratingsToDisplay;
        newRatingsToDisplay.push(rating);
        newRatingsToDisplay = newRatingsToDisplay.sort();
        await setRatingsToDisplay(newRatingsToDisplay);
      }

      console.log('ratingBarsClicked: ', ratingBarsClicked);
    }
    // If no bars are clicked
    if (ratingsToDisplay.length === 0) {
      setAnyRatingBarClicked(false);
      setRatingsToDisplay(ratingsArr);
    }
    console.log('FINAL ratingsToDisplay', ratingsToDisplay);
    console.log('--------------------------------------------');
  }

  return (
    <div className="ratingDistribution">
      <b>Ratings</b>
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
          }}>Reset Review Filters
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
