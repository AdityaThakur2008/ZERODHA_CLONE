// src/components/ProtectedRoute.js
import React from "react";

const ProtectedRoute = ({ children }) => {
  // cookie me token check
  const token = document.cookie
    .split("; ")
    .find((c) => c.trim().startsWith("token="));

  if (!token) {
 
   
    return null; // kuch render mat karo
  }

  return children; // token exists → render children
};

export default ProtectedRoute;
