import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../services/auth-services";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || sessionStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!token) {
      setIsAuthenticated(false);
      setUserInfo(null);
      return;
    }
    const checkAuth = async () => {
      try {
        const response = await verifyToken(token);
        if (response.success) {
          setIsAuthenticated(true);
          setUserInfo(response.data.decoded);
        } else {
          setIsAuthenticated(false);
          setUserInfo(null);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUserInfo(null);
      }
    };
    checkAuth();
  }, [token]);

  function logOut() {
    setToken(null);
    setIsAuthenticated(false);
    setUserInfo(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return <AuthContext.Provider value={{ token, setToken, logOut, isAuthenticated, userInfo }}>{children}</AuthContext.Provider>;
}
