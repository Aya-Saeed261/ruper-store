// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

const ShippingProgress = ({ cartTotal }) => {
  const freeShippingCost = 1000;
  return (
    <div className="py-3">
      <p>
        Buy{" "}
        <span className="fw-bold text-decoration-underline">
          ${cartTotal < freeShippingCost ? freeShippingCost - cartTotal : 0}
        </span>{" "}
        more to enjoy{" "}
        <span className="fw-bold text-decoration-underline">FREE Shipping</span>
      </p>
      <div className="position-relative">
        <div className="progress" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-black overflow-visible"
            style={{
              width: `${
                (cartTotal * 100) / freeShippingCost < 100
                  ? Math.ceil((cartTotal * 100) / freeShippingCost)
                  : 100
              }%`,
            }}
            role="progressbar"
            aria-label="Amount left to get free shipping"
            aria-valuenow={cartTotal}
            aria-valuemin={0}
            aria-valuemax={freeShippingCost}
          ></div>
        </div>
        <span
          className="truck-icon bg-white position-absolute top-50"
          style={{
            left: `${
              (cartTotal * 100) / freeShippingCost < 100
                ? Math.ceil((cartTotal * 100) / freeShippingCost)
                : 100
            }%`,
          }}
        >
          <FontAwesomeIcon icon={faTruckFast} />
        </span>
      </div>
    </div>
  );
};

export default ShippingProgress;
