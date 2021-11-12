/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { markReviewHelpful, reportReview } from '../../utils/reviewUtils.js';
import Stars from '../stars/Stars.jsx';

const RatingsReviewsTile = ({ tile }) => {
  const [showEntireReview, setShowEntireReview] = useState(false);
  const [helpfulness, setHelpfulness] = useState(tile.helpfulness);
  const [foundHelpful, setFoundHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const date = new Date(tile.date);
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
        <span className="reviewerName">
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
      <div className="reviewBody">
        {tile.body.length <= 250
          ? tile.body
          : (<div>
              {showEntireReview
                ? (<div>
                  {tile.body}
                    <button
                      type="submit"
                      className="showEntireReviewButton"
                      onClick={() => { setShowEntireReview(false); }}
                      style={{ color: 'rgb(8, 0, 252)' }}
                    >
                      Show less
                    </button>
                  </div>)
                : (<div>
                    {tile.body.slice(0, 250)}
                    <button
                      type="submit"
                      className="showEntireReviewButton"
                      onClick={() => { setShowEntireReview(true); }}
                      style={{ color: 'rgb(8, 0, 252)' }}
                    >
                      ...show more
                    </button>
                  </div>)}
            </div>)}
      </div>
      <div className="reviewRecommended">
        {/* NOTE: Uncomment code below to only label reviews that recommended product */}
        {tile.recommend
          ? (<span style={{
            color: 'rgb(8, 0, 252)',
            marginTop: '7px',
            marginBottom: '7px'}}>
              ✔ I recommended this product
            </span>)
          : null}
        {/* NOTE: Uncomment code below to label reviews that did and didn't recommend product */}
        {/* {tile.recommend
          ? (<span style={{
            color: 'rgb(8, 0, 252)',
            marginTop: '7px',
            marginBottom: '7px'}}>
              ✔ I recommended this product
            </span>)
          : (<span style={{
            color: 'rgb(252, 0, 0)',
            marginTop: '7px',
            marginBottom: '7px'}}>
              ✘ I do not recommended this product
            </span>)} */}
      </div>
      {tile.response
        ? <div className="reviewResponse">Seller response: {tile.response}</div>
        : 'No response from seller.'}
      <div className="tileButtons">
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
