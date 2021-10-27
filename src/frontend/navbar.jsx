import { FreeBreakfast, Search, ShoppingCartOutlined, ViewListOutlined } from "@material-ui/icons";
import React from "react";
import './navbar.css'
import Badge from '@material-ui/core/Badge';
import { makeStyles } from "@material-ui/core/styles";



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


return ( 
    <div className="navbar">
        <div className="logo">VOF</div>

        <form action="" className="search-form">
            <input type="text" className="searchBox" placeholder="search products, brands and categories"/>
            <Search className="searchLogo"/>
        </form>
            
        <div className="rightMenus">
            <a href="/">
                <Badge badgeContent={4}  classes={{badge: classes.badge}}>
                   <ShoppingCartOutlined color="action" className="cartColor"/>
                </Badge> <span className="spano">Cart</span>
            </a>
            <a href="/">register</a>
            <a href="/">login</a>
        </div>
    </div>
     );
}
 
export default Navbar;