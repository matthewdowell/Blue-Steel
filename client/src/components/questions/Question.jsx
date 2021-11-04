import React, { useState } from 'react';

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
          .map(answer => 
            <><p key={answer.id}>{answer.body}</p>
            {answer.answerer_name === 'Seller'
              ? <div style={{display: 'flex'}}>
                  <div>{`by `}<b>{answer.answerer_name}</b>{`, ${new Date(answer.date).toDateString().slice(4)}`}</div>
                  <div style={{padding: '0px 10px'}}>Helpful? </div>
                  <div style={{textDecoration: 'underline', paddingRight: '5px'}}>Yes</div>
                  <div>{`(${answer.helpfulness})`}</div>
                </div>
              : <div style={{display: 'flex'}}>
                  <div>{`by ${answer.answerer_name}, ${new Date(answer.date).toDateString().slice(4)}`}</div>
                  <div style={{padding: '0px 10px'}}>Helpful? </div>
                  <div 
                    style={{textDecoration: 'underline', paddingRight: '5px'}}
                    // onClick={{handleYesClick}}
                  >Yes</div>
                  <div>{`(${answer.helpfulness})`}</div>
                </div>
            }</>)
          .slice(0, 2)}
        </div>
      </div>
    </>
  )
}
export default Question;
