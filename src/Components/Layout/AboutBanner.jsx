import React from "react";
import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <section className="about-banner">

      <div className="about-banner-container">

        <div className="about-banner-content">

          <div className="about-banner-label">
            <span>ABOUT US</span>
            <div></div>
          </div>

          <h1>
            Building Spaces
            <br />
            for a Better Tomorrow
          </h1>

          <p>
            Delivering reliable, sustainable and innovative
            MEP solutions for a brighter and healthier future.
          </p>

        </div>

        <div className="about-banner-quote">
          More
          <br />
          Than Services,
          <br />
          We Build Trust
        </div>

      </div>

      <div className="about-banner-shape"></div>

    </section>
  );
};

export default AboutBanner;