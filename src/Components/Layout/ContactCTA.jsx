import React from "react";
import { Link } from "react-router-dom";
import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">

      <div className="contact-cta-overlay"></div>

      <div className="contact-cta-container">

        <div>

          <div className="contact-cta-label">
            LET'S WORK TOGETHER
          </div>

          <h2>
            Turn Your Vision into Reality
          </h2>

          <p>
            Partner with Jayam Technical Services for reliable,
            efficient and sustainable technical solutions.
          </p>

        </div>


        <Link
          to="/contact"
          className="contact-cta-btn"
        >
          Get a Quote
          <span>→</span>
        </Link>

      </div>

    </section>
  );
};

export default ContactCTA;