// FooterComponent.js
import React from "react";
import "../styles.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Creative Marketing. All Rights Reserved.</p>
      <div className="social-links">
        <a href="#fb">Facebook</a>
        <a href="#tw">Twitter</a>
        <a href="#lnk">LinkedIn</a>
      </div>
    </footer>
  );
};

export default FooterComponent;
