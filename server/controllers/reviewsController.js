/* eslint-disable comma-dangle */
const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

// For a specific review
router.get('/', (req, res) => {
  console.log('reviews here', req.query.sort);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      product_id: req.query.product_id,
      sort: req.query.sort
    }
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

// For review metadata
router.get('/meta', (req, res) => {
  console.log('reviews here', req.query.sort);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews/meta', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      product_id: req.query.product_id,
      sort: req.query.sort
    }
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  console.log('POST a review', req.body);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics
    }
  })
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
});

router.put('/:review_id/helpful', (req, res) => {
  console.log('PUT/UPDATE - mark review helpful', req.body);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews/:review_id/helpful', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      review_id: req.body.review_id,
    }
  })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
});

router.put('/:review_id/report', (req, res) => {
  console.log('PUT/UPDATE - report a review', req.body);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews/:review_id/report', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      review_id: req.body.review_id,
    }
  })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
});

module.exports = router;
