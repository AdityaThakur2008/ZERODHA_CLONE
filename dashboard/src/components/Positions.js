import React from "react";

function Positions() {
  return (
    <>
      <h1 className="title">Positions (2)</h1>
      <div className="table-order">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          <tr>
            <td>CNC</td>
            <td>EVEREADY</td>
            <td>2</td>
            <td>316.27</td>
            <td>312.35</td>
            <td>-7.84</td>
            <td>-1.24%</td>
          </tr>
          <tr>
            <td>CNC</td>
            <td>JUBLFOOD</td>
            <td>1</td>
            <td>3124.75</td>
            <td>3082.65</td>
            <td>-42.10</td>
            <td>-1.35%</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Positions;
