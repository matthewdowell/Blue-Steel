/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export function getQuestionsAnswers(product_id, callback, page, count) {
  axios.get('/questions', {
    params: {
      product_id,
      page,
      count,
    },
  })
    .then((res) => {
      console.log('got questionsAnswers data back!', res.data);
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

export function getAnswersForQuestion(question_id, callback, page, count) {
  axios.get('/questions/question-answers', {
    params: {
      question_id,
      page,
      count,
    },
  })
    .then((res) => {
      console.log('got answers for question data back!', res.data);
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}
