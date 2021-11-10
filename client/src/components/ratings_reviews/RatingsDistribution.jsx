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

const RatingsDistribution = (props) => {
  const { ratings, ratingsToDisplay, setRatingsToDisplay } = props;
  const ratingsArr = [5, 4, 3, 2, 1];
  const [anyRatingBarClicked, setAnyRatingBarClicked] = useState(false);
  const [ratingBarsClicked, setRatingBarsClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  async function handleRatingBarClick(rating) {
    console.log('HANDLING CLICK FOR RATING ', rating);
    // If first time clicking a bar
    if (!anyRatingBarClicked) {
      console.log('FIRST TIME CLICKING A BAR');
      await setAnyRatingBarClicked(true);
      await setRatingsToDisplay([]);
      console.log('SHOULD ONLY HAVE ONE RATING', ratingsToDisplay);
      debugger;
    }

    // Toggle the rating that was clicked
    let currentRatingClicked = ratingBarsClicked[rating];
    setRatingBarsClicked({
      ...ratingBarsClicked,
      [rating]: !currentRatingClicked
    });
    console.log('ratingBarsClicked: ', ratingBarsClicked);
    // console.log('BAR ', rating, ' IS NOW ', ratingBarsClicked[rating]);

    // If rating is now clicked
    if (ratingBarsClicked[rating]) {
      // Add rating to ratingsToDisplay
      if (!ratingsToDisplay.includes(rating)) {
        let newRatingsToDisplay = ratingsToDisplay;
        newRatingsToDisplay.push(rating);
        setRatingsToDisplay(newRatingsToDisplay);
      }
    } else {
      // If rating is now un-clicked
      // Remove rating from ratingsToDisplay
      const ratingIndex = ratingsToDisplay.indexOf(rating);
      let newRatingsToDisplay = ratingsToDisplay;
      newRatingsToDisplay.splice(ratingIndex, 1);
      setRatingsToDisplay(newRatingsToDisplay);
    }

    // If no bars are clicked
    if (ratingsToDisplay.length === 0) {
      setRatingsToDisplay(ratingsArr);
    }
    console.log('FINAL ratingsToDisplay', ratingsToDisplay);
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
    </div>
  );
};

export default RatingsDistribution;
