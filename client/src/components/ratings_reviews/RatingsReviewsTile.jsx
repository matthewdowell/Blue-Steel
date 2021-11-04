/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import { markReviewHelpful, reportReview } from '../../utils/reviewUtils.js';

const RatingsReviewsTile = (props) => {
  const date = new Date(props.tile.date);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="ratingsReviewsTile">
      <span className="reviewerInfo">
        <span className="rating">Star Rating</span>
        {/* Star Rating */}
        <span>
          <span>{props.tile.reviewer_name}</span>
          <span className="date">
            {' '}
            {monthNames[date.getMonth()]}
            {' '}
            {date.getDate()}
            {', '}
            {date.getFullYear()}
          </span>
        </span>
      </span>
      <div className="reviewSummary">{props.tile.summary}</div>
      <div className="reviewBody">{props.tile.body}</div>
      <div className="reviewRecommended">{props.tile.recommend ? '✔ I recommended this product' : ''}</div>
      <div className="reviewResponse">{props.tile.response}</div>
      <div>
        Helpful?
        <button type="submit" className="markReviewHelpfulButton" onClick={markReviewHelpful}>Yes</button>
        ({props.tile.helpfulness})
        {' '}
        {'|'}
        {' '}
        <button type="submit" className="reportReviewButton" onClick={reportReview}>Report</button>
      </div>
    </div>
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
