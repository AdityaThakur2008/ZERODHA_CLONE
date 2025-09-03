import React from "react";
import Menu from "./Menu.js"
function TopBar() {
  return (
    <div className="topbar-container">
      <div className="indices-conatiner">
        <div className="nifty">
          <p className="index"> NIFTY 50</p>
          <p className="index-point"> 100.2</p>
        </div>
        <div className="sensex">
          <p className="index"> SENSEX</p>
          <p className="index-point"> 100.2</p>
        </div>
      </div>
      <Menu/>
    </div>
  );
}

export default TopBar;
