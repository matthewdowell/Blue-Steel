/* eslint-disable comma-dangle */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import { ProductContext } from '../../context/globalContext';
import { qaContext } from '../../context/qaContext';
import { addReview } from '../../utils/reviewUtils.js';
// import { getQuestionsAnswers, postQuestion } from '../../utils/questionsUtils';

const ReviewForm = ({ setModalDisplayed }) => {
  const characteristicIDs = {
    Size: 14,
    Width: 15,
    Comfort: 16,
    Quality: 17,
    Length: 18,
    Fit: 19
  };
  const characteristicsA = ['Size', 'Width', 'Comfort'];
  const characteristicsB = ['Quality', 'Length', 'Fit'];
  const ratings = [1, 2, 3, 4, 5];
  const { currentProduct } = useContext(ProductContext);
  const [overallRating, setOverallRating] = useState(0);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [userRecommended, setUserRecommended] = useState(false);
  const [photoURLs, setPhotoURLs] = useState([]);
  const [nameInputVal, setNameInputVal] = useState('');
  const [emailInputVal, setEmailInputVal] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0
  });
  const [errorDisplayed, setErrorDisplayed] = useState(false);

  const handleFormSubmit = () => {
    if (
      overallRating > 0
      && reviewSummary.length > 0
      && reviewBody.length > 0
      && emailInputVal.length > 0
      && emailInputVal.includes('@')
    ) {
      addReview(
        () => {},
        currentProduct.id,
        overallRating,
        reviewSummary,
        reviewBody,
        userRecommended,
        photoURLs,
        nameInputVal,
        emailInputVal,
        photos,
        characteristics
      );
      setModalDisplayed(false);
    } else {
      setErrorDisplayed(true);
    }
  };

  return (
    <div
      id="reviewModal"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '600px',
        width: '600px',
        border: '2px solid black',
        backgroundColor: 'white',
      }}
    >
      <h3 style={{ marginBottom: '0px' }}>Write Your Review</h3>
      <div style={{ marginTop: '5px' }}>About the {currentProduct.name}</div>
      <div style={{ margin: '10px' }}>
        <div> {/* REQUIRED */}
          <b>Overall Rating</b>
          {ratings.map((rating) => {
            return (
              <span>
                <input type="radio" id="rating" name="rating" onChange={() => { setOverallRating(rating); }}></input>
                <label htmlFor="rating">{rating}</label>
              </span>
            );
          })}
        </div>
        <div> {/* REQUIRED */}
          <b>Do you recommend this product?</b>
          <span>
            <input type="radio" id="recommend" name="recommend" onChange={() => { setUserRecommended(true); }}></input>
            <label htmlFor="recommend">Yes</label>
            <input type="radio" id="recommend" name="recommend" onChange={() => { setUserRecommended(false); }}></input>
            <label htmlFor="recommend">No</label>
          </span>
        </div>
        <p>
          <b>Characteristics</b> {/* REQUIRED */}
          <div className="characteristicsContainer">
            {/* Left column characteristics */}
            <div>
              {characteristicsA.map((characteristic) => {
                return (
                  <div className="reviewCategory">
                    <span className="characteristic" style={{ width: '200px' }}>
                      {characteristic}
                    </span>
                    <span className="ratings" style={{ justifySelf: 'end' }}>
                      {ratings.map((rating) => {
                        return (
                          <span>
                            <input
                              type="radio"
                              id={characteristic}
                              name={characteristic}
                              onChange={() => {
                                const id = characteristicIDs[characteristic];
                                setCharacteristics({
                                  ...characteristics,
                                  [id]: rating
                                });
                              }}
                            >
                            </input>
                            <label htmlFor={characteristic}>{rating}</label>
                          </span>
                        );
                      })}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Right column characteristics */}
            <div>
              {characteristicsB.map((characteristic) => {
                return (
                  <div className="reviewCategory">
                    <span className="characteristic">
                      {characteristic}
                    </span>
                    {ratings.map((rating) => {
                      return (
                        <span>
                          <input
                            type="radio"
                            id={characteristic}
                            name={characteristic}
                            onChange={() => {
                              const id = characteristicIDs[characteristic];
                              setCharacteristics({
                                ...characteristics,
                                [id]: rating
                              });
                            }}
                          >
                          </input>
                          <label htmlFor={characteristic}>{rating}</label>
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </p>
        <div>
          <div><b>Review Summary </b></div>
          <textarea
            maxLength={60}
            rows={1}
            style={{ resize: 'none', width: '98%', margin: '5px 0' }}
            value={reviewSummary}
            onChange={(e) => { setReviewSummary(e.target.value); }}
          >
          </textarea>
        </div>
        <div>
          <div><b>Review Body </b></div>
          <textarea
            maxLength={1000}
            rows={3}
            style={{ resize: 'none', width: '98%', margin: '5px 0' }}
            value={reviewBody}
            onChange={(e) => { setReviewBody(e.target.value); }}
          >
          </textarea>
        </div>
        <div>
          <div><b>Upload Photo URL </b></div>
          <input
            style={{ width: '98%', margin: '5px 0' }}
            placeholder={'URL...'}
            value={photoURLs}
            onChange={(e) => { setPhotoURLs([e.target.value]); }}
          >
          </input>
        </div>
        <div>
          <div><b>Nickname </b></div>
          <input
            style={{ width: '98%', margin: '5px 0' }}
            placeholder={'Example: jackson11!'}
            value={nameInputVal}
            onChange={(e) => { setNameInputVal(e.target.value); }}
          >
          </input>
        </div>
        <div>For privacy reasons, do not use your full name or email address.</div>
        <div>
          <div style={{ marginTop: '10px' }}><b>Email </b></div>
          <input
            style={{ width: '98%', margin: '5px 0' }}
            placeholder={'Example: jackson11@email.com'}
            maxLength={60}
            value={emailInputVal}
            onChange={(e) => { setEmailInputVal(e.target.value); }}
          >
          </input>
        </div>
        <div>For authentication reasons, you will not be emailed.</div>
      </div>
      <div className="submitReviewButton" onClick={handleFormSubmit}>
        SUBMIT REVIEW
      </div>
      {errorDisplayed
        && <div style={{ color: 'red', marginTop: '25px' }}>
             *Invalid Submission: All form fields must be filled out with a valid email address*
           </div>}
    </div>
  );
};

export default ReviewForm;
