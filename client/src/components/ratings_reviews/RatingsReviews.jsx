/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { RatingsReviewsContext } from '../../context/ratingsReviewsContext.js';
import { addReview, getReviewMetadata, getReviewsOfProduct } from '../../utils/reviewUtils.js';
import RatingsReviewsTile from './RatingsReviewsTile.jsx';
import '../../../dist/ratingsReviewsStyle.css';

const sortRatingsReviewsList = (sortBy) => {

};

const handleSortByChange = () => {
  const sortBy = document.getElementById('sortBy').value;
  sortRatingsReviewsList(sortBy);
};

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
  console.log('METADATA:', currentMetaData);

  return (
    <div>
      <ProductContext.Consumer>
        {() => (
          <div>
            <h2 className="header">Ratings and Reviews</h2>
            <h3>
              Average rating:
              {getAverageRating(currentMetaData.ratings)}
            </h3>
            <div>
              {currentRatingsReviewsList.length}
              {' '}
              reviews, sorted by
              {' '}
              <select name="sortBy" id="sortBy" onChange={handleSortByChange}>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
                <option value="helpful">helpfulness</option>
              </select>
              <RatingsReviewsContext.Provider value={currentRatingsReviewsList}>
                {/* TODO: Iterate all reviews and display first two */}
                {/* TODO: Show the rest if MORE REVIEWS button is clicked */}
                {currentRatingsReviewsList.map((tile) => {
                  return <RatingsReviewsTile tile={tile} />;
                })}
              </RatingsReviewsContext.Provider>
            </div>
            {/* TODO: MORE REVIEWS button should only appear if there are unshown reviews. Add 2 reviews per click  */}
            <button type="submit" className="reviewButton">MORE REVIEWS</button>
            <button type="submit" className="reviewButton" onClick={addReview}>ADD A REVIEW +</button>
          </div>
        )}
      </ProductContext.Consumer>
    </div>
  );
};

export default RatingsReviews;
