/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export default function getCart(/* TODO */) {
  axios.get('/cart', {
    params: {

    },
  })
    .then((res) => {
      console.log('got cart data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}
