/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { markReviewHelpful, reportReview } from '../../utils/reviewUtils.js';
import Stars from '../stars/Stars.jsx';

const RatingsReviewsTile = ({ tile }) => {
  const { currentProduct } = useContext(ProductContext);
  const [helpfulness, setHelpfulness] = useState(tile.helpfulness);
  const [foundHelpful, setFoundHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const date = new Date(tile.date);
  // TODO: Move this to its own file
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function findHelpful() {
    if (!foundHelpful) {
      markReviewHelpful(tile.review_id);
      setFoundHelpful(true);
      setHelpfulness(helpfulness + 1);
    }
  }

  function report() {
    if (!reported) {
      reportReview(tile.review_id);
      setReported(true);
    }
  }

  return (
    <div className="ratingsReviewsTile" key={tile.review_id}>
      <span className="reviewerInfo">
        <span className="rating"><Stars rating={tile.rating} /></span>
        <span>
          <span>
            {tile.reviewer_name},
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
      <div className="reviewSummary">{tile.summary}</div>
      <div className="reviewBody">{tile.body}</div>
      <div className="reviewRecommended">{tile.recommend ? '✔ I recommended this product' : ''}</div>
      <div className="reviewResponse">Seller response: {tile.response}</div>
      <div>
        Helpful?
        <button
          type="submit"
          className="markReviewHelpfulButton"
          onClick={findHelpful}
        >
          Yes
        </button>
        (
        {helpfulness}
        )
        {' |'}
        <button
          type="submit"
          className="reportReviewButton"
          onClick={report}
        >
          {reported ? 'Reported' : 'Report'}
        </button>
      </div>
    </div>
  );
};

export default RatingsReviewsTile;
