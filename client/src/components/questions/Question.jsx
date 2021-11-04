import React, { useState } from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {

  // const[helpfulVotes, setHelpfulVotes] = useState(props.question)

  // function handleYesClick() {

  // }

  return (
    <>
      <p><b>Q:  {props.question.question_body}</b></p>
      <div style={{display: 'flex'}}>
        <p style={{paddingRight: '5px'}}><b>A:  </b></p>
        <div>{Object
          .values(props.question.answers)
          .map(answer => <Answer answer={answer} key={answer.id}/>)
          .slice(0, 2)}
        </div>
      </div>
    </>
  )
}
export default Question;
