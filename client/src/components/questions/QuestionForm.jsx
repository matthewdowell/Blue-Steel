import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { ProductContext } from '../../context/globalContext';

const QuestionForm = () => {
  const { currentProduct } = useContext(ProductContext);

  return (
    <div 
      id='questionModal' 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '600px',
        width: '400px',
        border: "2px solid black",
        backgroundColor: 'white',
      }}>
      <h3 style={{marginBottom: '0px'}}>Ask Your Question</h3>
      <div style={{marginTop: '5px'}}>About the {currentProduct.name}</div>
    </div>
  )
}

export default QuestionForm;