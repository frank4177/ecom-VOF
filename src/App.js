import React from 'react'
import Home from './frontend/pages/home'
import ProductList from './frontend/pages/productList'
import './App.css'
import Products from './frontend/pages/products';
import SignUp from './frontend/pages/SignUp';
import Login from './frontend/pages/Login';
import Cart from './frontend/pages/cart';
import Navbar from './frontend/navbar';
import FeaturedCategories from './frontend/featuredCategories';
import { CategoryMenus } from './frontend/categoryMenus';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/ProductList" exact element={<ProductList/>}/>
        <Route path="/SignUp" exact element={<SignUp/>}/>
        <Route path="/Login" exact element={<Login/>}/>
        <Route path="/cart" exact element={<Cart/>}/>
        <Route path="/Home" exact element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
