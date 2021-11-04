import React, { useState } from 'react';
import { markAnswerAsHelpful, reportAnswer } from '../../utils/questionsUtils';

const Answer = ({ answer }) => {

  const [helpfulVotes, setHelpfulVotes] = useState(answer.helpfulness);
  const [voted, setVoted] = useState(false);
  const [reported, setReported] = useState(false);
  

  function handleYesClick() {
    if (!voted) {
      setVoted(true);
      markAnswerAsHelpful(answer.id, () => {
        setHelpfulVotes(answer.helpfulness + 1);
      });
    }
  }
  function handleReportClick() {
    if(!reported) {
      setReported(true)
      // reportAnswer(answer.id)
    }
  }

  return (
    <><p>{answer.body}</p>
            {answer.answerer_name === 'Seller'
              ? <div style={{display: 'flex'}}>
                  <div style={{paddingRight: '10px'}}>
                    {`by `}<b>{answer.answerer_name}</b>{`, ${new Date(answer.date).toDateString().slice(4)}`}
                  </div>
                  <div style={{padding: '0px 10px', borderLeft: '2px solid black'}}>Helpful? </div>
                  <div 
                    style={{
                      textDecoration: 'underline',
                      paddingRight: '5px',
                      cursor: 'pointer'
                    }}
                    onClick={handleYesClick}
                  >Yes</div>
                  <div style={{paddingRight: '10px', borderRight: '2px solid black'}}>{`(${helpfulVotes})`}</div>
                  {reported 
                    ? <div style={{paddingLeft: '10px'}}>Reported</div>
                    : <div 
                        style={{paddingLeft: '10px', textDecoration: 'underline', cursor: 'pointer'}}
                        onClick={handleReportClick}
                      >Report</div>
                  }
                </div>
              : <div style={{display: 'flex'}}>
                  <div style={{paddingRight: '10px'}}>
                    {`by ${answer.answerer_name}, ${new Date(answer.date).toDateString().slice(4)}`}
                  </div>
                  <div style={{padding: '0px 10px', borderLeft: '2px solid black'}}>Helpful? </div>
                  <div 
                    style={{
                      textDecoration: 'underline',
                      paddingRight: '5px',
                      cursor: 'pointer'
                    }}
                    onClick={handleYesClick}
                  >Yes</div>
                  <div style={{paddingRight: '10px', borderRight: '2px solid black'}}>{`(${helpfulVotes})`}</div>
                  {reported 
                    ? <div style={{paddingLeft: '10px'}}>Reported</div>
                    : <div 
                        style={{paddingLeft: '10px', textDecoration: 'underline', cursor: 'pointer'}}
                        onClick={handleReportClick}
                      >Report</div>
                  }
                </div>
            }
  </>
  )
}

export default Answer;