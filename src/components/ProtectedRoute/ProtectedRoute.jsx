import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }
  return children;
}
