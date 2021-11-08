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

  const {currentProduct, setCurrentProduct} = useContext(ProductContext);
  const [currentStyles, setCurrentStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);

  useEffect(() => {
    getStyles(null, null, currentProduct.id, (data) => {
      setCurrentStyles(data.results);
      // setCurrentStyle(data.results[0]);
    })
    
  }, [currentProduct])

  
  //console.log(currentProduct);

  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: 'none', width: '80%' }} >
            <Header/>
            <SubHeader/>
            {/* Image Gallery and Style Selector Container */}
            <div style={{ display: 'flex', width: '100%', background: 'none', maxHeight: '700px'}}>
              <ImageGallery key={currentStyles.style_id} styles={currentStyles} currentStyle={currentStyle} />
              <StyleSelector key={currentProduct.product_id} product={currentProduct} styles={currentStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
            </div>
            {/* Product Description Section */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' ,width: '100%', background: 'none', minHeight: '200px'}}>
              <ProductDescription key={currentProduct.product_id} product={currentProduct}/>
              <ProductBulletPoints/>
            </div>
        </div>
      </div>

  )


};

export default ProductOverview;
