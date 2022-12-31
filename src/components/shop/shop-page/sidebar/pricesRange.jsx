import { useState, useEffect } from "react";

// React double slider
import ReactSlider from "react-slider";

const PricesRange = ({ products, onPriceRangeChange }) => {
  const [range, setRange] = useState({ min: 0, max: 0 });
  const [showMin, setShowMin] = useState(false);
  const [showMax, setShowMax] = useState(false);
  const [isTooClose, setIsTooClose] = useState(false);
  const step = 10;

  const handleChange = (value) => {
    onPriceRangeChange(value);

    if (value[0] - range.min >= 2 * step) {
      setShowMin(true);
    } else {
      setShowMin(false);
    }
    if (range.max - value[1] >= 2 * step) {
      setShowMax(true);
    } else {
      setShowMax(false);
    }

    if (value[1] - value[0] <= 90) {
      setIsTooClose(true);
    } else {
      setIsTooClose(false);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      let min = products[0].price;
      let max = 0;
      [...products].forEach((product) => {
        const originalPrice = product.price;
        const discount = product.discount || 0;
        const newPrice = originalPrice - discount;
        if (newPrice < min) min = newPrice;
        if (newPrice > max) max = newPrice;
      });
      if (min % step !== 0) {
        // Updating min to be the closest minimum number that's divisible by step
        min = min - (min % step);
      }
      if (max % step !== 0) {
        // Updating max to be the closest maximum number that's divisible by step
        max = max + (step - (min % step));
      }
      setRange({ min, max });
    }
  }, [products]);

  return range.max > 0 ? (
    <ReactSlider
      className="prices-slider"
      thumbClassName="thumb"
      trackClassName="track"
      defaultValue={[range.min, range.max]}
      max={range.max}
      min={range.min}
      step={step}
      ariaLabel={["Lower thumb", "Upper thumb"]}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => (
        <div
          key={state.index}
          className={`range-holder ${isTooClose ? "too-close" : ""}`}
        >
          <div {...props} data-price={state.valueNow}>
            {isTooClose ? (
              state.value[1] >= 420 && state.index === 1 ? (
                <div className="too-close-range position-absolute d-flex gap-1">
                  <span>{state.value[0]}$</span>
                  <span>-</span>
                  <span>{state.value[1]}$</span>
                </div>
              ) : state.value[1] < 420 && state.index === 0 ? (
                <div className="too-close-range position-absolute d-flex gap-1">
                  <span>{state.value[0]}$</span>
                  <span>-</span>
                  <span>{state.value[1]}$</span>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
          <span
            className={`range-value d-block ${showMin ? "show-min" : ""} ${
              showMax ? "show-max" : ""
            }`}
          >
            {state.index === 0 ? range.min : range.max}
          </span>
        </div>
      )}
      pearling
      minDistance={10}
      onChange={handleChange}
    />
  ) : (
    ""
  );
};

export default PricesRange;

// {state.valueNow}
