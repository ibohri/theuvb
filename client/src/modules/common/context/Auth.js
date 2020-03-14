import React, { createContext, useState, useCallback, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const loadUser = useCallback(() => {
    // get user using token
    if (token) {
      // api call to get user
      setIsAuthenticated(true);
    }
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
  });

  const authenticateUser = useCallback(async (email, password) => {
    // api call to authenticate user
    localStorage.setItem("token", "Fake Token");
    setToken("Fake Token");
    setIsAuthenticated(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        authenticateUser,
        token,
        isAuthenticated,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
