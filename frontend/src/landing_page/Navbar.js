import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  border-bottom">
      <div className="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg"></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link class="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>

            <li class="nav-item">
              {" "}
              <button
                class="nav-link"
                onClick={() => {
                  axios.get("/dashboard");
                }}>
                Dashboard
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
