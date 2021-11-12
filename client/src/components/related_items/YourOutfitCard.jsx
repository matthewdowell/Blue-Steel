import React from 'react';
import {XCircle} from 'react-bootstrap-icons';
import {StaticRating} from '../starRating.jsx';

const OutfitCard = props => (
  <div className = 'product-card'>
    <XCircle size = {23} onClick = {(event) => props.removeListItem(props.id)}
      style = {{
        position: 'absolute',
        left: '20rem',
        top: '1rem',
        color: 'red',
        fontWeight: '500'
      }}
    />
    <img className = 'product-image' src = {props.image} alt = {props.name} loading = 'lazy' style={{borderRadius: '15px', boxShadow: '0px 0 10px rgba(0, 0, 0, 0.8)'}}/>
    <div className = 'bottom-half-card'>
      <p className = 'product-category'>{props.category.toUpperCase()}</p>
      <p className = 'product-name'>{props.name}</p>
      <p className = 'product-price'>${props.price}</p>
      <StaticRating data = {props.rating} />
    </div>
  </div>
);

export default OutfitCard;