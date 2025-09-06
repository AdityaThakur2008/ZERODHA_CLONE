import React from "react";
import { holdings } from "../data/data";

function Holdings() {
  return (
    <>
      <h1 className="title">Holdings ({holdings.length})</h1>
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
          {holdings.map((stock, index) => {
            const currVal = stock.qty * stock.price;
            const isProfit = currVal - stock.avg * stock.qty >= 0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profitClass}>
                  {(currVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profitClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
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
