import React from 'react';
import QuestionForm from './QuestionForm.jsx';

const QuestionModal = () => {
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
      <QuestionForm />
    </div>
  )
}

export default QuestionModal;