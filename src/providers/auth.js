import React from "react";

export const AuthContext = React.createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState({
    name: "",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
