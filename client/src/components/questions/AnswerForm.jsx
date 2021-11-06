import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
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

  const handleFormSubmit = () => {
    if (
      answerInputVal.length > 0
      && nameInputVal.length > 0
      && emailInputVal.length > 0
      && emailInputVal.includes('@')
    ) {
      postAnswer(question.question_id, answerInputVal, nameInputVal, emailInputVal, [], () => {
        getQuestionsAnswers(currentProduct.id, (data) => {
          console.log(data.results)
          setCurrentQuestions(data.results);
          setAllQuestions(data.results);
        }, null, 100);
        setModalDisplayed(false);
      })
    } else {
      setErrorDisplayed(true);
    }
  }

  return (
    <div 
      id='questionModal' 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '600px',
        width: '600px',
        border: "2px solid black",
        backgroundColor: 'white',
      }}
      >
      <h3 style={{marginBottom: '0px'}}>Submit Your Answer</h3>
      <div style={{marginTop: '5px'}}><b>{currentProduct.name}: </b>{question.question_body}</div>
      <div style={{margin: '20px'}}>
        <div>
          <div><b>Your Answer* </b></div>
          <textarea 
            maxLength={1000} 
            rows={10}
            style={{resize: 'none', width: '98%', margin: '10px 0'}}
            value={answerInputVal}
            onChange={(e) => { setAnswerInputVal(e.target.value); }}
          ></textarea>
        </div>
        <div>
          <div><b>Your Nickname* </b></div>
          <input 
            style={{width: '98%', margin: '10px 0'}}
            placeholder={'Example: jackson11!'}
            value={nameInputVal}
            onChange={(e) => { setNameInputVal(e.target.value); }}
          ></input>
        </div>
        <div>For privacy reasons, do not use your full name or email address.</div>
        <div>
          <div style={{marginTop: '10px'}}><b>Your Email* </b></div>
          <input 
            style={{width: '98%', margin: '10px 0'}} 
            placeholder={'Example: username@email.com'}
            maxLength={60}
            value={emailInputVal}
            onChange={(e) => { setEmailInputVal(e.target.value); }}
          ></input>
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
           cursor: `pointer`,
         }}
         onClick={handleFormSubmit}
      >SUBMIT ANSWER</div>
      {errorDisplayed
        && <div style={{color: 'red', marginTop: '25px'}}>
             *Invalid Submission: All form fields must be filled out with a valid email address*
           </div>}
    </div>
  )
}

export default AnswerForm;