import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/Header.css";

const Header = ({ darkTheme, toggleTheme }) => {
  const [clicked, setClicked] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <header
      className={`header ${
        darkTheme ? "header-dark" : "header-light"
      } text-center py-3`}
    >
      <h1>My E-commerce Store</h1>
      <nav>
        <Link to="/" className="me-3">
          Home
        </Link>
        <Link to="/products" className="me-3">
          Products
        </Link>
        <Link to="/about" className="me-3">
          About
        </Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <i
        onClick={handleToggleTheme}
        className={`theme-toggle ${clicked ? "clicked" : ""}`}
        aria-label="Toggle theme"
      >
        {darkTheme ? "🌞" : "🌙"}
      </i>
    </header>
  );
};

Header.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
