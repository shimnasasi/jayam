import React from "react";

import {
  Gem,
  HardHat,
  Leaf,
  Users
} from "lucide-react";

import "./ServiceBenefits.css";

const ServiceBenefits = () => {

  const benefits = [
    {
      icon: <Gem />,
      title: "High Quality",
      text: "Standards",
    },
    {
      icon: <HardHat />,
      title: "On-Time",
      text: "Project Delivery",
    },
    {
      icon: <Leaf />,
      title: "Energy Efficient",
      text: "Solutions",
    },
    {
      icon: <Users />,
      title: "Dedicated",
      text: "Support",
    },
  ];

  return (
    <section className="service-benefits">

      <div className="benefits-container">

        {benefits.map((item, index) => (

          <div className="benefit-item" key={index}>

            <div className="benefit-icon">
              {item.icon}
            </div>

            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ServiceBenefits;