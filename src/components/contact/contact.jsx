// React router dom
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

// Imported components
import SectionHeader from "../global/sectionHeader";
import Map from "./map";

const Contact = () => {
  return (
    <section className="contact">
      <SectionHeader page="contact us" pageLink="contact" />
      <div className="container-fluid py-5 px-lg-5 mt-4">
        <div id="map">
          <Map />
        </div>
        <div className="pt-5 mt-2">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="d-block mx-auto fs-1 mb-4"
          />
          <h2 className="main-heading text-center fw-normal mb-4 pb-3">
            Need Help?
          </h2>
          <div className="row info m-0 justify-content-between">
            <div className="col-md-3 mb-4 mb-md-0 px-0 pb-2 pb-md-0 text-center">
              <h3 className="title text-uppercase mb-2 mb-md-3 letter-space-2">
                Phone
              </h3>
              <p className="mb-0 gray-text">810.222.5439</p>
            </div>
            <div className="col-md-6 mb-4 mb-md-0 px-0 pb-2 pb-md-0 text-center px-lg-5">
              <h3 className="title text-uppercase mb-2 mb-md-3 letter-space-2">
                CUSTOMER SERVICE
              </h3>
              <div className="gray-text">
                <p className="mb-2">Monday to Friday</p>
                <p className="mb-2">
                  8:00am – 4:00pm Sydney, NSW time (UTC +10)
                </p>
                <p className="mb-0">Saturday and Sunday closed</p>
              </div>
            </div>
            <div className="col-md-3 px-0 text-center">
              <h3 className="title text-uppercase mb-2 mb-md-3 letter-space-2">
                RETURNS
              </h3>
              <p className="mb-0 gray-text">
                For information on Returns and Refunds, please click{" "}
                <NavLink to="/faq" className="text-body">
                  here
                </NavLink>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="form-holder py-5">
          <div className="container-fluid px-lg-5">
            <h2 className="main-heading text-center text-capitalize fw-normal mb-2 mb-md-3">
              Send us your questions!
            </h2>
            <p className="gray-text text-center mb-5">
              We’ll get back to you within two days.
            </p>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="row m-0 mb-3">
                <div className="col-md-6 px-0 pe-md-3 mb-3 mb-md-0">
                  <label htmlFor="name" className="mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="d-block w-100 px-3 py-2 rounded-0 border border-dark"
                    required
                  />
                </div>
                <div className="col-md-6 px-0 ps-md-3">
                  <label htmlFor="email" className="mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="d-block w-100 px-3 py-2 rounded-0 border border-dark"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  className="d-block w-100 rounded-0 border"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="d-block mx-auto px-5 py-2 border-0 bg-black text-white letter-space-2 text-uppercase p-3"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
