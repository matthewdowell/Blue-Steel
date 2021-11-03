import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/globalContext';
import { qaContext } from '../../context/qaContext';
import { getQuestionsAnswers } from '../../utils/questionsUtils';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';

const QuestionsAnswers = () => {
  const { currentProduct } = useContext(ProductContext);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  useEffect(() => {
    getQuestionsAnswers(currentProduct.id, (data) => {
      setCurrentQuestions(data.results);
    })
  }, [currentProduct])

  return (
    <><h5>{'QUESTIONS & ANSWERS'}</h5>
    <ProductContext.Consumer>
      {() => (
        <qaContext.Provider value={currentQuestions}>
          <Search />
          <QuestionsList />
        </qaContext.Provider>)
      }
    </ProductContext.Consumer></>
  )
  
};

export default QuestionsAnswers;
