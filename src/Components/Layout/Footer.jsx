import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Assets/logo1.JPG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-company">
          <img
            src={logo}
            alt="Jayam Technical Services"
            className="footer-logo"
          />

          <p>
            Reliable MEP solutions designed to create better,
            safer and more efficient spaces.
          </p>

          <div className="footer-social">
            <a href="#facebook">f</a>
            <a href="#instagram">◎</a>
            <a href="#linkedin">in</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <span>Electro Mechanical</span>
          <span>False Ceiling Work</span>
          <span>Plumbing</span>
          <span>Aluminum Work</span>
          <span>Air-Conditioning</span>
          <span>Swimming Pools</span>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Info</h3>

          <span>☎ +971 54 358 2569</span>
          <span>✉  info@jayam.me</span>
          <span>● Dubai, UAE</span>
          <span>◷ Mon - Sat: 9:00 AM - 6:00 PM</span>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © 2026 Jayam Technical Services. All Rights Reserved.
          </p>

          <p>
            Privacy Policy &nbsp; | &nbsp; Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;