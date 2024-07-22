import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Profile from './Pages/Profile/Profile'
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import Cart from './Pages/Cart/Cart'
import Shop from './Pages/Shop/Shop'
import Reviews from './Pages/Reviews/Reviews'
import Orders from './Pages/Orders/Orders'
import Sellers from './Pages/Seller/Sellers'
import Buyers from './Pages/Buyers/Buyers'
import Products from './Pages/Products/Products'
import CreateProduct from './Pages/CreateProduct/CreateProduct'
import AllProducts from './Pages/AllProducts/AllProducts'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Sellers />} path="/sellers" />
            <Route element={<Products />} path="/products" />
            <Route element={<CreateProduct />} path="/createProducts" />
            <Route element={<AllProducts />} path="/AllProducts" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<Reviews />} path="/reviews" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<Orders />} path="/orders" />
            <Route element={<Buyers />} path="/buyers" />
          </Route>
          <Route element={<Home />} path="/" exact />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App

