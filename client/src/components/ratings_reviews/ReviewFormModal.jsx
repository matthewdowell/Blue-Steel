/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewForm from './ReviewForm.jsx';

const ReviewFormModal = ({ setModalDisplayed, characteristicsObj, currentMetaData }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(200, 200, 200, 0.8)',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '2',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModalDisplayed(false);
        }
      }}
      onKeyPress={(e) => {
        if (e.target === e.currentTarget) {
          setModalDisplayed(false);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <ReviewForm
        setModalDisplayed={setModalDisplayed}
        characteristicsObj={characteristicsObj}
        currentMetaData={currentMetaData}
      />
    </div>
  );
};

export default ReviewFormModal;
