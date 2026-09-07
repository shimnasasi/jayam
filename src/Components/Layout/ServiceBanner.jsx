import React from "react";
import { Link } from "react-router-dom";
import "./ServiceBanner.css";

const ServiceBanner = () => {
  return (
    <section className="service-banner">
      <div className="service-banner-overlay"></div>

      <div className="service-banner-container">
        <div className="service-banner-content">

          <span className="service-banner-label">
            OUR SERVICES
          </span>

          <h1>Our Services</h1>

          <p>
            Reliable and integrated technical solutions designed
            for modern residential, commercial and industrial spaces.
          </p>

          <div className="service-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Services</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;