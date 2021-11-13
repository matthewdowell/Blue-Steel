/* eslint-disable comma-dangle */
const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

// For a specific product
router.get('/', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      product_id: req.query.product_id,
      sort: req.query.sort,
      count: req.query.count
    }
  })
    .then((results) => res.send(results.data))
    .catch((err) => { console.log(err); });
});

// For review metadata
router.get('/meta', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews/meta', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      product_id: req.query.product_id
    }
  })
    .then((results) => res.send(results.data))
    .catch((err) => { console.log(err); });
});

router.post('/', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews', req.body.params, {
    headers: { Authorization: process.env.REACT_APP_API_KEY }
  })
    .then((results) => { res.send(results.data); })
    .catch((err) => { console.log('ROUTER POST ERROR:', err); });
});

router.put('/review_id/helpful', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews/${req.body.review_id}/helpful`, req.body, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then(() => res.sendStatus(204))
    .catch((err) => { console.log(err); });
});

router.put('/review_id/report', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews/${req.body.review_id}/report`, req.body, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then(() => res.sendStatus(204))
    .catch((err) => { console.log(err); });
});

module.exports = router;
