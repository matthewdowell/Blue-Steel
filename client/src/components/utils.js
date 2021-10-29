import axios from 'axios';

function getFashionData() {
  axios.get('/products')
    .then((res) => {
      console.log(res.data);
    });
}

export default getFashionData;
