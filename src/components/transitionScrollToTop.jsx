import { useEffect } from "react";

// React router
import { useLocation } from "react-router-dom";

const TransitionScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default TransitionScrollToTop;
