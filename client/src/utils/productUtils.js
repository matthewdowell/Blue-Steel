/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export default function getProducts(page, count) {
  axios.get('/products', {
    params: {
      page: page,
      count: count
    },
  })
    .then((res) => {
      console.log('got allProducts data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}
