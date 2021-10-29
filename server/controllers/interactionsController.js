const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

//this will be post request, not get

router.get('/', (req, res) => {
  console.log('api key: ', process.env.REACT_APP_API_KEY);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/interactions', {
    headers: { Authorization: process.env.REACT_APP_API_KEY },
  })
    .then((results) => res.send(results.data))
    .catch((err) => console.log('there was an error'));
});

module.exports = router;