/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export function getQuestionsAnswers(product_id, callback, page, count) {
  axios
    .get('/questions', {
      params: {
        product_id, page, count,
      },
    })
    .then((res) => { callback(res.data); })
    .catch((err) => { console.log(err); });
}

export function getAnswersForQuestion(question_id, callback, page, count) {
  axios
    .get('/questions/question-answers', {
      params: {
        question_id, page, count,
      },
    })
    .then((res) => { callback(res.data); })
    .catch((err) => { console.log(err); });
}

export function postQuestion(body, name, email, product_id, callback = () => {}) {
  axios
    .post('/questions', {
      body, name, email, product_id,
    })
    .then(callback())
    .catch((err) => { console.log(err); });
}

export function postAnswer(question_id, body, name, email, photos = [], callback = () => {}) {
  axios
    .post('/questions/post-answer', {
      question_id, body, name, email, photos,
    })
    .then(callback())
    .catch((err) => { console.log(err); });
}
