import { Fragment } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const CompareRow = ({
  products,
  detail,
  heading,
  onAddToCart,
  onRemoveFromCompare,
}) => {
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

  const getDetail = (prod, detail) => {
    let info = "";
    if (!prod.name) {
      return "";
    }
    switch (detail) {
      case "imgs":
        info = (
          <img src={prod.imgs[0].src} alt={prod.name} className="img-fluid" />
        );
        break;
      case "stars":
        info = (
          <ul className="rate-holder list-unstyled mb-0 h-100 d-flex align-items-center gap-2">
            {handleRate(prod.stars).map((rate, indx) => (
              <li key={indx}>{rate}</li>
            ))}
          </ul>
        );
        break;
      case "price":
        info = (
          <div className="fs-5">
            {prod.discount ? (
              <Fragment>
                <span className="price-color fs-6">
                  <del>${prod.price.toFixed(2)}</del>
                </span>
                <span className="red-text">
                  {" "}
                  ${(prod.price - prod.discount).toFixed(2)}
                </span>
              </Fragment>
            ) : (
              `$${prod.price.toFixed(2)}`
            )}
          </div>
        );
        break;
      case "dimensions":
        info = <p className="mb-0">N/A</p>;
        break;
      case "addBtn":
        info = (
          <button
            type="btn"
            className="add-to-cart opacity-trans btn bg-black text-white border-0 py-2 px-3 rounded-0"
            onClick={() => onAddToCart(prod)}
          >
            Add to cart
          </button>
        );
        break;
      case "name":
        info = (
          <Fragment>
            <h3 className="name fw-bold text-uppercase mb-0">{prod.name}</h3>
            <button
              type="button"
              className="btn border-0 p-0 lh-1 text-decoration-underline"
              onClick={() => onRemoveFromCompare(prod.id)}
            >
              remove
            </button>
          </Fragment>
        );
        break;
      default:
        info = <p className="mb-0">{prod[detail]}</p>;
    }
    return info;
  };
  return (
    <div className={`row m-0 ${detail === "name" ? "gray-bg" : ""}`}>
      <div
        className={`col-2 gray-bg p-3 ${
          detail !== "name" ? "border-0 border-bottom" : ""
        }`}
      >
        <h2 className="fs-6 fw-500 mb-0">{heading}</h2>
      </div>
      <div className="col-10 px-0">
        <div className="row h-100 m-0">
          {products.map((prod, indx, arr) => (
            <div
              key={prod.id}
              className={`detail col-4 p-3 ${
                detail !== "name"
                  ? "border-0 border-start border-bottom"
                  : "prod-name d-flex align-items-center gap-2"
              } ${
                detail !== "name" && arr.length - 1 === indx
                  ? "border-0 border-end"
                  : ""
              }`}
            >
              {getDetail(prod, detail)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareRow;
