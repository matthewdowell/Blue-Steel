const axios = require('axios').default;
import { TOKEN } from '../../../config';

function handleGetRequests(route, params) {
  let options;
  if (params) {
    options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/${route}`,
      headers: {
        Authorization: TOKEN
      },
      params: params
    }
  } else {
    options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/${route}`,
      headers: {
        Authorization: TOKEN
      }
    }
  }
  return axios(options);
};

function getAllProducts() {
  return handleGetRequests('products')
};

function getProduct(product_id) {
  return handleGetRequests(`products/${product_id}`)
};



function getProductStyles(product_id) {
  return handleGetRequests(`products/${product_id}/styles`)
};

function getRelatedProductIds(product_id) {
  return handleGetRequests(`products/${product_id}/related`)
};

function getReviewCards(params) {
  return handleGetRequests('reviews', params)
};

function getMetadata(params) {
  return handleGetRequests('reviews/meta', params)
};

export default{
  getAllProducts,
  getProduct,
  getProductStyles,
  getRelatedProductIds,
  getReviewCards,
  getMetadata,
}