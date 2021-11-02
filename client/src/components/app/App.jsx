import React, { useState } from 'react';
import ProductOverview from '../product_overview/ProductOverview.jsx';
import RatingsReviews from '../ratings_reviews/RatingsReviews.jsx';
import QuestionsAnswers from '../questions/QuestionsAnswers.jsx';
import RelatedItems from '../related_items/RelatedItems.jsx';
import { getProducts } from '../../utils/productUtils.js';

const App = () => {
  // const [data, getData] = useState([]);

  getProducts();

  return (
    <div>
      <h1>Cant turn left </h1>
      <div><ProductOverview /></div>
      <div><RelatedItems /></div>
      <div><QuestionsAnswers /></div>
      <div><RatingsReviews /></div>
    </div>
  );
};

export default App;