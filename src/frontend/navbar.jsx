import { ArrowRight, Search, ShoppingCartOutlined, ArrowDropDown, Menu, Close, PermIdentityOutlined, Login, LockOpen} from "@material-ui/icons";
import React from "react";
import './navbar.css'
import Badge from '@material-ui/core/Badge';
import { makeStyles } from "@material-ui/core/styles";
// import Categories from './category'
import {CategoryMenus} from './categoryMenus'
import { useState } from "react";
import CategoryItems from './categorieItems'



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

    {/* <div>
        <div className="menu-bars"><Menu className="icon" onClick={showCatNav}/></div>
    </div> */}
      
    <div className="logo-container">
        <h1 className="logo">VOF</h1>

    </div>


    <form action="">
        <input type="text" placeholder="search here..."/>
        <a href=""><Search className="search-icon"/></a>
    </form>

    {/* <ul className="menu">
        <li><a href="">categories <ArrowDropDown/></a>
          <ul className="subMenu">
             <li className="porel"><a href="">Men Fashion <ArrowRight/></a>
               <ul className="subMenu2">
                   <li><a href="">clothing</a></li>
                   <li><a href="">shoes</a></li>
                   <li><a href="">watches</a></li>
                   <li><a href="">sunglasses</a></li>
                   <li><a href="">jewelry</a></li>
               </ul>
             </li>
             <li><a href="">Women Fashion <ArrowRight/></a>
             <ul className="subMenu22">
                   <li><a href="">clothing</a></li>
                   <li><a href="">shoes</a></li>
                   <li><a href="">watches</a></li>
                   <li><a href="">sunglasses</a></li>
                   <li><a href="">jewelry</a></li>
               </ul>
             </li>
             <li><a href="">kids Fashion</a></li>
          </ul>
        </li>
        <li><a href="">sign up</a></li>
        <li><a href="">login</a></li>
    </ul> */}

<a href="/" className="cart-wrap">
   <Badge badgeContent={4}  classes={{badge: classes.badge}}>
    <ShoppingCartOutlined color="action" className="cartColor"/>
    </Badge>          
</a>
        
</div>



///////////////// MOBILE SIDEBAR VIEW *//////////////////

<div className={CatNav ? 'nav-menu active' : 'nav-menu'}>
    <ul className="nav-menu-items">
        <li className="navbar-toggle">
            <div className="menu-bars">
                <Close className="icon" onClick={showCatNav}/>
            </div>
        </li>

        
        

        <ul className="mob-menu">

        <li><a href=""><LockOpen/>login</a></li>
        <li><a href=""><PermIdentityOutlined/>sign up</a></li>
        
        <li className="cat" ><a href="">categories</a></li>
          <ul className="mob-subMenu">
             <li className="porell" onClick={showCatNav}><a href="">Men Fashion <ArrowDropDown/></a>
               <ul className="mob-subMenu2">
                   <li><a href="">clothing</a></li>
                   <li><a href="">shoes</a></li>
                   <li><a href="">watches</a></li>
                   <li><a href="">sunglasses</a></li>
                   <li><a href="">jewelry</a></li>
               </ul>
             </li>
             <li className="porell"><a href="">Women Fashion <ArrowDropDown/></a>
             <ul className="mob-subMenu22">
                   <li><a href="">clothing</a></li>
                   <li><a href="">shoes</a></li>
                   <li><a href="">watches</a></li>
                   <li><a href="">sunglasses</a></li>
                   <li><a href="">jewelry</a></li>
               </ul>
             </li>
             <li className="porell" ><a href="">kids Fashion <ArrowDropDown/></a></li>
          </ul>
    </ul>
    </ul>
</div>
</>
     );
}
 
export default Navbar;