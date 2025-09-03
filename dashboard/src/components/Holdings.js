import React from "react";

function Holdings() {
  return (
    <>
      <h1 className="title">Holdings (0)</h1>
      <div className="table-order">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val </th>
            <th>P&L </th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h2>
            29,875.<span>55</span>
          </h2>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h2>
            31,428.<span>95</span>
          </h2>
          <p>TCurrent value</p>
        </div>
        <div className="col">
          <h2>1,553.40 (+5.20%)</h2>
          <p className="profit">P&L</p>
        </div>
      </div>
    </>
  );
}

export default Holdings;
