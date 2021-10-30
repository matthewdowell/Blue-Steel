/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ProductOverview from './ProductOverview.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RelatedItems from './RelatedItems.jsx';

import postInteractions from '../utils/interactionsUtils.js';
import { addReview, getReviewMetadata, getReviewOfProduct, markReviewHelpful, reportReview } from '../utils/reviewUtils.js';

const App = () => {
  // const [data, getData] = useState([]);

  postInteractions('a', 'b', 'c');
  // getReviewOfProduct(() => {}, 44388, 'newest', 1, 5);
  // getReviewMetadata(() => {}, 44388);
  // addReview(() => {}, 44388, 4, 'Review summary', 'Body', true, 'customerName', 'buyer@gmail.com', [], {});
  // markReviewHelpful(() => {}, 1);
  // reportReview(() => {}, 1);

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
