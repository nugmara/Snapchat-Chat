import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
 

  return (
    <Router>
    <div>

    
      <Nav />
    
        <Routes>
        <Route path="/" element={<Home />}>

        </Route>
          <Route path="/chat" element={<Chat />}>

          </Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;