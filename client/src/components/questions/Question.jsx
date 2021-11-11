import React, { useState } from 'react';
import { markQuestionAsHelpful } from '../../utils/questionsUtils.js';
import Answer from './Answer.jsx';
import AnswerModal from './AnswerModal.jsx';

const Question = (props) => {

  const [showMoreAnswers, setShowMoreAnswers] = useState(false)
  const [helpfulVotes, setHelpfulVotes] = useState(props.helpfulness);
  const [voted, setVoted] = useState(true);
  const [modalDisplayed, setModalDisplayed] = useState(false);

  function handleMoreAnswersClick() {
     setShowMoreAnswers(!showMoreAnswers)
  }
  
  function handleYesClick() {
    if (voted) {
      setVoted(true);
      markQuestionAsHelpful(props.question.question_id, () => {
        setHelpfulVotes(props.helpfulness + 1)
      });
    }
  }

  function handleAddAnswerClick() {
    setModalDisplayed(true);
  }

  return (
    <div style={{border: '2px solid black', borderRadius: '15px', padding: '15px', marginBottom: '20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px'}}>
        <div style={{display: 'flex', marginTop: '5px', maxWidth: '68%'}}>
          <div style={{marginRight: '5px'}}><b>Q: </b></div>
          <div style={{paddingRight: '20px'}}
          ><b>{props.question.question_body}</b></div>
        </div>
        <div style={{display: 'flex', marginTop: '5px'}}>
          <div style={{paddingRight: '10px'}}>Helpful?</div>
          <div
            data-testid={props.question.question_id} 
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
              paddingRight: '5px'
            }}
            onClick={handleYesClick}
          >Yes</div>
          <div 
            style={{paddingRight: '10px', borderRight: '2px solid black', maxHeight: '20px'}}
          >
            {`(${helpfulVotes})`}
          </div>
          <div 
            style={{paddingLeft: '10px', textDecoration: 'underline', cursor: 'pointer', width: '86px'}}
            onClick={handleAddAnswerClick}
          >Add Answer</div>
          {modalDisplayed && <AnswerModal question={props.question} setModalDisplayed={setModalDisplayed}/>}
        </div>
      </div>
      <div style={{display: 'flex'}}>
          <p style={{paddingRight: '15px'}}></p>
          {showMoreAnswers
            ? <div>
                {Object
                  .values(props.question.answers)
                  .map(answer => <Answer answer={answer} key={answer.id} helpfulness={answer.helpfulness}/>)
                  .sort((a, b) => {
                    if (b.props.answer.answerer_name === 'Seller') {
                      return 1;
                    } else {
                      return b.props.helpfulness - a.props.helpfulness;
                    }
                  })
                }
              </div>
            : <div>
                {Object
                  .values(props.question.answers)
                  .map(answer => <Answer answer={answer} key={answer.id} helpfulness={answer.helpfulness}/>)
                  .sort((a, b) => {
                    if (b.props.answer.answerer_name === 'Seller') {
                      return 1;
                    } else {
                      return b.props.helpfulness - a.props.helpfulness;
                    }
                  })
                  .slice(0, 2)
                }
              </div>
          }
      </div>
      <div>
        {Object.values(props.question.answers).length > 2
        ? <div 
            style={{
              cursor: 'pointer',
              padding: '5px',
              border: '2px solid black',
              width: '200px',
              marginLeft: '24px',
              textAlign: 'center',
              marginBottom: '10px',
              borderRadius: '15px'
            }}
            onClick={handleMoreAnswersClick}
          >{showMoreAnswers ? 'SHOW LESS ANSWERS' : 'SHOW MORE ANSWERS'}</div>
        : null
        }
      </div>
    </div>
  )
}

export default Question;