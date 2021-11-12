/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import Stars from '../../shared/Stars.jsx';

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

  if (styles[0] !== undefined) {
    console.log(styles);
    const { skus } = styles[currentStyle];
    Object.keys(skus).forEach((sku) => {
      sizes.push(skus[sku].size);
      quantities.push(skus[sku].quantity);
    });
  }

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
      background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignContent: 'center', flexBasis: '43%', padding: '25px', display: mainImgSize ? 'none' : 'block',
    }}
    >
      <a href="#moveToReviews">Read all reviews</a>
      {/* <Stars style={{ display: 'hidden' }} /> */}
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
            <div key={index} style={{ width: '70px', height: '70px', padding: '.75em' }}>
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
                alt={style.photos[0].name}
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
            fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.25em',
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
            fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.2em',
          }}
        >
          <option value="-" selected="selected" disabled>{currentQuantity ? '1' : '-'}</option>
          {currentQuantity > 0
            ? quantityArray.map((quantity, index) => <option key={index}>{quantity}</option>)
            : <option aria-label="no data available" value="-" defaultValue disabled />}
        </select>
      </div>
      {/* Add To Cart and Favorite  */}
      <div>
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
            backgroundColor: 'darkgrey', fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.2em', marginTop: '1em',
          }}
        >
          ADD TO CART
        </button>

        <select
          name="quantity"
          id="quantity"
          style={{
            fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '10px', paddingBottom: '10px', marginLeft: '.2em', marginRight: '.2em', marginTop: '1em',
          }}
        >
          <option value="">&#9734;</option>
        </select>
      </div>
    </div>
  );
};

export default StyleSelector;
