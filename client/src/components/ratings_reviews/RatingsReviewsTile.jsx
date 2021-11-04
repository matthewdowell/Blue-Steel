/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import { markReviewHelpful, reportReview } from '../../utils/reviewUtils.js';
// import '../../../dist/ratingsReviewsTileStyle.css';
import { RatingsReviewsContext } from '../../context/ratingsReviewsContext.js';

const RatingsReviewsTile = (props) => {
  const date = new Date(props.tile.date);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <RatingsReviewsContext.Consumer>
      {() => (
        <div>
          <span className="rating">Star Rating</span>
          <span className="date">
            {' '}
            {monthNames[date.getMonth()]}
            {' '}
            {date.getDate()}
            {', '}
            {date.getFullYear()}
          </span>
          <div>
            Review Summary:
            {props.tile.summary}</div>
          <div>Review Body</div>
          <div>Recommended</div>
          <div onClick={markReviewHelpful}>
            Helpful?
            <button type="submit" className="markHelpfulButton">Yes</button>
            {'NUMBER'}
            {' '}
            {'|'}
          </div>
          <button type="submit" onClick={reportReview}>Report</button>
        </div>
      )}
    </RatingsReviewsContext.Consumer>
  );
};

// TODO: Make a Review child component
  // Review summary. Single sentence, max 60 chars, BOLD
  // Review body. Free form input that can take text, images. 50-1000 chars.
    // Show 250 chars by default. If longer, add 'Show More' button with proper functionality
  // Recommended. If reviewer recommends, "I recommend this product" and checkmark icon beside it
    // should be displayed under the review. If reviewer does NOT recommend: nothing should be displayed
  // Username. Display username. If username associated with a sale, show 'Verified Purchaser'
  // Response to Review. If review has company response, display 'Reponse from seller', then
    // company reponse. Should be visually distinguishable
  // Helpfulness. Show 'Was this review helpful?', then Yes(number) | No(number).
    // Yes and No should be clickable.

export default RatingsReviewsTile;
