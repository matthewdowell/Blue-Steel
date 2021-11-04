import React from 'react';

const Answer = ({ answer }) => {

  // const[helpfulVotes, setHelpfulVotes] = useState(props.question)

  // function handleYesClick() {

  // }

  return (
    <><p>{answer.body}</p>
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
            }
  </>
  )
}

export default Answer;