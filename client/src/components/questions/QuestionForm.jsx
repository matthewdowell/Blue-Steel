import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { ProductContext } from '../../context/globalContext';

const QuestionForm = ({ setModalDisplayed }) => {
  const { currentProduct } = useContext(ProductContext);

  return (
    <div 
      id='questionModal' 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '600px',
        width: '600px',
        border: "2px solid black",
        backgroundColor: 'white',
      }}
      onBlur={() => { console.log('out of form click!') }}
      >
      <h3 style={{marginBottom: '0px'}}>Ask Your Question</h3>
      <div style={{marginTop: '5px'}}>About the {currentProduct.name}</div>
      <div style={{margin: '20px'}}>
        <div>
          <div><b>Your Question* </b></div>
          <textarea 
            maxLength={1000} 
            rows={10}
            style={{resize: 'none', width: '98%', margin: '10px 0'}}
          ></textarea>
        </div>
        <div>
          <div><b>Your Nickname* </b></div>
          <input style={{width: '98%', margin: '10px 0'}} placeholder={'Example: jackson11!'}></input>
        </div>
        <div>For privacy reasons, do not use your full name or email address.</div>
        <div>
          <div style={{marginTop: '10px'}}><b>Your Email* </b></div>
          <input 
            style={{width: '98%', margin: '10px 0'}} 
            placeholder={'Example: username@email.com'}
            maxLength={60}
          ></input>
        </div>
        <div>For authentication reasons, you will not be emailed.</div>
      </div>
      <div 
         style={}
      >Submit Question</div>
    </div>
  )
}

export default QuestionForm;