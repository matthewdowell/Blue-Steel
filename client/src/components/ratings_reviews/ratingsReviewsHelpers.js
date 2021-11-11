/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
// TODO
const sortRatingsReviewsList = (reviews, sortType) => {
  // let operator = (direction === 'ascending)') ? (+) : (-) ;
  if (sortType === 'relevant') {
    return reviews.sort((a, b) => {
      return a - b;
    });
  } else if (sortType === 'new') {
    return reviews.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  } else if (sortType === 'helpful') {
    return reviews.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
  } else if (sortType === 'rating') {
    return reviews.sort((a, b) => {
      const n = b.rating - a.rating;
      if (n !== 0) {
        return n;
      }
      return (b.helpfulness) - (a.helpfulness);
    });
  } else if (sortType === 'recommended') {
    return reviews.sort((a, b) => {
      return b.recommend - a.recommend;
    });
  } else if (sortType === 'length') {
    return reviews.sort((a, b) => {
      return b.body.length - a.body.length;
    });
  }
};

// const handleSortByChange = () => {
//   // const sortBy = document.getElementById('sortBy').value;
//   sortRatingsReviewsList(sortBy);
// };

const getPercentRecommended = (reviews) => {
  let numRecommended = 0;
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].recommend) {
      numRecommended++;
    }
  }
  if (Number.isNaN(numRecommended / reviews.length)) {
    return 0;
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
  if (Number.isNaN(getTotalScore(ratings) / getNumRatings(ratings))) {
    return 0;
  }
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
  // handleSortByChange,
  getPercentRecommended,
  getTotalScore,
  getNumRatings,
  getAverageRating,
  countReviewsWithRating
};
