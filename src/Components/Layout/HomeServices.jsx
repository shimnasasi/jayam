import React from "react";
import { Link } from "react-router-dom";
import "./HomeServices.css";

const services = [
  {
    icon: "⚙",
    title: "Electro Mechanical",
    text: "Reliable electrical and mechanical solutions for all types of buildings."
  },
  {
    icon: "▣",
    title: "False Ceiling Work",
    text: "Modern and aesthetic false ceiling solutions for residential and commercial spaces."
  },
  {
    icon: "🚰",
    title: "Plumbing",
    text: "Complete plumbing services with quality materials and expert installation."
  },
  {
    icon: "▢",
    title: "Aluminum Work",
    text: "Durable and stylish aluminum fabrication and installation."
  },
  {
    icon: "❄",
    title: "Air-Conditioning",
    text: "Efficient HVAC solutions for comfortable and healthy environments."
  },
  {
    icon: "♒",
    title: "Swimming Pools",
    text: "Custom swimming pool design, construction and maintenance."
  }
];

const HomeServices = () => {
  return (
    <section className="home-services">
      <div className="home-services-container">

        <div className="services-heading">
          <div className="services-small-title">
            <span></span>
            OUR SERVICES
            <span></span>
          </div>

          <h2>Complete Technical Solutions</h2>

          <p>
            We deliver high-quality MEP services tailored to your needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              to="/services"
              className="service-card"
              key={index}
            >
              <div className="service-icon-box">
                {service.icon}
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <div className="service-arrow">
                →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeServices;