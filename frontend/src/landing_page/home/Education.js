import React from "react";

function Education() {
  return (
    <div className="container Education">
      <div className="row ">
        <div className="col-6 p-5">
          <img
            alt="Company Logo"
            src="media\images\education.svg"
            className="mt-5 "></img>
        </div>
        <div className="col-6   stats-a p-5">
          <h1 className="mt-5 fs-3 Awards-h1">
            Free and open market education
          </h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="col ">
            Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="col">
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
