/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewForm from './ReviewForm.jsx';

const ReviewFormModal = ({ setShowReviewForm }) => {
  return (
    <div style={{
      'font-size': '30px',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(200, 200, 200, 1)',
      position: 'fixed',
      overflow: 'scroll',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '2',
    }}
    >
      <ReviewForm setShowReviewForm={setShowReviewForm} />
    </div>
  );
};

export default ReviewFormModal;
