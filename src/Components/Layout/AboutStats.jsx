import React from "react";
import "./AboutStats.css";

const AboutStats = () => {
  return (
    <section className="about-stats">

      <div className="about-stats-container">

        <div className="stat-box">
          <span>⚙</span>

          <div>
            <strong>10+</strong>
            <p>Years of Experience</p>
          </div>
        </div>


        <div className="stat-box">
          <span>👥</span>

          <div>
            <strong>500+</strong>
            <p>Happy Clients</p>
          </div>
        </div>


        <div className="stat-box">
          <span>▥</span>

          <div>
            <strong>1000+</strong>
            <p>Projects Completed</p>
          </div>
        </div>


        <div className="stat-box">
          <span>♦</span>

          <div>
            <strong>100%</strong>
            <p>Commitment to Quality</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutStats;