import React from "react";
import { AuthContext } from "./providers/auth";

function App() {
  const { user } = React.useContext(AuthContext);
  console.log(user);

  return (
    <div className="App">
      <h1 style={{ color: user.color }}>Hello, World!</h1>
    </div>
  );
}

export default App;
