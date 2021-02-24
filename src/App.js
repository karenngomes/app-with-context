import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
  const { user, setUser } = useAuth();
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
