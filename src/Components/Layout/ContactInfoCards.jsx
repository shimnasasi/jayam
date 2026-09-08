import React from "react";
import { Link } from "react-router-dom";

import "./ContactInfoCards.css";

const ContactInfoCards = () => {
  return (
    <section className="contact-info-section">

      <div className="contact-info-container">

        <div className="contact-info-card">

          <div className="contact-info-icon">
            ☎
          </div>

          <div>
            <h3>Call Us</h3>

            <strong>+971543582569</strong>

            <p>Mon - Sat, 9:00 AM - 6:00 PM</p>
          </div>

        </div>


        <div className="contact-info-card">

          <div className="contact-info-icon">
            ✉
          </div>

          <div>
            <h3>Email Us</h3>

            <strong>info@jayam.me</strong>

            <p>We reply within 24 hours</p>
          </div>

        </div>


        <div className="contact-info-card">

          <div className="contact-info-icon">
            ●
          </div>

          <div>
            <h3>Visit Us</h3>

            <strong>Dubai, UAE</strong>

            <p>Our Office Location</p>
          </div>

        </div>


        <Link
          to="/contact"
          className="contact-info-card quote-info-card"
        >

          <div className="contact-info-icon">
            ▢
          </div>

          <div>
            <h3>Get a Quote</h3>

            <p>
              Request a Free
              <br />
              Consultation
            </p>
          </div>

          <span className="quote-arrow">
            →
          </span>

        </Link>

      </div>

    </section>
  );
};

export default ContactInfoCards;