import React from "react";

function Unverse() {
  return (
    <div className="container">
      <div className="mb-5">
        <h1 className="h4 text-center text-muted fw-normal">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" className="text-decoration-none">
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>
      </div>
      <div className="mt-5 text-center">
        <h1 className="fw-medium text-muted h3"> The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center mt-5 p-5">
        <div className=" col">
          <img
            alt="img"
            src="./media/images/zerodhaFundhouse.png"
            className="mb-4"
            style={{ width: "60%" }}></img>
          <p className="small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            alt="img"
            src="./media/images/sensibullLogo.svg"
            className="mb-4"
            style={{ width: "60%" }}></img>
          <p className="small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className=" col">
          <img
            alt="img"
            src="./media/images/goldenpiLogo.png"
            className="mb-4"
            style={{ width: "60%" }}></img>
          <p className="small ">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center mt-5 p-5">
        <div className="col">
          <img
            alt="img"
            src="./media/images/streakLogo.png"
            className="mb-4"
            style={{ width: "30%" }}></img>
          <p className="small">
            Systematic trading platform that allows <br />
            you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col">
          <img
            alt="img"
            src="./media/images/smallcaseLogo.png"
            className="mb-4"
            style={{ width: "60%" }}></img>
          <p className="small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col m-4">
          <img
            alt="img"
            src="./media/images/dittoLogo.png "
            className="mb-4"
            style={{ width: "30%" }}></img>
          <p className="small ">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary p-2 fs-5 signup-btn">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Unverse;
