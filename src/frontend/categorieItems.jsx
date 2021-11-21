import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import {CategoryMenus} from './categoryMenus'
import './navbar.css'
import {ArrowDropDown} from "@material-ui/icons";

const CategoryItems = ({item}) => {

    const [CatNav, setCatNav] = useState(false)

    const showCatNav = () => setCatNav(!CatNav)

    return ( 
        <div onClick={()=>showCatNav()}>
            <div className="jj">{item.Name} <ArrowDropDown/></div>
            {CatNav && item.Menus.map((item, index)=>{
                return (
                    <div item={item} key={index} className="kki">
                        {item.title}
                    </div>
                );

            })}
        </div>
     );
}
 
export default CategoryItems;