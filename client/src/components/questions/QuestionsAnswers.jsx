import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/globalContext';
import { qaContext } from '../../context/qaContext';
import { getQuestionsAnswers } from '../../utils/questionsUtils';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';

const QuestionsAnswers = () => {
  const { currentProduct } = useContext(ProductContext);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('')


  function handleInputChange(e) {
    setInputValue(e.target.value);
    if (e.target.value.length >= 3) {
      filterSearchResults(e.target.value);
    }
  }

  function filterSearchResults(search) {
    setCurrentQuestions(currentQuestions.filter(question => question.question_body.indexOf(search) > -1));
  }

  useEffect(() => {
    getQuestionsAnswers(/*currentProduct.id*/44389, (data) => {
      setCurrentQuestions(data.results);
    })
  }, [currentProduct])

  return (
    <><h5>{'QUESTIONS & ANSWERS'}</h5>
    <ProductContext.Consumer>
      {() => (
        <qaContext.Provider value={currentQuestions}>
          <Search inputValue={inputValue} handleInputChange={handleInputChange}/>
          <QuestionsList />
        </qaContext.Provider>)
      }
    </ProductContext.Consumer></>
  )
  
};

export default QuestionsAnswers;
