import React, { useState } from 'react';
import ProductOverview from './ProductOverview.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RelatedItems from './RelatedItems.jsx';
import getProducts from '../utils/productUtils.js';
import { getQuestionsAnswers, getAnswersForQuestion, postQuestion, postAnswer } from '../utils/questionsUtils.js';

const App = () => {
  // const [data, getData] = useState([]);

  //getProducts();
  //getQuestionsAnswers(44388, (data) => console.log('QA callback works!', data));
  //getAnswersForQuestion(367399, (data) => console.log('answers callback works!', data), 1, 100);
  // postQuestion(
  //   'Is this working?',
  //   'Johnny Smith',
  //   'JohnnyS@email.com',
  //   44388,
  //   (data) => {
  //     console.log('posted in app callback', data);
  //     getQuestionsAnswers(44388, () => console.log('QA callback works!'), null, 100);
  //   },
  // );
  //postAnswer(367399, 'It\'s a good product', 'MattyD', 'matt@mail.com', [], () => console.log('postAnswer worked!'));

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
