import React from "react";
import "../App.css";
import "../styles/navStyles.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Malisa Litten
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  About Me
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
