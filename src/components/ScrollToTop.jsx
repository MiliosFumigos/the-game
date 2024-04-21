import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";
const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <BiArrowToTop onClick={scrollTop} className="topButton" />
      )}
    </div>
  );
};

export default ScrollToTop;
