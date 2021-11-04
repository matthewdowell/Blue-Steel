import React from 'react';

const Question = (props) => {
  return (
    <>
      <p><b>Q:  {props.question.question_body}</b></p>
      <div style={{display: 'flex'}}>
        <p style={{paddingRight: '5px'}}><b>A:  </b></p>
        <div>{Object
          .values(props.question.answers)
          .map(answer => 
            <><p key={answer.id}>{answer.body}</p>
            {answer.answerer_name === 'Seller'
              ? <div>
                  <div>
                    {`by `}<b>{answer.answerer_name}</b>
                    {`, ${new Date(answer.date).toDateString().slice(4)}`}
                  </div>
                </div>
              : <div>{`by ${answer.answerer_name}, ${new Date(answer.date).toDateString().slice(4)}`}</div>
            }</>)
          .slice(0, 2)}
        </div>
      </div>
    </>
  )
}
export default Question;
