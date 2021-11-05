/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export function getRelatedProductsById(id) {
  axios.get(`/products/${id}/related`, {
    params: {
      id: id
    },
  })
    .then((res) => {
      console.log('got allRelatedProducts data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}

export function getProductsById(id, callback) {
  axios.get(`/products/${id}`, {
    params: {
      id: id
    },
  })
    .then((res) => {
      console.log('got allProductsById data back!', res.data);
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}



// export function getStyleFeaturesById(id, styleId, callback) {
//   axios.get(`/products/${id}/styles`, {
//     params: {
//       id: id,
//       styleId: styleId
//     },
//   })
//     .then((res) => {
//       console.log('got shared featuresById data back! ', res.data);
//       callback(res.data);
//     })
//     .catch((err) => console.log(err));
// }

export function getStyleFeatures(id, callback) {
  axios.get(`/products/${id}/styles`, {
    params: {
      id: id
    },
  })
    .then((res) => {
      console.log('got stylefeaturesById data back! ', res.data);
      callback(res.data);
    })
    .catch((err) => console.log(err));
}
