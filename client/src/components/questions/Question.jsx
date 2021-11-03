import React from 'react';

const Question = (props) => {
  return (
    <>
      <p>Q:  {props.question.question_body}</p>
      {Object.values(props.question.answers).map(answer => <p key={answer.id}>A:  {answer.body}</p>).slice(0, 2)}
    </>
  )
}
export default Question;
