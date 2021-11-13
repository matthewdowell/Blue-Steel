/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/globalContext';
import { addReview } from '../../utils/reviewUtils.js';
// import { getQuestionsAnswers, postQuestion } from '../../utils/questionsUtils';

const ReviewForm = ({ setModalDisplayed, characteristicsObj }) => {
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
  const [nameInputVal, setNameInputVal] = useState('');
  const [emailInputVal, setEmailInputVal] = useState('');
  const [photoURLs, setPhotoURLs] = useState([]);
  const [characteristics, setCharacteristics] = useState({
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0
  });
  const [errorDisplayed, setErrorDisplayed] = useState(false);

  const getCharacteristicButtonArray = (characteristic) => {
    if (characteristicsObj[characteristic]) {
      return (
        <div className="reviewCategory" key={characteristic}>
          <b className="characteristic" key={characteristic} style={{ width: '150px' }}>
            {characteristic}
          </b>
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
                  <label htmlFor={characteristic} id="radioButton">{rating}</label>
                </span>
              );
            })}
          </span>
        </div>
      );
    }
    return <div></div>;
  };

  const handleFormSubmit = () => {
    if (
      overallRating > 0
      && reviewSummary.length > 0
      && reviewBody.length > 50
      && reviewBody.length < 1000
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
        nameInputVal,
        emailInputVal,
        photoURLs,
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '700px',
        width: '780px',
        border: '2px solid black',
        borderRadius: '15px',
        padding: '11px',
        backgroundColor: '#051622',
      }}
    >
      <h2 style={{
        marginBottom: '0px',
        fontSize: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
        <div style={{ color: '#DEB992' }}>
          Write Your Review
        </div>
        <div style={{ marginTop: '5px', fontSize: '24px', marginBottom: '7px', color: '#DEB992' }}>
          About the
          {' '}
          {currentProduct.name}
        </div>
      </h2>
      <div style={{ margin: '10px', color: '#DEB992' }}>
        <div className="reviewFormOverallRating"> {/* REQUIRED */}
          <b>Overall Rating</b>
          <div>
            {ratings.map((rating) => {
              return (
                <span>
                  <input type="radio" name="radioButton" onChange={() => { setOverallRating(rating); }}></input>
                  <label htmlFor="rating" id="radioButton">{rating}</label>
                </span>
              );
            })}
          </div>
        </div>
        <div className="reviewFormRecommendation"> {/* REQUIRED */}
          <b>Do you recommend this product?</b>
          <span>
            <input type="radio" id="recommend" name="recommend" onChange={() => { setUserRecommended(true); }}></input>
            <label htmlFor="recommend" className="recommend" id="radioButton">Yes</label>
            <input type="radio" id="recommend" name="recommend" onChange={() => { setUserRecommended(false); }}></input>
            <label htmlFor="recommend" className="recommend" id="radioButton">No</label>
          </span>
        </div>
        <b style={{ marginTop: '10px' }}>Characteristics</b> {/* REQUIRED */}
        <div className="characteristicsContainer">
          {/* Left column characteristics */}
          <div>
            {characteristicsA.map((characteristic) => {
              return getCharacteristicButtonArray(characteristic);
            })}
          </div>
          {/* Right column characteristics */}
          <div>
            {characteristicsB.map((characteristic) => {
              return getCharacteristicButtonArray(characteristic);
            })}
          </div>
        </div>
        <div>
          <div><b>Review Summary </b></div>
          <textarea
            maxLength={60}
            rows={1}
            style={{ resize: 'none', width: '98%', margin: '5px 0' }}
            placeholder={'Best purchase ever!'}
            value={reviewSummary}
            onChange={(e) => { setReviewSummary(e.target.value); }}
          >
          </textarea>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <div><b>Review Body </b></div>
          <textarea
            minLength={50}
            maxLength={1000}
            rows={3}
            style={{ resize: 'none', width: '98%', margin: '5px 0' }}
            placeholder={'Why did you like the product or not?'}
            value={reviewBody}
            onChange={(e) => {
              setReviewBody(e.target.value);
            }}
          >
          </textarea>
          {reviewBody.length < 50
            ? <div style={{ color: '#DEB992' }}>
                Minimum required characters left:
                {' '}
                {50 - reviewBody.length}
              </div>
            : <div style={{ color: '#DEB992' }}>
                Minimum review length reached.
              </div>}
        </div>
        <div>
          <div><b>Upload Photo URL </b></div>
          <input
            style={{ width: '98%', margin: '5px 0' }}
            placeholder={'URL...'}
            value={photoURLs}
            onChange={(e) => {
              const URL = e.target.value;
              setPhotoURLs([URL]);
            }}
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
        <div style={{ color: '#DEB992' }}>For privacy reasons, do not use your full name or email address.</div>
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
        <div style={{ color: '#DEB992' }}>For authentication reasons, you will not be emailed.</div>
      </div>
      <button className="submitReviewButton" onClick={handleFormSubmit}>
        SUBMIT REVIEW
      </button>
      {errorDisplayed
        && <div style={{ color: 'red', marginTop: '25px' }}>
             *Invalid Submission: All form fields must be filled out with a valid email address*
           </div>}
    </div>
  );
};

export default ReviewForm;
