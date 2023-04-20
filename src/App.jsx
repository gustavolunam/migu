import Navbar from "./components/Navbar";
import WithoutNav from "./components/WithoutNav";
import Log from "./pages/Log";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ShoppingList from "./pages/ShoppingList";
import Products from "./pages/Products";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WithNav from "./components/WithNav";

const App = () => {
  /*const [currentForm, setCurrentForm] = useState('Log')*/
  return (
    <div>
        <Router>
          <Routes>
            <Route element={<WithoutNav />}>
              <Route path="/log" exact element={<Log/>}/>
              <Route path="/register" exact element={<Register/>}/>
            </Route>
            <Route element={<WithNav />}>
              <Route path="/home" exact element={<Home />} />
              <Route path="/edit-shopping-list" exact element={<Products />} />
              <Route path="/shopping-list" exact element={<ShoppingList />} />
            </Route>
         </Routes>
        </Router>
    </div>
  )
}


export default App
