import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import 'react-device-emulator/lib/styles/style.css';

const App = () => {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
          <Navbar />
        </Router>
    </div>
  )
}


export default App
