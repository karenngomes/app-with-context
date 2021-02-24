import React from "react";

export const AuthContext = React.createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const userStorage = localStorage.getItem("user");

    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        name: "",
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
