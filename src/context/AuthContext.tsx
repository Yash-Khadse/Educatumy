import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  useEffect(() => {
    if (token) localStorage.setItem("adminToken", token);
    else localStorage.removeItem("adminToken");
  }, [token]);

  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { username, password });
      if (res.data.success && res.data.token) {
        setToken(res.data.token);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);