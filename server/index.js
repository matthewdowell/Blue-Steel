const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');
const router = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));



// other configuration...

//const githubToken = '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';

// axios.interceptors.request.use((config) => {
//   config.headers.Authorization = githubToken;
//   return config;
// });

//axios.defaults.headers.common.Authorization = githubToken;

app.use('/products', router);

app.use('/reviews', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
