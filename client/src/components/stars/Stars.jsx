/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Star from './Star.jsx';

const Stars = ({ rating }) => {
  let ratings = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratings.push(true);
    } else {
      ratings.push(false);
    }
  }
  return (
    <div>
      {ratings.map((filled) => <Star filled={filled} />)}
    </div>
  );
};

export default Stars;
