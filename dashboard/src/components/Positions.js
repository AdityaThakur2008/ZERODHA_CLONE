import React from "react";
import { positions } from "../data/data";
function Positions() {
  return (
    <>
      <h1 className="title">Positions ({positions.length})</h1>
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
          {positions.map((stock, index) => {
            const currVal = stock.qty * stock.price;
            const isProfit = currVal - stock.avg * stock.qty >= 0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>

                <td className={profitClass}>
                  {(currVal - stock.avg * stock.qty).toFixed(2)}
                </td>

                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Positions;
