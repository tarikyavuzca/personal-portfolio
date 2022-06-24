import React from "react";
import { Link } from "react-router-dom";
import Home from "../routes/Home";
import "./Navbar.css";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">YTD.</Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger">
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
