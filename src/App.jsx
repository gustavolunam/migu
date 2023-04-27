import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import ProtectedRoute from "./components/ProtectedRoute";

import Start from "./pages/Start";
import Log from "./pages/Log";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ShoppingList from "./pages/ShoppingList";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Cupons from "./pages/Cupons";
import Map from "./pages/Map";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";


const App = () => {
  /*const [currentForm, setCurrentForm] = useState('Log')*/
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" exact element={<Start />} />
            <Route path="/log" exact element={<Log />} />
            <Route path="/register" exact element={<Register />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/home" exact element={
            <ProtectedRoute> 
              <Home /> 
            </ProtectedRoute>} />
            <Route path="/edit-shopping-list" exact element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>} />
            <Route path="/shopping-list" exact element={
            <ProtectedRoute>
              <ShoppingList />
            </ProtectedRoute>} />
            <Route path="/profile" exact element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
            <Route path="/cupons" exact element={
              <ProtectedRoute>
                <Cupons />
            </ProtectedRoute>} />
            <Route path="/map" exact element={
              <ProtectedRoute>
                <Map />
              </ProtectedRoute>} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}


export default App
