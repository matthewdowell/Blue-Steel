/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export default function getReviewOfProduct(product_id, sort, page, count) {
  axios.get('/reviews', {
    params: {
      product_id: product_id,
      sort: sort,
      page: page,
      count: count
    },
  })
    .then((res) => {
      console.log('got ReviewOfProduct data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}
