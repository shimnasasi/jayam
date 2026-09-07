import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mission-vision">

      <div className="mission-vision-container">

        <div className="mission-card">

          <div className="mission-icon">
            ◎
          </div>

          <div>
            <h3>Our Mission</h3>

            <p>
              To satisfy every customer by offering innovative solutions,
              first-rate service and complete fulfillment of our promises.
              We provide trustworthy, honest and dependable service.
            </p>
          </div>

        </div>


        <div className="mission-card">

          <div className="mission-icon">
            ◉
          </div>

          <div>
            <h3>Our Vision</h3>

            <p>
              To be a modern and innovative MEP company that provides
              high-quality technical services while improving people's
              quality of life and protecting the environment.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;