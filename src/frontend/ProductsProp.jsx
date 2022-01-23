import React from "react";
import "./Products.css"
import {Link} from "react-router-dom"
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";
import womanShoe2 from './imagesWoman/womanShoe2.jpg'


const FeaturedProductsProp = ({item}) => {
    return ( 
        <div className="feature-images">
            <img src={item.img} alt="" />
            <div className="featureCat-icons">
            <Link to="" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="featureIcons"/></Link>
            <SearchOutlined className="featureIcons"/>
            <FavoriteBorder className="featureIcons"/>
            </div>
            <div className="productDesc">
            <h2>{item.title}</h2>
            {item.rating}
            <h2>{item.price}</h2>
            </div>
        </div>
        
     );
}
 
export default FeaturedProductsProp;