import React, { useContext, useEffect, useState } from 'react';
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
  const [currentStyles, setCurrentStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState([]);

  useEffect(() => {
    getStyles(null, null, currentProduct.id, (data) => {
      setCurrentStyles(data.results);
      setCurrentStyle(data.results[0]);
    })
    
  }, [currentProduct])
  
  //console.log(currentProduct);

  return (
    <ProductContext.Consumer>
      {() => 

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: 'none', width: '80%' }} >
            <Header/>
            <SubHeader/>
            {/* Image Gallery and Style Selector Container */}
            <div style={{ display: 'flex', width: '100%', background: 'none', maxHeight: '700px'}}>
              <ImageGallery key={currentStyles.style_id} styles={currentStyles}/>
              <StyleSelector key={currentProduct.product_id} product={currentProduct} styles={currentStyles}/>
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
