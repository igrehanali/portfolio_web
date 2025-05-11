"use client";

import React from "react";
import "aos/dist/aos.css";

const Header = ({
  heading = "My Experience",
  subHeading = "Companies and startups I've helped build and scale through code.",
}) => {
  return (
    <div
      className="mb-16 text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h2 className="text-4xl font-extralight text-white leading-tight tracking-tight">
        {heading.split(" ").map((word, i) => (
          <span
            key={i}
            className={`${i === 1 ? "font-bold text-gray-300" : ""}`}
          >
            {word}{" "}
          </span>
        ))}
      </h2>
      <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
        {subHeading}
      </p>
    </div>
  );
};

export default Header;
