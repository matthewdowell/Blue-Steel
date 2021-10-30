const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/cart', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  console.log(typeof req.body.sku_id, req.body.sku_id);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/cart', req.body, {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

module.exports = router;
