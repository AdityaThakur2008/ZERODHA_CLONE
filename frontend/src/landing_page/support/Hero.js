import React from "react";

function Hero() {
  return (
    <section style={{ backgroundColor: "#3c7cd1" }} className="p-5 mb-5">
      <div className="container text-white">
        <div className="row my-5">
          <div className="col">
            <h1 className="text-white h5 mb-5 ">Support Portal</h1>
            <h2 className="text-white h3 mb-3 ">
              Search for an answer or browse help topics <br /> to create a
              ticket
            </h2>
            <input
              className="SUPPORT_INPUT"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            />
            <div className="mt-2">
              <a href=" " className="text-white me-3">
                Track account opening
              </a>
              <a href=" " className="text-white me-3">
                Track segment activation
              </a>
              <a href=" " className="text-white me-3">
                Intraday.
              </a>
              <a href=" " className="text-white me-3">
                Kite user manual
              </a>
              <a href=" " className="text-white me-3">
                margins
              </a>
            </div>
          </div>
          <div className="col">
            <h1 className="text-white  ">
              <a className="h5 " href=" ">
                {" "}
                Track Tickets
              </a>
            </h1>
            <h2 className="text-white h3 mt-5">Featured</h2>
            <ol>
              <li>Current Takeovers and Delisting - January 2024</li>
              <li>Latest Intraday leverages - MIS & CO</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
