import React from "react";
import ErrorPage from "../pages/ErrorPage";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("spring-token");

  if (!token) {
    return <ErrorPage />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
