/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React from 'react';

const ReviewForm = ({ addReview, setShowReviewForm }) => {
  const isOpen = addReview;
  const characteristics = ['size', 'width', 'comfort', 'quality', 'length', 'fit'];
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div className="reviewFormContainer">
      <form action="/action_page.php" className="reviewForm">
        <div>Overall Rating</div> {/* REQUIRED */}
        <div>Do you recommend this product?</div> {/* REQUIRED */}
        <div className="characteristics">
          <p>Characteristics</p> {/* REQUIRED */}
          {/* TODO: Make the name dynamic so we can capture which one was clicked */}
          {characteristics.map((characteristic) => {
            return (
              <div className="reviewCategory">
                <div className="characteristic">
                  {characteristic}
                </div>
                {ratings.map((rating) => {
                  return (
                    <span>
                      <input type="radio" id={characteristic} name={characteristic}></input>
                      <label htmlFor={characteristic}>{rating}</label>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div>
          <p>Review Summary</p> {/* Up to 60 characters*/}
          <textarea placeholder="Example: Best purchase ever!"></textarea>
        </div>
        <div>
          <p>Review Body</p> {/* Up to 1000 characters*/} {/* REQUIRED */}
          <textarea placeholder="Why did you like the product or not?"></textarea>
        </div>
        {/* Upload Photos */}
        <button className="addPhotoButton">Upload Photo</button>
        <div>
          <p>Nickname</p> {/* Up to 60 characters*/} {/* REQUIRED */}
          <textarea placeholder="Example: jackson11!"></textarea>
          <p>For privacy reasons, do not use your full name or email address.</p>
        </div>
        <div>
          <p>email</p> {/* Up to 60 characters*/} {/* REQUIRED */}
          <textarea placeholder="Example: jackson11@email.com"></textarea>
          <p>For authentication reasons, you will not be emailed.</p>
        </div>
        <div>
          {/* TODO: Validate inputs when submit button is clicked */}
          <button type="submit" className="submitReviewButton">Submit Review</button>
          <button type="submit" className="closeReviewButton" onClick={() => {
            setShowReviewForm(false);
          }}>Close Review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
