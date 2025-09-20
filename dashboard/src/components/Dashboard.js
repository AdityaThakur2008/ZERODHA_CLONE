import React, { useState } from "react";
import WatchList from "./WatchList";
import { Route, Routes } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <div className="Watchlist">
          <WatchList />
        </div>{" "}
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
