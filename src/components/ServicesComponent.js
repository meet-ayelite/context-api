// ServicesComponent.js
import React from "react";
import "../styles.css";

const services = [
  { title: "Consulting", description: "Expert marketing consulting services." },
  { title: "Advertising", description: "Comprehensive advertising solutions." },
  { title: "SEO Optimization", description: "Boost your search engine visibility." },
];

const ServicesComponent = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesComponent;
