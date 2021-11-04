/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { RatingsReviewsContext } from '../../context/ratingsReviewsContext.js';
import { addReview, getReviewMetadata, getReviewsOfProduct } from '../../utils/reviewUtils.js';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
import RatingsDistribution from './RatingsDistribution.jsx';

const sortRatingsReviewsList = (sortBy) => {
  if (sortBy === 'relevant') { // review.date AND review.helpfulness
  } else if (sortBy === 'newest') { // review.date
  } else if (sortBy === 'helpful') { // review.helpfulness
  }
};

const sortByNewest = (arrayOfObj) => {

};

const handleSortByChange = () => {
  const sortBy = document.getElementById('sortBy').value;
  sortRatingsReviewsList(sortBy);
};

const getPercentRecommended = (reviews) => {
  let numRecommended = 0;
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].recommend) { numRecommended++; }
  }
  return (numRecommended / reviews.length) * 100;
};

// TODO: Might need to move this into a global file to share
const getAverageRating = (ratings) => {
  let numRatings = 0;
  let totalScore = 0;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    numRatings += ratings[keys[i]];
    totalScore += keys[i] * ratings[keys[i]];
  }
  return totalScore / numRatings;
};

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
              <span className="ratingsReviewsHeader">Ratings and Reviews</span>
              <span className="averageRating">{getAverageRating(currentMetaData.ratings).toFixed(1)}</span>
              <span>Star Component Here</span>
              <div className="percentRecommended">
                {getPercentRecommended(currentRatingsReviewsList)}
                % of reviews recommend this product
              </div>
              <div><RatingsDistribution reviews={currentRatingsReviewsList} /></div>
              <div>Size Rating</div>
              <div>Comfort Rating</div>
            </div>
            <div>
              <div className="sortBy">
                {currentRatingsReviewsList.length}
                {' '}
                reviews, sorted by
                {' '}
                <select className="sortDropdown" onChange={handleSortByChange}>
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
              {/* TODO: MORE REVIEWS button should only appear if there are unshown reviews. Add 2 reviews per click  */}
              <button type="submit" className="reviewButton">MORE REVIEWS</button>
              <button type="submit" className="reviewButton addReviewButton" onClick={addReview}>ADD A REVIEW +</button>
            </div>
          </div>
        )}
      </ProductContext.Consumer>
    </div>
  );
};

export default RatingsReviews;
