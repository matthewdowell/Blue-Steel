/* eslint-disable no-plusplus */
const sortRatingsReviewsList = (sortBy) => {
  if (sortBy === 'relevant') { // review.date AND review.helpfulness
  } else if (sortBy === 'newest') { // review.date
  } else if (sortBy === 'helpful') { // review.helpfulness
  }
};

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

// TODO: Might need to move this into a global file to share
const getAverageRating = (ratings) => { // ratings is an object
  let numRatings = 0;
  let totalScore = 0;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    numRatings += ratings[keys[i]];
    totalScore += keys[i] * ratings[keys[i]];
  }
  return totalScore / numRatings;
};

const countReviewsWithRating = (reviews, num) => {
  const numReviews = reviews.filter((review) => (review.rating === num));
  return numReviews.length;
};

module.exports = {
  sortRatingsReviewsList,
  sortByNewest,
  handleSortByChange,
  getPercentRecommended,
  getAverageRating,
  countReviewsWithRating
};

