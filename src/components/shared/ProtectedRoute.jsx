import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("TOKEN");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};
export const ProtectedLoginRoute = ({ children }) => {
  const token = localStorage.getItem("TOKEN");

  if (!token) {
    return children;
  }
  return <Navigate to="/" />;
};
