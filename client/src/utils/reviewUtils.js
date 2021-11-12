/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

export function getReviewsOfProduct(callback, product_id, sort, count) {
  axios.get('/reviews', {
    params: {
      product_id: product_id,
      sort: sort,
      count: count
    },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

export function getReviewMetadata(callback, product_id) {
  axios.get('/reviews/meta', {
    params: {
      product_id: product_id,
    },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

export function addReview(
  product_id,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos = [],
  characteristics
) {
  axios.post('/reviews', {
    params: {
      product_id: product_id,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    }
  })
    .then(() => {
    })
    .catch((err) => { console.log('UTIL POST ERROR:', err); });
}

export function markReviewHelpful(review_id) {
  axios.put('/reviews/review_id/helpful', { review_id: review_id })
    .then(() => {
    })
    .catch((err) => { console.log(err); });
}

export function reportReview(review_id) {
  axios.put('/reviews/review_id/report', { review_id: review_id })
    .then(() => {
    })
    .catch((err) => { console.log(err); });
}
