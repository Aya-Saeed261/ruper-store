import { Fragment } from "react";

// Imported assets
import pic from "../../../../assets/user.jpg";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = ({ review }) => {
  const handleRate = (stars) => {
    const num = stars;
    const numInt = Math.floor(num);
    const rate = [];
    for (let i = 0; i < numInt; i++) {
      rate.push(<FontAwesomeIcon icon={faStar} className="star rated" />);
    }
    if (num !== numInt) {
      rate.push(
        <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
      );
    }
    for (let i = 0; i < 5 - Math.ceil(num); i++) {
      rate.push(<FontAwesomeIcon icon={faStar} className="star unrated" />);
    }
    return rate;
  };

  return (
    <Fragment>
      <div className="user-info d-flex align-items-center gap-3">
        <img
          src={pic}
          alt="User"
          className="user-pic img-fluid rounded-circle"
        />
        <div>
          <ul className="rate-holder list-unstyled mb-1 d-flex gap-1">
            {handleRate(review.rating).map((rate, indx) => (
              <li key={indx}>{rate}</li>
            ))}
          </ul>
          <p className="name mb-1 fw-500 text-uppercase">{review.name}</p>
          <p className="date mb-0 gray-text">{review.date}</p>
        </div>
      </div>
      <p className="mb-0 py-4">{review.review}</p>
    </Fragment>
  );
};

export default ReviewCard;
