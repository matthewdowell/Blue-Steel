import React from 'react';
import { addReview, getReviewMetadata, getReviewOfProduct, markReviewHelpful, reportReview } from '../utils/reviewUtils.js';

const RatingsReviews = () => (
  <div>RatingsReviews</div>
  // TODO: Make a Review child component
    // Star Rating
    // Date written
    // Review summary. Single sentence, max 60 chars, BOLD
    // Review body. Free form input that can take text, images. 50-1000 chars.
      // Show 250 chars by default. If longer, add 'Show More' button with proper functionality
    // Recommended. If reviewer recommends, "I recommend this product" and checkmark icon beside it
      // should be displayed under the review. If reviewer does NOT recommend: nothing should be displayed
    // Username. Display username. If username associated with a sale, show 'Verified Purchaser'
    // Response to Review. If review has company response, display 'Reponse from seller', then
      // company reponse. Should be visually distinguishable
    // Helpfulness. Show 'Was this review helpful?', then Yes(number) | No(number).
      // Yes and No should be clickable.
  // TODO: More Reviews Button
    // Should only appear if there are additional unshown reviews
      // Should add 2 reviews per click
    // Should disappear if all reviews are shown
);

export default RatingsReviews;
