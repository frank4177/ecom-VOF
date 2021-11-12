import React from "react";
import { CategoryMenus } from "./categoryMenus";
import womanClothe1 from './imagesWoman/womanClothe1.jpg'
import CategoriesShoes from './imagesCategories/CategorieShoes.jpg'
import bagsAndWallets from './imagesCategories/bagsAndWallets.jpg'
import watches from './imagesCategories/watches.jpg'
import Jewelry from './imagesCategories/jewelry.jpg'
import sunglasses from  './imagesCategories/sunglasses.jpg'
import textile from './imagesCategories/textile.jpg'
import luggage from './imagesCategories/luggage.jpg'
import './FeaturedCategories.css'

const FeaturedCategories = () => {
    return ( 
        <div className="featured-container">
            <h1>Featured <span style={{color:"orangered"}}>Categories</span></h1>
            <div className="image-container">

            <a href="" className="imagess">
            <img src={CategoriesShoes} alt="" />
            <h2>Shoes</h2>
            </a>

            <a href="" className="imagess">
            <img src={bagsAndWallets} alt=""/>
            <h2>Bags and Wallets</h2>
            </a>

            <a href="" className="imagess">
            <img src={watches} alt=""/>
            <h2>Watches</h2>
            </a>

            <a href="" className="imagess">
            <img src={sunglasses} alt=""/>
            <h2>Sunglasses</h2>
            </a>

            <a href="" className="imagess">
            <img src={Jewelry} alt=""/>
            <h2>Jewelry</h2>
            </a>

            <a href="" className="imagess">
            <img src={textile} alt=""/>
            <h2>Textile</h2>
            </a>

            <a href="" className="imagess">
            <img src={Jewelry} alt=""/>
            <h2>Jewelry</h2>
            </a>

            <a href="" className="imagess">
            <img src={luggage} alt=""/>
            <h2>Luggage</h2>
            </a>
            
            </div>
        </div>
     );
}
 
export default FeaturedCategories;