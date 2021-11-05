/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';
import React from 'react';

export function getProducts(page, count, callback) {
  axios.get('/products', {
    params: {
      page: page,
      count: count
    },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

export function getProductsById(page, count, id, callback) {
  axios.get(`/products/${id}`, {
    params: {
      page: page,
      count: count,
      id: id
    },
  })
    .then((res) => {
      console.log('got allProductsById data back!', res.data);
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

export function getRelatedProducts(page, count, id) {
  axios.get(`/products/${id}/related`, {
    params: {
      page: page,
      count: count,
      id: id
    },
  })
    .then((res) => {
      console.log('got allRelatedProducts data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}

export function getStyles(page, count, id, callback) {
  axios.get(`/products/${id}/styles`, {
    params: {
      page: page,
      count: count,
      id: id
    },
  })
    .then((res) => { callback(res.data); })
    .catch((err) => { console.log(err); });
}

export function renderStyles(styles, currentStyle) {
  styles[currentStyle].photos.map((photo, index) => {
      return <img src={photo.thumbnail_url} key={`${currentStyle}`} id={index} onClick={(e) => {setImageIndex(e.target.id)}} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover', marginBottom: '1em' }} /> 
  })
}