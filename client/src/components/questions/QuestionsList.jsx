import React, { useContext, useEffect, useState } from 'react';
import { qaContext } from '../../context/qaContext.js';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';

const QuestionsList = () => {
  const currentQuestions = useContext(qaContext);
  const [numberOfQsDisplayed, setNumberOfQsDisplayed] = useState(2);
  const [modelDisplayed, setModelDisplayed] = useState(false);

  return (
    <div>
      {currentQuestions.length === 0
      ? <button>Submit A New Question</button>
      : <><div 
            style={{
              height: '400px',
              overflowY: 'auto',
              margin: '20px 0'
            }}
          >{currentQuestions
          .map((question, index) => 
            <Question key={index} question={question} helpfulness={question.question_helpfulness}/>)
          .slice(0, numberOfQsDisplayed)
          .sort((a, b) => b.props.helpfulness - a.props.helpfulness)}
          </div>
          <div style={{display: 'flex'}}>
            {numberOfQsDisplayed < currentQuestions.length
            ? <div 
                onClick={() => { setNumberOfQsDisplayed(numberOfQsDisplayed + 2); }}
                style={{
                  height: '50px',
                  lineHeight: '50px',
                  width: '300px',
                  border: '2px solid black',
                  textAlign: 'center',
                  cursor: 'pointer',
                  marginRight: '20px'
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
                padding: '0 20px'                   
              }}
              onClick={() => { setModelDisplayed(true); }}
            >
              <div>ADD A QUESTION</div>
              <i className="fas fa-plus"></i>
            </div >
          </div>
          { modelDisplayed && <QuestionModal />}
        </>
      }
    </div>
  )
}

export default QuestionsList;