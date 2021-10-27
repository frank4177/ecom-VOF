import React from "react";
import './body.css' 
import { useState } from "react";
import {CategoryMenus} from './categoryMenus'
const CategorySubMenus = ({item}) => {
    const [subNav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subNav)

    return ( 
       <div className="categoryMenus"  to={item.path} onClick={item.subNav && showSubNav}>
           <div>
           {item.title}
           </div>
           <div>
               {subNav && item.subNav.map((item, index)=> {
                   return(
                       <div class="categoryLinks">
                       <div  to={item.path} key={index}>
                           <h1>{item.title}</h1>
                           
                       </div>
                       </div>
                   )
               })}
           </div> 
           


       </div>
     );
}
 
export default CategorySubMenus;