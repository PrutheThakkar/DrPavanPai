// src/components/InsideBanner.jsx

import React from "react";

const InsideBanner = ({
  mobileImage,
  desktopImage,
  alt = "Page banner",
  width = 1440,
  height = 500,
}) => {
  return (
    <section className="inside-banner">
      <div className="container">
        <picture>
          {/* Mobile: up to 768px */}
          <source
            srcSet={mobileImage}
            media="(max-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={mobileImage}
            media="(max-width: 768px)"
            type="image/jpeg"
          />

          {/* Desktop: 769px and above */}
          <source
            srcSet={desktopImage}
            media="(min-width: 769px)"
            type="image/webp"
          />
          <source
            srcSet={desktopImage}
            media="(min-width: 769px)"
            type="image/jpeg"
          />

          {/* Fallback — always required inside <picture> */}
          <img
            src={desktopImage}
            alt={alt}
            width={width}
            height={height}
            loading="eager"
          />
        </picture>
      </div>
    </section>
  );
};

export default InsideBanner;