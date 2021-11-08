/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { RatingsReviewsContext } from '../../context/ratingsReviewsContext.js';
import { getReviewMetadata, getReviewsOfProduct } from '../../utils/reviewUtils.js';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';
import ReviewFormModal from './ReviewFormModal.jsx';
import SortRatingsBy from './SortRatingsBy.jsx';
import RatingsDistribution from './RatingsDistribution.jsx';
import SizeDistribution from './SizeDistribution.jsx';
import ComfortDistribution from './ComfortDistribution.jsx';

const RatingsReviews = () => {
  const { currentProduct } = useContext(ProductContext);
  const currentReviews = useContext(RatingsReviewsContext);
  const [numReviewsDisplayed, setNumReviewsDisplayed] = useState(2);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [currentRatingsReviewsList, setCurrentRatingsReviewsList] = useState([]);
  const [ratingsToDisplay, setRatingsToDisplay] = useState([1, 2, 3, 4, 5]);
  const [currentMetaData, setCurrentMetaData] = useState({});
  // const [ratingsObj, setRatingsObj] = useState({});

  useEffect(() => {
    getReviewsOfProduct((data) => {
      setCurrentRatingsReviewsList(data.results);
    }, currentProduct.id, 'relevance', null, null);
  }, [currentProduct]);

  useEffect(() => {
    getReviewMetadata((data) => {
      console.log('METADATA:', data);
      setCurrentMetaData(data);
      // setRatingsObj(data.ratings);
    }, currentProduct.id);
  }, [currentProduct]);
  console.log('current reviews:', currentRatingsReviewsList);
  // console.log('ARRAY of ratings:', ratingsObj);
  return (
    <div>
      <div className="ratingsReviewsAll">
        <div className="aggregateReviewInfo">
          <span className="ratingsReviewsHeader">Ratings {'&'} Reviews</span>
          {/* <span className="averageRating">{ratingsReviewsHelpers.getAverageRating(currentMetaData.ratings).toFixed(1)}</span> */}
          <span>Star Component Here</span>
          <div className="percentRecommended">
            {ratingsReviewsHelpers.getPercentRecommended(currentRatingsReviewsList)}
            % of reviews recommend this product
          </div>
          <RatingsDistribution reviews={currentRatingsReviewsList} />
          <SizeDistribution size={currentProduct} />
          <ComfortDistribution comfort={currentProduct}/>
        </div>
        <div>
          <SortRatingsBy
            currentRatingsReviewsList={currentRatingsReviewsList}
            numReviewsDisplayed={numReviewsDisplayed}
            ratingsToDisplay={ratingsToDisplay}
          />
          {/* BUTTONS */}
          {showReviewForm && <ReviewFormModal setShowReviewForm={setShowReviewForm}/>}
          <div className="reviewButtons">
            <button
              type="submit"
              className="reviewButton addReviewButton"
              onClick={() => { setShowReviewForm(true) }}
            >
              ADD A REVIEW +
            </button>
            <div>
            {(
              (numReviewsDisplayed < currentRatingsReviewsList.length)
              ? <button type="submit" className="reviewButton"
              onClick={() => { setNumReviewsDisplayed(numReviewsDisplayed + 2); }}>MORE REVIEWS</button>
              : null
            )}
            </div>
            <div>
            {(
            (numReviewsDisplayed >= currentRatingsReviewsList.length)
            ? <button type="submit" className="reviewButton"
            onClick={() => { setNumReviewsDisplayed(2); }}>COLLAPSE REVIEWS
              </button>
            : null
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsReviews;
