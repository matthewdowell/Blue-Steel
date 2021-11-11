/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/globalContext';
import { qaContext } from '../../context/qaContext';
import { getQuestionsAnswers, postQuestion } from '../../utils/questionsUtils';

const QuestionForm = ({ setModalDisplayed }) => {
  const { currentProduct } = useContext(ProductContext);
  const { setCurrentQuestions, setAllQuestions } = useContext(qaContext);
  const [questionInputVal, setQuestionInputVal] = useState('');
  const [nameInputVal, setNameInputVal] = useState('');
  const [emailInputVal, setEmailInputVal] = useState('');
  const [errorDisplayed, setErrorDisplayed] = useState(false);

  const handleFormSubmit = () => {
    if (
      questionInputVal.length > 0
      && nameInputVal.length > 0
      && emailInputVal.length > 0
      && emailInputVal.includes('@')
    ) {
      postQuestion(questionInputVal, nameInputVal, emailInputVal, currentProduct.id, () => {
        getQuestionsAnswers(currentProduct.id, (data) => {
          setCurrentQuestions(data.results);
          setAllQuestions(data.results);
          setModalDisplayed(false);
        }, null, 100);
      });
    } else {
      setErrorDisplayed(true);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '600px',
        width: '600px',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'white',
      }}
    >
      <h3 style={{ marginBottom: '0px' }}>Ask Your Question</h3>
      <div style={{ marginTop: '5px' }}>
        {`About the ${currentProduct.name}`}
      </div>
      <div style={{ margin: '20px' }}>
        <div>
          <div><b>Your Question* </b></div>
          <textarea
            maxLength={1000}
            rows={10}
            style={{ resize: 'none', width: '98%', margin: '10px 0' }}
            value={questionInputVal}
            onChange={(e) => { setQuestionInputVal(e.target.value); }}
          />
        </div>
        <div>
          <div><b>Your Nickname* </b></div>
          <input
            style={{ width: '98%', margin: '10px 0' }}
            placeholder="Example: jackson11!"
            value={nameInputVal}
            onChange={(e) => { setNameInputVal(e.target.value); }}
          />
        </div>
        <div>For privacy reasons, do not use your full name or email address.</div>
        <div>
          <div style={{ marginTop: '10px' }}><b>Your Email* </b></div>
          <input
            style={{ width: '98%', margin: '10px 0' }}
            placeholder="Example: username@email.com"
            maxLength={60}
            value={emailInputVal}
            onChange={(e) => { setEmailInputVal(e.target.value); }}
          />
        </div>
        <div>For authentication reasons, you will not be emailed.</div>
      </div>
      <div
        style={{
          border: '2px solid black',
          height: '50px',
          width: '200px',
          lineHeight: '50px',
          textAlign: 'center',
          marginTop: '10px',
          cursor: 'pointer',
          borderRadius: '15px',
        }}
        onClick={handleFormSubmit}
        onKeyPress={handleFormSubmit}
        role="button"
        tabIndex={0}
      >
        SUBMIT QUESTION
      </div>
      {errorDisplayed
        && (
        <div style={{ color: 'red', marginTop: '25px' }}>
          *Invalid Submission: All form fields must be filled out with a valid email address*
        </div>
        )}
    </div>
  );
};

export default QuestionForm;
