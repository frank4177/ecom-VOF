import Home from './frontend/pages/home'
import ProductList from './frontend/pages/productList'
import './App.css'
import Products from './frontend/pages/products';
import SignUp from './frontend/pages/SignUp';
import Login from './frontend/pages/Login';
import Cart from './frontend/pages/cart';
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {


  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
