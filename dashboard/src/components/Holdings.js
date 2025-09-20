import React, { useState, useEffect } from "react";
import api from "../api";

import { Verticalchart } from "./VerticalGraph";

function Holdings() {
  const [allHoldings, setallHoldings] = useState([]);

  useEffect(() => {
    api
      .get("/allholdings", {
        withCredentials: true,
      })
      .then((res) => {
        setallHoldings(res.data);
      }, []);
  });

  const values = allHoldings.map((h) => h.price);
  const labels = allHoldings.map((h) => h.name);

  const chartData = {
    labels,
    datasets: [
      {
        label: "price",
        data: values,
        backgroundColor: "rgba(0, 255, 0, 1)",
      },
    ],
  };
  return (
    <>
      <h1 className="title">Holdings ({allHoldings.length})</h1>
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
          {allHoldings.map((stock, index) => {
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
      {allHoldings.length > 0 && <Verticalchart data={chartData} />}
    </>
  );
}

export default Holdings;
