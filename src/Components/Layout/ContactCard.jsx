import React from "react";
import { Link } from "react-router-dom";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <section className="contact-card">
      <div className="contact-card-overlay"></div>

      <div className="contact-card-container">

        {/* LEFT SIDE */}
        <div className="contact-card-content">

          <div className="contact-card-small-title">
            <span>GET IN TOUCH</span>
            <div className="contact-card-line"></div>
          </div>

          <h2>
            Let's Build Something
            <br />
            Great Together
          </h2>

          <p>
            Have a project in mind? Contact us today for a free consultation
            and customized solution.
          </p>

          <Link to="/contact" className="contact-card-btn">
            Contact Us
            <span>→</span>
          </Link>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-card-details">

          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              ☎
            </div>

            <div>
              <h4>+91 98765 43210</h4>
              <p>Call us today</p>
            </div>
          </div>


          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              ✉
            </div>

            <div>
              <h4>info@jayamtech.com</h4>
              <p>Drop us an email</p>
            </div>
          </div>


          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              ●
            </div>

            <div>
              <h4>Bangalore, India</h4>
              <p>Our location</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactCard;