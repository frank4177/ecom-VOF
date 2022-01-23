import React from 'react'
import Home from './frontend/pages/home'
import ProductList from './frontend/pages/productList'
import './App.css'
import Product from './frontend/pages/product';
import SignUp from './frontend/pages/signup';
import Login from './frontend/pages/login'
import Cart from './frontend/pages/cart';
import Navbar from './frontend/navbar';
import Products from './frontend/products';
import { CategoryMenus, ProductsData } from './frontend/Data';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

function App() {
const user = true

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/signup" element={user ? <Navigate to="/"/> : <SignUp/>}/>
        <Route path="/login"  element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
