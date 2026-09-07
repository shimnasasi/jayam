import React from "react";
import "./ServicePartner.css";

const ServicePartner = () => {
  return (
    <section className="service-partner">

      <div className="service-partner-container">

        <div className="partner-image">
          <img
            src="/images/partner-lift.jpg"
            alt="Integrated MEP solutions"
          />
        </div>

        <div className="partner-content">

          <div className="partner-small">
            <span></span>

            <p>
              ONE PARTNER
              <br />
              MANY SOLUTIONS
            </p>
          </div>

          <h2>
            Creating Better
            <br />
            Spaces Together
          </h2>

          <p className="partner-description">
            From design to execution, we deliver integrated
            MEP solutions that power progress.
          </p>

        </div>

      </div>

    </section>
  );
};

export default ServicePartner;