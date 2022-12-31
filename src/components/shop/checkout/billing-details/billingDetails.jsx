import { useState, Fragment } from "react";

// Imported components
import CountriesSelect from "./countriesSelect";
import DifferentAddress from "./differentAddress";

const BillingDetails = ({ isLoggedIn }) => {
  const [createAcc, setCreateAcc] = useState(false);
  const [difAddress, setdifAddress] = useState(false);
  const [orderNotes, setOrderNotes] = useState("");

  return (
    <Fragment>
      <h2 className="fw-normal fs-4 mb-4">Billing details</h2>
      <div className="mb-4">
        <label htmlFor="bill_fn">
          <span className="fw-500">First name </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_fn"
          id="bill_fn"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_ln">
          <span className="fw-500">Last name </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_ln"
          id="bill_ln"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_company">
          <span className="fw-500">Company name (optional)</span>
        </label>
        <input
          type="text"
          name="bill_company"
          id="bill_company"
          className="d-block w-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_country">
          <span className="fw-500">Country / Region </span>
          <span className="red-text">*</span>
        </label>
        <CountriesSelect />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_county">
          <span className="fw-500">State / County </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_county"
          id="bill_county"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_city">
          <span className="fw-500">Town / City </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_city"
          id="bill_city"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_st">
          <span className="fw-500">Street address </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_st"
          id="bill_st"
          placeholder="House number and street number"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_apartment">
          <span className="fw-500">
            Apartment, suite, unit, etc. (optional)
          </span>
        </label>
        <input
          type="text"
          name="bill_apartment"
          id="bill_apartment"
          className="d-block w-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_zip">
          <span className="fw-500">Postcode / ZIP </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_zip"
          id="bill_zip"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_phone">
          <span className="fw-500">Phone </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_phone"
          id="bill_phone"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_email">
          <span className="fw-500">Email address </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="email"
          name="bill_email"
          id="bill_email"
          className="d-block w-100"
          required
        />
      </div>
      {!isLoggedIn ? (
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              name="create_acc"
              id="create_acc"
              checked={createAcc ? true : false}
              onChange={(e) => setCreateAcc(e.target.checked)}
            />
            <label htmlFor="create_acc" className="fw-500">
              Create an account?
            </label>
          </div>
          {createAcc ? (
            <div className="pt-3">
              <label htmlFor="bill_password">
                <span className="fw-500">Create account password </span>
                <span className="red-text">*</span>
              </label>
              <input
                type="password"
                name="bill_password"
                id="bill_password"
                className="d-block w-100"
                required
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <div className="mb-4">
        <div className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            name="dif_Address"
            id="dif_Address"
            checked={difAddress ? true : false}
            onChange={(e) => setdifAddress(e.target.checked)}
          />
          <label htmlFor="dif_Address" className="fw-500">
            Ship to a different address?
          </label>
        </div>
        {difAddress ? <DifferentAddress show={difAddress} /> : ""}
      </div>
      <div>
        <label htmlFor="bill_notes" className="fw-500">
          Order notes (optional)
        </label>
        <textarea
          name="bill_notes"
          id="bill_notes"
          className="d-block w-100"
          rows="5"
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
          placeholder="Notes about your order, e.g. special notes for delivery"
        ></textarea>
      </div>
    </Fragment>
  );
};

export default BillingDetails;
