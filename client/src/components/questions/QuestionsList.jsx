import React, { useContext, useEffect, useState } from 'react';
import { qaContext } from '../../context/qaContext.js';
import Question from './Question.jsx';

const QuestionsList = () => {
  //const { currentQuestions } = useContext(qaContext);

  return (
    <div>
      <div>Questions List Component</div>
      <qaContext.Consumer>
        {(questions) => (
          questions.map(question => <Question question={question}/>)
        )}
      </qaContext.Consumer>
    </div>
  )
}

export default QuestionsList;