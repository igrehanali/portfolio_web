import React from "react";

const Heading = ({
  title,
  subtitle,
  titleAos = "fade-up",
  subtitleAos = "fade-up",
  delay = 200,
}) => {
  return (
    <div>
      <h2 className="text-center text-3xl mb-4" data-aos={titleAos}>
        <span className="font-normal">{title.split(" ")[0]} </span>{" "}
        <span className="font-bold">{title.split(" ")[1]}</span>
      </h2>

      {subtitle && (
        <p
          className="text-center mb-12"
          data-aos={subtitleAos}
          data-aos-delay={delay}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
