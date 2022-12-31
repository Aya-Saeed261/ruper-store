// React router dom
import { NavLink } from "react-router-dom";

// Font awesome
import { faPenRuler, faAward } from "@fortawesome/free-solid-svg-icons";

// Imported components
import SectionHeader from "../global/sectionHeader";
import BlogCard from "./blogCard";
import Qualities from "../home/qualities";
import Brands from "./brands";
import Testimonials from "./testimonials";

// Imported assets
import mainImg from "../../assets/about/about-main.jpg";
import blog1 from "../../assets/about/about-1.jpg";
import blog2 from "../../assets/about/about-2.jpg";

const About = ({ testimonials, brands }) => {
  return (
    <section className="about">
      <SectionHeader page="about us" pageLink="about" />
      <div className="container-fluid py-5 mt-4 px-xl-4">
        <NavLink
          to="/shop"
          className="main-img d-block text-decoration-none mb-5 overflow-hidden"
          aria-label="Go to shop page"
        >
          <img src={mainImg} alt="" className="img-fluid" />
        </NavLink>
        <div className="text-center pt-4 mb-5">
          <h2 className="main-heading text-capitalize fw-normal">
            Great design for all
          </h2>
          <p className="info gray-text">
            At Ruper, we create affordable designs for the modern home
          </p>
        </div>
        <BlogCard
          img={blog1}
          icon={faPenRuler}
          heading="Designs you desire"
          description="We love creating furniture you want and will love for years to come.
          Our designs feature a fusion of unique styles that inspire us – from
          mid-century modern to contemporary."
          bgColor="brown"
        />
        <Qualities />
        <BlogCard
          img={blog2}
          icon={faAward}
          heading="Quality at every step"
          description="Rest easy. From choice materials and expert hands, to precision tools and tests, we ensure your product is made of hardy stuff."
          bgColor="blue"
          reverse={true}
        />
        <Testimonials testimonials={testimonials} />
      </div>
      <Brands brands={brands} />
    </section>
  );
};

export default About;
