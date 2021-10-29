/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export default function postInteractions(element, widget, time) {
  axios.post('/interactions', {
    params: {
      element: element,
      widget: widget,
      time: time
    },
  })
    .then((res) => {
      console.log('got interactions data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}
