import React from "react";

export const AuthContext = React.createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState({
    name: "",
  });
//   const user = {
//     name: "Karen",
//   };

  return (
    <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
  );
}
