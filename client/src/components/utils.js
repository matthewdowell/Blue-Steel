import axios from 'axios';

function getFashionData() {
  axios.get('/reviews')
    .then((res) => {
      console.log('got data back!', res.data);
    });
}

export default getFashionData;
