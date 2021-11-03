import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/globalContext';
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
    <Search />
    <QuestionsList />
    {/* <div>{JSON.stringify(currentQuestions)}</div> */}
    <ProductContext.Consumer>
      {() => (
        <div>
          {/* {JSON.stringify(currentQuestions)} */}
        </div>)
      }
    </ProductContext.Consumer></>
  )
  
};

export default QuestionsAnswers;
