import { useState } from "react";

const PaymentMethods = () => {
  const [aciveMethod, setActiveMethod] = useState("Direct bank transfer");
  const methods = [
    {
      id: 0,
      method: "Direct bank transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      id: 1,
      method: "Check payments",
      description:
        "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
    },
    {
      id: 2,
      method: "Cash on delivery",
      description: "Pay with cash upon delivery.",
    },
    {
      id: 3,
      method: "PayPal",
      description:
        "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
    },
  ];

  return (
    <div className="payment-methods main-border p-3 mb-4">
      {methods.map((item, indx, arr) => (
        <div
          key={item.id}
          className={`${item.id !== arr.length - 1 ? "mb-3" : ""}`}
        >
          <div className="d-flex align-items-center gap-2">
            <input
              type="radio"
              name="payment_method"
              value={item.method}
              checked={aciveMethod === item.method ? true : false}
              onChange={(e) => setActiveMethod(e.target.value)}
              id={item.method.replace(" ", "-")}
            />
            <label htmlFor={item.method.replace(" ", "-")} className="fw-500">
              {item.method}
            </label>
          </div>
          <div
            className={`description gray-text overflow-hidden ${
              aciveMethod === item.method ? "show" : ""
            }`}
          >
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
