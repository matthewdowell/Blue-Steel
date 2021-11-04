import React, { useState } from 'react';

const RelatedItems = () => {
  const [showModal, setModal] = useState(() => false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectProduct] = useState([]);
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <h6 className="relatedCardsHeading">RELATED PRODUCTS</h6>
      <div className="p-wrap">
        <div className="p-card-container">
          {leftCount !== 0 ? (
            <i
              className="left-arrow"
              onClick={() => {
                decrement();
              }}
            />
          ) : (
            ''
          )}
          {products.slice(leftCount, rightCount).map((item, idx) => {
            if (index < 4) {
              return (
                

  //   <ProductCompare
  //     displayModal={showModal}
  //     closeModal={closeModal}
  //     currentProduct={currentProduct}
  //     clickedProduct={selectedProduct}
  // />
  );
};

export default RelatedItems;