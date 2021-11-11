/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/extensions */
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/globalContext';
import { qaContext } from '../../context/qaContext';
import { getQuestionsAnswers } from '../../utils/questionsUtils';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';

const QuestionsAnswers = () => {
  const { currentProduct } = useContext(ProductContext);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);

  function filterSearchResults(search) {
    if (search.length >= 3) {
      setCurrentQuestions(
        allQuestions
          .filter((question) => question.question_body
            .toLowerCase()
            .indexOf(search.toLowerCase()) > -1),
      );
    } else {
      setCurrentQuestions(allQuestions);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    filterSearchResults(e.target.value);
  }

  useEffect(() => {
    getQuestionsAnswers(currentProduct.id, (data) => {
      setCurrentQuestions(data.results);
      setAllQuestions(data.results);
    }, null, 100);
  }, [currentProduct]);

  return (
    <div style={{ margin: '0 10%' }}>
      <h5>
        QUESTIONS & ANSWERS
      </h5>
      <qaContext.Provider value={{ currentQuestions, setCurrentQuestions, setAllQuestions }}>
        <Search inputValue={inputValue} handleInputChange={handleInputChange} />
        <QuestionsList />
      </qaContext.Provider>
    </div>
  );
};

export default QuestionsAnswers;
