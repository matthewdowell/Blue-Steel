/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export default function postInteractions(/* TODO */) {
  axios.get('/interactions', {
    params: {

    },
  })
    .then((res) => {
      console.log('got interactions data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}
