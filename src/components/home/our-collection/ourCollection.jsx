// Imported components
import TopSec from "./topSec";
import BottomSec from "./bottomSec";

const OurCollection = ({ categories }) => {
  return (
    <section className="our-collection pt-3">
      <h2 className="letter-space-2 text-uppercase text-center fw-normal fs-4 mt-5 mb-3">
        Our collection
      </h2>
      <TopSec categories={categories} />
      <BottomSec />
    </section>
  );
};

export default OurCollection;
