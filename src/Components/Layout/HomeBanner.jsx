import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <section className="home-banner">

      {/* Banner Content */}
      <div className="home-banner-container">
        <div className="home-banner-content">

          <div className="banner-label">
            <span>MEP SOLUTIONS</span>
            <div className="label-line"></div>
          </div>

          <h1>
            Quality Technical
            <br />
            Services
          </h1>

          <h2>for a Better Tomorrow</h2>

          <p>
            Reliable MEP solutions for residential, commercial
            <br className="desktop-break" />
            and industrial spaces.
          </p>

          <Link to="/services" className="banner-service-btn">
            Our Services
            <span>→</span>
          </Link>

        </div>
      </div>


      {/* RIGHT BLUE/GREEN SHAPE */}
      <div className="banner-green-shape">
        <div className="shape-text">
          Building
          <br />
          Spaces for a
          <br />
          Better Tomorrow
        </div>
      </div>


      {/* WHITE DIAGONAL BOTTOM */}
      <div className="banner-white-shape"></div>

    </section>
  );
};

export default HomeBanner;