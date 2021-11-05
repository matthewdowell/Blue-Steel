import React, { useContext, useEffect, useState } from 'react';
import { qaContext } from '../../context/qaContext.js';
import Question from './Question.jsx';

const QuestionsList = () => {
  const currentQuestions = useContext(qaContext);
  const [numberOfQsDisplayed, setNumberOfQsDisplayed] = useState(2)

  function HandleMoreQsClick() {
    setNumberOfQsDisplayed(numberOfQsDisplayed + 2);
  }

  function handleAddQuestionClick() {
    console.log('add question button clicked');
  }

  return (
    <div>
      <qaContext.Consumer>
        {(questions) => (
          questions.length === 0
          ? <button>Submit A New Question</button>
          : <><div 
                style={{
                  height: '400px',
                  overflowY: 'auto',
                  margin: '20px 0'
                }}
              >{questions
              .map((question, index) => 
                <Question key={index} question={question} helpfulness={question.question_helpfulness}/>)
              .slice(0, numberOfQsDisplayed)
              .sort((a, b) => b.props.helpfulness - a.props.helpfulness)}
              </div>
              <div style={{display: 'flex'}}>
                {numberOfQsDisplayed < currentQuestions.length
                ? <div 
                    onClick={HandleMoreQsClick}
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
                  onClick={handleAddQuestionClick}
                >
                  <div>ADD A QUESTION</div>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
            </>
        )}
      </qaContext.Consumer>
    </div>
  )
}

export default QuestionsList;