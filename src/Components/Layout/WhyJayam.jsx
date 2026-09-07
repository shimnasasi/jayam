import React from "react";
import { Link } from "react-router-dom";

import whyImage from "../Assets/banner4.avif";

import "./WhyJayam.css";

const WhyJayam = () => {
  return (
    <section className="why-jayam">

      <div className="why-jayam-container">

        <div className="why-content">

          <div className="why-label">
            <span>WHY JAYAM</span>
            <div></div>
          </div>

          <h2>
            Your Trusted
            <br />
            MEP Partner
          </h2>

          <p>
            We combine technical expertise with a customer-centric
            approach to deliver reliable, sustainable and cost-effective
            solutions.
          </p>

          <Link to="/contact" className="why-btn">
            Why Choose Us
            <span>→</span>
          </Link>

        </div>


        <div className="why-list">

          <p>✓ Experienced & Skilled Team</p>

          <p>✓ End-to-End Project Execution</p>

          <p>✓ High-Quality Materials & Workmanship</p>

          <p>✓ On-Time Completion</p>

          <p>✓ Customer Satisfaction</p>

          <p>✓ Focus on Safety & Sustainability</p>

        </div>


        <div className="why-image">

          <img
            src={whyImage}
            alt="Jayam MEP Services"
          />

          <div className="why-image-text">
            <small>ENGINEERING</small>

            <strong>
              COMFORT FOR
              <br />
              A BETTER
              <br />
              TOMORROW
            </strong>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyJayam;