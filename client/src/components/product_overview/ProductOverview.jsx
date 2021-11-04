import React, { useContext } from 'react';
import { ProductContext } from '../../context/globalContext';
import { getProducts, getProductsById, getRelatedProducts, getStyles } from '../../utils/productUtils';
import Header from './subcomponents/Header.jsx';
import ImageGallery from './subcomponents/ImageGallery.jsx';
import ProductBulletPoints from './subcomponents/ProductBulletPoints.jsx';
import ProductDescription from './subcomponents/ProductDescription.jsx';
import StyleSelector from './subcomponents/StyleSelector.jsx';
import SubHeader from './subcomponents/SubHeader.jsx';

const ProductOverview = () => {

  const currentProduct = useContext(ProductContext).currentProduct;
  const setCurrentProduct = useContext(ProductContext).setCurrentProduct;
  
  console.log(currentProduct);

  return (
    <ProductContext.Consumer>
      {() => 

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: 'none', width: '80%' }} >
            <Header/>
            <SubHeader/>
            {/* Image Gallery and Style Selector Container */}
            <div style={{ display: 'flex', width: '100%', background: 'none', minHeight: '650px'}}>
              <ImageGallery/>
              <StyleSelector key={currentProduct.product_id} product={currentProduct}/>
            </div>
            {/* Product Description Section */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' ,width: '100%', background: 'none', minHeight: '200px'}}>
              <ProductDescription key={currentProduct.product_id} product={currentProduct}/>
              <ProductBulletPoints/>
            </div>
        </div>
      </div>}
    </ ProductContext.Consumer>
  )


};

export default ProductOverview;
