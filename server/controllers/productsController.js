const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.get('/:product_id', (req, res) => {
  console.log(typeof req.params.product_id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products/${req.params.product_id}`, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.get('/:product_id/related', (req, res) => {
  console.log(typeof req.params.product_id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products/${req.params.product_id}/related`, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.get('/:product_id/styles', (req, res) => {
  console.log(typeof req.params.product_id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products/${req.params.product_id}/styles`, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

module.exports = router;
