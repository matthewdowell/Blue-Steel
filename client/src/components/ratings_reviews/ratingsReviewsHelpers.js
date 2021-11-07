/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
// TODO
const sortRatingsReviewsList = (reviews, sortBy) => {
  // if (sortBy === 'relevant') { // review.date AND review.helpfulness
  //   reviews.sort((a, b) => {});
  // } else if (sortBy === 'new') { // review.date
  //   reviews.sort((a, b) => { return a.date - b.date; });
  // } else if (sortBy === 'helpful') { // review.helpfulness
  //   reviews.sort((a, b) => { return b.helpfulness - a.helpfulness; });
  // }
};

const handleSortByChange = () => {
  // const sortBy = document.getElementById('sortBy').value;
  sortRatingsReviewsList(sortBy);
};

const getPercentRecommended = (reviews) => {
  let numRecommended = 0;
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].recommend) {
      numRecommended++;
    }
  }
  return numRecommended / reviews.length;
};

const getTotalScore = (ratings) => { // ratings is an object
  let totalScore = 0;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    const rating = keys[i];
    const numberOfRating = parseInt(ratings[rating]);
    totalScore += rating * numberOfRating;
  }
  return totalScore;
};

const getNumRatings = (ratings) => { // ratings is an object
  let numRatings = 0;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    const rating = keys[i];
    const numberOfRating = parseInt(ratings[rating]);
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
    const rating = keys[i];
    const numberOfRating = parseInt(ratings[rating]);
    if (parseInt(rating) === num) {
      numRatings += numberOfRating;
    }
  }
  return numRatings;
};

module.exports = {
  sortRatingsReviewsList,
  handleSortByChange,
  getPercentRecommended,
  getTotalScore,
  getNumRatings,
  getAverageRating,
  countReviewsWithRating
};
