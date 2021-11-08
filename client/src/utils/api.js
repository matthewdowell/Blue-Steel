require('dotenv').config();
const axios = require('axios').default;

function handleGetRequests(route, params) {
  let options;
  if (params) {
    options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/${route}`,
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      },
      params: params
    }
  } else {
    options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/${route}`,
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      }
    }
  }
  return axios(options);
};

export function getAllProducts() {
  return handleGetRequests('products')
}

export function getProduct(product_id) {
  return handleGetRequests(`products/${product_id}`)
}

export function getProductStyles(product_id) {
  return handleGetRequests(`products/${product_id}/styles`)
}

export function getRelatedProductIds(product_id) {
  return handleGetRequests(`products/${product_id}/related`)
}

export function getReviewCards(params) {
  return handleGetRequests('reviews', params)
}

export function getMetadata(params) {
  return handleGetRequests('reviews/meta', params)
}