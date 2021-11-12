/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
// TODO
const sortRatingsReviewsList = (reviews, sortType, sortDirection) => {
  if (sortType === 'relevant') {
    if (sortDirection === 'descending') {
      return reviews.sort((a, b) => {
        const ageA = new Date() - new Date(a.date);
        const ageB = new Date() - new Date(b.date);
        return b.recommend / ageB - a.recommend / ageA;
      });
    }
    return reviews.sort((a, b) => {
      const ageA = new Date() - new Date(a.date);
      const ageB = new Date() - new Date(b.date);
      return a.recommend / ageA - b.recommend / ageB;
    });
  } else if (sortType === 'new') {
    if (sortDirection === 'descending') {
      return reviews.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }
    return reviews.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  } else if (sortType === 'helpful') {
    if (sortDirection === 'descending') {
      return reviews.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
    }
    return reviews.sort((a, b) => {
      return a.helpfulness - b.helpfulness;
    });
  } else if (sortType === 'rating') {
    if (sortDirection === 'descending') {
      return reviews.sort((a, b) => {
        const n = b.rating - a.rating;
        if (n !== 0) {
          return n;
        }
        return b.helpfulness - a.helpfulness;
      });
    }
    return reviews.sort((a, b) => {
      const n = a.rating - b.rating;
      if (n !== 0) {
        return n;
      }
      return a.helpfulness - b.helpfulness;
    });
  } else if (sortType === 'recommended') {
    if (sortDirection === 'descending') {
      return reviews.sort((a, b) => {
        return b.recommend - a.recommend;
      });
    }
    return reviews.sort((a, b) => {
      return a.recommend - b.recommend;
    });
  } else if (sortType === 'length') {
    if (sortDirection === 'descending') {
      return reviews.sort((a, b) => {
        return b.body.length - a.body.length;
      });
    }
    return reviews.sort((a, b) => {
      return a.body.length - b.body.length;
    });
  }
};

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
  getPercentRecommended,
  getTotalScore,
  getNumRatings,
  getAverageRating,
  countReviewsWithRating
};
