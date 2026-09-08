import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo1.JPG";
import SideIcons from "./SideIcons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Jayam Technical Services"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop Quote Button */}
          <Link to="/contact" className="quote-btn">
            Get a Quote
            <span>→</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact Us
          </NavLink>

          <Link
            to="/contact"
            className="mobile-quote-btn"
            onClick={closeMenu}
          >
            Get a Quote
            <span>→</span>
          </Link>

        </div>
      </header>

      {/* Floating Side Icons */}
      <SideIcons />
    </>
  );
};

export default Navbar;