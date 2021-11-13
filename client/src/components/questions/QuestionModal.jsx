/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import QuestionForm from './QuestionForm.jsx';

const QuestionModal = ({ setModalDisplayed }) => (
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
      zIndex: '150',
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
    <QuestionForm setModalDisplayed={setModalDisplayed} />
  </div>
);

export default QuestionModal;
