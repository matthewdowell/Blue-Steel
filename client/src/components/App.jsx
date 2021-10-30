import React, { useState } from 'react';
import ProductOverview from './ProductOverview.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RelatedItems from './RelatedItems.jsx';
import getProducts from '../utils/productUtils.js';
import { getQuestionsAnswers, getAnswersForQuestion, postQuestion, postAnswer, reportAnswer, markQuestionAsHelpful, reportQuestion, markAnswerAsHelpful } from '../utils/questionsUtils.js';

const App = () => {
  // const [data, getData] = useState([]);

  getProducts();

  return (
    <div>
      <div><ProductOverview /></div>
      <div><RelatedItems /></div>
      <div><QuestionsAnswers /></div>
      <div><RatingsReviews /></div>
    </div>
  );
};

export default App;
