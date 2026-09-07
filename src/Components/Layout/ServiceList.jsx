import React from "react";
import {
  Settings,
  Layers,
  Pipette,
  PanelsTopLeft,
  Snowflake,
  Waves,
  Building2
} from "lucide-react";

import "./ServiceList.css";
import service1 from "../Assets/banner1.jpg";
import service2 from "../Assets/banner1.jpg";

const ServiceList = () => {
  const services = [
    {
      title: "Electro Mechanical",
      image: service2,
      icon: <Settings />,
      description:
        "Reliable electrical and mechanical solutions for all types of buildings."
    },
    {
      title: "False Ceiling Work",
      image: "/images/false-ceiling.jpg",
      icon: <Layers />,
      description:
        "Modern and aesthetic false ceiling solutions for residential and commercial spaces."
    },
    {
      title: "Plumbing",
      image: "/images/plumbing.jpg",
      icon: <Pipette />,
      description:
        "Complete plumbing services with quality materials and expert installation."
    },
    {
      title: "Aluminum Work",
      image: "/images/aluminium.jpg",
      icon: <PanelsTopLeft />,
      description:
        "Durable and stylish aluminium fabrication and installation."
    },
    {
      title: "Air-Conditioning",
      image: "/images/ac.jpg",
      icon: <Snowflake />,
      description:
        "Efficient HVAC solutions for comfortable and healthy environments."
    },
    {
      title: "Swimming Pools",
      image: "/images/swimming-pool.jpg",
      icon: <Waves />,
      description:
        "Custom swimming pool design, construction and maintenance."
    }
  ];

  return (
    <section className="service-list">
      <div className="service-list-heading">
        <span>OUR SERVICES</span>

        <h2>Comprehensive MEP Services</h2>

        <p>
          We offer a wide range of technical services tailored
          to meet the evolving needs of modern infrastructure.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-card-image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            <div className="service-card-content">
              <div className="service-card-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="/contact">
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* LAST ROW */}
      <div className="service-last-row">

        {/* Lifts Card */}
        <div className="service-card lifts-card">
          <div className="service-card-image">
            <img
              src={service1}
              alt="Lifts and Escalators"
            />
          </div>

          <div className="service-card-content">
            <div className="service-card-icon">
              <Building2 />
            </div>

            <h3>Lifts & Escalators</h3>

            <p>
              Supply, installation and maintenance of modern
              lifts and escalators.
            </p>

            <a href="/contact">
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* Partner Content */}
        <div className="service-partner-box">
          <div className="service-partner-label">
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

          <p className="service-partner-description">
            From design to execution, we deliver integrated
            MEP solutions that power progress.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceList;