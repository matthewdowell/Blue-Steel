/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ProductOverview from '../product_overview/ProductOverview.jsx';
import RatingsReviews from '../ratings_reviews/RatingsReviews.jsx';
import QuestionsAnswers from '../questions/QuestionsAnswers.jsx';
import RelatedProductsList from '../related_items/RelatedProductsList.jsx'
import YourOutfitList from '../related_items/YourOutfitList.jsx';
import { getProducts, getProductsById } from '../../utils/productUtils.js';
import { ProductContext } from '../../context/globalContext.js';


const App = () => {
  // Bring in first product: product_id 44388
  const [currentProduct, setCurrentProduct] = useState({
    campus: 'hr-den',
    category: 'Jackets',
    created_at: '2021-08-13T14:40:29.181Z',
    default_price: '140.00',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest, surroundings.',
    id: 44390,
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    updated_at: '2021-08-13T14:40:29.181Z'
  });

  const [products, setProducts] = useState([]);

  // Bring in all products
  useEffect(() => {
    getProducts(null, null, (data) => {
      setProducts(data);
    });
  }, []);

  function renderNewProductId(id) {
   getProductsById(null, null, id, (data) => {
     setCurrentProduct(data);
   });
  }

  return (
    <div>
      {/* eslint-disable-next-line object-curly-newline */}
      <ProductContext.Provider value={{ currentProduct, setCurrentProduct, products, setProducts }}>
        {/* <div><ProductOverview /></div> */}
        {/* <div className="topofrelated">
          <RelatedProductsList
            product_id={currentProduct.id}
            renderNewProductId={renderNewProductId}
          />
        </div>
        <div>
          <YourOutfitList product_id={currentProduct.id} />
        </div> */}
        {/* <div><QuestionsAnswers /></div> */}
        <div><RatingsReviews /></div>
      </ProductContext.Provider>
    </div>
  );
};

export default App;
