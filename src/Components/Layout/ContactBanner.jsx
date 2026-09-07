import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">

      <div className="contact-banner-container">

        <div className="contact-banner-content">

          <div className="contact-banner-label">
            <span>CONTACT US</span>
            <div></div>
          </div>

          <h1>
            Let's Build
            <br />
            Something Great
            <br />
            <span>Together</span>
          </h1>

          <p>
            Have a project in mind? Get in touch with our team for
            a free consultation and customized solution.
          </p>

        </div>


        <div className="contact-banner-quote">
          Your
          <br />
          Trusted Technical
          <br />
          Partner
        </div>

      </div>

      <div className="contact-banner-shape"></div>

    </section>
  );
};

export default ContactBanner;