import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";
import aboutImage from "../Assets/banner4.avif";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about-container">

        {/* LEFT CONTENT */}
        <div className="home-about-content">

          <div className="about-small-title">
            <span>ABOUT US</span>
            <div className="about-title-line"></div>
          </div>

          <h2>
            We build everything
            <br />
            that you needed
          </h2>

          <p>
            Jayam Technical Services is a modern, innovative and creative
            MEP company that provides reliable technical solutions for
            residential, commercial and industrial spaces. We focus on
            quality workmanship, customer satisfaction and long-term value.
          </p>

          <Link to="/about" className="about-more-btn">
            More About Us
            <span>→</span>
          </Link>

        </div>


        {/* RIGHT IMAGE AREA */}
        <div className="home-about-image-area">

          <div className="about-image-box">
            <img
              src={aboutImage}
              alt="Jayam Technical Services"
            />
          </div>


          {/* OVERLAP CARD */}
          <div className="about-feature-card">

            <div className="about-feature-item">
              <div className="about-feature-icon">
                ⚙
              </div>

              <div>
                <h4>Experienced</h4>
                <p>Team</p>
              </div>
            </div>


            <div className="about-feature-item">
              <div className="about-feature-icon">
                👥
              </div>

              <div>
                <h4>Customer</h4>
                <p>Centric Approach</p>
              </div>
            </div>


            <div className="about-feature-item">
              <div className="about-feature-icon">
                ◆
              </div>

              <div>
                <h4>Quality</h4>
                <p>Workmanship</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAbout;