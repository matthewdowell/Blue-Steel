/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { getReviewMetadata, getReviewsOfProduct } from '../../utils/reviewUtils.js';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';
import ReviewFormModal from './ReviewFormModal.jsx';
import SortReviewsBy from './SortReviewsBy.jsx';
import RatingsDistribution from './RatingsDistribution.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import SizeDistribution from './SizeDistribution.jsx';
import ComfortDistribution from './ComfortDistribution.jsx';

const RatingsReviews = () => {
  const { currentProduct } = useContext(ProductContext);
  const [numReviewsDisplayed, setNumReviewsDisplayed] = useState(2);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [currentRatingsReviewsList, setCurrentRatingsReviewsList] = useState([]);
  const [ratingsToDisplay, setRatingsToDisplay] = useState([1, 2, 3, 4, 5]);
  const [currentMetaData, setCurrentMetaData] = useState({});

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
  console.log(currentRatingsReviewsList);
  console.log('METADATA', currentMetaData);
  return (
    <div className="ratingsReviewsAll">
      <div className="aggregateReviewInfo">
        <span className="ratingsReviewsHeader">Ratings {'&'} Reviews</span>
        <span className="averageRating">
          {
            currentMetaData.ratings
            ? ratingsReviewsHelpers.getAverageRating(currentMetaData.ratings)
            : null
          }
        </span>
        <span>Star Component Here</span>
        <PercentRecommended currentRatingsReviewsList={currentRatingsReviewsList}/>
        {currentMetaData.ratings ? <RatingsDistribution ratings={currentMetaData.ratings} /> : null}
        {
          currentMetaData.characteristics !== undefined && currentMetaData.characteristics !== null
          ? (
              <SizeDistribution
                size={
                  currentMetaData.characteristics.Size
                    ? currentMetaData.characteristics.Size
                    : null
                }
              />
            )
          : null
        }
        {
          currentMetaData.characteristics !== undefined && currentMetaData.characteristics !== null
          ? (
              <ComfortDistribution
                size={
                  currentMetaData.characteristics.Comfort
                    ? currentMetaData.characteristics.Comfort
                    : null
                }
              />
            )
          : null
        }
      </div>
      <div>
        <SortReviewsBy
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
            ? <button
                type="submit"
                className="reviewButton"
                onClick={() => { setNumReviewsDisplayed(numReviewsDisplayed + 2); }}>
                MORE REVIEWS
              </button>
            : <button
                type="submit"
                className="reviewButton"
                onClick={() => { setNumReviewsDisplayed(2); }}>
                COLLAPSE REVIEWS
              </button>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsReviews;
