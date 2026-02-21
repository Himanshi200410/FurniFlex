import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Persist user after refresh
    const storedUser = localStorage.getItem("furniflexUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      setUser(data);
      localStorage.setItem("furniflexUser", JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("furniflexUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
