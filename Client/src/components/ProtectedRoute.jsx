import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuth === "true");
  }, []);

  // While authentication state is being determined, show a loading screen
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
