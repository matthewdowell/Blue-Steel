/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { RatingsReviewsContext } from '../../context/ratingsReviewsContext.js';
import { addReview, getReviewMetadata, getReviewsOfProduct } from '../../utils/reviewUtils.js';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';
import ReviewForm from './ReviewForm.jsx';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
import RatingsDistribution from './RatingsDistribution.jsx';
import SizeDistribution from './SizeDistribution.jsx';

// Functional component
const RatingsReviews = () => {
  const { currentProduct } = useContext(ProductContext);
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
              <RatingsReviewsContext.Provider value={currentRatingsReviewsList}>
                {/* TODO: Iterate all reviews and display first two */}
                {/* TODO: Show the rest if MORE REVIEWS button is clicked */}
                {currentRatingsReviewsList.map((tile) => <RatingsReviewsTile tile={tile} />)}
              </RatingsReviewsContext.Provider>
              {/* TODO: MORE REVIEWS only appears if there are hidden reviews.
              Add 2 reviews per click */}
              <button type="submit" className="reviewButton">MORE REVIEWS</button>
              <button
                type="submit"
                className="reviewButton addReviewButton"
                onClick={ratingsReviewsHelpers.openReviewForm}
              >
                ADD A REVIEW +
              </button>
              {/* Form to add a review */}
              <div className="form-popup" id="myForm">
                <form action="/action_page.php" className="form-container">
                  <h1>Add a Review</h1>
                  <label><b>Rating</b></label>
                  <input type="number" placeholder="Enter Rating" required></input>
                  <label><b>Recommended?</b></label>
                  <input type="text" placeholder="Yes or No" required></input>
                  <button type="submit" className="reviewButton">Submit Review</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </ProductContext.Consumer>
    </div>
  );
};

// export default RatingsReviews;
