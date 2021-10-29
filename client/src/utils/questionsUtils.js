/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export default function getQuestionsAndAnswers(/* TODO */) {
  axios.get('/questions', {
    params: {

    },
  })
    .then((res) => {
      console.log('got questionsAnswers data back!', res.data);
    })
    .catch((err) => { console.log(err); });
}
