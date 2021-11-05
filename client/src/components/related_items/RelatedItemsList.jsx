import React, { useState, useContext, useEffect } from 'react';
import ProductContext from '../../context/globalContext.js';
import { getRelatedProductsById, getSharedFeatures } from '../../utils/relatedUtils.js';
import RelatedElements from './RelatedElements.jsx';

const RelatedItemsList = () => {
  const [currentFeatures, setCurrentFeatures] = useState(currentFeatures =[]);
  const [RelatedItemsIds, setRelatedItemsIds] = useState(RelatedItemsIds = []);
  const currentProduct = useContext(ProductContext);
  const currentProductId = currentProduct.id;

  useEffect(() => {
    getCurrentFeatures(currentProductId, (data) => {
      setCurrentFeatures(data.results);
    });
    getRelatedItemsIds(currentProductId, (data) => {
      setRelatedItemsIds(data.results);
    });
  }, [currentProduct]);


  let getCurrentFeatures = (
    getSharedFeatures(currentProductId)
      .then((results) => (setCurrentFeatures(results.data)))
      .catch((err) => (console.log(err)));
  )

  let getRelatedItemsIds = (
    getRelatedProductsById(currentProductId)
      .then((results) => (setRelatedItemsIds(results.data)))
      .catch((err) => (console.log(err)));
  )

  return (
    <div>
      <h3>RELATED PRODUCTS</h3>
      <ProductContext.Consumer>
        {() => (
          <relatedContext.Provider value={currentProduct, selectProduct}>
            <RelatedElements
              currentFeatures={currentFeatures}
              relatedItemsIds={[...new Set(relatedItemsIds)]}
              selectProduct={selectProduct}
              currentProduct={currentProduct}
            />
          </relatedContext.Provider>
        )}
      </ProductContext.Consumer>
    </div>
  );
};

export default RelatedItemsList;
