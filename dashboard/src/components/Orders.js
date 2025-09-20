import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function Orders() {
  const [allOders, setallOders] = useState([]);
  useEffect(() => {
    api
      .get("/oders", {
        withCredentials: true,
      })
      .then((res) => {
        setallOders(res.data);
      }, []);
  });
  return (
    <div className="orders">
      {allOders == [] ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="title">All Oders ({allOders.length})</h1>
          <hr />
          {allOders.map((order) => (
            <div  key={order._id}>
              <h3>{order.name}</h3>
              <p>Quantity: {order.qty}</p>
              <p>Price: {order.price}</p>
              <p>Mode: {order.mode}</p>
              <hr/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
