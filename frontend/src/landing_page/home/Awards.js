import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mt-5 p-5">
          <img src="media\images\largestBroker.svg" className="mt-5"></img>
        </div>
        <div className="col-6  mt-5 p-5">
          <h1 className="mt-5 Awards-h1">Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-4">
          <ul className="col-6 ps-5 Award-ul">
            <li >Futures and Options</li> 
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
          <ul className="col-6 ps-5 Award-ul">
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
          <img className="" src="media\images\pressLogos.png" alt="pressLogos"></img>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Awards;
