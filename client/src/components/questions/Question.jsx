import React from 'react';

const Question = (props) => {
  return (
    <>
      <p>Q:  {props.question.question_body}</p>
      <div style={{display: 'flex'}}>
        <p style={{paddingRight: '5px'}}>A:  </p>
        <div>{Object
          .values(props.question.answers)
          .map(answer => <p key={answer.id}>{answer.body}</p>)
          .slice(0, 2)}
        </div>
      </div>
    </>
  )
}
export default Question;
