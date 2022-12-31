import { useState } from "react";

// React router dom
import { NavLink } from "react-router-dom";

// React multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Imported assets
import post1 from "../../assets/instagram-posts/post-1.jpg";
import post2 from "../../assets/instagram-posts/post-2.jpg";
import post3 from "../../assets/instagram-posts/post-3.jpg";
import post4 from "../../assets/instagram-posts/post-4.jpg";
import post5 from "../../assets/instagram-posts/post-5.jpg";
import post6 from "../../assets/instagram-posts/post-6.jpg";
import post7 from "../../assets/instagram-posts/post-7.jpg";

// React multi-carousel breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
  },
  large: {
    breakpoint: { max: 1199, min: 1024 },
    items: 4,
  },
  medium: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
    partialVisibilityGutter: 20,
  },
  small: {
    breakpoint: { max: 767, min: 481 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  extraSmall: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    partialVisibilityGutter: 80,
  },
};

const posts = [
  { id: 0, src: post1 },
  { id: 1, src: post2 },
  { id: 2, src: post3 },
  { id: 3, src: post4 },
  { id: 4, src: post5 },
  { id: 5, src: post6 },
  { id: 6, src: post7 },
];

const InstagramPosts = () => {
  const [isDragged, setIsdragged] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Disable link pointer events if it's being dragged
  const handleDrag = () => {
    if (!isMouseDown) {
      if (isDragged) setIsdragged(false);
      return;
    }
    setIsdragged(true);
  };

  return (
    <section className="insta-posts border-separator pt-5">
      <h2 className="text-uppercase mb-5 mt-4 fw-normal fs-4 letter-space-2 text-center">
        Let's be friends!
      </h2>
      <div
        onMouseLeave={() => setIsMouseDown(false)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        <Carousel
          responsive={responsive}
          containerClass="multi-carousel"
          draggable
          swipeable
          partialVisible
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          removeArrowOnDeviceType={["medium", "small", "extraSmall"]}
        >
          {posts.map((post) => (
            <NavLink
              to="/"
              className={`post d-block text-decoration-none overflow-hidden position-relative`}
              key={post.id}
              onMouseDown={() => setIsMouseDown(true)}
              onMouseMove={handleDrag}
            >
              <img src={post.src} alt="" className="d-block img-fluid" />
              <div className="icon-holder opacity-trans w-100 h-100 position-absolute top-0 start-0 text-white d-flex justify-content-center align-items-center fs-2">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </NavLink>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default InstagramPosts;
