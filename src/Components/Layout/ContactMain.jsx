import React from "react";
import "./ContactMain.css";
import officeImage from "../Assets/officeimage.jpg";

const ContactMain = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-main">
      <div className="contact-main-container">

        {/* ================= LEFT SIDE - FORM ================= */}
        <div className="contact-form-box">

          <div className="contact-form-heading">

            <div className="contact-form-label">
              <span>SEND US A MESSAGE</span>
              <div></div>
            </div>

            <h2>We're Here to Help</h2>

            <p>
              Fill out the form and our team will get back to you shortly.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-grid">

              <input
                type="text"
                placeholder="Your Name *"
                required
              />

              <input
                type="email"
                placeholder="Your Email *"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number *"
                required
              />

              <select defaultValue="">
                <option value="" disabled>
                  Project Type
                </option>

                <option>Electro Mechanical</option>
                <option>False Ceiling Work</option>
                <option>Plumbing</option>
                <option>Aluminum Work</option>
                <option>Air-Conditioning</option>
                <option>Swimming Pools</option>
              </select>

            </div>

            <textarea
              placeholder="Your Message *"
              required
            ></textarea>

            <button type="submit">
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="contact-right-side">

          {/* MAP */}
          <div className="contact-map">
            <iframe
              title="Jayam Technical Services"
              src="https://www.google.com/maps?q=Yelahanka,Bangalore&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>


          {/* OFFICE DETAILS */}
          <div className="office-card">

            <div className="office-card-content">

              <div className="contact-round-icon">
                ●
              </div>

              <div>
                <h3>Our Office</h3>

                <p className="office-name">
                  Jayam Technical Services
                </p>

                <p>
                  #123, 2nd Floor, Business Park,
                  <br />
                  Yelahanka, Bangalore - 560064, India
                </p>
              </div>

            </div>

            <div className="office-image">
              <img
                src={officeImage}
                alt="Jayam Technical Services Office"
              />
            </div>

          </div>


          {/* BOTTOM DETAILS */}
          <div className="contact-small-cards">

            <div className="contact-small-card">

              <div className="contact-round-icon">
                ◷
              </div>

              <div>
                <h3>Working Hours</h3>

                <p>
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>

                <p>Sunday: Closed</p>
              </div>

            </div>


            <div className="contact-small-card">

              <div className="contact-round-icon">
                ☎
              </div>

              <div>
                <h3>Quick Support</h3>

                <p>+91 98765 43210</p>

                <p>info@jayamtech.com</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMain;