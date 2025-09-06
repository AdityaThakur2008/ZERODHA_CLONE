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
      <div className="funds-inner">
        <div className="table">
          <div className="data">
            <div>
              <p>vailable margin</p>
              <p>
                 4,043.10
              </p>
            </div>

            <div>
              {" "}
              <p>Used margin</p>
              <p>
                3,757.30
              </p>
            </div>

            <div>
              <p>Available cash</p>
              <p>
                 4,043.10
              </p>
            </div>
          </div>

          <div className="data">
            <div>
              {" "}
              <p>Opening Balance</p>
              <p>
                 4,043.10
              </p>
            </div>

            <div>
              <p>Opening Balance</p>
              <p>
                 3736.40
              </p>
            </div>

            <div>
              {" "}
              <p>Payin</p>
              <p>
                 4064.00
              </p>
            </div>

            <div>
              {" "}
              <p>SPAN</p>
              <p>
                 0.00
              </p>
            </div>

            <div>
              {" "}
              <p>Delivery margin</p>
              <p>
                {" "}
                 0.00
              </p>
            </div>

            <div>
              {" "}
              <p>Exposure</p>
              <p>
                 0.00
              </p>
            </div>

            <div>
              {" "}
              <p>Options premium</p>
              <p>
                {" "}
                 0.00
              </p>
            </div>
          </div>

          <div className="data">
            <div>
              {" "}
              <p>Collateral (Liquid funds)</p>
              <p>
                 0.00
              </p>
            </div>

            <div>
              <p>Collateral (Equity)</p>
              <p>
                {" "}
                 0.00
              </p>
            </div>

            <div>
              {" "}
              <p>Total Collateral</p>
              <p>
                 0.00
              </p>
            </div>
          </div>
        </div>
        <div className="open-account">
          <p>You don't have a commodity account</p>
          <button className="btn">Open Account</button>
        </div>
      </div>
    </>
  );
}

export default Funds;
