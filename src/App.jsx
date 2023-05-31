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
import Game from "./pages/Game";
import Memory from "./pages/Memory"

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";
import { CuponContextProvider } from "./context/CuponContext";


const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <CartContextProvider>
          <CuponContextProvider>
            <Routes>
              <Route element={<WithoutNav />}>
                <Route path="/" exact element={<Start />} />
                <Route path="/log" exact element={<Log />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/play" exact element={
                    <Game />} />
              </Route>
              <Route element={<WithNav />}>
                <Route path="/home" exact element={
                    <Home />
                  } />
                <Route path="/edit-shopping-list" exact element={
                 
                    <Products />
                  } />
                <Route path="/shopping-list" exact element={
                
                    <ShoppingList />
                  } />
                <Route path="/profile" exact element={
             
                    <Profile />
                 } />
                <Route path="/cupons" exact element={

                    <Cupons />
                 } />
                <Route path="/map" exact element={
            
                    <Map />
                } />
                <Route path="/memory" exact element={

                    <Memory />
             } />
              </Route>
            </Routes>
          </CuponContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  )
}


export default App
