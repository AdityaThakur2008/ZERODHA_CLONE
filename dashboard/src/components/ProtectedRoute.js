// src/components/ProtectedRoute.js
import React from "react";

const ProtectedRoute = ({ children }) => {
  // cookie me token check
  const token = document.cookie
    .split("; ")
    .find((c) => c.trim().startsWith("token="));

  if (!token) {
    // token missing → redirect login page
    window.location.href =
      "https://zerodha-clone-frontend-vb0o.onrender.com/signup"; // frontend login page
    return null; // kuch render mat karo
  }

  return children; // token exists → render children
};

export default ProtectedRoute;
