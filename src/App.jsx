import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShoppingList from "./pages/ShoppingList";
import Products from "./pages/Products";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/edit-shopping-list" exact element={<Products />} />
            <Route path="/shopping-list" exact element={<ShoppingList />} />
          </Routes>
          <Navbar />
        </Router>
    </div>
  )
}


export default App
