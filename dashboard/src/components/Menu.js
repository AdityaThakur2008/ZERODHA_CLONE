import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api.js"

function Menu() {
  const [selectedMenu, SetselectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    SetselectedMenu(index);
  };
  const handleLogOut = async () => {
    try {
      await api.post("/LOGOUT");
      
    } catch (err) {
      console.error(err);
    }
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="Menu-container">
      <img src="logo.png" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handleMenuClick(0);
              }}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Orders"
              onClick={() => {
                handleMenuClick(1);
              }}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Holdings

"
              onClick={() => {
                handleMenuClick(2);
              }}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Positions

"
              onClick={() => {
                handleMenuClick(3);
              }}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Funds"
              onClick={() => {
                handleMenuClick(4);
              }}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Apps"
              onClick={() => {
                handleMenuClick(5);
              }}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile dropdown">
          <div className="avtar">ZU</div>
          <p className="username">USER ID</p>

          <div class="dropdown-content">
            <button>Profile</button>
            <button>About</button>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
