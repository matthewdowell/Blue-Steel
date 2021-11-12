/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { markQuestionAsHelpful } from '../../utils/questionsUtils.js';
import Answer from './Answer.jsx';
import AnswerModal from './AnswerModal.jsx';

const Question = ({ question, helpfulness }) => {
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState(helpfulness);
  const [voted, setVoted] = useState(true);
  const [modalDisplayed, setModalDisplayed] = useState(false);

  function handleMoreAnswersClick() {
    setShowMoreAnswers(!showMoreAnswers);
  }

  function handleYesClick() {
    if (voted) {
      setVoted(true);
      markQuestionAsHelpful(question.question_id, () => {
        setHelpfulVotes(helpfulness + 1);
      });
    }
  }

  function handleAddAnswerClick() {
    setModalDisplayed(true);
  }

  return (
    <div style={{
      border: '2px solid black',
      borderRadius: '15px',
      padding: '15px',
      marginBottom: '20px',
      // boxShadow: '5px 10px 8px #888888',
      overflowX: 'visible',
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', marginTop: '5px', maxWidth: '68%' }}>
          <div style={{ marginRight: '5px' }}><b>Q: </b></div>
          <div style={{ paddingRight: '20px' }}>
            <b>{question.question_body}</b>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '5px' }}>
          <div style={{ paddingRight: '10px' }}>Helpful?</div>
          <div
            data-testid={question.question_id}
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
              paddingRight: '5px',
            }}
            onClick={handleYesClick}
            onKeyPress={handleYesClick}
            role="button"
            tabIndex={0}
          >
            Yes
          </div>
          <div
            style={{ paddingRight: '10px', borderRight: '2px solid black', maxHeight: '20px' }}
          >
            {`(${helpfulVotes})`}
          </div>
          <div
            style={{
              paddingLeft: '10px', textDecoration: 'underline', cursor: 'pointer', width: '86px',
            }}
            onClick={handleAddAnswerClick}
            onKeyPress={handleAddAnswerClick}
            role="button"
            tabIndex={0}
          >
            Add Answer
          </div>
          {modalDisplayed
          && <AnswerModal question={question} setModalDisplayed={setModalDisplayed} />}
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <p style={{ paddingRight: '15px' }} />
        {showMoreAnswers
          ? (
            <div>
              {Object
                .values(question.answers)
                .map((answer) => (
                  <Answer answer={answer} key={answer.id} helpfulness={answer.helpfulness} />))
                .sort((a, b) => {
                  if (b.props.answer.answerer_name === 'Seller') {
                    return 1;
                  }
                  return b.props.helpfulness - a.props.helpfulness;
                })}
            </div>
          )
          : (
            <div>
              {Object
                .values(question.answers)
                .map((answer) => (
                  <Answer answer={answer} key={answer.id} helpfulness={answer.helpfulness} />))
                .sort((a, b) => {
                  if (b.props.answer.answerer_name === 'Seller') {
                    return 1;
                  }
                  return b.props.helpfulness - a.props.helpfulness;
                })
                .slice(0, 2)}
            </div>
          )}
      </div>
      <div>
        {Object.values(question.answers).length > 2
          ? (
            <div
              style={{
                cursor: 'pointer',
                padding: '5px',
                border: '2px solid black',
                width: '200px',
                marginLeft: '24px',
                textAlign: 'center',
                marginBottom: '10px',
                borderRadius: '15px',
              }}
              onClick={handleMoreAnswersClick}
              onKeyPress={handleMoreAnswersClick}
              role="button"
              tabIndex={0}
            >
              {showMoreAnswers ? 'SHOW LESS ANSWERS' : 'SHOW MORE ANSWERS'}
            </div>
          )
          : null}
      </div>
    </div>
  );
};

export default Question;
