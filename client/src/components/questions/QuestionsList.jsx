import React, { useContext, useEffect, useState } from 'react';
import { qaContext } from '../../context/qaContext.js';
import Question from './Question.jsx';

const QuestionsList = () => {
  const currentQuestions = useContext(qaContext);
  const [numberOfQsDisplayed, setNumberOfQsDisplayed] = useState(4)

  function HandleMoreQsClick() {
    setNumberOfQsDisplayed(currentQuestions.length);
  }

  return (
    <div>
      <qaContext.Consumer>
        {(questions) => (
          questions.length === 0
          ? <button>Submit A New Question</button>
          : <><div>{questions
              .map((question, index) => 
                <Question key={index} question={question} helpfulness={question.question_helpfulness}/>)
              .slice(0, numberOfQsDisplayed)
              .sort((a, b) => b.props.helpfulness - a.props.helpfulness)}
             </div>
             <button onClick={HandleMoreQsClick}>More Answered Questions</button></>
        )}
      </qaContext.Consumer>
    </div>
  )
}

export default QuestionsList;