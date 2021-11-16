/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { getReviewMetadata } from '../../../utils/reviewUtils.js';
// eslint-disable-next-line import/extensions
import Stars from '../../stars/Stars.jsx';
import { getAverageRating } from '../../ratings_reviews/ratingsReviewsHelpers.js';

const StyleSelector = ({
  product, styles, currentStyle, setCurrentStyle, mainImgSize,
}) => {
  const sizes = [];
  const quantities = [];
  const sizeSelect = document.getElementById('size');
  const [currentSize, setCurrentSize] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [quantityArray, setQuantityArray] = useState([0]);
  const [checked, setChecked] = useState(0);
  const [onSale, setOnSale] = useState(false);
  const [cart, setCart] = useState({});
  const [currentMetaData, setCurrentMetaData] = useState({});
  const buttonColor = '#5B5C92';

  if (styles[0] !== undefined) {
    const { skus } = styles[currentStyle];
    Object.keys(skus).forEach((sku) => {
      sizes.push(skus[sku].size);
      quantities.push(skus[sku].quantity);
    });
  }

  useEffect(() => {
    getReviewMetadata((data) => {
      setCurrentMetaData(data);
    }, product.id);
  }, [product]);

  useEffect(() => {
    if (styles[0] !== undefined) {
      const { skus } = styles[currentStyle];
      Object.keys(skus).forEach((sku) => {
        if (skus[sku].size === currentSize) {
          setCurrentQuantity(skus[sku].quantity);
        }
      });
    }
  }, [currentSize]);

  useEffect(() => {
    if (currentQuantity > 0) {
      const countArr = [];
      for (let i = 1; i <= currentQuantity && i <= 15; i += 1) {
        countArr.push(i);
      }
      setQuantityArray(countArr);
    }
  }, [currentQuantity]);

  return (
    <div style={{
      // eslint-disable-next-line no-dupe-keys
      background: 'linear-gradient(45deg, rgba(40,62,110,1) 0%, rgba(16,56,110,1) 14%, rgba(17,75,130,1) 49%, rgba(16,56,110,1) 91%, rgba(40,62,110,1) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'center',
      flexBasis: '43%',
      gap: '5px',
      padding: '25px',
      // eslint-disable-next-line no-dupe-keys
      display: mainImgSize ? 'none' : 'block',
    }}
    >
      <a style={{ paddingBottom: '5em', color: 'white' }} href="#moveToReviews">Read all reviews</a>
      <Stars
        style={{ margin: '10px' }}
        rating={currentMetaData.ratings
          ? getAverageRating(currentMetaData.ratings)
          : null}
      />
      <span style={{ fontSize: '1.25em', display: 'block' }}>{product.category}</span>
      <span style={{ fontSize: '3em', fontWeight: 'bold', display: 'block' }}>{product.name}</span>
      <span style={{
        fontSize: '1.25em', paddingTop: '15px', marginRight: '1em', textDecoration: (styles[0] && (styles[currentStyle].sale_price !== null)) ? 'line-through' : 'none',
      }}
      >
        $
        {styles[0] ? styles[currentStyle].original_price : ''}
      </span>
      <span style={{ color: 'red', fontSize: '1.25em' }}>{(styles[0] && (styles[currentStyle].sale_price !== null)) ? `$${styles[currentStyle].sale_price}` : ''}</span>
      <div style={{ fontSize: '1.25em', paddingTop: '20px', display: 'flex' }}>
        <span style={{ fontWeight: 'bold', marginRight: '10px' }}>STYLE: </span>
        <span>{styles[0] ? styles[currentStyle].name : ''}</span>
      </div>
      {/* Style Images  */}
      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '20px', width: '450px',
      }}
      >
        {styles[0]
          ? styles.map((style, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={index}
              style={{
                width: '70px', height: '70px', padding: '.75em', color: 'black',
              }}
            >
              <i
                style={{
                  zIndex: '100', background: 'white', borderRadius: '10px', position: 'absolute', visibility: (checked === index) ? 'visible' : 'hidden',
                }}
                className="far fa-check-circle"
              />
              <img
                key={index}
                src={style.photos[0].thumbnail_url}
                id={index}
                alt=""
                onClick={(e) => { setCurrentStyle(e.target.id); setChecked(index); }}
                onKeyDown={(e) => { setCurrentStyle(e.target.id); setChecked(index); }}
                style={{
                  zIndex: '-100', border: '2px solid black', width: '100%', height: '100%', objectFit: 'cover', marginBottom: '1em', borderRadius: '50px',
                }}
              />
            </div>
          ))
          : <img alt="nothing displayed" />}
      </div>
      {/* Options */}
      <div>
        <select
          name="size"
          size=""
          id="size"
          onChange={(e) => { setCurrentSize(e.target.value); }}
          style={{
            background: buttonColor, color: 'white', borderRadius: '10px', fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.25em',
          }}
        >
          <option value="SELECT SIZE" selected="selected" disabled>SELECT SIZE</option>
          {sizes.length > 0
            ? sizes.map((size, index) =>
              // eslint-disable-next-line implicit-arrow-linebreak
              <option key={index} value={size}>{size}</option>)
            : <option value="SELECT SIZE" defaultValue disabled>OUT OF STOCK</option>}
        </select>
        <select
          name="quantity"
          id="quantity"
          style={{
            background: buttonColor, color: 'white', borderRadius: '10px', fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.2em',
          }}
        >
          <option value="-" selected="selected" disabled>{currentQuantity ? '1' : '-'}</option>
          {currentQuantity > 0
            ? quantityArray.map((quantity, index) => <option key={index}>{quantity}</option>)
            : <option aria-label="no data available" value="-" defaultValue disabled />}
        </select>
      </div>
      {/* Add To Cart and Favorite  */}
      <div style={{ display: 'flex' }}>
        <button
          aria-label="Add to Cart"
          type="button"
          onClick={() => {
            if (currentQuantity == null) { sizeSelect.focus(); }
            if (currentQuantity !== null && currentSize !== null) {
              setCart({
                currentQuantity, currentSize, product, currentStyle,
              });
            }
          }}
          style={{
            backgroundColor: '#DEB992', color: '#051622', borderRadius: '10px', fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.2em', marginTop: '1em',
          }}
        >
          ADD TO CART
        </button>

        <div
          name="quantity"
          id="quantity"
          style={{
            display: 'flex', marginLeft: '.25em', justifyContent: 'center', alignItems: 'center', background: buttonColor, width: '1em', borderRadius: '10px', fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '10px', paddingBottom: '10px', marginRight: '.2em', marginTop: '1em',
          }}
        >
          <span style={{ }}>&#9734;</span>
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;
