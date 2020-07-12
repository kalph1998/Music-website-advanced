import React from "react";
import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/#" className="brand-logo">
        <img src={logo} alt="logo" />
        <div className="brand-name flex items-center ml-3">Soundwave</div>
      </a>
      <ul>
        <li className="active">Home</li>
        <li>Search</li>
        <li>Your Library</li>
      </ul>
      <div className="cookies">
        <span className="cookies-text">Cookies</span>
        <span className="cookies-text">Privacy</span>
      </div>
    </nav>
  );
};
