/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { RatingsReviewsContext } from '../../context/ratingsReviewsContext.js';
import { getReviewMetadata, getReviewsOfProduct } from '../../utils/reviewUtils.js';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';
import ReviewForm from './ReviewForm.jsx';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
import RatingsDistribution from './RatingsDistribution.jsx';
import SizeDistribution from './SizeDistribution.jsx';

// Functional component
const RatingsReviews = () => {
  const { currentProduct } = useContext(ProductContext);
  const currentReviews = useContext(RatingsReviewsContext);
  const [numReviewsDisplayed, setNumReviewsDisplayed] = useState(2);
  const [addReview, setAddReview] = useState(false);
  const [currentRatingsReviewsList, setCurrentRatingsReviewsList] = useState([]);
  const [currentMetaData, setCurrentMetaData] = useState({ ratings: { 0: 0 } });

  useEffect(() => {
    getReviewsOfProduct((data) => {
      setCurrentRatingsReviewsList(data.results);
    }, currentProduct.id, 'relevance', null, null);
  }, [currentProduct]);

  useEffect(() => {
    getReviewMetadata((data) => {
      setCurrentMetaData(data);
    }, currentProduct.id);
  }, [currentProduct]);

  function toggleReviewForm () {
    setAddReview(!addReview);
  }

  return (
    <div>
      <ProductContext.Consumer>
        {() => (
          <div className="ratingsReviewsAll">
            <div className="aggregateReviewInfo">
              <span className="ratingsReviewsHeader">Ratings {'&'} Reviews</span>
              <span className="averageRating">{ratingsReviewsHelpers.getAverageRating(currentMetaData.ratings).toFixed(1)}</span>
              <span>Star Component Here</span>
              <div className="percentRecommended">
                {ratingsReviewsHelpers.getPercentRecommended(currentRatingsReviewsList)}
                % of reviews recommend this product
              </div>
              <div><RatingsDistribution reviews={currentRatingsReviewsList} /></div>
              <div><SizeDistribution size={currentProduct} /></div>
              <div>Comfort Rating</div>
            </div>
            <div>
              <div className="sortBy">
                {currentRatingsReviewsList.length}
                {' '}
                reviews, sorted by
                {' '}
                <select className="sortDropdown" onChange={ratingsReviewsHelpers.handleSortByChange}>
                  <option value="relevant">relevant</option>
                  <option value="newest">newest</option>
                  <option value="helpful">helpful</option>
                </select>
              </div>
              {currentRatingsReviewsList
                .map((tile) => <RatingsReviewsTile tile={tile} />)
                .slice(0, numReviewsDisplayed)
              }
              <button
                type="submit"
                className="reviewButton addReviewButton"
                onClick={() => { setAddReview(true) }}
              >
                ADD A REVIEW +
              </button>
              <div>
              {(
                (numReviewsDisplayed >= currentRatingsReviewsList.length)
                ? <button type="submit" className="reviewButton"
                  onClick={() => { setNumReviewsDisplayed(2); }}>COLLAPSE REVIEWS
                  </button>
                : <div></div>
              )}
              </div>
              <div>
                {(
                  (numReviewsDisplayed < currentRatingsReviewsList.length)
                  ? <button type="submit" className="reviewButton"
                    onClick={() => { setNumReviewsDisplayed(numReviewsDisplayed + 2); }}>MORE REVIEWS</button>
                  : <div></div>
                )}
              </div>
              {(
                addReview
                ? (<ReviewForm closeReviewForm={() => { setAddReview(false); }} name={currentProduct.name} />)
                : ''
              )}
            </div>
          </div>
        )}
      </ProductContext.Consumer>
    </div>
  );
};

export default RatingsReviews;
