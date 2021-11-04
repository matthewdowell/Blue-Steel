import React, { useState } from 'react';
import { markQuestionAsHelpful } from '../../utils/questionsUtils.js';
import Answer from './Answer.jsx';

const Question = (props) => {

  const[showMoreAnswers, setShowMoreAnswers] = useState(false)
  const [helpfulVotes, setHelpfulVotes] = useState(props.helpfulness);
  const [voted, setVoted] = useState(false);

  function handleMoreAnswersClick() {
     setShowMoreAnswers(!showMoreAnswers)
  }
  
  function handleYesClick() {
    if (!voted) {
      setVoted(true);
      markQuestionAsHelpful(props.question.question_id, () => {
        setHelpfulVotes(props.helpfulness + 1)
      });
    }
  }

  function handleAddAnswerClick() {
    console.log('add answer button clicked!')
  }

  return (
    <>
      {showMoreAnswers
        ? <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{marginTop: '5px'}}><b>Q:  {props.question.question_body}</b></div>
              <div style={{display: 'flex', marginTop: '5px'}}>
                <div style={{paddingRight: '10px'}}>Helpful?</div>
                <div 
                  style={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    paddingRight: '5px'
                  }}
                  onClick={handleYesClick}
                >Yes</div>
                <div style={{paddingRight: '10px', borderRight: '2px solid black'}}>{`(${helpfulVotes})`}</div>
                <div 
                  style={{paddingLeft: '10px', textDecoration: 'underline', cursor: 'pointer'}}
                  onClick={handleAddAnswerClick}
                >Add Answer</div>
              </div>
            </div>
            <div style={{display: 'flex'}}>
                <p style={{paddingRight: '5px'}}><b>A:  </b></p>
                <div>{Object
                  .values(props.question.answers)
                  .map(answer => <Answer answer={answer} key={answer.id} helpfulness={answer.helpfulness}/>)
                  .sort((a, b) => b.props.helpfulness - a.props.helpfulness)}
                </div>
            </div>
          </>
        : <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{marginTop: '5px'}}><b>Q:  {props.question.question_body}</b></div>
              <div style={{display: 'flex', marginTop: '5px'}}>
                <div style={{paddingRight: '10px'}}>Helpful?</div>
                <div 
                  style={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    paddingRight: '5px'
                  }}
                  onClick={handleYesClick}
                >Yes</div>
                <div style={{paddingRight: '10px', borderRight: '2px solid black'}}>{`(${helpfulVotes})`}</div>
                <div 
                  style={{paddingLeft: '10px', textDecoration: 'underline', cursor: 'pointer'}}
                  onClick={handleAddAnswerClick}
                >Add Answer</div>
              </div>
            </div>
            <div style={{display: 'flex'}}>
              <p style={{paddingRight: '5px'}}><b>A:  </b></p>
              <div>{Object
                .values(props.question.answers)
                .map(answer => <Answer answer={answer} key={answer.id} helpfulness={answer.helpfulness}/>)
                .slice(0, 2)
                .sort((a, b) => b.props.helpfulness - a.props.helpfulness)}
              </div>
            </div>
            <div>
              {Object.values(props.question.answers).length > 2
              ? <div 
                  style={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    paddingLeft: '22px',
                    paddingTop: '5px'
                  }}
                  onClick={handleMoreAnswersClick}
                >SEE MORE ANSWERS</div>
              : null
              }
            </div>
          </>
      }
    </>
  )
}
export default Question;
