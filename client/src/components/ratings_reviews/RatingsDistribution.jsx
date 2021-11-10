/* eslint-disable no-lonely-if */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React, { useState }from 'react';
import ratingsReviewsHelpers from './ratingsReviewsHelpers';
import Stars from '../stars/Stars.jsx';

const RatingsDistribution = (props) => {
  const { ratings, ratingsToDisplay, setRatingsToDisplay } = props;
  const ratingsArr = [5, 4, 3, 2, 1];
  const [ratingBarClicked, setRatingBarClicked] = useState(false);
  const [ratingBarsClicked, setRatingBarsClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

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
                if (!ratingBarClicked) { // First time clicking a progress bar
                  setRatingBarClicked(true);
                  console.log('Progress bar clicked!');
                  setRatingsToDisplay([rating]);
                } else {
                  if (ratingsToDisplay.includes(rating)) { // Rating is currently displayed
                    const ratingIndex = ratingsToDisplay.indexOf(rating);
                    let newRatingsToDisplay = ratingsToDisplay;
                    newRatingsToDisplay.splice(ratingIndex, 1);
                    setRatingBarsClicked({
                      ...ratingBarsClicked,
                      [rating]: false
                    });
                    setRatingsToDisplay(newRatingsToDisplay);
                  } else { // Rating is not currently displayed
                    setRatingBarsClicked({
                      ...ratingBarsClicked,
                      [rating]: true
                    });
                    setRatingsToDisplay([...ratingsToDisplay, rating]);
                  }
                }
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
