import React from "react";
import logo from "../images/logo.png";
import { ReactComponent as Homeicon } from "../svg/home.svg";
import { ReactComponent as Libraryicon } from "../svg/library.svg";
import { ReactComponent as Searchicon } from "../svg/search.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/#" className="brand-logo">
        <img src={logo} alt="logo" />
        <div className="brand-name flex items-center ml-3">Soundwave</div>
      </a>
      <ul className="NavbarList">
        <Link to="/">
          <li className="active flex justify-start items-center  ">
            <div className="icon">
              <Homeicon />
            </div>
            Home
          </li>
        </Link>
        <Link to="/search">
          <li className="flex justify-start items-center">
            <div className="icon">
              <Searchicon />
            </div>
            Search
          </li>
        </Link>
        <Link to="/yourLibrary">
          <li className="flex justify-start items-center">
            <div className="icon">
              <Libraryicon />
            </div>
            Your Library
          </li>
        </Link>
      </ul>
      <h3 className="playList">playlists</h3>
      <div className="cookies">
        <span className="cookies-text">Cookies</span>
        <span className="cookies-text">Privacy</span>
      </div>
    </nav>
  );
};
