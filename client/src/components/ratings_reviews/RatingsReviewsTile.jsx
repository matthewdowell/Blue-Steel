/* eslint-disable react/jsx-one-expression-per-line */
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
        <span className="rating">Rating: {props.tile.rating}</span>
        <span>
          <span>
            {props.tile.reviewer_name},
          </span>
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
        (
        {props.tile.helpfulness}
        )
        {' |'}
        <button type="submit" className="reportReviewButton" onClick={reportReview}>Report</button>
      </div>
    </div>
  );
};

export default RatingsReviewsTile;
