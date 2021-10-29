const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products')
    .then((data) => { console.log(data); res.send(data); });
});

router.get('/reviews');

module.exports = router;
