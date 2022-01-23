import React, { useState } from "react";
import Navbar from "../navbar";
import './ProductList.css'
import Newsletter from "../newsletter";
import Footer from "../footer";
import womanShoe2 from '../imagesWoman/womanShoe2.jpg'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";
import { useLocation} from "react-router";
import Products from "../products";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

    return (
        <div>
            <Navbar/>
            {/* <h1 className="dresses">Dresses</h1> */}
            <div className="filterContainer">
              <div className="filter">
                  <div className="filterText">Filter Products:</div>
                   <select name="Color" id="" onChange={handleFilters}>
                    <option value="" disabled>Color</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Green">green</option>

                   </select>
                   <select name="Size" id="" onChange={handleFilters}>
                    <option value="" disabled>Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>

                   </select>
              </div>
              <div className="filter">
                  <div className="filterText">Sort Products:</div>
                  <select name="" id="" onChange={(e) => setSort(e.target.value)}>
                      <option value="newest" >Newest</option>
                      <option value="asc">Price (asc)</option>
                      <option value="desc">Price (desc)</option>
                  </select>
              </div>
            </div>



                
            {/* <div className="ProductFeatured-container">
            <h1>Women <span style={{color:"orangered"}}>Shoes</span></h1>
            <div className="ProductImage-container">


            <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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
        </div> */}

               <Products cat={cat} filters={filters} sort={sort}/>

                <Newsletter/>
                <Footer/>
        </div>
     );
}
 
export default ProductList;