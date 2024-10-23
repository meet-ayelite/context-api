// NewsletterComponent.js
import React, { useState } from "react";
import "../NewsletterComponent.css";

const NewsletterComponent = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data Submitted:', formData);
    };

  return (
    <div className="newsletter-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Creative Marketing</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <div className="search-icon">🔍</div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="headline">
            <span className="highlight">Subscribe Now</span> <br />
            to Our Newsletter
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Subscription Form */}
          <form className="subscription-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name"
                placeholder="Name" 
                className="input-field"         
                value={formData.name}
                onChange={handleChange}

                />
            
            <input 
                type="text" 
                name="email"
                placeholder="Email" 
                className="input-field" 
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit" className="submit-btn">Send ➔</button>
          </form>
        </div>

        <div className="hero-image">
          <img src={require('../img/news_letter.jpg')} alt="Person at a desk" />
        </div>
      </section>
    </div>
  );
};

export default NewsletterComponent;
