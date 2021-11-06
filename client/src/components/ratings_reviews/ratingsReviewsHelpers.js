/* eslint-disable no-plusplus */
// TODO
const sortRatingsReviewsList = (sortBy) => {
  if (sortBy === 'relevant') { // review.date AND review.helpfulness
  } else if (sortBy === 'newest') { // review.date
  } else if (sortBy === 'helpful') { // review.helpfulness
  }
};

// TODO
const sortByNewest = (arrayOfObj) => {

};

// Filter to only show reviews that gave a certain rating
const handleSortByChange = () => {
  const sortBy = document.getElementById('sortBy').value;
  sortRatingsReviewsList(sortBy);
};

const getPercentRecommended = (reviews) => {
  let numRecommended = 0;
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].recommend) {
      numRecommended++;
    }
  }
  return (numRecommended / reviews.length) * 100;
};

const getTotalScore = (ratings) => { // ratings is an object
  let totalScore = 0;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    let rating = keys[i];
    let numberOfRating = parseInt(ratings[rating]);
    totalScore += rating * numberOfRating;
  }
  return totalScore;
};

const getNumRatings = (ratings) => { // ratings is an object
  let numRatings = 0;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    let rating = keys[i];
    let numberOfRating = parseInt(ratings[rating]);
    numRatings += numberOfRating;
  }
  return numRatings;
};

const getAverageRating = (ratings) => { // ratings is an object
  return getTotalScore(ratings) / getNumRatings(ratings);
};

const countReviewsWithRating = (ratings, num) => { // ratings is an object
  let numRatings = 0;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    let rating = keys[i];
    let numberOfRating = parseInt(ratings[rating]);
    if (parseInt(rating) === num) {
      numRatings += numberOfRating;
    }
  }
  return numRatings;
  // const numReviews = reviews.filter((review) => (review.rating === num));
  // return numReviews.length;
};

module.exports = {
  sortRatingsReviewsList,
  sortByNewest,
  handleSortByChange,
  getPercentRecommended,
  getTotalScore,
  getNumRatings,
  getAverageRating,
  countReviewsWithRating
};

