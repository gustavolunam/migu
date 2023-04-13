import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Navbar />
    </Router>
  )
}

export default App
