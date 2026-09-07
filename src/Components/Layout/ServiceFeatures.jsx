import React from "react";
import {
  ShieldCheck,
  Users,
  Leaf,
  Settings
} from "lucide-react";

import "./ServiceFeatures.css";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Quality",
      text: "Execution",
    },
    {
      icon: <Users />,
      title: "Expert",
      text: "Team",
    },
    {
      icon: <Leaf />,
      title: "Sustainable",
      text: "Solutions",
    },
    {
      icon: <Settings />,
      title: "Customer",
      text: "Satisfaction",
    },
  ];

  return (
    <section className="service-features">
      <div className="service-features-container">

        {features.map((item, index) => (
          <div className="feature-box" key={index}>

            <div className="feature-icon">
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

export default ServiceFeatures;