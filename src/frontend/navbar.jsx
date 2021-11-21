import { ArrowRight, Search, ShoppingCartOutlined, ArrowDropDown, Menu, Close, PermIdentityOutlined, Login, LockOpen, } from "@material-ui/icons";
import React from "react";
import './navbar.css'
import Badge from '@material-ui/core/Badge';
import { makeStyles } from "@material-ui/core/styles";
// import Categories from './category'
import {CategoryMenus} from './categoryMenus'
import { useState, useRef } from "react";
import CategoryItems from './categorieItems'
import {gsap} from 'gsap'



const Navbar = () => {

    const useStyles = makeStyles(theme => ({
        badge: {
            backgroundColor: "yellowgreen",
            color: "white",
            fontWeight: 500,
            fontSize: "1rem"
        }
    }));
    const classes = useStyles();


    const [CatNav, setCatNav] = useState(false)

    const showCatNav = () => setCatNav(!CatNav)


return ( 

    <>
<div className="navbar">

        <div className="menu-bars">
            <Menu className="icon" onClick={showCatNav}/>
        </div>
      
    <div className="logo-container">
        <h1 className="logo">VOF</h1>

    </div>


    <form action="">
        <input type="text" placeholder="search here..."/>
        <a href=""><Search className="search-icon"/></a>
    </form>

    <div className="menu">
        <div className="li"><a href="">categories <ArrowDropDown/></a>
          <div className="subMenu">
             <div className="li"><a href="">Men Fashion <ArrowRight/></a>
               <div className="subMenu2">
                   <div className="li"><a href="">clothing</a></div>
                   <div className="li"><a href="">shoes</a></div>
                   <div className="li"><a href="">watches</a></div>
                   <div className="li"><a href="">sunglasses</a></div>
                   <div className="li"><a href="">jewelry</a></div>
               </div>
             </div>
             <div className="li"><a href="">Women Fashion <ArrowRight/></a>
             <div className="subMenu22">
                   <div className="li"><a href="">clothing</a></div>
                   <div className="li"><a href="">shoes</a></div>
                   <div className="li"><a href="">watches</a></div>
                   <div className="li"><a href="">sunglasses</a></div>
                   <div className="li"><a href="">jewelry</a></div>
               </div>
             </div>
             <div className="li"><a href="">kids Fashion</a></div>
          </div>
        </div>
        <div className="li"><a href="./pages/SignUp.jsx">sign up</a></div>
        <div className="li"><a href="">login</a></div>
    </div>

<div className="huo">
<a href="/" className="cart-wrap">
   <Badge badgeContent={4}  classes={{badge: classes.badge}} className="badge">
    <ShoppingCartOutlined color="action" className="cartColor"/>
    </Badge>
    <div className="cart-text">cart</div>       
</a>
</div>
        
</div>



{/* <>MOBILE VIEW</> */}

<div className={CatNav ? 'nav-menu active' : 'nav-menu'}>
    <ul className="nav-menu-items">
        <li className="navbar-toggle">
            <div className="menu-barss">
                <Close className="icon" onClick={showCatNav}/>
            </div>
        </li>

        
        

        <ul className="mob-menu">

        <li><a href="" className="nav-text"><LockOpen/>login</a></li>
        <li><a href="" className="nav-text"><PermIdentityOutlined/>sign up</a></li>
        
        <li className="cat"><a href="">categories</a></li>

            {CategoryMenus.map((item, index) =>{
              return <CategoryItems item={item} key={index}/>
            })}
    </ul>
    </ul>
</div>
</>
     );
}
 
export default Navbar;