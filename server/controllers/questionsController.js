const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/questions', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      product_id: req.query.product_id,
      page: req.query.page,
      count: req.query.count,
    },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.get('/question-answers', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/questions/${req.query.question_id}/answers`, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      page: req.query.page,
      count: req.query.count,
    },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/questions', req.body, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.post('/post-answer', (req, res) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/questions/${req.body.question_id}/answers`, req.body, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.put('/mark-question-as-helpful', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/questions/${req.body.question_id}/helpful`, req.body, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.put('/report-answer', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/answers/${req.body.answer_id}/report`, req.body, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

module.exports = router;
