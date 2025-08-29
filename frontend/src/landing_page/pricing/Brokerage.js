import React from "react";

function Brokerage() {
  return (
    <div className="conatiner border-top">
      <div className="row m-5 p-5">
        <div className="col-8">
          <h1 className="h3 text-center" style={{ color: "#387ed1" }}>
            Brokerage calculator
          </h1>
          <ul className="mt-5 small">
            <li className="mb-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50+
              GST per order.
            </li>
            <li className="mb-3">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-3">
              Physical copies of contract notes, if required, shall be charged
              20 per contract note. Courier charges apply.
            </li>
            <li className="mb-3">
              For NRI account (non-PIS), 0.5% or 100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-3">
              For NRI account (PIS), 0.5% or 200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3">
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 220 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h1 className="h3 text-center" style={{ color: "#387ed1" }}>
            List Of Charges
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
