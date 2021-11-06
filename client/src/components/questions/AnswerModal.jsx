import React from 'react';
import AnswerForm from './AnswerForm.jsx';

const AnswerModal = ({ setModalDisplayed, question }) => {
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
    }}
    onClick={(e) => {if (e.target === e.currentTarget) {
      setModalDisplayed(false)}
    }}
    >
      <AnswerForm setModalDisplayed={setModalDisplayed} question={question}/>
    </div>
  )
}

export default AnswerModal;