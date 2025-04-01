import React from "react";
import { Link } from "react-router-dom";

const HorizontalNav = () => {
  return (
    <nav className="horizontal-nav">
      <div className="nav-logo">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-auth">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default HorizontalNav;
