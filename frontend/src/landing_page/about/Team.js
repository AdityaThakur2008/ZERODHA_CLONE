import React from "react";

function Team() {
  return (
    <div className="container mt-5">
      <h1 className="text-center m-5">People</h1>
      <div className="row">
        <div className="col text-center ">
          <img
            src="./media/images/nithinKamath.jpg"
            className="nithinKamath ms-5 "
          />
          <div className="ms-5 mt-3">
            <h2>Nithin Kamath</h2>
            <p className="text-muted">Founder, CEO</p>
          </div>
        </div>
        <div className="col">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href=" " className="text-decoration-none">
              Homepage
            </a>
            /
            <a href=" " className="text-decoration-none">
              TradingQnA
            </a>
            /
            <a href=" " className="text-decoration-none">
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
