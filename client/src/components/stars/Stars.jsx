/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Stars = ({ rating }) => {
  return (
    <div value={rating}>
      <Rating
        className="starRating"
        name="starRating"
        value={rating}
        precision={0.25}
      />
    </div>
  );
};

export default Stars;
