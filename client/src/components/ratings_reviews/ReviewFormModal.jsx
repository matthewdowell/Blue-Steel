import React from 'react';
import { sortRatingsReviewsList } from './ratingsReviewsHelpers.js';
import ReviewForm from './ReviewForm.jsx';

const ReviewFormModal = ({ setShowReviewForm }) => {
  return (
    <div style={{
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
    }}>
      <ReviewForm setShowReviewForm={setShowReviewForm}/>
    </div>
  )
}

export default ReviewFormModal;