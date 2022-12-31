import { useState, Fragment } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Imported components
import ReviewCard from "./reviewCard";

const Reviews = ({ product, addedReviews, onNewReview }) => {
  const [rating, setRating] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [invalidRating, setInvalidRating] = useState(false);

  const handleReview = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setInvalidRating(true);
      return;
    } else {
      if (invalidRating) setInvalidRating(false);
    }
    const reviews = [...addedReviews];
    const date = new Date().toLocaleString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const newReview = {
      id: reviews.length,
      name: nameInput,
      rating,
      review: reviewInput,
      date,
    };
    reviews.push(newReview);
    onNewReview(reviews);
    setNameInput("");
    setEmailInput("");
    setReviewInput("");
    setRating(0);
  };

  return (
    <div className="reviews">
      {product.reviews.length > 0 ? (
        <div className="mb-5">
          <h4 className="fw-normal mb-4">
            {product.reviews.length + addedReviews.length} review for{" "}
            {product.name}
          </h4>
          <ul className="list-unstyled mb-0">
            {product.reviews.map((review) => (
              <li
                key={review.id}
                className="review main-border mb-3 p-3 p-md-4"
              >
                <ReviewCard review={review} />
              </li>
            ))}
            {addedReviews.length > 0
              ? addedReviews.map((review) => (
                  <li
                    key={review.id}
                    className="review main-border mb-3 p-3 p-md-4"
                  >
                    <ReviewCard review={review} />
                  </li>
                ))
              : ""}
          </ul>
        </div>
      ) : (
        ""
      )}
      <form action="#" onSubmit={handleReview} className="pt-3">
        <h4 className="heading w-fit border border-2 border-dark py-3 d-flex align-items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faPenToSquare} className="fs-6" />
          <span className="text-uppercase">Add a review</span>
        </h4>
        <p className="info gray-text pt-2 mb-4">
          Your email address will not be published. Required fields are marked{" "}
          <span className="red-text fs-6">*</span>
        </p>
        <div className="mb-3">
          <div className="d-flex align-items-center gap-4">
            <h5 className="fs-6 mb-0">Your rating</h5>
            <div className="stars d-flex flex-row-reverse gap-1">
              {Array.of(5, 4, 3, 2, 1).map((ele) => (
                <Fragment key={ele}>
                  <input
                    type="checkbox"
                    name="rating"
                    value={ele}
                    id={`rating-${ele}`}
                    onChange={(e) => setRating(+e.target.value)}
                    checked={ele <= rating ? true : false}
                  />
                  <label
                    htmlFor={`rating-${ele}`}
                    className="star"
                    aria-label={`${ele} Star`}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </label>
                </Fragment>
              ))}
            </div>
          </div>
          <p
            className={`rating-invalid red-text mb-0 ${
              invalidRating ? "show" : ""
            }`}
          >
            Please select your rating
          </p>
        </div>
        <div className="row m-0">
          <div className="col-md-6 px-0 pe-md-4 order-1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name *"
              aria-label="Enter name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="d-block w-100 main-border mb-4 p-3"
              required
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email *"
              aria-label="Enter email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="d-block w-100 main-border mb-4 p-3"
              required
            />
            <input
              type="submit"
              value="submit"
              className="submit d-block w-100 text-uppercase p-3 border border-1 border-dark letter-space-1 bg-white fw-500"
            />
          </div>
          <div className="col-md-6 px-0 order-0 order-md-2 mb-4 mb-md-0">
            <textarea
              name="review"
              id="review-input"
              placeholder="Your review *"
              value={reviewInput}
              onChange={(e) => setReviewInput(e.target.value)}
              className="d-block w-100 h-100 main-border p-3"
              required
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
