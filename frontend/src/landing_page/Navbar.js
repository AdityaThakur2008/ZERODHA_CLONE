import React from "react";
import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtecteRoute.js";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Company Logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            <ProtectedRoute>
              <li className="nav-item">
                {" "}
                <button
                  className="nav-link"
                  onClick={() => {
                    window.location.href =
                      "https://zerodha-clone-dashboard-u9rv.onrender.com";
                  }}>
                  Dashboard
                </button>
              </li>
            </ProtectedRoute>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
