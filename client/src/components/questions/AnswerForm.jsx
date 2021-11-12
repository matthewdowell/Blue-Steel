/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/globalContext';
import { qaContext } from '../../context/qaContext';
import { getQuestionsAnswers, postAnswer } from '../../utils/questionsUtils';

const AnswerForm = ({ setModalDisplayed, question }) => {
  const { currentProduct } = useContext(ProductContext);
  const { setCurrentQuestions, setAllQuestions } = useContext(qaContext);
  const [answerInputVal, setAnswerInputVal] = useState('');
  const [nameInputVal, setNameInputVal] = useState('');
  const [emailInputVal, setEmailInputVal] = useState('');
  const [errorDisplayed, setErrorDisplayed] = useState(false);
  const [imageInputVal, setImageInputVal] = useState([]);

  const handleFormSubmit = () => {
    if (
      answerInputVal.length > 0
      && nameInputVal.length > 0
      && emailInputVal.length > 0
      && emailInputVal.includes('@')
    ) {
      postAnswer(
        question.question_id, answerInputVal, nameInputVal, emailInputVal, imageInputVal, () => {
          getQuestionsAnswers(currentProduct.id, (data) => {
            console.log(data.results);
            setCurrentQuestions(data.results);
            setAllQuestions(data.results);
          }, null, 100);
          setModalDisplayed(false);
        },
      );
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
        height: '700px',
        width: '600px',
        border: '2px solid black',
        background: '#051622',
        borderRadius: '15px',
      }}
    >
      <h3 style={{ marginBottom: '0px' }}>Submit Your Answer</h3>
      <div style={{ marginTop: '5px' }}>
        <b>
          {`${currentProduct.name}: `}
        </b>
        {question.question_body}
      </div>
      <div style={{ margin: '20px' }}>
        <div>
          <div><b>Your Answer* </b></div>
          <textarea
            maxLength={1000}
            rows={10}
            style={{ resize: 'none', width: '98%', margin: '10px 0' }}
            value={answerInputVal}
            onChange={(e) => { setAnswerInputVal(e.target.value); }}
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
        <div style={{ marginTop: '10px' }}><b>Attach An Image URL</b></div>
        <input
          style={{ width: '98%', margin: '10px 0' }}
          value={imageInputVal}
          onChange={(e) => { setImageInputVal([e.target.value]); }}
        />
      </div>
      <div
        style={{
          border: '2px solid tan',
          height: '50px',
          width: '200px',
          lineHeight: '50px',
          textAlign: 'center',
          marginTop: '10px',
          cursor: 'pointer',
          borderRadius: '15px',
          background: '#DEB992',
          color: '#051622',
        }}
        onClick={handleFormSubmit}
        onKeyPress={handleFormSubmit}
        role="button"
        tabIndex={0}
      >
        SUBMIT ANSWER
      </div>
      {errorDisplayed
        && (
        <div style={{
          color: 'red', marginTop: '25px', textAlign: 'center', maxWidth: '70%',
        }}
        >
          {`*Invalid Submission: All required form fields 
          must be filled out with a valid email address*`}
        </div>
        )}
    </div>
  );
};

export default AnswerForm;
