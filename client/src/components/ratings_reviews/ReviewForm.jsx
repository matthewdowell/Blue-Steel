import React from 'react';

const ReviewForm = ({ addReview, setShowReviewForm }) => {
  const isOpen = addReview;

  return (
    <div className="reviewFormContainer">
      <form action="/action_page.php" className="reviewForm">
        <div className="characteristics">
          <p>Characteristics</p>
          {/* TODO: Map over an array of 1 to 5, for each characteristics */}
          {/* TODO: Make the name dynamic so we can capture which one was clicked */}
          <div class="reviewCategory">
            <p>Size</p>
            <input type="radio" id="size" name="size"></input>
            <label htmlFor="size">1</label>
            <input type="radio" id="size" name="size"></input>
            <label htmlFor="size">2</label>
            <input type="radio" id="size" name="size"></input>
            <label htmlFor="size">3</label>
            <input type="radio" id="size" name="size"></input>
            <label htmlFor="size">4</label>
            <input type="radio" id="size" name="size"></input>
            <label htmlFor="size">5</label>
          </div>
          <div class="reviewCategory">
            <p>Width</p>
            <input type="radio" id="width" name="width"></input>
            <label htmlFor="width">1</label>
            <input type="radio" id="width" name="width"></input>
            <label htmlFor="width">2</label>
            <input type="radio" id="width" name="width"></input>
            <label htmlFor="width">3</label>
            <input type="radio" id="width" name="width"></input>
            <label htmlFor="width">4</label>
            <input type="radio" id="width" name="width"></input>
            <label htmlFor="width">5</label>
          </div>
          <div class="reviewCategory">
            <p>Comfort</p>
            <input type="radio" id="comfort" name="comfort"></input>
            <label htmlFor="comfort">1</label>
            <input type="radio" id="comfort" name="comfort"></input>
            <label htmlFor="comfort">2</label>
            <input type="radio" id="comfort" name="comfort"></input>
            <label htmlFor="comfort">3</label>
            <input type="radio" id="comfort" name="comfort"></input>
            <label htmlFor="comfort">4</label>
            <input type="radio" id="comfort" name="comfort"></input>
            <label htmlFor="comfort">5</label>
          </div>
          <div class="reviewCategory">
            <p>Quality</p>
            <input type="radio" id="quality" name="quality"></input>
            <label htmlFor="quality">1</label>
            <input type="radio" id="quality" name="quality"></input>
            <label htmlFor="quality">2</label>
            <input type="radio" id="quality" name="quality"></input>
            <label htmlFor="quality">3</label>
            <input type="radio" id="quality" name="quality"></input>
            <label htmlFor="quality">4</label>
            <input type="radio" id="quality" name="quality"></input>
            <label htmlFor="quality">5</label>
          </div>
          <div class="reviewCategory">
            <p>Length</p>
            <input type="radio" id="length" name="length"></input>
            <label htmlFor="length">1</label>
            <input type="radio" id="length" name="length"></input>
            <label htmlFor="length">2</label>
            <input type="radio" id="length" name="length"></input>
            <label htmlFor="length">3</label>
            <input type="radio" id="length" name="length"></input>
            <label htmlFor="length">4</label>
            <input type="radio" id="length" name="length"></input>
            <label htmlFor="length">5</label>
          </div>
          <div class="reviewCategory">
            <p>Fit</p>
            <input type="radio" id="fit" name="fit"></input>
            <label htmlFor="fit">1</label>
            <input type="radio" id="fit" name="fit"></input>
            <label htmlFor="fit">2</label>
            <input type="radio" id="fit" name="fit"></input>
            <label htmlFor="fit">3</label>
            <input type="radio" id="fit" name="fit"></input>
            <label htmlFor="fit">4</label>
            <input type="radio" id="fit" name="fit"></input>
            <label htmlFor="fit">5</label>
          </div>
        </div>
        <div>
          <p>Review Summary</p>
          <input type="textarea" placeholder="Example: Best purchase ever!"></input>
        </div>
        <div>
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
