import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import api from '../../utils/api.js';


const RelatedProductsList = ({ product_id, renderNewProductId }) => {
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedItemsData, setRelatedItemsData] = useState([]);
  const [relatedItemsStyles, setRelatedItemsStyle] = useState([]);

  useEffect(() => {
    relatedIdFunction();
  }, [product_id])

  const relatedIdFunction = async () => {
    await api.getRelatedProductIds(product_id)
      .then(res => {
        let distinctRelatedItems = [...new Set(res.data)];
        let removeDuplciateRender = distinctRelatedItems.filter(outfitId => outfitId !== product_id);
        return removeDuplciateRender;
      })
      .then(res => setRelatedItems(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    generateRelatedItems(relatedItems);
  }, [relatedItems])

  const generateRelatedItems = async (relatedItems)=> {
    let renderedItems = [];
    let promiseChain = Promise.resolve();
    relatedItems.forEach(item => {
      promiseChain = promiseChain
        .then(() => api.getProduct(item))
        .catch((err) => console.log(err, 'error getting product info'))
        .then((res) => renderedItems.push(res.data))
        .then(() => api.getMetadata({product_id: item}))
        .then(res => renderedItems[renderedItems.length - 1]['ratings'] = res.data.ratings)
        .then(()=> api.getProductStyles(item))
        .then(res => {
          setRelatedItemsStyle(res.data)
          renderedItems[renderedItems.length - 1]['image'] = res.data.results[0].photos[0].thumbnail_url

          if (renderedItems.length === relatedItems.length) {
            setRelatedItemsData(renderedItems)
          }
        })
        .catch(err => console.log(err));
    })
  }

  const sendProductId = (id) =>{
    renderNewProductId(id);
  }

  return (
    <div className="product-list">
        <h1 className="heading-list">RELATED PRODUCTS</h1>
      <CarouselProvider
        className="items-carousel"
        totalSlides={relatedItems.length}
        visibleSlides={3}
        dragEnabled={false}
      >
      <Slider className="carousel_slider">
        {relatedItemsData.map(relatedItem => (
          <Slide
            key={relatedItems.id}
            index={Math.random()}
            style={{
              width: '23rem',
              height: '32rem',
              marginRight: '3rem',
              position: 'relative',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              borderRadius: '15px'
            }}
          >
            <RelatedProductCard
              key={relatedItem.id}
              id={relatedItem.id}
              image={relatedItem.image}
              name={relatedItem.name}
              category={relatedItem.category}
              price={relatedItem.default_price}
              starRating={relatedItem.ratings}
              sendProductId={sendProductId}
              currentProductId={product_id}
              relatedItemsStyles={relatedItemsStyles}
              features={relatedItem.features}
            />
          </Slide>
        ))}
      </Slider>
      <div className="buttons" style={{display: 'inline-flex', alignContent: 'center'}}>
        <ButtonBack className="button-back"><i className="fas fa-arrow-left"></i></ButtonBack><ButtonNext className="button-next"><i className="fas fa-arrow-right"></i></ButtonNext>
      </div>
      </CarouselProvider>
    </div>
  )
};

export default RelatedProductsList;
