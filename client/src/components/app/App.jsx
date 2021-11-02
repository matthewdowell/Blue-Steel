import React, { useState, useContext } from 'react';
import ProductOverview from '../product_overview/ProductOverview.jsx';
import RatingsReviews from '../ratings_reviews/RatingsReviews.jsx';
import QuestionsAnswers from '../questions/QuestionsAnswers.jsx';
import RelatedItems from '../related_items/RelatedItems.jsx';
import { getProducts, getProductsById } from '../../utils/productUtils.js';
import { ProductContext, ProductProvider } from '../../context/globalContext.js';
import { render } from 'react-dom';

const App = () => {
  // 44388 is our default product_id

  // const currentProduct = useContext(ProductContext);
  // const setCurrentProduct = useContext(ProductContext);
  const [currentProduct, setCurrentProduct] = useState({
      campus: "hr-den",
      category: "Jackets",
      created_at: "2021-08-13T14:40:29.181Z",
      default_price: "140.00",
      description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest, surroundings.",
      id: 44388,
      name: "Camo Onesie",
      slogan: "Blend in to your crowd",
      updated_at: "2021-08-13T14:40:29.181Z"
  });
  // console.log('setCurrentPRoduct:', setCurrentProduct);
  // console.log('current product:', currentProduct);
  getProducts();
  getProductsById(() => {}, 1, 5, 44389);

  return (
    <div>
      <ProductContext.Provider value={{currentProduct, setCurrentProduct}}>
        <h1>Cant turn left {JSON.stringify(setCurrentProduct)}</h1>
        <div><ProductOverview /></div>
        <div><RelatedItems /></div>
        <div><QuestionsAnswers /></div>
        <div><RatingsReviews /></div>
      </ProductContext.Provider>
    </div>
  );
};

export default App;