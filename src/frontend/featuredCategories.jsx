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
import womanShoe2 from './imagesWoman/womanShoe2.jpg'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";

const FeaturedCategories = () => {
    return ( 
        <div className="featured-container">
            <h1>Featured <span style={{color:"orangered"}}>Products</span></h1>
            <div className="image-container">

          
          <div className="feature-images">
            <img src={womanShoe2} alt=""/>
            <div className="featureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="featureIcons"/></a>
            <SearchOutlined className="featureIcons"/>
            <FavoriteBorder className="featureIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          

          
          
          <div className="feature-images">
            <img src={womanShoe2} alt=""/>
            <div className="featureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="featureIcons"/></a>
            <SearchOutlined className="featureIcons"/>
            <FavoriteBorder className="featureIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          

          
          
          <div className="feature-images">
            <img src={womanShoe2} alt=""/>
            <div className="featureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="featureIcons"/></a>
            <SearchOutlined className="featureIcons"/>
            <FavoriteBorder className="featureIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          

          
          
          <div className="feature-images">
            <img src={womanShoe2} alt=""/>
            <div className="featureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="featureIcons"/></a>
            <SearchOutlined className="featureIcons"/>
            <FavoriteBorder className="featureIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          
            </div>
        </div>
     );
}
 
export default FeaturedCategories;