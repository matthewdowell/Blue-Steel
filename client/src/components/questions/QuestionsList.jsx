import React, { useContext, useState } from 'react';
import { qaContext } from '../../context/qaContext.js';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionsList = () => {
  const { currentQuestions } = useContext(qaContext);
  const [numberOfQsDisplayed, setNumberOfQsDisplayed] = useState(2);
  const [modalDisplayed, setModalDisplayed] = useState(false);

  return (
    <div>
      {currentQuestions.length === 0
      ? <div
          style={{
            height: '50px',
            width: '200px',
            lineHeight: '50px',
            border: '2px solid black',
            cursor: 'pointer',
            textAlign: 'center',
            marginTop: '25px',
            borderRadius: '15px',
          }}
          onClick={() => { setModalDisplayed(true); }}
        >
          <div>SUBMIT A QUESTION</div>
        </div >
      : <><div
            style={{
              height: '600px',
              overflowY: 'auto',
              overflowX: 'auto',
              margin: '20px 0',
              // border: '2px solid black',
              padding: '0px 15px',
            }}
          >{currentQuestions
          .map((question, index) =>
            <Question key={index} question={question} helpfulness={question.question_helpfulness}/>)
          .slice(0, numberOfQsDisplayed)
          .sort((a, b) => b.props.helpfulness - a.props.helpfulness)}
          </div>
          <div style={{display: 'flex'}}>
            {numberOfQsDisplayed < currentQuestions.length - 1
            ? <div
                onClick={() => { setNumberOfQsDisplayed(currentQuestions.length); }}
                style={{
                  height: '50px',
                  lineHeight: '50px',
                  width: '300px',
                  border: '2px solid black',
                  textAlign: 'center',
                  cursor: 'pointer',
                  marginRight: '20px',
                  borderRadius: '15px',
                }}>
                MORE ANSWERED QUESTIONS
              </div>
            : null
            }
            <div
              style={{
                display: 'flex',
                height: '50px',
                width: '170px',
                border: '2px solid black',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                borderRadius: '15px',
              }}
              onClick={() => { setModalDisplayed(true); }}
            >
              <div>ADD A QUESTION</div>
              <i className="fas fa-plus"></i>
            </div >
          </div>
        </>
      }
      { modalDisplayed && <QuestionModal setModalDisplayed={setModalDisplayed}/>}
    </div>
  )
}

export default QuestionsList;