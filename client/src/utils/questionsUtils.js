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
    .then(() => {callback()})
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

export function markQuestionAsHelpful(question_id, callback = () => {}) {
  axios
    .put('/questions/mark-question-as-helpful', {
      question_id,
    })
    .then(callback())
    .catch((err) => { console.log(err); });
}

export function reportQuestion(question_id, callback = () => {}) {
  axios
    .put('/questions/report-question', {
      question_id,
    })
    .then(callback())
    .catch((err) => { console.log(err); });
}

export function markAnswerAsHelpful(answer_id, callback = () => {}) {
  axios
    .put('/questions/mark-answer-as-helpful', {
      answer_id,
    })
    .then(callback())
    .catch((err) => { console.log(err); });
}

export function reportAnswer(answer_id, callback = () => {}) {
  axios
    .put('/questions/report-answer', {
      answer_id,
    })
    .then(callback())
    .catch((err) => { console.log(err); });
}
