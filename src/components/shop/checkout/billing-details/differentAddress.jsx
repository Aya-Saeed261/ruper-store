// Imported components
import CountriesSelect from "./countriesSelect";

const DifferentAddress = () => {
  return (
    <div className="overflow-hidden pt-3">
      <div className="mb-4">
        <label htmlFor="bill_diff_country">
          <span className="fw-500">Country / Region </span>
          <span className="red-text">*</span>
        </label>
        <CountriesSelect />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_diff_county">
          <span className="fw-500">State / County </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_diff_county"
          id="bill_diff_county"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_diff_city">
          <span className="fw-500">Town / City </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_diff_city"
          id="bill_diff_city"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_diff_st">
          <span className="fw-500">Street address </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_diff_st"
          placeholder="House number and street number"
          id="bill_diff_st"
          className="d-block w-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bill_diff_apartment">
          <span className="fw-500">
            Apartment, suite, unit, etc. (optional)
          </span>
        </label>
        <input
          type="text"
          name="bill_diff_apartment"
          id="bill_diff_apartment"
          className="d-block w-100"
        />
      </div>
      <div>
        <label htmlFor="bill_diff_zip">
          <span className="fw-500">Postcode / ZIP </span>
          <span className="red-text">*</span>
        </label>
        <input
          type="text"
          name="bill_diff_zip"
          id="bill_diff_zip"
          className="d-block w-100"
          required
        />
      </div>
    </div>
  );
};

export default DifferentAddress;
