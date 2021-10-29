const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  console.log('reviews here', req.query.sort);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/reviews', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    params: {
      product_id: req.query.product_id, // TODO: Grab product_id from req.body
      sort: req.query.sort, // TODO: Grab sort from req.body
    // eslint-disable-next-line comma-dangle
    }
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

module.exports = router;
