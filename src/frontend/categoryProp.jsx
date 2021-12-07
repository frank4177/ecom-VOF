import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import {CategoryMenus} from './Data'
import './navbar.css'
import {ArrowDropDown} from "@material-ui/icons";
import {Link} from 'react-router-dom'

const CategoryItems = ({item}) => {

    const [CatNav, setCatNav] = useState(false)

    const showCatNav = () => setCatNav(!CatNav)

    return ( 
        <div onClick={()=>showCatNav()} className="juza">
            <div className="jj">{item.Name} <ArrowDropDown/></div>
            {CatNav && item.Menus.map((item, index)=>{
                return (

                        <Link to={item.path} item={item} key={index} className="kki"  onClick={showCatNav}>
                            {item.title}
                        </Link>
                    
                );

            })}
        </div>
     );
}
 
export default CategoryItems;