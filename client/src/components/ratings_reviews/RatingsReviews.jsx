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
import WidthDistribution from './WidthDistribution.jsx';
import ComfortDistribution from './ComfortDistribution.jsx';
import QualityDistribution from './QualityDistribution.jsx';
import LengthDistribution from './LengthDistribution.jsx';
import FitDistribution from './FitDistribution.jsx';

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
  // console.log('currentRatingsReviewsList:', currentRatingsReviewsList);
  // console.log('METADATA', currentMetaData);
  return (
    <div className="ratingsReviewsAll">
      <div className="aggregateReviewInfo">
        <span className="ratingsReviewsHeader">Ratings {'&'} Reviews</span>
        {/* AVERAGE RATING */}
        <span className="averageRating">
          {
            currentMetaData.ratings
              ? ratingsReviewsHelpers.getAverageRating(currentMetaData.ratings).toFixed(1)
              : null
          }
        </span>
        <span>Star Component Here</span>
        <PercentRecommended currentRatingsReviewsList={currentRatingsReviewsList} />
        {currentMetaData.ratings ? <RatingsDistribution ratings={currentMetaData.ratings} /> : null}
        <div className="characteristics">
          <b>Characteristics</b>
          {(currentMetaData.characteristics && currentMetaData.characteristics.Size)
            ? <SizeDistribution size={currentMetaData.characteristics.Size} />
            : null}
          {(currentMetaData.characteristics && currentMetaData.characteristics.Width)
            ? <WidthDistribution width={currentMetaData.characteristics.Width} />
            : null}
          {(currentMetaData.characteristics && currentMetaData.characteristics.Comfort)
            ? <ComfortDistribution comfort={currentMetaData.characteristics.Comfort} />
            : null}
          {(currentMetaData.characteristics && currentMetaData.characteristics.Quality)
            ? <QualityDistribution quality={currentMetaData.characteristics.Quality} />
            : null}
          {(currentMetaData.characteristics && currentMetaData.characteristics.Length)
            ? <LengthDistribution length={currentMetaData.characteristics.Length} />
            : null}
          {(currentMetaData.characteristics && currentMetaData.characteristics.Fit)
            ? <FitDistribution fit={currentMetaData.characteristics.Fit} />
            : null}
        </div>
      </div>
      <div>
        <SortReviewsBy
          currentRatingsReviewsList={currentRatingsReviewsList}
          setCurrentRatingsReviewsList={setCurrentRatingsReviewsList}
          numReviewsDisplayed={numReviewsDisplayed}
          ratingsToDisplay={ratingsToDisplay}
        />
        {showReviewForm && <ReviewFormModal setShowReviewForm={setShowReviewForm} />}
        {/* BUTTONS */}
        <div className="reviewButtons">
          <button
            type="submit"
            className="reviewButton addReviewButton"
            onClick={() => { setShowReviewForm(true); }}
          >
            ADD A REVIEW +
          </button>
          {
            (currentRatingsReviewsList.length > 0)
              ? (
                <div>
                  {(
                    (numReviewsDisplayed < currentRatingsReviewsList.length)
                      ? (
                        <button
                          type="submit"
                          className="reviewButton"
                          onClick={() => { setNumReviewsDisplayed(numReviewsDisplayed + 2); }}
                        >
                          MORE REVIEWS
                        </button>
                      )
                      : (
                        <button
                          type="submit"
                          className="reviewButton"
                          onClick={() => { setNumReviewsDisplayed(2); }}
                        >
                          COLLAPSE REVIEWS
                        </button>
                      )
                  )}
                </div>
              )
              : null
          }
        </div>
      </div>
    </div>
  );
};

export default RatingsReviews;
