import React from 'react';

const RatingsDistribution = (props) => {
  var reviews = props.reviews;

  return (
    <div className="ratingsDistribution">
      <div>5 stars</div>
      <div>4 stars</div>
      <div>3 stars</div>
      <div>2 stars</div>
      <div>1 stars</div>
    </div>
  );
};

export default RatingsDistribution;