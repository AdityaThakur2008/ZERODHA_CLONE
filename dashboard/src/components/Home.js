import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function Home() {
  return (
    <>
      <ProtectedRoute>
        <TopBar />
        <Dashboard />
      </ProtectedRoute>
    </>
  );
}

export default Home;
