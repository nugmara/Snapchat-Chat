import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
