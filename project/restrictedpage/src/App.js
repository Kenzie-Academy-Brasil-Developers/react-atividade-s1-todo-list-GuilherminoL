import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);

  const logout = () => setIsLoggedIn(false);
  const user = "Guilhermino";

  return (
    <div className="App">
      <RestrictedPage
        isLoggedIn={isLoggedIn}
        user={user}
        login={login}
        logout={logout}
      />
    </div>
  );
}

export default App;
