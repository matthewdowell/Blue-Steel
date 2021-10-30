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

module.exports = router;
