/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import RelatedProductList from './RelatedProductList.jsx';
import OutfitList from './OutfitList.jsx';

const RelatedListContainer = ({
  selectProductInfo, selectProductId, selectAnotherProduct, addNewOutfit, deleteOutfit, userOutfits,
}) => (
  /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
  <div className="related-product-list-container">
    <span className="list-title">RELATED PRODUCTS</span>
    <RelatedProductList selectProductInfo={selectProductInfo} selectProductId={selectProductId} selectAnotherProduct={selectAnotherProduct} />
    <span className="list-title">YOUR OUTFIT</span>
    <OutfitList selectProductId={selectProductId} selectAnotherProduct={selectAnotherProduct} addNewOutfit={addNewOutfit} deleteOutfit={deleteOutfit} userOutfits={userOutfits} />
  </div>
);

RelatedListContainer.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }).isRequired,
  selectAnotherProduct: PropTypes.func.isRequired,
  addNewOutfit: PropTypes.func.isRequired,
  deleteOutfit: PropTypes.func.isRequired,
  userOutfits: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RelatedListContainer;
