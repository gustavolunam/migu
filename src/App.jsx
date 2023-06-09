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
import Memory from "./pages/Memory";
import BirdGame from "./pages/BirdGame";
import Squares from "./pages/Squares";


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
                <Route path="/memory" exact element={
                  <ProtectedRoute>
                    <Memory />
                  </ProtectedRoute>} />
                <Route path="/birdgame" exact element={
                  <ProtectedRoute>
                    <BirdGame />
                    </ProtectedRoute>} />
                <Route path="/squares" exact element={
                  <ProtectedRoute>
                    <Squares />
                  </ProtectedRoute>} />
              </Route>
            </Routes>
          </CuponContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  )
}


export default App
