import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth() || { isAuthenticated: false };
  return isAuthenticated ? children : <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;