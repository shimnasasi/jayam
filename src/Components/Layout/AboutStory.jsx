import React from "react";
import { Link } from "react-router-dom";

import aboutImage from "../Assets/banner3.jpg";

import "./AboutStory.css";

const AboutStory = () => {
  return (
    <section className="about-story">

      <div className="about-story-container">

        <div className="about-story-content">

          <div className="story-label">
            <span>OUR STORY</span>
            <div></div>
          </div>

          <h2>
            A Modern MEP Company
            <br />
            with a Strong Vision
          </h2>

          <p>
            Jayam Technical Services is a modern, innovative and
            creative MEP company that provides reliable technical
            services for residential, commercial and industrial spaces.
          </p>

          <p>
            With a customer-centric approach, experienced professionals
            and a commitment to excellence, we deliver end-to-end
            solutions with quality and reliability.
          </p>

          <Link to="/contact" className="story-btn">
            Our Journey
            <span>→</span>
          </Link>

        </div>


        <div className="story-image-area">

          <img
            src={aboutImage}
            alt="Jayam Technical Services"
          />

          <div className="story-features">

            <div>⚙ <span>People</span></div>

            <div>◆ <span>Spaces</span></div>

            <div>◉ <span>Technology</span></div>

            <div>♣ <span>Sustainability</span></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutStory;