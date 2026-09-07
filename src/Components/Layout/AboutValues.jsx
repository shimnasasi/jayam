import React from "react";
import "./AboutValues.css";

const AboutValues = () => {
  return (
    <section className="about-values">

      <div className="about-values-container">

        <div className="values-heading">

          <div className="values-small-title">
            <span></span>
            OUR VALUES
            <span></span>
          </div>

          <h2>What Drives Us</h2>

        </div>


        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon">♦</div>

            <h3>Quality</h3>

            <p>
              We ensure the highest standards in every project.
            </p>
          </div>


          <div className="value-card">
            <div className="value-icon">👥</div>

            <h3>Integrity</h3>

            <p>
              We build trust through honest and transparent practices.
            </p>
          </div>


          <div className="value-card">
            <div className="value-icon">♣</div>

            <h3>Sustainability</h3>

            <p>
              We create solutions that care for people and the environment.
            </p>
          </div>


          <div className="value-card">
            <div className="value-icon">⚙</div>

            <h3>Innovation</h3>

            <p>
              We embrace new technologies for a smarter future.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutValues;