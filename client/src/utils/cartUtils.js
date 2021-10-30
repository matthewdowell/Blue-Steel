/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export function getCart() {
  axios.get('/cart', {
    // params: {

    // },
  })
    .then((res) => {
      console.log('got cart data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}

export function addToCart(skuId) {
  axios
    .post('/cart', { sku_id: skuId })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// const funcs = {
//   getCart: getCart(),
//   addToCart: addToCart()
// };
