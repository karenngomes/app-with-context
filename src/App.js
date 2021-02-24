import React from "react";
import Profile from "./components/profile";
import { AuthContext } from "./providers/auth";

function App() {
  const { user, setUser } = React.useContext(AuthContext);
  console.log(user);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <input
        type="text"
        onChange={(event) => setUser({ name: event.target.value })}
      />
      <Profile />
    </div>
  );
}

export default App;
