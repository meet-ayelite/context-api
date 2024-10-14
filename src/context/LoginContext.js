// src/LoginContext.js
import React, { createContext, useState } from 'react';

// Create a Context for login info
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    // Here you could also store tokens or more detailed information
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
