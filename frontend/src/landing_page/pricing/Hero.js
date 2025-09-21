import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5 border-bottom">
        <h1 className="h2">Pricing</h1>
        <p className=" text-muted mb-5">
          Free equity investments and flat 20 traday and F&O trades
        </p>
      </div>
      <div className="row mt-5 p-5">
        <div className="col text-center p-5">
          <img alt="img" src="./media/images/pricingEquity.svg" />
          <h1 className="h3">Free equity delivery</h1>
          <p className="text-muted mt-4 fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center p-5">
          <img alt="img" src="./media/images/intradayTrades.svg" />
          <h1 className="h3">Intraday and F&O trades</h1>
          <p className="text-muted mt-4 fs-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center p-5">
          <img alt="img" src="./media/images/pricingEquity.svg" />
          <h1 className="h3">Free direct MF</h1>
          <p className="text-muted mt-4 fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
