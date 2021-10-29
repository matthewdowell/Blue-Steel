const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

// this will be post request, not get

router.post('/', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/interactions', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
    body: {
      widget: req.query.widget,
      element: req.query.element,
      time: req.query.time,
    },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log(err));
});

module.exports = router;
