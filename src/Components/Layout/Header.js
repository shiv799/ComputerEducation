import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header id="navigation" className="navbar-fixed-top animated-header">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <h1 className="navbar-brand">
            <a href="#body">
              <img src="/assets/img/logo.jpg" height="40" width="90" alt="" />
            </a>
          </h1>
        </div>

        <nav
          className="collapse navbar-collapse navbar-right"
          role="navigation"
        >
          <ul id="nav" className="nav navbar-nav menu">
            <li>
              {/* <Link to="/">Home</Link> */}
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#features">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#course">Course</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            {/* <li>
              <a href="#testimonial">Testimonial</a>
            </li> */}
            <li>
              <a href="#contact-form">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
