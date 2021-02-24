import React from "react";

export const AuthContext = React.createContext({});

export default function AuthProvider({ children }) {
  const user = {
    name: "Karen",
    color: 'red'
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
