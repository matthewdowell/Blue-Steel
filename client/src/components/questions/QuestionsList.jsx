import React, { useContext, useEffect, useState } from 'react';
import { qaContext } from '../../context/qaContext.js';
import Question from './Question.jsx';

const QuestionsList = () => {
  const currentQuestions = useContext(qaContext);
  const [numberOfQsDisplayed, setNumberOfQsDisplayed] = useState(2)
  const [moreQsButtonDisplayed, setMoreQsButtonDisplayed] = useState(true)

  function HandleMoreQsClick() {
    setNumberOfQsDisplayed(currentQuestions.length);
    setMoreQsButtonDisplayed(false);
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
             {currentQuestions.length > 2 && moreQsButtonDisplayed
             ? <button onClick={HandleMoreQsClick}>More Answered Questions</button>
             : null
             }
            </>
        )}
      </qaContext.Consumer>
    </div>
  )
}

export default QuestionsList;