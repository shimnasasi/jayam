import React from "react";
import { Link } from "react-router-dom";
import "./AboutContact.css";

const AboutContact = () => {
  return (
    <section className="about-contact">

      <div className="about-contact-container">

        <div className="about-contact-card">

          <div>

            <div className="about-contact-label">
              <span>LET'S WORK TOGETHER</span>
              <div></div>
            </div>

            <h2>Have a Project in Mind?</h2>

            <p>
              Contact us today for a free consultation and customized
              solution.
            </p>

          </div>

          <Link to="/contact" className="about-contact-btn">
            Contact Us
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default AboutContact;