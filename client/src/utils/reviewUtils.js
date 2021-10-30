/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
import axios from 'axios';

// Should exclude reviews that have been reported
export function getReviewOfProduct(callback, product_id, sort, page, count) {
  axios.get('/reviews', {
    params: {
      product_id: product_id,
      sort: sort,
      page: page,
      count: count
    },
  })
    .then((res) => {
      console.log('got ReviewOfProduct data back!', res.data);
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
      console.log('got ReviewMetadata data back!', res.data);
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

// eslint-disable-next-line max-len
export function addReview(callback, product_id, rating, summary, body, recommend, name, email, photos, characteristics) {
  axios.post('/reviews', {
    product_id: product_id,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics
  })
    .then((res) => {
      console.log('Review has been posted!');
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

export function markReviewHelpful(callback, review_id) {
  axios.put('/reviews/review_id/helpful', { review_id: review_id })
    .then((res) => {
      console.log('Review marked', res.data);
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}

export function reportReview(callback, review_id) {
  axios.put('/reviews/review_id/report', { review_id: review_id })
    .then((res) => {
      console.log('Review reported!', res.data);
      callback(res.data);
    })
    .catch((err) => { console.log(err); });
}
