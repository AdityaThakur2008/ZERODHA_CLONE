import React from "react";

function Funds() {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <button className="btn">add funds</button>
        <button className="btn">Withdraw</button>
      </div>
      <h1 className="title">Equity</h1>
      <div className="table">
        <div className="data">
          <p>vailable margin</p>

          <p className="imp"> 4,043.10</p>

          <p>Used margin</p>

          <p className="imp"> 3,757.30</p>

          <p>Available cash</p>

          <p className="imp"> 4,043.10</p>
        </div>

        <div className="data">
          <p>Opening Balance</p>

          <p className="imp"> 4,043.10</p>

          <p>Opening Balance</p>

          <p className="imp"> 3736.40</p>

          <p>Payin</p>

          <p className="imp"> 4064.00</p>

          <p>SPAN</p>

          <p className="imp"> 0.00</p>

          <p>Delivery margin</p>

          <p className="imp"> 0.00</p>

          <p>Exposure</p>

          <p className="imp"> 0.00</p>

          <p>Options premium</p>

          <p className="imp"> 0.00</p>
        </div>

        <div className="data">
          <p>Collateral (Liquid funds)</p>

          <p className="imp"> 0.00</p>

          <p>Collateral (Equity)</p>

          <p className="imp"> 0.00</p>

          <p>Total Collateral</p>

          <p className="imp"> 0.00</p>
        </div>
        <div>
          <p>You don't have a commodity account</p>
          <button className="btn">Open Account</button>
        </div>
      </div>
    </>
  );
}

export default Funds;
