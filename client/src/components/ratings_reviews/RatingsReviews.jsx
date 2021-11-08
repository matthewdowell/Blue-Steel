/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/globalContext.js';
import { getReviewMetadata, getReviewsOfProduct } from '../../utils/reviewUtils.js';
import ratingsReviewsHelpers from './ratingsReviewsHelpers.js';
import Stars from '../stars/Stars.jsx';
import SortReviewsBy from './SortReviewsBy.jsx';
import RatingsDistribution from './RatingsDistribution.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import SizeDistribution from './SizeDistribution.jsx';
import WidthDistribution from './WidthDistribution.jsx';
import ComfortDistribution from './ComfortDistribution.jsx';
import QualityDistribution from './QualityDistribution.jsx';
import LengthDistribution from './LengthDistribution.jsx';
import FitDistribution from './FitDistribution.jsx';
import ReviewFormModal from './ReviewFormModal.jsx';

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

  return (
    <div className="ratingsReviewsAll">
      <div className="aggregateReviewInfo">
        <span className="ratingsReviewsHeader"><b style={{ fontSize: '22px' }}>Ratings {'&'} Reviews</b></span>
        {/* AGGREGATE RATING */}
        <div className="aggregateRating">
          <div><b>Aggregate Rating</b></div>
          <span className="averageRating" style={{ fontSize: '50px' }}>
            {
              currentMetaData.ratings
                ? ratingsReviewsHelpers.getAverageRating(currentMetaData.ratings).toFixed(1)
                : null
            }
          </span>
          <div>
            <Stars
              rating={currentMetaData.ratings
                ? Math.round(ratingsReviewsHelpers.getAverageRating(currentMetaData.ratings))
                : null}
            />
          </div>
        </div>
        {/* USER RECOMMENDATION */}
        <div>
          <b>User Feedback</b>
          <PercentRecommended currentRatingsReviewsList={currentRatingsReviewsList} />
        </div>
        {/* RATINGS */}
        {currentMetaData.ratings ? <RatingsDistribution ratings={currentMetaData.ratings} /> : null}
        {/* CHARACTERISTICS */}
        <div className="characteristics">
          <b>Characteristics</b>
          {(currentMetaData.characteristics)
            ? <SizeDistribution size={currentMetaData.characteristics.Size} />
            : null}
          {(currentMetaData.characteristics)
            ? <WidthDistribution width={currentMetaData.characteristics.Width} />
            : null}
          {(currentMetaData.characteristics)
            ? <ComfortDistribution comfort={currentMetaData.characteristics.Comfort} />
            : null}
          {(currentMetaData.characteristics)
            ? <QualityDistribution quality={currentMetaData.characteristics.Quality} />
            : null}
          {(currentMetaData.characteristics)
            ? <LengthDistribution length={currentMetaData.characteristics.Length} />
            : null}
          {(currentMetaData.characteristics)
            ? <FitDistribution fit={currentMetaData.characteristics.Fit} />
            : null}
        </div>
        <div>
          <button
            type="submit"
            className="reviewButton addReviewButton"
            style={{display: 'block'}}
            onClick={() => { setShowReviewForm(true); }}
          >
            ADD A REVIEW +
          </button>
        </div>
      </div>
      <div className="reviewList">
        <SortReviewsBy
          currentRatingsReviewsList={currentRatingsReviewsList}
          setCurrentRatingsReviewsList={setCurrentRatingsReviewsList}
          numReviewsDisplayed={numReviewsDisplayed}
          ratingsToDisplay={ratingsToDisplay}
        />
        {showReviewForm && <ReviewFormModal setShowReviewForm={setShowReviewForm} />}
        {/* BUTTONS */}
        <div className="reviewButtons">
          {
            (currentRatingsReviewsList.length > 0)
              ? (
                <div>
                  {(
                    (currentRatingsReviewsList.length < 3)
                      ? null
                      : (numReviewsDisplayed < currentRatingsReviewsList.length)
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
