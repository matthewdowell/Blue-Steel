import React, { useState, useEffect } from 'react';
import { getProductsById, getStyles } from '../../utils/productUtils';
import ProductCompare from './ProductCompare.jsx';
import StarRating from './StarRating.jsx';

const RelatedItems = () => {
  // const [showModal, setModal] = useState(() => false);
  // const [products, setProducts] = useState([]);
  // const [selectedProduct, setSelectProduct] = useState([]);
  // const closeModal = () => {
  //   setModal(false);
  // };
  const [leftCount, setLeftCount] = useState(0);
  const increment = () => {
    setLeftCount((prev) => prev + 1);
  };

  const [rightCount, setRightCount] = useState(0);
  const decrement = () => {
    setLeftCount((prev) => {
      if (prev !== 0) {
        return leftCount - 1;
      }
      return 0;
    });
  };

  const { currentProduct } = useContext(ProductContext);

  useEffect(() => {
    getRelatedProducts(
      currentProduct.page, currentProduct.count, currentProduct.id,
    )
      .then(({ data }) => ({ data }))
      .then((relatedId) => {
        getRelatedProducts(relatedId)
          .then((result) => {
            const newState = result.map((item) => item.data);
            return newState;
          })
          .then((results) => {
            const productId = results.map((item) => item.id);
            getRelatedProductsImage(productId)
              .then((imageData) => {
                const newState = imageData.map((item, idx) => {
                  const temp = { ...item.data, ...results[idx] };
                  return temp;
                });
                return newState;
              })
              .then((resultArr) => {
                updateRelatedProductList(resultArr);
                setProducts(resultArr);
              })
              .catch((err) => {
                console.log('Err loading images: ', err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log('Error getting related products: ', err);
      });
  }, [{ currentProduct }]);

  const getRelatedProductsImage = (relatedProducts) => {
    const promiseImageArr = relatedProducts.map((id) => getStyles(id)
      .then()
      .catch());
    return Promise.all(promiseImageArr);
  };

  const getRelatedProducts = (relatedProducts) => { // array of product id's
    const promiseArr = relatedProducts.data.map((id) => getProductsById(id).then().catch());
    return Promise.all(promiseArr);
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
                // eslint-disable-next-line react/no-array-index-key
                <div className="p-card" key={idx}>
                  <span
                    className="p-star-related"
                    onKeyDown={() => {
                      setModal(true);
                      setSelectProduct(item);
                    }}
                    onClick={() => {
                      setModal(true);
                      setSelectProduct(item);
                    }}
                  >
                    &#9733

                  </span>
                  <img
                    style={{ height: '300px', width: '250px' }}
                    src={
                      item.results.length !== 0 && item.results[0].photos[0].thumbnail_url !== null
                        ? item.results[0].photos[0].thumbnail_url
                        // eslint-disable-next-line react/no-unescaped-entities
                        : (<h3>can't load image </h3>)
                    }
                    alt="Product Image"
                    onClick={() => {
                      handleChangeProductSelect(item);
                      window.history.replaceState(
                        null,
                        '',
                        `/products/${item.id}`,
                      );
                      handleChangeURL(`/products/${item.id}`);
                    }}
                  />
                  <p className="p-category">{item.category}</p>
                  <p className="p-title">{item.name}</p>
                  <p className="p-price">{item.default_price}</p>
                </div>
              );
            }
          })}
          {leftCount !== rightCount - 1 ? (
            <i
              className="right-arrow"
              onKey
              onClick={() => {
                increment();
              }}
            />
          ) : (
            ''
          )}

        </div>
      </div>
    </div>
  );
};

export default RelatedItems;